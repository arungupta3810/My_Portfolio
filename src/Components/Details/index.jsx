import React from 'react'
import './style.scss'
import { MailOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined, ProfileOutlined } from '@ant-design/icons';
import { themeDecider } from '../CommonHelper';
import ResumeFile from '../../Assets/Resume/Arun_Kumar_Gupta.pdf'

const Details = () => {
    
    const contactMedia = [
        {
            id: 1,
            name: 'Github',
            url: 'https://github.com/arungupta3810',
            icon: <GithubOutlined />
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/arun-gupta-148872194/',
            icon: <LinkedinOutlined />
        },
        {
            id: 3,
            name: 'Email',
            url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRmTpGwGrxrDjKZQmssdpSDTGcKxqVPBPPNxcppdVvmLkRfFkGDnLxWpxNhZMJDdWVZtZBB',
            icon: <MailOutlined />
        },
        {
            id: 4,
            name: 'Whatsapp',
            url: 'https://api.whatsapp.com/send/?phone=%2B918652864081&text&type=phone_number&app_absent=0',
            icon: <WhatsAppOutlined />
        },
        {
            id: 5,
            name: 'Resume',
            url: ResumeFile,
            icon: <ProfileOutlined />
        },
    ]

    return (
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
                    <a key={media?.id} href={media?.url} target='_blank'><div className={`contact-media ${themeDecider()}`}>
                        <span>{media?.icon}{' '}{media?.name}</span>
                    </div></a>)}
            </div>
        </div>
    )
}

export default Details