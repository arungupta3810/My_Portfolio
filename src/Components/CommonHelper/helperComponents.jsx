import { ArrowUpOutlined } from "@ant-design/icons"
import './style.scss'
import { Progress } from "antd"
import { useState } from "react"

export const GotoTopArrow = ({scrollPercent}) => {
    return(
        <div className="arrow">
            <Progress type="circle" percent={scrollPercent} size={'small'}/>
            <ArrowUpOutlined />
        </div>
    )
}