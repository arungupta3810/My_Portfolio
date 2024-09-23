import { ArrowUpOutlined } from "@ant-design/icons"
import './style.scss'
import { Progress } from "antd"
import { useState } from "react"

export const GotoTopArrow = ({scrollPercent,onClick}) => {
    return(
        <div className="arrow" onClick={onClick}>
            <Progress type="circle" percent={scrollPercent} size={'small'}/>
            <ArrowUpOutlined />
        </div>
    )
}