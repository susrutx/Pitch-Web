/* eslint-disable import/extensions */

// Services Img Imports
// import { type } from '@testing-library/user-event/dist/type';
// import Web from '../assets/images/Services/Web.png';
// import Mobile from '../assets/images/Services/Mobile.png';
// import UIUX from '../assets/images/Services/Design.png';
import patient from "../assets/images/Services/patientimg.png";
import doctor from "../assets/images/Services/doctorimg.png";
import secure from "../assets/images/Services/secureimg.png";

// Portfolio Img Imports
import motive from '../assets/images/Portfolio/motive.png';
// import Recruiting from '../assets/images/Portfolio/Recruiting.png';
// import Stream from '../assets/images/Portfolio/Stream.png';
// import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
// import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
// import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    id: 1,
    title: 'Patient',
    imageUrl: patient,
    animation: 'left',
  },
  {
    id: 2,
    title: 'MediCore',
    description: 'OneApp & EHR Integration- A unified application for managing patient health records across multiple healthcare providers along with Seamless integration of existing EHR systems to enable interoperability and centralized access to patient records..',
    animation: 'up',
  },
  {
    id: 3,
    title: 'NovaIQ',
    description: 'A Local AI to deploy AI models on local servers or edge devices for improved data privacy and low-latency processing making it ideal for personal devices of doctors and patients and a Global AI enabling Cloud-based AI solutions offering scalable computing resources and centralized model management for Zero Day Analysis and Cohort Analysis of new diseases.',
    animation: 'right',
  },
  {
    id: 4,
    title: 'Doctor',
    imageUrl: doctor,
    animation: 'left',
  },
  {
    id: 5,
    title: 'Security',
    imageUrl: secure,
    animation: 'up',
  },
  {
    id: 6,
    title: 'QuantaLock',
    description: 'Seamless integration with any existing blockchain infrastructures with advanced cryptographic protocols designed to protect sensitive data against emerging threats from quantum computing, ensuring long-term security and compliance. Data is secured with post-quantum cryptography, further enhanced with FPGA for faster encryption and decryption',
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 1,
    title: 'motive',
    imageUrl: motive,
    type: 'motive',
  },
  // {
  //   id: 1,
  //   title: 'Recruiting App',
  //   imageUrl: Recruiting,
  //   type: 'Mobile Apps',
  //   responsibility: [
  //     'Mobile Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  // },
  // {
  //   id: 'asd1293uhjkhkjh2',
  //   title: 'Stream+',
  //   imageUrl: Stream,
  //   type: 'Mobile Apps',
  //   responsibility: [
  //     'Mobile Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15276430-Stream',
  // },
  // {
  //   id: 'asd1293uvbvcbbd3',
  //   title: 'Freelance',
  //   imageUrl: Freelance,
  //   type: 'Mobile Apps',
  //   responsibility: [
  //     'Mobile Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  // },
  // {
  //   id: 'asd1293ufgdfgs4',
  //   title: 'Aura',
  //   imageUrl: Aura,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  // },
  // {
  //   id: 'asd1293ulskmnb5',
  //   title: 'Surtido Rico',
  //   imageUrl: Surtido,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  // },
  // {
  //   id: 'asd1293ulkmnbj6',
  //   title: 'Courses Management',
  //   imageUrl: ManagementApp,
  //   type: 'Website',
  //   responsibility: [
  //     'Web Development',
  //     'UI/UX Design',
  //   ],
  //   credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  // },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for Racxstudio, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with Racxstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Racxstudio is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Asmit Ganguly',
    position: 'CEO & CTO',
    imageUrl: CEO,
  },
  {
    name: 'Dibyanayan Bandyopadhyay',
    // position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Suprajit Dewanji',
    // position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Sukrit Ghosh',
    // position: 'Project Manager',
    imageUrl: ProjectManager,
  },

];
