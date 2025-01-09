// import React, { useEffect, useState, useRef } from 'react';

// const Stats = () => {
//   const [animate, setAnimate] = useState(false);
//   const [happyClients, setHappyClients] = useState(0);
//   const [projects, setProjects] = useState(0);
//   const [hardWorkers, setHardWorkers] = useState(0);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     // Intersection Observer for scroll detection
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//         }
//       },
//       { threshold: 0.3 } // Adjust this threshold for when the animation should trigger
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => {
//       if (statsRef.current) {
//         observer.unobserve(statsRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (animate) {
//       // Function to animate counters
//       const animateCounter = (setter, targetValue) => {
//         let current = 0;
//         const increment = Math.ceil(targetValue / 100); // Adjust increment for smoothness
//         const interval = setInterval(() => {
//           current += increment;
//           if (current >= targetValue) {
//             current = targetValue;
//             clearInterval(interval);
//           }
//           setter(current);
//         }, 20); // Speed of animation
//       };

//       animateCounter(setHappyClients, 50);
//       animateCounter(setProjects, 60);
//       animateCounter(setHardWorkers, 10);
//     }
//   }, [animate]);

//   return (
//     <section
//       id="stats"
//       ref={statsRef}
//       className="py-16 bg-gray-100"
//     >
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Happy Clients */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 text-white rounded-full mb-4">
//               <i className="bi bi-emoji-smile text-3xl"></i>
//             </div>
//             <h3 className="text-4xl font-bold text-gray-800">{happyClients}</h3>
//             <p className="text-gray-600 mt-2">Happy Clients</p>
//           </div>

//           {/* Projects */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-500 text-white rounded-full mb-4">
//               <i className="bi bi-journal-richtext text-3xl"></i>
//             </div>
//             <h3 className="text-4xl font-bold text-gray-800">{projects}</h3>
//             <p className="text-gray-600 mt-2">Projects</p>
//           </div>

//           {/* Hard Workers */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
//             <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500 text-white rounded-full mb-4">
//               <i className="bi bi-people text-3xl"></i>
//             </div>
//             <h3 className="text-4xl font-bold text-gray-800">{hardWorkers}</h3>
//             <p className="text-gray-600 mt-2">Hard Workers</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

import React, { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [animate, setAnimate] = useState(false);
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hardWorkers, setHardWorkers] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const animateCounter = (setter, targetValue) => {
        let current = 0;
        const increment = Math.ceil(targetValue / 100);
        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(interval);
          }
          setter(current);
        }, 20);
      };

      animateCounter(setHappyClients, 50);
      animateCounter(setProjects, 60);
      animateCounter(setHardWorkers, 10);
    }
  }, [animate]);

  return (
    <section
      id="stats"
      ref={statsRef}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Happy Clients */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-2">😊</div>
            <h3 className="text-4xl font-bold text-gray-800">{happyClients}</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          {/* Projects */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-2">📂</div>
            <h3 className="text-4xl font-bold text-gray-800">{projects}</h3>
            <p className="text-gray-600 mt-2">Projects</p>
          </div>

          {/* Hard Workers */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl mb-2">👷</div>
            <h3 className="text-4xl font-bold text-gray-800">{hardWorkers}</h3>
            <p className="text-gray-600 mt-2">Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
