import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

export default function Service({ data }) {
  return (
    <div className="bg-white">
      <div className="container mx-auto pt-10 pb-16 px-10 lg:px-32">
        <Fade direction="right" triggerOnce>
          <h1 className="text-3xl text-teal-500 text-center font-bold">Service We Provide</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-sm text-gray-400 text-center mb-8">
            The medical data remains end-to-end secured.
          </p>
        </Fade>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.map((item, index) => (
            <Fade direction={item.animation} delay={300 * index} key={item.id} triggerOnce>
              <div className="flex flex-col items-center">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-lg" // Added `rounded-lg` for rounded corners
                  />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center text-center 
                               bg-white rounded-lg w-full h-56 p-4"
                  >
                    <h2 className="text-teal-500 text-lg font-bold mb-2">{item.title}</h2>
                    <h3 className="text-sm text-gray-400">{item.description}</h3>
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string, // Optional if a description is provided
      animation: PropTypes.string.isRequired,
      description: PropTypes.string, // Optional description for items without an image
    }),
  ).isRequired,
};
