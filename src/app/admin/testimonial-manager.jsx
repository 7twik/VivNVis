"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"


export function TestimonialManager() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [newTestimonial, setNewTestimonial] = useState({
    Url: "",
    Name: "",
    Message: "",
    Designation: "",
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/test")
      const data = await response.json()
      setTestimonials(data.data)
    } catch (error) {
      toast.error("Failed to fetch testimonials")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/test`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      console.log("RESPONSE",response);
      if (response.ok) {
        setTestimonials(testimonials.filter((t) => t.Name !== id))
        alert("Testimonial deleted successfully")
        window.location.reload();
      } else {
        throw new Error("Failed to delete")
      }

    } catch (error) {
      toast.error("Failed to delete testimonial")
    }
  }

  const fiximg = () => {
    if(newTestimonial.Url.includes("drive.google.com")&&!(newTestimonial.Url.includes("https://drive.google.com/uc?export=view&id="))){
    const RAW_URL1 = newTestimonial.Url.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    const fixedURL = `https://drive.google.com/uc?export=view&id=${IMAGE_ID}`;
    const newdd={Url:fixedURL,Name:newTestimonial.Name,Message:newTestimonial.Message,Designation:newTestimonial.Designation}
    return newdd;
    }
    return newTestimonial;
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const subd=fiximg();
      const response = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subd),
      })

      if (response.ok) {
        const data = await response.json()
        setTestimonials([...testimonials, data])
        setNewTestimonial({ url: "", name: "", message: "", designation: "" })
        alert("Testimonial added successfully")
        window.location.reload();
      } else {
        throw new Error("Failed to add")
      }
    } catch (error) {
      toast.error("Failed to add testimonial")
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-8">
      <h1 className="text-2xl font-semibold">Testimonial Manager</h1>
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Add New Testimonial</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="url" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                id="url"
                value={newTestimonial.Url}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, Url: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={newTestimonial.Name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, Name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="designation" className="text-sm font-medium">
                Designation
              </label>
              <Input
                id="designation"
                value={newTestimonial.Designation}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, Designation: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={newTestimonial.Message}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, Message: e.target.value })}
                required
              />
            </div>
            <Button type="submit"  className="bg-white border-2 border-gray-400 text-black hover:bg-black hover:text-white">Add Testimonial</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <h2 className="text-xl font-semibold">Existing Testimonials</h2>

        {(testimonials.length==0||testimonials==null ||testimonials==undefined)?<></>:testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="pt-6 flex justify-between items-start">
              <div className="grid gap-2">
                <Image
                  src={testimonial.Url || "/placeholder.svg"}
                  alt={testimonial.Name}
                  className="w-16 h-16 rounded-full object-cover"
                  width={64}
                  height={64}
/>
                <h3 className="font-semibold">{testimonial.Name}</h3>
                <p className="text-sm text-gray-500">{testimonial.Designation}</p>
                <p className="text-sm">{testimonial.Message}</p>
              </div>
              <Button variant="destructive" size="icon" onClick={() => handleDelete(testimonial.Name)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

