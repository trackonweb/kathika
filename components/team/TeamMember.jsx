import Image from "next/image";
import React from "react";
import Lovely1 from "../../public/team/lovely1.png";
import Lovely2 from "../../public/team/lovely (2).png";
import Lovely3 from "../../public/team/4.png";
import Lovely4 from "../../public/team/lovely (4).png";
import Lovely5 from "../../public/team/lovely5.png";
import Lovely6 from "../../public/team/founder.png";
import Lovely7 from "../../public/team/3.png";
import Lovely8 from "../../public/team/1.jpeg";

const list = [
  {
    title: "Atul Khanna",
    post: "Founder & Curator",
    img: Lovely6,
  },
  {
    title: "Ashna Khanna",
    post: "Director",
    img: Lovely4,
  },
 {
    title: "Javeria Tanveer",
    post: "Heritage Education Specialist",
    img: Lovely2,
  },
  {
    title: "Lovely Bhadra",
    post: "Research & Content Manager",
    img: Lovely1,
  },
 

  {
    title: "David",
    post: "Relations Manager",
    img: Lovely5,
  },
  {
    title: "Atul Khanna",
    post: "Founder & Curator",
    img: Lovely5,
  },
  {
    title: "David",
    post: "Relations Manager",
    img: Lovely5,
  },
  {
    title: "Arun Molasi",
    post: "Social Media Consultant",
    img: Lovely5,
  },
];

const TeamMember = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely6}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]">Atul Khanna</p>
              <p className="md:text-[20px] text-[]">Founder & Curator</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely4}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Ashna Khanna</p>
              <p className="md:text-[20px] text-[]16px">Director</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10 py-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely1}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4 ">
              <p className="md:text-[25px] text-[]16px">Lovely Bhadra</p>
              <p className="md:text-[20px] text-[]16px ">Research & Content Manager</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely2}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4 ">
              <p className="md:text-[25px] text-[]16px">Javeria Tanveer</p>
              <p className="md:text-[20px] text-[]16px">Heritage Education Specialist</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely5}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">David</p>
              <p className="md:text-[20px] text-[]16px px-3">Relations Manager</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white">
            <div>
              <Image
                src={Lovely3}
                alt="Member"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Meghna Mitra</p>
              <p className="md:text-[20px] text-[]16px">Museum Assistant</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely7}
                alt="Faisal"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Faisal Saleem
</p>
              <p className="md:text-[20px] text-[]16px">Museum Educator</p>
            </div>
          </div>
          <div className="bg-white">
            <div>
              <Image
                src={Lovely8}
                alt="Faisal"
                className="h-[350px] w-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 py-4">
              <p className="md:text-[25px] text-[]16px">Arun Molasi
</p>
              <p className="md:text-[20px] text-[]16px">Social Media Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
