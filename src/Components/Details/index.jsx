import React from 'react'
import './style.scss'
import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const Details = () => {
    const contactMedia = [
        {
            id: 1,
            name: 'Github',
            url: '',
            icon: <MailOutlined />
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: '',
            icon: <LinkedinOutlined />
        },
        {
            id: 1,
            name: 'Email',
            url: '',
            icon: <GithubOutlined />
        }
    ]
    return (
        <div className='details'>
            <p className='heading dark'>Hey there!, I'm-</p>
            <h1>Arun Kumar Gupta.</h1>
            <p>Software Engineer. <span>A self-taught developer with an <br />
                interest in Computer Science.</span></p>
            <span>🚀 Currently specializing in Frontend (React / Next.js)</span>
            <br />
            <span>⚡Frontend Engineer at <span>Lighthouse Learning Private Limited</span></span>
            <div className='contact-details'>
                {contactMedia?.map((media) =>
                    <div className="contact-media">
                        <span>{media?.icon}{' '}{media?.name}</span>
                    </div>)}
            </div>
        </div>
    )
}

export default Details