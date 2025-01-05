/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// import Team from 'assets/images/hero/team.png';
import aboutus from 'assets/images/hero/aboutus.png';

export default function Heroaboutus() {
  return (
    <section className="hero flex flex-wrap items-start sm:flex-row">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex flex-col px-5 sm:px-12">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-teal-500 font-bold leading-tight mb-5">
            About Us
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            At SusrutX, we are transforming healthcare through secure
            digital solutions. Our mission is to make managing medical records effortless,
            improve doctor-patient communication, and ensure better health outcomes—all
            with the highest standards of data privacy and security.
            <br /><br />
            We empower patients to take control of their health by securely storing medical
            records, streamlining healthcare management, and offering features like
            medication reminders and wellness tools. For doctors, our platform provides
            efficient access to patient information, AI-driven insights, and tools that
            simplify consultations.
            <br /><br />
            Designed for convenience and reliability, our subscription-based platform
            ensures healthcare is accessible, secure, and empowering for everyone.
            Join us in shaping the future of modern healthcare.
          </p>
        </Fade>
      </div>

      {/* Image Section */}
      <div className="flex w-full sm:w-1/2 justify-center items-start sm:pt-20">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img
            src={aboutus}
            alt="Hero"
            className="h-[34rem] w-auto rounded-xl shadow-lg opacity-80"
          />
        </Fade>
      </div>
    </section>
  );
}
