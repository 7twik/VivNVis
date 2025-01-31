"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"
import Image from "next/image"


const pages = ["wedding", "portfolioShoot", "streetPhotography","exhibitions","babyShoot","maternityShoot","commercialShoot","corporateShoot","propertyShoot","anniversaryShoot","birthday","riceCeremony"]

export function ImageManager() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPage, setSelectedPage] = useState("all")
  const [newImage, setNewImage] = useState({
    url: "",
    page: pages[0],
  })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      //i need to send body along with get request with axios

      const response = await fetch("/api/img")  

      const data = await response.json()
      setImages(data.data)
    } catch (error) {
      toast.error("Failed to fetch images")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (page,url) => {
    try {
      const response = await fetch(`/api/img`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page,url }),
      })

      console.log("RESPONSE",response);

      if (response.ok) {
        alert("Image deleted successfully")
        window.location.reload();
      } else {
        throw new Error("Failed to delete")
      }
    } catch (error) {
      toast.error("Failed to delete image")
    }
  }

  const fiximg = () => {
    if (newImage.url.includes("drive.google.com")&&!(newImage.url.includes("https://drive.google.com/uc?export=view&id="))) {

      const RAW_URL1 = newImage.url.split("/d/");
      const RAW_URL2 = RAW_URL1[1].split("/view");
      const IMAGE_ID = RAW_URL2[0];
      const fixedURL = `https://drive.google.com/uc?export=view&id=${IMAGE_ID}`;
      const dd={url:fixedURL,page:newImage.page}
      return dd;
    }
    return newImage;
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log("DATA",newImage);
      const newd=fiximg();
      const response = await fetch("/api/img", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newd),
      })

      if (response.ok) {
        const data = await response.json()
        setImages([...images, data])
        setNewImage({ url: "", page: pages[0] })
        alert("Image added successfully")
        window.location.reload();
      } else {
        throw new Error("Failed to add")
      }
    } catch (error) {
      toast.error("Failed to add image")
    }
  }

  const filteredImages = selectedPage === "all" ? images : images.filter((img) => img.page === selectedPage)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-8">
      <h1 className="text-2xl font-semibold">Image Manager</h1>
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="url" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                id="url"
                value={newImage.url}
                onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="page" className="text-sm font-medium">
                Page
              </label>
              <Select value={newImage.page} onValueChange={(value) => setNewImage({ ...newImage, page: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a page" />
                </SelectTrigger>
                <SelectContent>
                  {pages.map((page) => (
                    <SelectItem key={page} value={page}>
                      {page}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" 
            className="bg-white border-2 border-gray-400 text-black hover:bg-black hover:text-white">Add Image</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Image Gallery</h2>
          <Select value={selectedPage} onValueChange={setSelectedPage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pages</SelectItem>
              {pages.map((page) => (
                <SelectItem key={page} value={page}>
                  {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(filteredImages==null||filteredImages==undefined||filteredImages.length==0)?<></>:filteredImages.map((image) => (
            <Card key={image.id}>
              <CardContent className="pt-6">
                <div className="relative">
                  <Image
                    src={image.url || "/file.svg"}
                    alt={`Image for ${image.page}`}
                    className="w-full aspect-video object-cover rounded-lg"
                    width={300}
                    height={200}
                 />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="bg-black absolute top-2 right-2"
                    onClick={() => handleDelete(image.page,image.url)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Page: {image.page}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

