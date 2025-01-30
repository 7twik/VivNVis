"use client"
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import Hero from "./Hero";
import { Services } from "./Services";
import { Testimonial } from "./Testimonial";
import { VideoShowcase } from "./VideoShowcase";
import Loading from "./Loading";

export default function Home() {
  const [data,setData]=useState()
  const [loading, setLoading] = useState(true)
  const getd=async()=>{
    const response = await fetch("/api/land")
    const dataa = await response.json()
    console.log("LANDING",dataa.data[0]);
    await setData(dataa.data[0])
    setLoading(false)
  }
  useEffect(() => {
    getd()
  }, [])
  return (
    <div>
      {loading && <Loading />}
      {!loading&&<>
        <Hero vide={data.vid1} />
        <Services data={data} />
        <VideoShowcase vid1={data.vid2} vid2={data.vid3} />
        <Testimonial />
        <Footer />
      </>}
    </div>
  );
}
