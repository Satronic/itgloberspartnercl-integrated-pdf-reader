/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

type PdfReaderProps = {
  pdfUrl: string
  width: number
  height: number
}

const PdfReader = ({ pdfUrl, width, height }: PdfReaderProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <div className="flex justify-center">
        <object
          data={pdfUrl}
          type="application/pdf"
          width={width}
          height={height}
        >
          Este navegador no soporta archivos PDF
        </object>
      </div>
    )
  )
}

export default PdfReader
