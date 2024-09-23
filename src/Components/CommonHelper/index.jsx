import { MailOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined, ProfileOutlined, InstagramOutlined } from '@ant-design/icons';
import ResumeFile from '../../Assets/Resume/Arun_Kumar_Gupta.pdf'

const LIGHT = 'light'
const DARK  = 'dark'

export const themeDecider = () => {
    const timeHourIn24 =  new Date()?.getHours()
    if(timeHourIn24  >= 8 && timeHourIn24 < 18) {
        // return LIGHT
        return DARK
    }
    else{
        return DARK
    }
}

export  const contactMedia = [
    {
        id: 1,
        name: 'Github',
        url: 'https://github.com/arungupta3810',
        icon: <GithubOutlined />,
        highlight: false
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arun-gupta-148872194/',
        icon: <LinkedinOutlined />,
        highlight: false
    },
    {
        id: 3,
        name: 'Email',
        url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRmTpGwGrxrDjKZQmssdpSDTGcKxqVPBPPNxcppdVvmLkRfFkGDnLxWpxNhZMJDdWVZtZBB',
        icon: <MailOutlined />,
        highlight: false
    },
    {
        id: 4,
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send/?phone=%2B918652864081&text&type=phone_number&app_absent=0',
        icon: <WhatsAppOutlined />,
        highlight: false
    },
    {
        id: 5,
        name: 'Resume',
        url: ResumeFile,
        icon: <ProfileOutlined />,
        highlight: true
    },
    {
        id: 5,
        name: 'Instagram',
        url: 'https://www.instagram.com/its_arunvijaygupta/',
        icon: <InstagramOutlined />,
        highlight: false
    }
]