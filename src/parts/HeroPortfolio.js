import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Services() {
  const categories = [
    {
      id: 1,
      title: 'For Patients',
      description: [
        'Securely store and manage patient records in a centralized system.',
        'Access your data anytime without worrying about physical reports.',
        'Ensure privacy with encrypted storage solutions.',
      ],
      price: '₹499/month',
    },
    {
      id: 2,
      title: 'For Doctors',
      description: [
        'View and update patient records securely with time-bound access.',
        'Add diagnoses, prescriptions, and reports seamlessly.',
        'Get AI-powered suggestions for disease causes and remedies.',
      ],
      price: '₹499/month',
    },
    {
      id: 3,
      title: 'Premium Users',
      description: [
        'Receive medical reminders with private AI on your device.',
        'Access premium health management tools for enhanced wellness.',
        'Streamline healthcare processes with cutting-edge features.',
      ],
      price: '₹999/month',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        {/* Main Heading */}
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl text-teal-500 font-bold text-center mb-12">Plans</h1>
        </Fade>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Fade direction="up" triggerOnce key={category.id}>
              <div className="shadow-lg rounded-lg p-6 text-center bg-white hover:shadow-xl transition-shadow duration-300">
                {/* Title */}
                <h2 className="text-teal-500 text-xl font-bold mb-4">{category.title}</h2>
                {/* Description */}
                <ul className="text-gray-700 text-sm mb-4 text-left">
                  {category.description.map((point) => (
                    <li key={point} className="mb-2">
                      • {point}
                    </li>
                  ))}
                </ul>
                {/* Price Highlight */}
                <div className="text-teal-500 font-bold text-lg">{category.price}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
