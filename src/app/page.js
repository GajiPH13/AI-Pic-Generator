import Banner from "@/components/Banner/Banner";
import NewArival from "@/components/NewArival/NewArival";
import TopGenPhotos from "@/components/TopGenPhotos/TopGenPhotos";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <NewArival></NewArival>
      <Banner></Banner>
      
      <TopGenPhotos></TopGenPhotos>
    </div>
  );
}
