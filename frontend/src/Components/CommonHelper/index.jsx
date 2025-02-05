import { MailOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined, ProfileOutlined, InstagramOutlined } from '@ant-design/icons';
import ResumeFile from '../../Assets/Resume/Arun_Gupta.pdf'
import Argus from "../../Assets/Images/argus.svg"
import Homebuddy from "../../Assets/Images/homebuddy.svg"
import Eurobuddy from "../../Assets/Images/eurobuddy.svg"
import Kangaroo from "../../Assets/Images/kangaroo.svg"

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

const email = 'arungupta3810@gmail.com';
const subject = '';

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
        url: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`,
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
      logo: Eurobuddy,
      live: true,
      name: "EuroBuddy AI Powered Chat",
      link: "https://eurobuddy.eurokidsindia.com/",
      award: true,
      technology: "React Js",
      Description: 'I developed frontend of this project during a hackathon and received an award for it from Lighthouse Learning Private Limited.',
      knowMoreDescription: "<span>Eurobuddy is an AI-powered chatbot web application designed to assist customers with a wide range of queries.It provides real-time support for:</span><ul><li>Order status updates</li><li>Information about our websites and applications</li><li>Step-by-step troubleshooting guidance</li><li>Details about our company, products, and services</li></ul><span>Integrated into the EPMS application as an embedded chatbot, Eurobuddy enhances user experience by offering seamless assistance.</span><span>Additionally, it is a <span class='green'>Progressive Web Application (PWA)</span>, enabling offline support and allowing users to download and use it as a standalone application on their system.</span>"
    },
    {
      id: 2,
      logo: Argus,
      live: true,
      name: "Argus Web Application",
      link: "https://es.lighthouse-learning.com/",
      award: false,
      technology: "React Js",
      Description: 'I’m currently working as a frontend developer on this web application, which is a learning management system for Argus.',
      knowMoreDescription: "<span>Argus is a web-based learning platform developed by Lighthouse Learning to support holistic and hybrid education for students, parents, and teachers.</span><p>Argus Student</p><span>Offers digital books, videos, quizzes, worksheets, and interactive activities aligned with NEP 2020 for experiential learning.</span><p>Argus Teacher</p><span>Provides lesson plans, assessments, and real-time student tracking to streamline teaching.</span>  <p>Argus Parent</p><span>Enables parents to monitor their child's progress through analytics and enhances parent-teacher collaboration.</span><span>As a developer, I contributed to building this web application, ensuring a seamless learning experience.</span>"
    },
    {
      id: 3,
      logo: Homebuddy,
      live: true,
      name: "Homebuddy Web Application",
      link: "https://eurokids.lighthouse-learning.com/",
      award: false,
      technology: "React Js",
      Description: 'I’m currently working as a frontend developer on this web application, which is a learning management system for Homebuddy.',
      knowMoreDescription: "<span>Home Buddy is designed for children and their parents to facilitate learning and overall development. It enhances learning efficiency and engagement while keeping parents informed about their child’s progress.</span><span>It offers daily engagement with learners, delivering the <strong>EuroKids - EUNOIA</strong> curriculum in an interactive digital format. The application begins with a personalized welcome, displaying the child's name.</span><span>Key Features:</span><p>The Play Section</p><span>Includes interactive games focusing on Language & Literacy, Mathematics, and Scientific Thinking. Content is taught over five days to reinforce understanding and allow for recapitulation.</span><p>The See Section</p><span>Offers interactive stories, audiovisuals, and teacher-recorded sessions for at-home recapitulation. These enhance imagination, creativity, brain development, and communication skills.</span><p>The Do Section</p><span>Includes <strong>EuroMusic</strong> and <strong>Mindful+</strong> programs with action-based songs, yoga, and fitness activities to promote physical and mental well-being. DIY activities and worksheets provide additional practice.</span><p>Parent Corner</p><ul><li><strong>Smart Parenting:</strong> Weekly articles with parenting tips and newsletters.</li><li><strong>Resources Required:</strong> Weekly materials list for activities.</li><li><strong>Home Connect:</strong> Short messages about home assignments, worksheets, and activity instructions.</li></ul><span>As a developer, I contributed to building this web application, ensuring a seamless and interactive learning experience.</span>"
    },
    {
      id: 4,
      logo: Argus,
      live: true,
      name: "Argus Mobile Application",
      link: "https://play.google.com/store/apps/details?id=com.lighthouse.argus&hl=en_IN",
      award: false,
      technology: "React Native",
      Description: 'I have worked on this project as a frontend developer, which is learning management system for mobile application for argus.',
      knowMoreDescription: "<span>Argus App is a web-based learning platform developed by Lighthouse Learning to support holistic and hybrid education for students, parents, and teachers.</span><p>Argus Student</p><span>Offers digital books, videos, quizzes, worksheets, and interactive activities aligned with NEP 2020 for experiential learning.</span><p>Argus Teacher</p><span>Provides lesson plans, assessments, and real-time student tracking to streamline teaching.</span>  <p>Argus Parent</p><span>Enables parents to monitor their child's progress through analytics and enhances parent-teacher collaboration.</span><span>As a developer, I contributed to building this web application, ensuring a seamless learning experience.</span>"
    },
    {
      id: 5,
      logo: Homebuddy,
      live: true,
      name: "Homebuddy Mobile Application",
      link: "https://play.google.com/store/apps/details?id=com.homebuddyLearning&hl=en_IN",
      award: false,
      technology: "React Native",
      Description: 'I have worked on this project as a frontend developer, which is learning management system for mobile application for homebuddy',
      knowMoreDescription: "<span>Home Buddy App is designed for children and their parents to facilitate learning and overall development. It enhances learning efficiency and engagement while keeping parents informed about their child’s progress.</span><span>It offers daily engagement with learners, delivering the <strong>EuroKids - EUNOIA</strong> curriculum in an interactive digital format. The application begins with a personalized welcome, displaying the child's name.</span><span>Key Features:</span><p>The Play Section</p><span>Includes interactive games focusing on Language & Literacy, Mathematics, and Scientific Thinking. Content is taught over five days to reinforce understanding and allow for recapitulation.</span><p>The See Section</p><span>Offers interactive stories, audiovisuals, and teacher-recorded sessions for at-home recapitulation. These enhance imagination, creativity, brain development, and communication skills.</span><p>The Do Section</p><span>Includes <strong>EuroMusic</strong> and <strong>Mindful+</strong> programs with action-based songs, yoga, and fitness activities to promote physical and mental well-being. DIY activities and worksheets provide additional practice.</span><p>Parent Corner</p><ul><li><strong>Smart Parenting:</strong> Weekly articles with parenting tips and newsletters.</li><li><strong>Resources Required:</strong> Weekly materials list for activities.</li><li><strong>Home Connect:</strong> Short messages about home assignments, worksheets, and activity instructions.</li></ul><span>As a developer, I contributed to building this web application, ensuring a seamless and interactive learning experience.</span>"
    },
    {
      id: 6,
      logo: Kangaroo,
      live: false,
      name: "Kangaroo kids Website & Microsites & Control Panel",
      link: "",
      award: false,
      technology: "React Js",
      Description: 'I had worked on this project as a frontend developer, which is prek website for kangaroo kids, having multiple microsites and other project is control panel from which we could change the contents of every microsites dynamically.',
      knowMoreDescription: "<p>Kangaroo Kids Preschool Website</p><span>The Kangaroo Kids website was a dynamic preschool platform with multiple microsites representing different school centers.</span> <span>Key Features:</span><ul><li>Testimonials, gallery, and location details</li><li>Comprehensive curriculum details</li><li>Awards history of Kangaroo Kids</li><li>Lead capture forms integrated with CRM</li><li>Multiple landing pages & campaign pages</li><li>News, blogs, and course schedules with duration</li></ul><span>The most powerful aspect of the website and microsites was their <strong>fully dynamic nature</strong>, allowing seamless content management.</span><p>Control Panel</p><span>The Control Panel was an admin dashboard that allowed dynamic content management across all microsites, making each center unique.</span><span>Key Features:</span><ul><li>Manage and update content dynamically for each microsite</li><li>Approval flow system: Content updates required admin approval before going live</li><li>Dashboard with components to manage different sections of the website</li></ul><span>As a developer, I contributed to building this platform, ensuring a scalable and efficient digital experience.</span>"
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