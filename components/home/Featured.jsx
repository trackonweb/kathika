"use client";
import React from "react";

import Brand1 from "../../public/brands/Traveller.png";
import Brand2 from "../../public/brands/vogue.png";
import Brand3 from "../../public/brands/IndiaToday.png";
import Brand4 from "../../public/brands/AD.png";
import Brand5 from "../../public/brands/LBB.png";

import Brand6 from "../../public/brands/theHindu.png";
import Brand7 from "../../public/brands/indianExpress.png";
import Brand8 from "../../public/brands/goodHomes 1.png";
import Brand9 from "../../public/brands/tripAdvisor.png";

import Brand10 from "../../public/brands/Ht.png";
import Brand11 from "../../public/brands/toi 1.png";
import Brand12 from "../../public/brands/patriot.png";
import Brand13 from "../../public/brands/mintLounge.png";
import Brand14 from "../../public/brands/authIndia.png";
import Brand15 from "../../public/brands/tribune.png";
import Brand16 from "../../public/brands/print.avif";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div>
      <div className="mb-10 mt-20  text-center px-4">
        <h1 className="md:text-[45px] text-[32px] font-Yeseva">
        Kathika was featured in ...
        </h1>
        <p className="md:text-[20px] text-[16px] ">
        Click to read and explore
        </p>
      </div>
      <div className=" bg-[#c8ae91] py-5">
        <Marquee pauseOnHover="true">
          <div>
            <Link href={"https://www.outlooktraveller.com/editors-picks/celebrating-people/in-conversation-with-atul-khanna-founder-of-kathika-delhi"}    target="_blank">
              {" "}
              <Image
                src={Brand1}
                alt={Brand1}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.vogue.in/content/kathika-cultural-centre-offers-a-glimpse-into-the-contemporary-mehmaan-nawazi-of-shahjahanabad`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand2}
                alt={Brand2}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.indiatoday.in/magazine/leisure/story/20230911-old-building-new-purpose-living-heritage-2429681-2023-09-01`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand3}
                alt={Brand3}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://www.architecturaldigest.in/story/a-restored-haveli-in-old-delhi-aims-to-revive-the-culture-of-courtyard-baithaks-kathika-cultural-centre-restoration/"}    target="_blank">
              {" "}
              <Image
                src={Brand4}
                alt={Brand4}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://lbb.in/delhi/kathika-old-delhi/"}    target="_blank">
              {" "}
              <Image
                src={Brand5}
                alt={Brand5}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>

          <div>
            <Link
              href={`https://www.thehindu.com/society/kathika-cultural-centre-in-old-delhi-celebrates-delhis-history-through-a-haveli-museum/article67097474.ece`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand6}
                alt={Brand6}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://indianexpress.com/article/lifestyle/art-and-culture/inside-kathika-cultural-centre-museum-haveli-old-delhi-8872891/
`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand7}
                alt={Brand7}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.thehindu.com/society/kathika-cultural-centre-in-old-delhi-celebrates-delhis-history-through-a-haveli-museum/article67097474.ece`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand8}
                alt={Brand8}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://www.tripadvisor.com/Attraction_Review-g304551-d26685037-Reviews-Kathika_Culture_Centre_Museum-New_Delhi_National_Capital_Territory_of_Delhi.html" }    target="_blank">
              {" "}
              <Image
                src={Brand9}
                alt={Brand9}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>

          <div>
            <Link
              href={`https://www.hindustantimes.com/cities/delhi-news/reviving-old-delhi-s-cultural-heritage-havelis-turned-into-vibrant-cultural-spaces-for-art-and-music-performances-101693160857984-amp.html#amp_tf=From%20%251%24s&aoh=17072040698664&referrer=https%3A%2F%2Fwww.google.com`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand10}
                alt={Brand10}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://m.timesofindia.com/entertainment/events/delhi/restored-haveli-turns-into-a-haven-of-art-for-world-heritage-week/articleshow/105496304.cms`}
              target="_blank"
            >
              <Image
                src={Brand11}
                alt={Brand11}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://thepatriot.in/culture/a-romance-with-the-past-a-delhi-museum-bringing-old-to-the-new-38808`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand12}
                alt={Brand12}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://lifestyle.livemint.com/how-to-lounge/art-culture/kathika-cultural-centre-art-space-shahjahanabad-old-delhi-111690790505097.html`}
              target="_blank"
            >
              {" "}
              <Image
                src={Brand13}
                alt={Brand13}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://authindia.com/newly-restored-haveli-turned-cultural-centre-kathika-in-old-delhi-offers-vintage-delicacies-of-shahjahanabad/"}    target="_blank">
              {" "}
              <Image
                src={Brand14}
                alt={Brand14}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://www.tribuneindia.com/news/features/haveli-heritage-restoration-efforts-in-old-delhi-offer-hope-608115"}    target="_blank">
              {" "}
              <Image
                src={Brand15}
                alt={Brand15}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
          <div>
            <Link href={"https://theprint.in/feature/around-town/hell-penetrated-my-heaven-old-delhi-havelis-crumbling-shahjahanabad-now-a-commercial-slum/1997420/"}    target="_blank">
            
              <Image
                src={Brand16}
                alt={Brand16}
                className="h-24 w-36 object-contain mr-9"
              />
            </Link>
          </div>
        </Marquee>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};

export default Featured;
