
import Friend from '@/Components/Friend/Friend';
import React from 'react';


const Friends = async () => {
  const res = await fetch('/friends.json', {
    cache: 'no-store'
  });
  const friends = await res.json();

  return (
    <div className='my-20'>
      <div className="border-2 border-t border-base-300 my-5"></div>

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