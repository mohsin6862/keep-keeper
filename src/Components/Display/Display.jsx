import React from 'react';

const Display = () => {
    return (
        <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto'>
            <div className='text-center bg-base-100 rounded shadow-2xl p-10 space-y-4'>
                <h1 className='font-semibold text-3xl text-[#1F2937]'>10</h1>
                <p className='font-semibold text-[#64748B]'>Total Friend</p>
            </div>
            <div className='text-center bg-base-100 rounded shadow-2xl p-10 space-y-4'>
                <h1 className='font-semibold text-3xl text-[#1F2937]'>3</h1>
                <p className='font-semibold text-[#64748B]'>On Track</p>
            </div>
            <div className='text-center bg-base-100 rounded shadow-2xl p-10 space-y-4'>
                <h1 className='font-semibold text-3xl text-[#1F2937]'>6</h1>
                <p className='font-semibold text-[#64748B]'>Need Attention</p>
            </div>
            <div className='text-center bg-base-100 rounded shadow-2xl p-10 space-y-4'>
                <h1 className='font-semibold text-3xl text-[#1F2937]'>12</h1>
                <p className='font-semibold text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Display;