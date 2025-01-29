"use client"
import Hero from './Hero'
import React, { useEffect, useState } from 'react'
import { NavBar } from './Navbar'
import { Desc } from './Desc'
const Home = ({params}) => {
    const { service } = params
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)
    const getd=async()=>{
      const response = await fetch("/api/img")
      const dataa = await response.json()
      console.log("LANDING",dataa.data[0]);
      const arr=dataa.data.filter((item)=>item.page===service)

      await setData(arr)
      setLoading(false)
    }
    useEffect(() => {
      getd()
    }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading&&<>
        <NavBar/>
        <Hero service={service} />
        <Desc datd={data} service={service} />
        </>}
    </div>
  )
}

export default Home