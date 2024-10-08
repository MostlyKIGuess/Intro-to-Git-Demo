"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [

  {
        id: 1,
        name: "OSDG Best xD",
        designation: "Club God",
        image: "/images/osdg-best.webp",
        },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    id: 7,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 8,
    name: "Gopal",
    designation: "ECE undergrad possesed by ghosts of burnt IC's ",
    image: "/images/goapal.jpg",
  },
  {
    id: 9,
    name: "Aryan",
    designation: "Nahi hai abhi kya kare?",
    image: "/images/aryan.jpeg",
  },
  {
    id: 37,
    name: "Arpit",
    designation: "khud gaye guru",
    image: "/images/arpit.png",
  },
  {
    id: 1725,
    name: "dombu",
    designation: "Official Dombu",
    image: "/images/dombu1725.jpeg",
  },
  {
    id: 9999,
    name: "Nikhil",
    designation: "ECE guy ",
    image: "/images/nikhil.png",
  },
  {
    id: 28,
    name: "Vansh",
    designation: "Error!!",
    image: "/images/Vansh.png",
  },
  {
    id: 2024204013,
    name: "Deepesh",
    designation: "Git Learner",
    image: "/images/Deepesh.jpeg",
  },
  {
    id: 10,
    name: "Harry",
    designation: "Hold Up ",
    image: "/images/Harry.jpg",
  },
  {
    id: 11,
    name: "Manan",
    designation: "Jobless",
    image:"/images/Me.png",
  },
  {
    id: 100,
    name: "Hemanth",
    designation: "The one who is always hungry",
    image: "/images/IMG_5034.png",
  },
     {
    id: 234464,
    name: "Janak",
    designation: "student",
    image:
      "/images/janak.jpg",
  },
{
  id: 6801,
  name: "rimo",
  designation: "fiat earther",
  image: "/images/jopal.png",
},

  {
    id: 420,
    name: "AstroDuck",
    designation: "Alive person",
    image: "/images/images.jpeg",
  },

  {
    id: 906,
    name: "Shivek",
    designation: "Nahi hai abhi kya kare?",
    image: "/images/Shivek.png",
  },
  {
     id: 100,
     name: "Krrish Gupta",
     designation: "Engineer",
     image: "/images/krrish.png",
  },
  {
    id: 369,
    name: "Ravi",
    designation: "tum kya dekh rahe ho",
    image: "/images/jetu.jpg",
  },
{
    id: 23974834,
    name: "nav",
    designation: "idk why im here i just get paid",
    image: "/images/nav.jpeg",
  },

  {
    id: 32,
    name: "Keshav",
    designation: "HydraWarrior",
    image: "/images/Keshav.jpeg",
  },
  {
    id: 4013,
    name: "Neemon",
    designation: "Midsems ne le li :(",
    image: "/images/neemon.png",
  },
  {
    id: 2308,
    name: "Aravind",
    designation: "Learner",
    image: "/images/AravindGondi_Photo.jpeg",
  },


    //   {
//     id: <next-id>,
//     name: "<Your Name Goes Here>",
//     designation: "<What do you want to be designated goes here>",
//     image:
//       "upload image in public folder and write it's path here, for eg: /images/your-image.jpg",
//   },
  


];

export function People() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-12">
      <AnimatedTooltip items={people} />
    </div>
  );
}
