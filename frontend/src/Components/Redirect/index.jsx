import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightOutlined } from '@ant-design/icons'
import './style.scss'

export const NEW_SITE_URL = 'https://arun-gupta.vercel.app'
const REDIRECT_SECONDS = 5

const Redirect = ({ to = NEW_SITE_URL, seconds = REDIRECT_SECONDS }) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    if (timeLeft <= 0) {
      // replace() keeps the old site out of the browser history,
      // so the back button doesn't bounce the visitor back here.
      window.location.replace(to)
      return
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, to])

  const displayUrl = to.replace(/^https?:\/\//, '')

  return (
    <div className="redirect">
      <motion.div
        className="redirect__card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="redirect__badge">
          <span className="redirect__dot" />
          New website is live
        </span>

        <h1 className="redirect__title">
          I've <em className="redirect__highlight">moved.</em>
        </h1>

        <p className="redirect__text">
          My portfolio has a fresh new home with updated projects and experience.
        </p>

        <a className="redirect__url" href={to}>{displayUrl}</a>

        <div className="redirect__progress">
          <motion.div
            className="redirect__progress-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: seconds, ease: 'linear' }}
          />
        </div>

        <span className="redirect__countdown">
          Redirecting in {Math.max(timeLeft, 0)}s
        </span>

        <a className="redirect__button" href={to}>
          Take me there now <ArrowRightOutlined />
        </a>
      </motion.div>
    </div>
  )
}

export default Redirect
