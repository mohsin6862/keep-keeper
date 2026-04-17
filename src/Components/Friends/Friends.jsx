import React from 'react';
import Friend from '../Friend/Friend';

const Friends = async () => {
  const res = await fetch('http://localhost:3000/friends.json', {
    cache: 'no-store'
  });
  const friends = await res.json();

  return (
    <div className='container mx-auto'>
      <div className="w-[90%] mx-auto border-2 border-t border-base-300 my-5"></div>

      <h1 className='text-3xl font-bold text-[#1F2937] my-20'>
        Your Friends
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))
        }
      </div>
    </div>
  );
};

export default Friends;