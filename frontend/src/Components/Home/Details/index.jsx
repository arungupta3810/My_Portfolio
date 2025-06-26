import React from 'react'
import './style.scss'
import { contactMedia, themeDecider } from '../../CommonHelper';
import { SlideUpWhenVisible } from '../../CommonHelper/helperComponents';

const Details = () => {
    const handleClick = async (name) => {
        const payload = {
            name: name,
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }),
            time: new Date().toLocaleTimeString().replace(/:\d\d /, ' ')
        };
        try {
            const res = await fetch(process.env.REACT_APP_API_URL + '/link-analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            console.log('link analytics capture', result);
        } catch (error) {
            console.log('Something went wrong!!!', error);
        }
    }

    return (
        <SlideUpWhenVisible>
        <div className='details'>
            <p className={`heading ${themeDecider()}`}>Hey there!, I'm-</p>
            <h1>Arun Gupta.</h1>
            <p>Software Engineer. <span>I'm a self-taught developer driven<br />
                by a passion for building seamless, user-focused web experiences.</span></p>
            <span>🚀 Currently specializing in Frontend (React / Next.js)</span>
            <br />
            <span>⚡Software Engineer at <span onClick={()=>window.open("https://www.lighthouse-learning.com/")}>Lighthouse Learning Private Limited</span></span>
            <div className='contact-details'>
                {contactMedia?.filter(e=>!(e?.highlight))?.map((media) =>
                    <a key={media?.id} href={media?.url} target='_blank' onClick={()=>handleClick(media?.name)}><div className={`${media?.highlight && 'highlight'} contact-media ${themeDecider()}`}>
                        <span>{media?.icon}{' '}{media?.name}</span>
                    </div>
            </a>)}
            <span className='resume-block'>Download or watch my Resume below
                  {contactMedia?.filter(e=>(e?.highlight))?.map((media) =>
                  <a key={media?.id} href={media?.url} target='_blank'>
                    <div className={`${media?.highlight && 'highlight'} contact-media ${themeDecider()}`} onClick={()=>handleClick(media?.name)}>
                        <span>{media?.icon}{' '}{media?.name}</span>
                    </div>
                </a>)}
                </span>
                </div>
        </div>
        </SlideUpWhenVisible>
    )
}

export default Details