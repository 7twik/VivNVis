"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LandingEditor } from "./landing-editor"
import { TestimonialManager } from "./testimonial-manager"
import { ImageManager } from "./image-manager"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs defaultValue="images" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="landing">Landing Page</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>

        <TabsContent value="landing">
          <LandingEditor />
        </TabsContent>

        <TabsContent value="testimonials">
          <TestimonialManager />
        </TabsContent>

        <TabsContent value="images">
          <ImageManager />
        </TabsContent>
      </Tabs>
    </div>
  )
}

