import React, { useEffect } from 'react'
import './style.scss'
import { Link, useNavigate, useParams } from "react-router-dom";
import { themeDecider } from '../CommonHelper';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Parse from "html-react-parser"
import PageNotFound from '../PageNotFound';
import Argus from "../../Assets/Images/argus.svg"
import Homebuddy from "../../Assets/Images/homebuddy.svg"
import Eurobuddy from "../../Assets/Images/eurobuddy.svg"
import Kangaroo from "../../Assets/Images/kangaroo.svg"

const ProjectDetailTemplate = () => {
  const projectList = JSON.parse(localStorage.getItem('projects'))
  const { projectId } = useParams();
  const navigate = useNavigate();
  const Project = projectList?.find((e) => e?.id === Number(projectId));

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  const imageMapper = (name) => {
    switch(name){
      case 'Argus':
        return Argus;
      case 'Homebuddy':
        return Homebuddy;
      case 'Kangaroo':
        return Kangaroo;
      case 'Eurobuddy':
        return Eurobuddy;
      default:
        return Argus
    }
  }

const handleBack = () => {
  navigate(-1)
}

  return Project?.name ? <div className='project-details'>
      <h1><ArrowLeftOutlined onClick={handleBack}/> {Project?.name}</h1>
      <div className="project-header">
        <div className="left">
        <img src={imageMapper(Project?.logo)} alt="icon" />
         {Project?.live && <Link to={Project?.link} target="_blank">
          <Button className={themeDecider()}>Visit Project</Button>
          </Link>}
          </div>
        <div className="description">
          <span>{Project?.knowMoreDescription ? Parse(Project?.knowMoreDescription) : null}</span>
        </div>
      </div>
    </div> : <PageNotFound />
}

export default ProjectDetailTemplate