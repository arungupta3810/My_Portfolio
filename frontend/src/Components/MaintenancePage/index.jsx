import React from 'react'
import './style.scss'
import Lottie from 'react-lottie';
import * as animationData from '../../Assets/LottieFiles/workinprogress.json'

const Maintenance = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="maintenance">
      <h1>Work in Progress</h1>
      <Lottie options={defaultOptions}
              height={window.innerWidth > 767 ? 300 : 220}
              width={window.innerWidth > 767 ? 500 : window.innerWidth < 400 ? 280 : 280}
              />
      <p>Maintance and updates are coming soon.</p>
      </div>
  )
}

export default Maintenance