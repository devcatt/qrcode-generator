"use client"

import { useState } from "react"
import Image from "next/image"

export default function Page() {
  const btnClassShortcut = "border border-white p-2 m-2 rounded-2xl"

  const [data, setData] = useState("")
  const [pixel, setPixel] = useState("")
  const [pixels, setPixels] = useState("")
  const getQrCode = async () => {
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${pixels}`)
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="font-bold text-2xl">QR Code Generator</div>
      <div>
        <input type="text" placeholder="Enter text / website link..." className={btnClassShortcut} onChange={(e) => {setData(e.target.value)}} />
        <input type="text" placeholder="Enter pixel size (optional)" className={btnClassShortcut} onChange={(e) => {setPixels(`${e.target.value}x${e.target.value}`); setPixel(e.target.value)}} />
      </div>
      <Image 
        src={`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${pixels}`}
        alt="The generated QR Code. If you see this there's a chance you didn't enter text or a website link."
        width={Number(pixel) || 200}
        height={Number(pixel) || 200}
        className="m-2"
      />
    </main>
  )
}