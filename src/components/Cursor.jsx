import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`
      requestAnimationFrame(animate)
    }

    const onMouseEnter = () => setIsHovering(true)
    const onMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={`cursor-dot ${isHovering ? 'hovering' : ''}`} />
      <div ref={followerRef} className={`cursor-follower ${isHovering ? 'hovering' : ''}`} />
    </>
  )
}
