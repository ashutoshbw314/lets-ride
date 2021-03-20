import React from "react";

const sizeClasses={
  height: 'h-full',
  width: 'w-full',
}

function RideCard({ride}) {
  return (
    <div>
      <div className='flex flex-col items-center overflow-hidden bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all bg-opacity-90'>
        <img className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`} src={ride.thumbnail} alt={ride.vehicle} />
        <div className='px-6 py-4'>
          <h3 className="text-lg font-semibold text-gray-800 uppercase">{ride.vehicle}</h3>
        </div>
      </div>
    </div>
  );
}

export default RideCard;

