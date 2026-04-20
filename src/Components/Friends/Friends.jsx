'use client';

import { useEffect, useState } from 'react';
import Friend from '@/Components/Friend/Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from public folder
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch('/friends.json'); // ✔ works on Vercel
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error('Failed to load friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // ✅ Empty state
  if (friends.length === 0) {
    return (
      <div className="text-center my-20">
        <h2 className="text-xl font-semibold">No friends found</h2>
      </div>
    );
  }

  return (
    <div className="my-20 px-4">

      <div className="border-t border-base-300 my-5"></div>

      <h1 className="text-3xl font-bold text-[#1F2937] my-10 text-center">
        Your Friends
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>

    </div>
  );
};

export default Friends;