import React from 'react'
import './style.scss'
import { contactMedia, themeDecider } from '../CommonHelper';
import { SlideUpWhenVisible } from '../CommonHelper/helperComponents';

const Details = () => {
    return (
        <SlideUpWhenVisible>
        <div className='details'>
            <p className={`heading ${themeDecider()}`}>Hey there!, I'm-</p>
            <h1>Arun Kumar Gupta.</h1>
            <p>Software Engineer. <span>A self-taught developer with an <br />
                interest in Computer Science.</span></p>
            <span>🚀 Currently specializing in Frontend (React / Next.js)</span>
            <br />
            <span>⚡Frontend Engineer at <span onClick={()=>window.open("https://www.lighthouse-learning.com/")}>Lighthouse Learning Private Limited</span></span>
            <div className='contact-details'>
                {contactMedia?.map((media) =>
                    <a key={media?.id} href={media?.url} target='_blank'><div className={`${media?.highlight && 'highlight'} contact-media ${themeDecider()}`}>
                        <span>{media?.icon}{' '}{media?.name}</span>
                    </div>
            </a>)}
            </div>
        </div>
        </SlideUpWhenVisible>
    )
}

export default Details