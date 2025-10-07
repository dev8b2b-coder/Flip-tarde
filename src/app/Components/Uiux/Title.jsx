import React from "react";


const Title = ({ title, color,ish1}) => {
  return (
    <>
    {
      ish1 ?
      <h1
      className={`${color}  font-medium title_text`}
      dangerouslySetInnerHTML={{ __html: title }}
    /> 
    :
    <h2
      className={`${color}  font-medium title_text`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    }
    </>
  );
};

export default Title;

// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const Title = ({ title, color = "text-black", ish1 }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   const TitleTag = ish1 ? "h1" : "h2";

//   // Split by <br/> first, then split lines into words
//   const lines = title.split("<br/>");

//   return (
//     <TitleTag
//       ref={ref}
//       className={`font-medium title_text flex flex-col`}
//     >
//       {lines.map((line, lineIndex) => {
//         const words = line.trim().split(" ");

//         return (
//           <span key={lineIndex} className="flex flex-wrap overflow-hidden">
//             {words.map((word, i) => (
//               <span
//                 key={i}
//                 className={`${color}  inline-block mr-2 transform transition-all duration-500 ease-out ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                 }`}
//                 style={{ transitionDelay: `${(i + lineIndex * 5) * 150}ms` }} // stagger between lines
//               >
//                 {word}
//               </span>
//             ))}
//           </span>
//         );
//       })}
//     </TitleTag>
//   );
// };

// export default Title;

