'use client';

import { useState } from 'react';
import { useInteraction } from '@/context/InteractionContext';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const TimeLinePage = () => {
  const { interactions } = useInteraction();

  // ✅ filter state
  const [filter, setFilter] = useState('All');


  const getIcon = (type) => {
    if (type === 'Call') {
      return <FaPhone className="text-green-500 text-xl" />;
    } 
    else if (type === 'Text') {
      return <FaMessage className="text-blue-500 text-xl" />;
    } 
    else if (type === 'Video') {
      return <FaVideo className="text-purple-500 text-xl" />;
    } 
    else {
      return null;
    }
  };

  // ✅ filtered data
  const filteredInteractions =
    filter === 'All'
      ? interactions
      : interactions.filter((item) => item.type === filter);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl p-6">

        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        {/* ✅ FILTER BUTTONS */}
        <div><h1 className='text-2xl font-semibold my-2 text-success'>Filtered By:</h1></div>
        <div className="flex gap-3 mb-6 flex-wrap">

          <button
            onClick={() => setFilter('All')}
            className={`btn btn-sm ${filter === 'All' ? 'btn-primary' : ''}`}
          >
            All
          </button>

          <button
            onClick={() => setFilter('Call')}
            className={`btn btn-sm ${filter === 'Call' ? 'btn-primary' : ''}`}
          >
            Call
          </button>

          <button
            onClick={() => setFilter('Text')}
            className={`btn btn-sm ${filter === 'Text' ? 'btn-primary' : ''}`}
          >
            Text
          </button>

          <button
            onClick={() => setFilter('Video')}
            className={`btn btn-sm ${filter === 'Video' ? 'btn-primary' : ''}`}
          >
            Video
          </button>

        </div>
        {filteredInteractions.length === 0 ? (
          <p className="text-gray-500">No activity found</p>
        ) : (
          <div className="space-y-4">

            {filteredInteractions.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-base-100 shadow rounded flex items-center gap-4"
              >

                {/* ICON */}
                <div className="p-3 bg-gray-100 rounded-full">
                  {getIcon(item.type)}
                </div>

                {/* INFO */}
                <div>
                  <p className="font-semibold text-lg">
                    {item.type} with {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.time}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default TimeLinePage;