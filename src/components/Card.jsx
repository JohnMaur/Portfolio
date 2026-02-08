// const Card = ({ degreeAngle }) => {
//   return (
//     <div 
//       className={`h-40 w-96 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-2 hover:border-cyan-400`}
//       style={{ 
//         background: `linear-gradient(${degreeAngle}, #37116B, #130428)`
//       }}
//     >
//       {/* Your content here */}
//     </div>
//   )
// }

// export default Card;

const Card = ({ degreeAngle }) => {
  return (
    <div 
      className={`sm:h-32 sm:w-1/3 max-sm:w-full max-sm:h-24 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:border-2 hover:border-cyan-400`}
      style={{ 
        background: `linear-gradient(${degreeAngle}, #37116B, #130428)`
      }}
    >
      {/* Your content here */}
    </div>
  )
}

export default Card;
