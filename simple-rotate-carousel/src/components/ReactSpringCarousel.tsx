// import React, { useState } from "react";
// import { Canvas } from "react-three-fiber";
// import { useSpring } from "@react-spring/core";
// import { a } from "@react-spring/three";

// const Carousel: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   const items = [
//     { color: "red", rotation: [0, 0, 0] },
//     { color: "green", rotation: [0, Math.PI / 2, 0] },
//     { color: "blue", rotation: [0, Math.PI, 0] },
//   ];

//   const { rotation } = useSpring({
//     rotation: items[index].rotation,
//   });

//   const nextItem = () => {
//     setIndex((index + 1) % items.length);
//   };

//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <a.group rotation={rotation}>
//         {items.map((item, i) => (
//           <a.mesh key={i} onClick={nextItem} position={[(i - index) * 2, 0, 0]}>
//             <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//             <a.meshStandardMaterial attach="material" color={item.color} />
//           </a.mesh>
//         ))}
//       </a.group>
//     </Canvas>
//   );
// };

// function ReactSpringCarousel() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Carousel />
//     </div>
//   );
// }

// export default ReactSpringCarousel;

import React from 'react'

export default function ReactSpringCarousel() {
  return (
    <div>
      
    </div>
  )
}

