import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import userLogo from '/img/logos/user.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyRide({vehicle}) {
  const schema = yup.object().shape({
    pickFrom: yup.
      string().
      trim().
      required('Pick from is required field'),
    pickTo: yup.
      string().
      trim().
      required('Pick to is a required field'),
  });

  const {register, handleSubmit, errors} = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const [result, setResult] = useState(null);

  const onSubmit = data => {
    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const makeFakeData = (data, vehicle) => {
      const result = {
        vehicle,
        from: data.pickFrom,
        to: data.pickTo,
        thumbnail: `/img/${vehicle}.jpg`,
        details: []
      };
      const length = randomInteger(2,5);
      for (let i = 0; i < length; i++) {
        result.details.push({
          persons: randomInteger(2, 7),
          price: randomInteger(30, 200)
        })
      }
      return result;
    }

    setResult(makeFakeData(data, vehicle))
  }

  return (
    <div className='w-full px-8 py-8 mx-auto lg:max-w-md grid-rows-2 lg:max-w-6xl gap-2 lg:px-12 grid lg:grid-cols-4'>
      <div className='float-left px-6 py-8 bg-white rounded-lg shadow row-span-1 bg-opacity-90 sm:px-10 lg:col-span-1'>
        {
          result === null ? 
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='w-full space-y-3'
            >
              <label className='block'>
                <span className='text-sm font-medium text-gray-700'>Pick from</span>
                <input 
                  className=''
                  name="pickFrom"
                  ref={register}
                  type="text"
                />
              </label>
              <label className='block'>
                <span className='text-sm font-medium text-gray-700'>Pick to</span>
                <input
                  className=''
                  name="pickTo"
                  ref={register}
                  type="text"
                />
              </label>
              <label className='block'>
                <span className='text-sm font-medium text-gray-700'>Date</span>
                <input
                  className=''
                  name="date"
                  type="date"
                />
              </label>
              <input
                className='block py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-600 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow sm:text-base cursor-pointer w-full'
                type='submit'
                value='Search'
              />
            </form> :
            <div>
              <div className='py-5 mb-3 bg-indigo-200 rounded-lg'>
                <ul className='ml-8 list-disc'>
                  <li>{result.from}</li>
                  <li>{result.to}</li>
                </ul>
              </div>
              <div>
                {
                  result.details.map((info, i) => {
                    return <div key={i} className='mb-3 grid grid-cols-3'>
                      <div className='items-center grid grid-cols-2'>
                        <img className='rounded-full w-14' src={result.thumbnail}/>
                        <p className='ml-2'>
                          {result.vehicle[0].toUpperCase() + result.vehicle.slice(1)}
                        </p>
                      </div>
                      <div className='items-center grid grid-cols-2'>
                        <img className='w-10' src={userLogo}/>
                        {info.persons}
                      </div>
                      <div className='items-center grid grid-cols-2'>
                        <p className='text-right'>
                          {'$' + info.price}
                        </p>
                      </div>
                    </div>
                  })
                }
              </div>
              <button
                onClick={() => setResult(null)}
                className='block py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-600 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow sm:text-base cursor-pointer w-full'
              >Search again</button>
            </div>
        }
      </div>
      <div className='lg:col-span-3 row-span-1'>
        <MapContainer className='w-full h-full' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default MyRide;
