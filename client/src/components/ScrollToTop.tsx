"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// This component can be added to your App.tsx to ensure all page changes scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return null
}

export default ScrollToTop

