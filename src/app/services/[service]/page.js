"use client"
import Hero from './Hero'
import React, { useEffect, useState } from 'react'
import { NavBar } from './Navbar'
import { Desc } from './Desc'
import Loading from '@/app/Loading'
import { Footer } from '@/app/Footer'
const Home = ({params}) => {
    const { service } = params
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)
    const getd=async()=>{
      const response = await fetch("/api/img")
      const dataa = await response.json()
      console.log("LANDING",dataa.data[0]);
      console.log(service)
      const arr=await dataa.data.filter((item)=>(item.page.toLowerCase()===service.toLowerCase()))
      console.log(arr);
       setData(arr)
      setLoading(false)
    }
    useEffect(() => {
      getd()
    }, [])

  return (
    <div>
      {loading && <Loading />}
      {!loading&&<>
        <NavBar/>
        <Hero service={service} />
        <Desc datd={data} service={service} />
        <Footer />
        </>}
    </div>
  )
}

export default Home