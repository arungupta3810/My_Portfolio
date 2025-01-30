import React, { useState } from "react";
import "./style.scss";
import { Row, Col, Tooltip, Select } from "antd";
import { projectList, technologyFilter, themeDecider } from "../CommonHelper";
import { SlideUpWhenVisible, truncate } from "../CommonHelper/helperComponents";
import { TrophyOutlined } from "@ant-design/icons";

const Project = () => {
  const [filteredList, setFilteredList] = useState(projectList);

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
    <SlideUpWhenVisible>
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
              <Col className="project-card" md={12}>
                <div className="card">
                  <h3>{project?.name}</h3>
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
                    <Tooltip title={"Disabled due to new upgrades"}>
                      <button disabled className={`disabled ${themeDecider()}`}>
                        Know more
                      </button>
                    </Tooltip>
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
            );
          })}
        </Row>
      </div>
    </SlideUpWhenVisible>
  );
};

export default Project;
