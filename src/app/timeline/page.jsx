'use client';

import { useInteraction } from '@/context/InteractionContext';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const TimeLinePage = () => {
  const { interactions } = useInteraction();

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

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {interactions.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">

          {interactions.map((item) => (
            <div
              key={item.id}
              className="p-4  bg-base-100 shadow rounded flex items-center gap-4"
            >

              {/* ICON */}
              <div className="p-3 bg-gray-100 rounded-full">
                {getIcon(item.type)}
              </div>

              {/* CONTENT */}
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
  );
};

export default TimeLinePage;