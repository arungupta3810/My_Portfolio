import { MailOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined, ProfileOutlined, InstagramOutlined } from '@ant-design/icons';
import ResumeFile from '../../Assets/Resume/Arun_Gupta.pdf'

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

export const projectList = [
    {
      id: 1,
      name: "EuroBuddy AI Powered Chat",
      link: "https://eurobuddy.eurokidsindia.com/",
      award: true,
      technology: "React Js",
      Description: 'I developed frontend of this project during a hackathon and received an award for it from Lighthouse Learning Private Limited.'
    },
    {
      id: 2,
      name: "Argus Web Application",
      link: "https://es.lighthouse-learning.com/",
      award: false,
      technology: "React Js",
      Description: 'I’m currently working as a frontend developer on this web application, which is a learning management system for Argus.'
    },
    {
      id: 3,
      name: "Homebuddy Web Application",
      link: "https://eurokids.lighthouse-learning.com/",
      award: false,
      technology: "React Js",
      Description: 'I’m currently working as a frontend developer on this web application, which is a learning management system for Homebuddy.'
    },
    {
        id: 4,
        name: "Argus Mobile Application",
        link: "",
        award: false,
        technology: "React Native",
        Description: 'I have worked on this project as a frontend developer, which is learning management system for mobile application for argus.'
    },
    {
      id: 5,
      name: "Homebuddy Mobile Application",
      link: "",
      award: false,
      technology: "React Native",
      Description: 'I have worked on this project as a frontend developer, which is learning management system for mobile application for homebuddy'
    },
    {
        id: 6,
        name: "Kangaroo kids Website & Microsites & Control Panel",
        link: "",
        award: false,
        technology: "React Js",
        Description: 'I had worked on this project as a frontend developer, which is prek website for kangaroo kids, having multiple microsites and other project is control panel from which we could change the contents of every microsites dynamically.'
    }
  ]

  export const technologyFilter = [
    {
        id: 1,
        label: "All",
        value: "All"
    },
    {
        id: 1,
        label: "React Js",
        value: "React Js"
    },
    {
        id: 1,
        label: "React Native",
        value: "React Native"
    }
  ]