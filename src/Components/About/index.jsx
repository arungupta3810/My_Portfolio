import React from 'react'
import './style.scss'
import MyPic from '../../Assets/Images/pic.jpeg'
import { Row, Col } from 'antd'
import { motion, transform } from "framer-motion"
import {SlideUpWhenVisible} from '../CommonHelper/helperComponents'

const About = () => {
  return (
    <SlideUpWhenVisible>
    <Row gutter={24} className='about'>
      <Col md={14} xs={24} className="left">
        <p>⚡ About Me</p>
        <span>Hi, I'm Arun Kumar Gupta, a software engineer with a deep-rooted passion for technology since childhood. My journey with computers started early, and it has fueled my drive to create impactful digital solutions.</span><br /><br />
        <span>Specializing in <span>React.js</span>, I bring a wealth of experience in <span> Next.js, Node.js, Express.js, HTML, CSS, and JavaScript</span>,
          crafting dynamic and responsive web applications.My early work with Spring Boot has also enriched my back-end development skills,
          making me a versatile full-stack developer.</span><br /><br />
        <span>I'm committed to building seamless user experiences and always eager to learn and contribute to innovative projects that
          push the boundaries of web development.</span><br /><br />
        <span>Beyond the code, you'll often find me on the football field, cricket pitch, or at the gym, where I channel my energy and passion into staying active.</span>
      </Col>
      <Col md={10} xs={24} className="right">
        {/* <img src={MyPic} alt="my picture" /> */}
        <motion.img
            src={MyPic}
            alt="My Picture"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
            whileHover={{ scale: 1.1}}
            className="my-picture"
            />
      </Col>
    </Row>
    {/* </div> */}
    </SlideUpWhenVisible>
  )
}

export default About