import "./index.css";

// const heroData = [
//   {
//     title: "Enjoy movies like never before",
//     text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
//     imageUrl: "https://picsum.photos/600/400",
//   },
// ];

// const Hero = ({ heroData }) => {
//   return (
//     <div className="Hero__wrapper">
//       <div className="Hero__text">
//         <h1>{heroData.title}</h1>
//         <p>{heroData.text}</p>
//       </div>
//       <div className="Hero__img">
//         <img src={heroData.imageUrl} alt={heroData.title} />
//       </div>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div className="Hero__wrapper">
      <div className="Hero__text">
        <h1>Enjoy movies like never before</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <div className="Hero__img">
        <img src="https://picsum.photos/600/400?6" alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
