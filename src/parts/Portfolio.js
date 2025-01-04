/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-teal-500  text-center font-bold">
          Our Main Motive
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
        Connecting healthcare digitally for secure, seamless, 
        and patient-centered medical data management
        </p>
      </Fade>

      {/* Grid container for portfolio items */}
      <div className="grid gap-8 px-6 w-full">
        {data.map((item) => (
          <Fade
            direction="up"
            triggerOnce
            bottom
            delay={500 * item.id}
            key={item.id}
          >
            {/* Portfolio Item */}
            <div className="group rounded-2xl shadow-2xl w-full max-w-screen-xl m-auto transform transition duration-500 hover:scale-110">
              {/* Image Section with hover effect */}
              <div className="relative h-[60vh] overflow-hidden rounded-2xl">
                {/* Full box-cover image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Hover overlay with text */}
                <div className="absolute flex w-full h-full top-0 left-0 opacity-0 bg-black bg-opacity-70 justify-center items-center rounded-2xl hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-2xl font-bold px-6">
                  Our primary goal is to revolutionize the healthcare 
                  system by creating a secure,
                   centralized, and user-controlled digital platform for
                    storing and sharing medical records.
                    Patients can seamlessly access and manage their
                     medical data across government hospitals,
                     eliminating the need to carry physical reports. 
                     Through time-bound permissions,
                      doctors can securely access patient records 
                      for consultations and update new findings or reports,
                       ensuring data privacy and patient-centric control.
                        This initiative aims to enhance the efficiency, 
                       accessibility, and digital transformation of the
                        healthcare ecosystem, providing a unified platform 
                       for better patient care and operational smoothness.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
