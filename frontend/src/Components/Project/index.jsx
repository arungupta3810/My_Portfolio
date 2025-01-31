import React, { useState } from "react";
import "./style.scss";
import { Row, Col, Tooltip, Select } from "antd";
import { projectList, technologyFilter, themeDecider } from "../CommonHelper";
import { SlideUpWhenVisible, truncate } from "../CommonHelper/helperComponents";
import { ArrowRightOutlined, TrophyOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Project = () => {
  const [filteredList, setFilteredList] = useState(projectList);
  const navigate = useNavigate();

  const handleFilter = (selectedFilter) => {
    if (selectedFilter !== "All") {
      const list = projectList.filter(
        (project) => project?.technology === selectedFilter
      );
      setFilteredList(list);
    } else {
      setFilteredList(projectList);
    }
  };

  return (
      <div className="project">
        <div className="head">
          <p className={`heading ${themeDecider()}`}>Projects</p>
          <div className="filter">
            Technology
            <Select
              className="filter-option"
              defaultValue={"All"}
              style={{ width: 120 }}
              onChange={(value) => handleFilter(value)}
              options={technologyFilter}
            />
          </div>
        </div>
        <Row gutter={24} className="project-card-wrapper">
          {filteredList?.map((project) => {
            return (
              <SlideUpWhenVisible>
              <Col className="project-card" md={24}>
                <div className="card">
                  <div className="card-header">
                    <h3>{project?.name?.length > 29 ? truncate(project?.name,29) : project?.name}</h3>
                    {project?.live && <Link to={project?.link} target="_blank">
                    <div className="live-wrapper">
                      <span className="live"></span>
                      LIVE <ArrowRightOutlined /></div>
                      </Link>}
                    </div>
                  <span>
                    {project?.Description?.length < 140
                      ? project?.Description
                      : truncate(project?.Description, 140)}
                  </span>
                  <span className="tech">
                    Technology:{" "}
                    <span className={`${themeDecider()}`}>
                      {project?.technology}
                    </span>
                  </span>
                  <div className="footer-wrapper">
                      <button 
                      className={themeDecider()}
                      onClick={()=>{if(!project?.disabled){ navigate(`/project/${project?.name?.toLowerCase()?.replaceAll("&","")?.replaceAll(" ","-")}`)}}}>
                        Know more
                      </button>
                    {project?.award && (
                      <Tooltip title={"Awarded for this project"}>
                        <TrophyOutlined
                          className={`${themeDecider()}`}
                          style={{ fontSize: "24px" }}
                        />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </Col>
              </SlideUpWhenVisible>
            );
          })}
        </Row>
      </div>
  );
};

export default Project;
