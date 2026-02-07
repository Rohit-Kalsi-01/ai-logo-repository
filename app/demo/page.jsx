import Image from "next/image";

const images = [
     "/image/img13.png",
     "/image/img12.png",
  "/image/img11.png",
  "/image/img1.png",
  "/image/img2.png",
  "/image/img3.png",
  "/image/img4.png",
  "/image/img5.png",
  "/image/img6.png",
  "/image/img7.png",
  "/image/img8.png",
  "/image/img9.png",

]

export default function DemoPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Demo Generated Logos</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="border rounded-lg p-2 shadow-sm">
            <Image
              src={src}
              alt={`Demo Logo ${index + 1}`}
              width={400}
              height={400}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}