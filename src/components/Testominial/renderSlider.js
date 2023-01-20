// import React, { useState } from "react";

// const Slider = () => {
//   const [curSlide, setCurSlide] = useState(0);
//   const slides = [
//     {
//       header: "Best Currier  decision ever!",
//       text: "Merito's mock interview program helped me to identify areas of improvement needed and built confidence to face any interview situation. Mentoring session with Rushikesh sir helped me to aim for the right companies matching my career aspirations. Even after my graduation I do out to Merito for any career help or support I needed and always got the right guidance",
//       author: {
//         name: "SANKET NIRAS",
//         location: "Class 2020 -GE Energy",
//         img: "",
//       },
//     },
//     {
//       header: "The last step to becoming a complete minimalist",
//       text: "I had opted for a mock interview for MBA. Mock interview has helped in more than one way. It was one that instilled more confidence in me while also making me realize where I could improve. The interviews are not just about one’s knowledge but much beyond, and Rushikesh Sir gave me a glimpse into the possible different scenarios I could face.",
//       author: {
//         name: "HEENA FATIMA",
//         location: "HEENA FATIMA",
//         img: "",
//       },
//     },
//     {
//       header: "The last step to becoming a complete minimalist",
//       text: "I had opted for a mock interview for MBA. Mock interview has helped in more than one way. It was one that instilled more confidence in me while also making me realize where I could improve. The interviews are not just about one’s knowledge but much beyond, and Rushikesh Sir gave me a glimpse into the possible different scenarios I could face.",
//       author: {
//         name: "HEENA FATIMA",
//         location: "HEENA FATIMA",
//         img: "",
//       },
//     },
//   ];
// };
// const [curSlide, setCurSlide] = useState(0);

// const createDots = () => {
// return slides.map((_, i) => {
// return (
// <button
// className="dots__dot"
// key={i}
// data-slide={i}
// onClick={() => {
// goToSlide(i);
// activateDot(i);
// }}
// ></button>
// );
// });
// };

// const activateDot = slide => {
// let dots = document.querySelectorAll(".dots__dot");
// dots.forEach(dot => dot.classList.remove("dots__dot--active"));
// dots[slide].classList.add("dots__dot--active");
// };

// const goToSlide = slide => {
// setCurSlide(slide);
// };

// const nextSlide = () => {
// if (curSlide === slides.length - 1) {
// setCurSlide(0);
// } else {
// setCurSlide(curSlide + 1);
// }
// activateDot(curSlide);
// };

// const prevSlide = () => {
// if (curSlide === 0) {
// setCurSlide(slides.length - 1);
// } else {
// setCurSlide(curSlide - 1);
// }
// activateDot(curSlide);
// };

// const createDots = () => {
// setDots(
// slides.map((_, i) => (
// <button
// className={dots__dot ${curSlide === i && "dots__dot--active"}}
// onClick={() => {
// goToSlide(i);
// activateDot(i);
// }}
// key={i}
// data-slide={i}

// </button>
// ))
// );
// };

// const activateDot = slide => {
// setActiveDot(slide);
// };

// const goToSlide = slide => {
// setCurSlide(slide);
// };

// useEffect(() => {
// createDots();
// goToSlide(0);
// activateDot(0);
// }, []);

// const slider = (

// <div className="slider">
// {slides.map((slide, i) => (
// <div
// className="slide"
// style={{ transform: `translateX(${100 * (i - curSlide)}%)` }}
// key={i}
// >
// {slide}
// </div>
// ))}
// <button
// className="slider__btn slider__btn--left"
// onClick={prevSl
