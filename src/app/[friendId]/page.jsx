import Image from 'next/image';
import React from 'react';
import { FaArchive, FaBell, FaPhone, FaTrash, FaVideo } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch('http://localhost:3000/friends.json', {
    cache: 'no-store'
  });

  const friends = await res.json();

  const friendDetails = friends.find(
    (f) => f.id === Number(friendId)
  );

  if (!friendDetails) {
    return <h1>Friend not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div className="space-y-6">

        {/* PROFILE CARD */}
        <div className="card bg-base-100 shadow-md w-full">
          <figure className="pt-8">
            <Image
              src={friendDetails.picture}
              alt="Friend Image"
              width={100}
              height={100}
              className="rounded-full"
            />
          </figure>

          <div className="card-body items-center text-center space-y-2">
            <h2 className="card-title">{friendDetails.name}</h2>

            {/* STATUS */}
            <div
              className={`badge text-white ${
                friendDetails.status === "overdue"
                  ? "badge-error"
                  : friendDetails.status === "Almost Due"
                  ? "badge-warning"
                  : friendDetails.status === "on track"
                  ? "badge-success"
                  : "badge-neutral"
              }`}
            >
              {friendDetails.status}      
            </div>
            <div className="space-x-3">
            {friendDetails.tags?.map(tag => (
    <span
      key={tag}
      className="px-3 py-1 text-xs bg-[#81c5b0] text-white rounded-full"
    >
      {tag}
    </span>
  ))}
        </div>

            <p className="text-lg italic text-gray-500"> &quot;{friendDetails.bio}&quot;</p>
            <p className="text-sm text-gray-400">
              Email: {friendDetails.email}
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-3">

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body flex-row items-center gap-4">
              <FaBell />
              <span className="font-semibold">Snooze 2 weeks</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body flex-row items-center gap-4">
              <FaArchive />
              <span className="font-semibold">Archive</span>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body flex-row items-center gap-4 text-red-600">
              <FaTrash />
              <span className="font-semibold">Delete</span>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-base-100 rounded shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold text-[#1F2937]">
              {friendDetails.days_since_contact}
            </h1>
            <p className="text-gray-500 font-medium">
              Days Since Contact
            </p>
          </div>

          <div className="bg-base-100 rounded shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold text-[#1F2937]">
              {friendDetails.goal}
            </h1>
            <p className="text-gray-500 font-medium">
              Goal (Days)
            </p>
          </div>

          <div className="bg-base-100 rounded shadow-md p-6 text-center">
            <h1 className="text-lg font-bold text-[#1F2937]">
              {friendDetails.next_due_date}
            </h1>
            <p className="text-gray-500 font-medium">
              Next Due
            </p>
          </div>

        </div>
         <div className="bg-base-100 rounded shadow-md p-6 flex justify-between my-4">
          <div className='space-y-4'>
              <h1 className="text-3xl font-semibold text-[#1F2937]">
              Relationship Goal
            </h1>
            <p className="text-gray-500 font-medium">
              Connect every {friendDetails.goal} (Days)
            </p>
          </div>
          <button className='btn'>Edit</button>
          </div>
          <div className="bg-base-100 rounded shadow-md p-6 flex justify-between ">
            <div>
                <h1 className="text-xl font-semibold text-[#1F2937]">
              Quick Check-In
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
              <button className='btn flex flex-col items-center h-auto py-4 px-8 text-xl'><FaPhone></FaPhone> call</button>
              <button className='btn flex flex-col items-center h-auto py-4 px-8 text-xl'><FaMessage></FaMessage> Text</button>
              <button className='btn flex flex-col items-center h-auto py-4 px-8 text-xl'><FaVideo></FaVideo> Video</button>
            </div>
            </div>

          </div>

      </div>

    </div>
  );
};

export default FriendDetails;