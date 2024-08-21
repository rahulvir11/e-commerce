import React, { useEffect, useRef } from "react";
import { FastDelivery, FreeShipping, BestQuality } from "./Imagesvg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const announcements = [
  {
    id: 1,
    heading: "Sale 20% Off",
    subheading: "On Everything",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id. Sint, fugit. Officia natus, aperiam obcaecati voluptate commodi nam. Dicta earum est accusamus expedita atque! Eligendi ab enim magnam asperiores?",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    heading: "rakhi 30% Off",
    subheading: "On Everything",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id. Sint, fugit. Officia natus, aperiam obcaecati voluptate commodi nam. Dicta earum est accusamus expedita atque! Eligendi ab enim magnam asperiores?",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    heading: "upcoming deepavali",
    subheading: "On Everything",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id. Sint, fugit. Officia natus, aperiam obcaecati voluptate commodi nam. Dicta earum est accusamus expedita atque! Eligendi ab enim magnam asperiores?",
    buttonText: "Shop Now",
  },
  // Add more announcements if needed
];
const Announcemenspage = () => {
  const constainer = useRef();
  useGSAP(
    () => {
      const timeline = gsap.timeline({ repeat: -1 });
      const timeline1 = gsap.timeline({ repeat: -1 });
      timeline1
        .to(".list1", {
          scale: 1.4,
          duration: 1,
          ease: "power1",
          backgroundColor: "blue",
        })
        .to(
          ".list1",
          {
            scale: 1,
            duration: 1,
            ease: "power1",
            backgroundColor: "white",
            delay: 3,
          },
          "a"
        )

        .to(
          ".list2",
          {
            scale: 1.4,
            duration: 1,
            ease: "power1",
            backgroundColor: "blue",
            delay: 3,
          },
          "a"
        )
        .to(
          ".list2",
          {
            scale: 1,
            duration: 1,
            ease: "power1",
            backgroundColor: "white",
            delay: 3,
          },
          "b"
        )

        .to(
          ".list3",
          {
            scale: 1.4,
            duration: 1,
            ease: "power1",
            backgroundColor: "blue",
            delay: 3,
          },
          "b"
        )
        .to(".list3", {
          scale: 1,
          duration: 1,
          ease: "power1",
          backgroundColor: "white",
          delay: 3,
        });

      announcements.forEach((_, index) => {
        const boxClass = `.box${index + 1}`;
        timeline
          .from(boxClass, {
            left: "80%",
            opacity: 0,
            duration: 1,
            ease: "power1",
          })
          .to(boxClass, {
            left: "-100%",
            duration: 1,
            delay: 3,
          });
      });
    },
    { scope: constainer }
  );

  return (
    <div>
      <div ref={constainer} className=" w-full h-[50vh] md:h-[84vh] relative bg-[url('slider-bg.jpg')] bg-cover bg-no-repeat overflow-hidden">
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className={`box${
              index + 1
            } absolute w-[90%] md:w-[60%] lg:w-[40%] h-3/4 left-[5%] md:left-[11%] top-14 leading-none`}
          >
            <h2 className="text-[8vw] md:text-[6vw] lg:text-[5vw] text-red-500 text-left font-['FontAwesome'] font-semibold w-full overflow-hidden">
              {announcement.heading}
            </h2>
            <h2 className="text-[8.5vw] md:text-[6.5vw] lg:text-[5.2vw] font-['FontAwesome'] font-semibold w-full overflow-hidden">
              {announcement.subheading}
            </h2>
            <p className="p-2 mt-4 font-sans tracking-widest text-[3vw] md:text-[2vw] lg:text-[1.1vw] leading-5 w-full overflow-hidden">
              {announcement.text}
            </p>
            <button className="outline-none px-6 md:px-8 py-2 md:py-3 mt-5 bg-blue-600 text-white font-bold">
              {announcement.buttonText}
            </button>
          </div>
        ))}

        <div className="absolute bottom-10 left-[10%] md:left-[18%] lg:left-[23%] flex gap-3">
          <li className={"list1 size-3 rounded-full bg-white list-none"}></li>
          <li className={"list2 size-3 rounded-full bg-white list-none"}></li>
          <li className={"list3 size-3 rounded-full bg-white list-none"}></li>
        </div>
      </div>

      <div className="w-full h-auto md:h-[70vh] bg-white flex items-center justify-start gap-8 md:gap-14 flex-col py-10 md:py-0">
        <div className="h-auto md:h-18 mt-5">
          <h1 className="font-serif font-semibold capitalize text-[5vw] md:text-[4vw] lg:text-[3.5vw] text-center">
            Why Shop With Us
          </h1>
          <p className="w-[60px] md:w-[80px] h-1 mx-auto md:ml-[12vw] bg-red-500 "></p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-white items-center justify-center">
          <div className="w-[80%] md:w-[300px] h-[150px] md:h-[200px] bg-[#002C3E] rounded-md flex text-white items-center justify-center gap-1 flex-col">
            <BestQuality />
            <h3 className="font-bold text-center">Best Quality</h3>
            <p className="text-center text-sm tracking-tighter font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[80%] md:w-[300px] h-[150px] md:h-[200px] bg-[#002C3E] rounded-md flex text-white items-center justify-center gap-1 flex-col">
            <FastDelivery />
            <h3 className="font-bold text-center">Fast Delivery</h3>
            <p className="text-center text-sm tracking-tighter font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[80%] md:w-[300px] h-[150px] md:h-[200px] bg-[#002C3E] rounded-md flex text-white items-center justify-center gap-1 flex-col">
            <FreeShipping />
            <h3 className="font-bold text-center">Free Shipping</h3>
            <p className="text-center text-sm tracking-tighter font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcemenspage;
