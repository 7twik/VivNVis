

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import Image from "next/image"

export function LandingEditor() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/land")
      const data = await response.json()
      console.log("Landing DATA",data.data[0]);
      setData(data.data[0])
    } catch (error) {
      toast.error("Failed to fetch landing page data")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key, value) => {
    if (data) {
      setData({ ...data, [key]: value })
    }
  }
  const fixGoogle = (rawURL) => {
    const RAW_URL1 = rawURL.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/uc?export=view&id=${IMAGE_ID}`;
 };
  const fixvid = (rawURL) => {
    const RAW_URL1 = rawURL.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/uc?export=download&id=${IMAGE_ID}`;
  };
  const allfix = () => {
    var dup=data;
    for (let i = 1; i <= 12; i++) {
      const key = `im${i}`;
      if (data[key].includes("drive.google.com")&&!(data[key].includes("https://drive.google.com/uc?export=view&id="))) {
        const fixedURL = fixGoogle(data[key]);
        console.log("FIXED URL",fixedURL);
        dup[key]=fixedURL;
      }
    }
    for (let i = 1; i <= 3; i++) {
      const key = `vid${i}`;
      if (data[key].includes("drive.google.com")&&!(data[key].includes("https://drive.google.com/uc?export=view&id="))) {
        const fixedURL = fixvid(data[key]);
        console.log("FIXED URL",fixedURL);
        dup[key]=fixedURL;
      }
    }
    return dup;
  };
  const handleSubmit = async () => {
    try {

      console.log("DATA",data);
      const subd=allfix();
      const response = await fetch("/api/land", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subd),
      })
      console.log("RESPONSE",response);
      if (response.ok) {
        alert("Landing page data updated successfully")
        window.location.reload();
      } else {
        throw new Error("Failed to update")
      }
    } catch (error) {
      toast.error("Failed to update landing page data")
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <h1 className="text-2xl font-semibold">Landing Page Editor</h1>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">Videos</h2>
            {["vid1", "vid2", "vid3"].map((key) => (
              <div key={key} className="grid gap-2">
                <label htmlFor={key} className="text-sm  text-white font-medium">
                  {key.toUpperCase()}
                </label>
                <video src={data[key] == "DUMMY"? "./v1.mp4":data[key]} controls></video>
                <Input
                  id={key}
                  value={data ? data[key] : ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <h2 className="text-xl  text-white font-semibold">Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 12 }, (_, i) => `im${i + 1}`).map((key) => (
                <div key={key} className="grid gap-2">
                  <label htmlFor={key} className="text-sm  text-white font-medium">
                    {key.toUpperCase()}
                  </label>
                  <Image src={data[key]} alt={key} width={300} height={200} />
                  <Input
                    id={key}
                    value={data ? data[key] : ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSubmit}  className="bg-white border-2 border-gray-400 text-black hover:bg-black hover:text-white">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

