import { motion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 24,
  direction = 'up',
  once = true,
  ...props
}) {
  const yOffset = direction === 'up' ? y : direction === 'down' ? -y : 0
  const xOffset = direction === 'left' ? y : direction === 'right' ? -y : 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
