import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../Assets/LottieFiles/404.json'
import './style.scss'

const PageNotFound = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

  return (
    <div className='page-not-found'>
        <h1>Page Not Found</h1>
        <Lottie options={defaultOptions}
        height={window.innerWidth > 767 ? 200 : 150}
        width={window.innerWidth > 767 ? 500 : window.innerWidth < 400 ? 320 : 380}
        />
        <a href='/'>Go back to the home page</a>
    </div>
  )
}

export default PageNotFound