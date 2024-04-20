import Activities from "@/components/activities/Activities";
import Baithaks from "@/components/activities/Baithaks";
import Brunch from "@/components/activities/Brunch";
import Experience from "@/components/activities/Experience";
import Neighbourhood from "@/components/activities/Neighbourhood";
import ImageSlider from "@/components/common/ImageSlider";
import Exp from "../../public/experince/exp.jpg";
import HeroSection from "@/components/common/HeroSection";
export default function Page() {
  return (
    <>
      <ImageSlider
        
        images={[Exp]}
        text={`Experiences & Activities`}
        des={`Indulge in the nostalgic colors of the medieval traditions of Mehman Nawazi and Mehfils through our specially curated cultural experience at Kathika : Cultural Centre and Museum.`}
        des1={[
          <p className="md:text-[24px] text-[16px] md:text-center text-justify" key='as'>
            Delve into the realm of{" "}
            <span className="font-bold italic">“Purani Dilli ki Tehzeeb”</span>
          </p>,
        ]}
      />
      <HeroSection
       
        heading={`Experiences & Activities`}
        des1={`Indulge in the nostalgic colors of the medieval traditions of Mehman Nawazi and Mehfils through our specially curated cultural experience at Kathika : Cultural Centre and Museum.`}
        des2={[
          <p className="md:text-[24px] text-[16px] md:text-center text-justify" key='as'>
            Delve into the realm of{" "}
            <span className="font-bold italic">“Purani Dilli ki Tehzeeb”</span>
          </p>,
        ]}
      />
      <Experience />
      <Brunch />
      <Baithaks />
      <Neighbourhood />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Experiences & Activities",
  };
}
