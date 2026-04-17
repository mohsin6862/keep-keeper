"use client";

import Image from "next/image";

const Friend = ({ friend }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          src={friend.picture}
          alt="Friend Image"
          width={100}
          height={100}
          className="rounded-full"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p className="font-semibold text-sm text-[#648b72]">{friend.days_since_contact}d ago</p>
        <div className="space-x-3">
            {friend.tags?.map(tag => (
    <span
      key={tag}
      className="px-3 py-1 text-xs bg-[#81c5b0] text-white rounded-full"
    >
      {tag}
    </span>
  ))}
        </div>

        <div
  className={`badge text-white mt-2 ${
    friend.status === "overdue"
      ? "badge-error"
      : friend.status === "Almost Due"
      ? "badge-warning"
      : friend.status === "on track"
      ? "badge-success"
      : "badge-neutral"
  }`}
>
  {friend.status}
</div>
      </div>
    </div>
  );
};

export default Friend;