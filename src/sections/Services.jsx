import { useRef } from 'react';
import { gradient } from "../constant"
import { Card } from "../components"
import useOnScreen from '../custom-hook/useOnScreen';

const Services = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`bg-primary flex justify-center items-center h-auto sm:py-20 max-sm:py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="space-y-3 w-full sm:px-28 max-sm:px-3">
        <p className='text-white font-palanquin font-bold text-4xl'>Services</p>
        <div className='sm:hidden space-y-5'>
          <Card
            degreeAngle="320deg"
          />
          <Card
            degreeAngle="160deg"
          />
          <Card
            degreeAngle="320deg"
          />
          <Card
            degreeAngle="160deg"
          />
          <Card
            degreeAngle="320deg"
          />
          <Card
            degreeAngle="160deg"
          />
        </div>

        <div className='max-sm:hidden space-y-3'>
          <div className="flex space-x-3">
            <Card
              degreeAngle="320deg"
            />
            <Card
              degreeAngle="160deg"
            />
            <Card
              degreeAngle="80deg"
            />
          </div>
          <div className="flex space-x-3">
            <Card
              degreeAngle="240deg"
            />

            <Card
              degreeAngle="240deg"
            />
            <Card
              degreeAngle="80deg"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services