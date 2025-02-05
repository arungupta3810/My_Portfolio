import React, { useEffect } from 'react'
import './style.scss'
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectList, themeDecider } from '../CommonHelper';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Parse from "html-react-parser"
import PageNotFound from '../PageNotFound';

const ProjectDetailTemplate = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const Project = projectList?.find((e) => e?.id === Number(projectId));  

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

const handleBack = () => {
  navigate(-1)
}

  return Project?.name ? <div className='project-details'>
      <h1><ArrowLeftOutlined onClick={handleBack}/> {Project?.name}</h1>
      <div className="project-header">
        <div className="left">
        <img src={Project?.logo} alt="icon" />
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