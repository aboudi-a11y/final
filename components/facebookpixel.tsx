'use client'
import { useEffect } from 'react'
import { initFacebookPixel } from '@/lib/fpixel'

export default function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel()
  }, [])
  return null
}
