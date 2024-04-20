
import TeamMember from "@/components/team/TeamMember";
import TeamSlide from '../../public/team/teamhero.jpg'
import ImageSlider from "@/components/common/ImageSlider";
import HeroSection from "@/components/common/HeroSection";
export default function Page (){
    return(
        <>
        <ImageSlider images={[TeamSlide]} text={`The Team of Kathika Cultural Centre`}/>
        <HeroSection heading={`The Team of Kathika Cultural Centre`}/>
        <TeamMember/>
        </>
    )
}
export function generateMetadata(){
    return {
        title: "Our Team",
  
       
    }
  }