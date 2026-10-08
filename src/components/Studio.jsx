import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function Studio() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  const onMove = (e) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setPos({ x, y })
  }

  const shift = (amount) =>
    reduce
      ? undefined
      : {
          transform: `translate(${pos.x * amount}px, ${pos.y * amount}px)`,
        }

  return (
    <div
      className="studio"
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      aria-hidden="true"
    >
      <span className="studio__mark">Composition</span>
      <div className="studio__frame studio__frame--a" style={shift(10)}>
        <h3>Interface</h3>
        <p>How it looks, reads, and behaves when someone actually uses it.</p>
      </div>
      <div className="studio__frame studio__frame--b" style={shift(-14)}>
        <h3>System</h3>
        <p>APIs, state, and the engineering that keeps the interface honest.</p>
      </div>
      <div className="studio__frame studio__frame--c" style={shift(8)}>
        <h3>Intent</h3>
        <p>What the product is for — before the stack is chosen.</p>
      </div>
    </div>
  )
}
