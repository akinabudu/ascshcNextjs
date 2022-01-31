import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../public/images/asc_logo_1.png";

export default function Home() {
  return (
    <div className=" flex  flex-col justify-top bg-fuchsia-800/70  pt-40 h-screen  ">
      <div className="text-center">
        <Image
          objectfit="cover"
          src={logo1}
          alt="logo"
          width={100}
          height={100}
          priority="true"
        />
      </div>
      <div className="text-white text-center ">
        <h1 className="text-xl font-light ">
          All Saints' Church Supplementary Hymns & Choruses
        </h1>
        <ProgressBar />
        <button className="text-fuchsia-900 py-1 px-5 bg-white rounded-md">
          <Link href={"/hymnList"}>Proceed</Link>
        </button>
      </div>
    </div>
        
     
  );
}