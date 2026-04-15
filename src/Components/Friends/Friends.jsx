import React from 'react';

const Friends = async() => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json()
    console.log(friends)
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#1F2937] my-20'>Your Friends</h1>
        </div>
    );
};

export default Friends;