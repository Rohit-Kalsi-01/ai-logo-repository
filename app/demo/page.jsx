import Image from "next/image";

const images = [
     "/Image/img13.png",
     "/Image/img12.png",
  "/Image/img11.png",
  "/Image/img1.png",
  "/Image/img2.png",
  "/Image/img3.png",
  "/Image/img4.png",
  "/Image/img5.png",
  "/Image/img6.png",
  "/Image/img7.png",
  "/Image/img8.png",
  "/Image/img9.png",

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