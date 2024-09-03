// src/components/WebsiteDivision.js

import React from 'react';
import Web from '/Web dev.png'
import Game from '/Game dev.png'
import Cysec from '/Cyber Scecurity.png'
import AI from '/AI.png'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Bahan () {
  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <>
    <Slider {...setting}>
    <div className="bg-[#f0f0f0] p-2 mt-28 rounded-xl shadow-md w-3/4 max-w-4xl mx-[18.5rem] flex flex-col items-center">
      <div className="bg-[#62929A] mt-[-1.5rem] w-[30rem] max-w-4xl mx-[12.5rem] h-2 rounded-[10rem] shadow-md pb-11 text-center">
        <h2 className="text-xl font-bold text-[#f0f0f0] ">WEBSITE DIVISION</h2>
      </div>
      <div className="flex w-full max-w-4xl">
        <div className="flex-shrink-0 p-2 rounded-xl">
          <img src="Web dev.png" alt="Logo" className="rounded-[2rem] w-72 h-62 p-6" />
        </div>
        <div className="p-11">
          <h3 className="text-3xl font-bold text-gray-700 mb-5 text-">Our Subjects</h3>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-600">Frontend Dev : Basic HTML, Tailwind, JavaScript, React. </h4>
          </div>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-600">Backend Dev : PHP, NodeJS, Express.JS, API.</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-600">Database : MySQL, MongoDB.</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f0f0] p-2 mt-28 rounded-xl shadow-md w-3/4 max-w-4xl mx-[18.5rem] flex flex-col items-center">
      <div className="bg-[#62929A] mt-[-1.5rem] w-[30rem] max-w-4xl mx-[12.5rem] h-2 rounded-[10rem] shadow-md pb-11 text-center">
        <h2 className="text-xl font-bold text-[#f0f0f0] ">GAME/3D DIVISION</h2>
      </div>
      <div className="flex w-full max-w-4xl">
        <div className="flex-shrink-0 p-2 rounded-xl">
          <img src="Game dev.png" alt="Logo" className="rounded-[2rem] w-72 h-62 p-6" />
        </div>
        <div className="p-11">
          <h3 className="text-3xl font-bold text-gray-700 mb-5 text-">Our Subjects</h3>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-600">3D Model : Blender, Sketch up </h4>
            <p className="text-sm text-gray-600"></p>
          </div>
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-600">Game Engine : Unity, Godot 4.0</h4>
            <p className="text-sm text-gray-600"></p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-600">Programming Languages : C#, GDScript</h4>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f0f0] p-2 mt-28 rounded-xl shadow-md w-3/4 max-w-4xl mx-[18.5rem] flex flex-col items-center">
      <div className="bg-[#62929A] mt-[-1.5rem] w-[30rem] max-w-4xl mx-[12.5rem] h-2 rounded-[10rem] shadow-md pb-11 text-center">
        <h2 className="text-xl font-bold text-[#f0f0f0] ">CYBER SECURITY DIVISION</h2>
      </div>
      <div className="flex w-full max-w-4xl">
        <div className="flex-shrink-0 p-2 rounded-xl">
          <img src="Cyber Scecurity.png" alt="Logo" className="rounded-[2rem] w-72 h-62 p-6" />
        </div>
        <div className="p-11">
          <h3 className="text-3xl font-bold text-gray-700 mb-5 text-">Our Subjects</h3>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">Networking Basic</li>
            <p className="text-sm text-gray-600"></p>
          </div>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">OSINT</li>
            <p className="text-sm text-gray-600"></p>
          </div>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">Injection</li>
            <p className="text-sm text-gray-600"></p>
          </div>
          <div className='mb-2'>
            <li className="text-xl font-semibold text-gray-600">CSRF</li>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f0f0] p-2 mt-28 rounded-xl shadow-md w-3/4 max-w-4xl mx-[18.5rem] flex flex-col items-center">
      <div className="bg-[#62929A] mt-[-1.5rem] w-[30rem] max-w-4xl mx-[12.5rem] h-2 rounded-[10rem] shadow-md pb-11 text-center">
        <h2 className="text-xl font-bold text-[#f0f0f0] ">AI DIVISION</h2>
      </div>
      <div className="flex w-full max-w-4xl">
        <div className="flex-shrink-0 p-2 rounded-xl">
          <img src="AI.png" alt="Logo" className="rounded-[2rem] w-72 h-62 p-6" />
        </div>
        <div className="p-11">
          <h3 className="text-3xl font-bold text-gray-700 mb-5 text-">Our Subjects</h3>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">ML (Machine Learning)</li>
          </div>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">Deep Learning</li>
          </div>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">AI Workflow</li>
          </div>
          <div className='absolute bottom-[6.5rem] ml-[16.5rem]'>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">Data, Dataset, Database</li>
          </div>
          <div className="mb-2">
            <li className="text-xl font-semibold text-gray-600">AI Training</li>
          </div>
          <div>
            <li className="text-xl font-semibold text-gray-600">Data Annotation</li>
          </div>
          </div>
        </div>
      </div>
    </div>
    </Slider>
    
    </>
    
  );
};

export default Bahan;
    
      

