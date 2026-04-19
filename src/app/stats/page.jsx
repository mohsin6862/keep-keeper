'use client';
import { useInteraction } from '@/context/InteractionContext';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const StatsPage = () => {
  const { interactions } = useInteraction();

  const callCount = interactions.filter(i => i.type === 'Call').length;
  const textCount = interactions.filter(i => i.type === 'Text').length;
  const videoCount = interactions.filter(i => i.type === 'Video').length;

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#a855f7'];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl p-6">

        <h1 className="text-3xl font-bold mb-6">
          Friendship Analytics
        </h1>

        {interactions.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <div className="bg-base-100 p-6 shadow rounded">
            <h1 className='font-semibold'>By Interaction Type</h1>

            {/* CHART */}
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>

                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default StatsPage;