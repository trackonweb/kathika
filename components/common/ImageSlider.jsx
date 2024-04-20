"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ImageSlider = ({ images, text, des, des1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, images]);

  return (
    <div className="flex justify-center pt-[95px]">
      <div className="relative w-full overflow-hidden shadow-lg">
        <div className="w-full relative">
          <Image
            src={images ? images[currentSlide] : null}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover md:h-screen h-full"
          />
          <div className="container mx-auto">
            {text && (
              <div className="hidden absolute top-0 left-0 h-full w-full  md:flex justify-center items-center">
                <div className="container mx-auto  ">
                  <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className=" bg-[rgba(245,242,242,0.61)] px-4 rounded-[40px] py-10 my-10 flex flex-col justify-center items-center"
                  >
                    <div className="text-center">
                      <h3 className="md:text-[45px] text-[32px] font-Yeseva text-black">
                        {text}
                      </h3>
                      <p className="md:text-[20px] text-[16px] leading-7  md:text-center text-justify text-black">
                        {des}
                      </p>
                      <p className="md:text-[20px] text-[16px] leading-7  md:text-center text-justify text-black">
                        {des1}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
        {images && images.length > 1 && (
          <div className="absolute top-0 flex h-full w-full items-center justify-between">
            <button
              onClick={prevSlide}
              className="rounded-full bg-[#00000030] p-3 text-white hover:bg-[#000000] hover:text-gray-300 focus:outline-none"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-[#00000030] p-3 text-white hover:bg-[#000000] hover:text-gray-300 focus:outline-none"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
