import './App.css';
import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';
import EducationCard from './components/EducationCard';
import CvCard from './components/CvCard';
import ProjectsCard from './components/ProjectsCard';
import GetInTouchCard from './components/GetInTouchCard';

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const timeOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const time = new Intl.DateTimeFormat('en-IN', timeOptions).format(new Date());
      setCurrentTime(time);
    };

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="loader-container bg-gray-100">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-in">

          <ProfileCard />
          <AboutCard />
          <EducationCard />
          <ProjectsCard />

          {/* <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
            <h1 className="text-4xl font-bold card-content">
              PAVAN KUMAR SIDAGAM
            </h1>
            <p className="text-gray-500 card-content">
              Software Developer
            </p>
          </div> */}

          {/* <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >About</h4>
            <p className="text-s text-gray-500 card-content-syne max-h-40 overflow-y-hidden hover:overflow-y-auto hover:h-40">Results-driven professional with strong problem-solving skills, delivering innovative solutions to complex challenges. Adaptable and creative, focused on driving impactful outcomes and fostering organizational growth.
            </p>
          </div> */}
          
          {/* <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-2 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Experience & Education</h4>
            <p className="text-sm font-bold card-time">{currentTime}</p>
          </div> */}

          {/* <div className="card bg-white rounded-lg p-6 col-span-1 row-span-1 md:row-span-3 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Projects</h4>
            <p className="text-sm font-bold card-time">{currentTime}</p>
          </div> */}

          <div className="card bg-white rounded-lg p-6">
            <h4 className="font-bold border-b-2 mb-2 border-gray-300 text-sm card-content-syne" >Time India</h4>
            <p className="text-sm text-gray-500 card-time">{currentTime}</p>
          </div>
          <div className="card bg-white rounded-lg p-7 text-center">
            <p className="text-sm font-bold card-time">{currentTime}</p>
          </div>

          {/* <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Get In Touch</h4>
            <p className="text-sm text-gray-500 card-time">{currentTime}</p>
          </div> */}
          <GetInTouchCard />


          <div className="card bg-white rounded-lg p-6 row-span-1 md:row-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Years of Experience</h4>
            <p className="text-center text-6xl font-bold card-time">1</p>
          </div>

          {/* <div className="card bg-white rounded-lg p-6 row-span-1 md:row-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >CV</h4>
            <p className="text-sm text-gray-500 card-time">{currentTime}</p>
          </div> */}

          <CvCard/>
          
          <div className="card bg-white rounded-lg p-7 text-center">
            <p className="text-sm font-bold card-time">{currentTime}</p>
          </div>
          <div className="card bg-white rounded-lg p-7 text-center">
            <p className="text-sm font-bold card-time">{currentTime}</p>
          </div>
         
          


          {/* <div className="card bg-white rounded-lg p-7 col-span-1 md:col-span-2">
            <iframe
              src="https://chrome-dino.com"
              width="600"  // You can adjust width
              height="300"  // You can adjust height
              style={{ border: "none" }}
              title="Chrome Dinosaur Game"
            />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
