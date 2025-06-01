"use client"

import { useState, useEffect, useRef } from "react"
import "./styles/mascot.css"

const Mascot = ({ onClick }) => {
  const [isWaving, setIsWaving] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isTalking, setIsTalking] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const blinkTimerRef = useRef(null)
  const waveTimerRef = useRef(null)

  // Handle random blinking
  useEffect(() => {
    const startBlinkInterval = () => {
      // Random blink every 2-6 seconds
      const blinkInterval = Math.random() * 4000 + 2000
      blinkTimerRef.current = setTimeout(() => {
        setIsBlinking(true)
        setTimeout(() => {
          setIsBlinking(false)
          startBlinkInterval()
        }, 200)
      }, blinkInterval)
    }

    startBlinkInterval()

    // Random wave every 8-15 seconds
    const startWaveInterval = () => {
      const waveInterval = Math.random() * 7000 + 8000
      waveTimerRef.current = setTimeout(() => {
        setIsWaving(true)
        setTimeout(() => {
          setIsWaving(false)
          startWaveInterval()
        }, 1500)
      }, waveInterval)
    }

    startWaveInterval()

    return () => {
      clearTimeout(blinkTimerRef.current)
      clearTimeout(waveTimerRef.current)
    }
  }, [])

  const handleClick = () => {
    // Jump animation
    setIsJumping(true)
    setTimeout(() => setIsJumping(false), 500)

    // Talk animation
    setIsTalking(true)
    setTimeout(() => setIsTalking(false), 1000)

    // Call the onClick prop if provided
    if (onClick) onClick()
  }

  return (
    <div className="mascot-container cursor-pointer select-none" onClick={handleClick}>
      <div className={`mascot ${isJumping ? "jump" : ""}`}>
        {/* Body */}
        <div className="body">
          {/* Head */}
          <div className="head">
            {/* Eyes */}
            <div className="eyes">
              <div className={`eye left ${isBlinking ? "blink" : ""}`}>
                <div className="pupil"></div>
              </div>
              <div className={`eye right ${isBlinking ? "blink" : ""}`}>
                <div className="pupil"></div>
              </div>
            </div>

            {/* Beak */}
            <div className={`beak ${isTalking ? "talk" : ""}`}>
              <div className="beak-top"></div>
              <div className="beak-bottom"></div>
            </div>

            {/* Eyebrows */}
            <div className="eyebrows">
              <div className="eyebrow left"></div>
              <div className="eyebrow right"></div>
            </div>
          </div>

          {/* Arms */}
          <div className="arms">
            <div className={`arm left ${isWaving ? "wave" : ""}`}></div>
            <div className="arm right"></div>
          </div>

          {/* Feet */}
          <div className="feet">
            <div className="foot left"></div>
            <div className="foot right"></div>
          </div>
        </div>

        {/* Shadow */}
        <div className="shadow"></div>
      </div>
    </div>
  )
}

export default Mascot
