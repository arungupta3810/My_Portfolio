import React from 'react'
import "./style.scss"
import { themeDecider } from '../CommonHelper'
import { HomeOutlined } from '@ant-design/icons'

const Header = () => {

    const getNavLink = () => {
        const links = [
            { id: 1, name: "Home", path: "/" },
            { id: 2, name: "Projects", path: "/project" },
            { id: 3, name: "Contact", path: "/contact" },
        ]
        return links?.map((link)=>
            <div key={link?.id} className="nav-link" onClick={()=>window.location.href=link?.path}>
                {link?.name}
            </div>
        )
    }

  return (
    <div className={`header ${themeDecider()}`}>
        <div className="header-wrapper">
        <div className="logo-wrapper">
        <HomeOutlined style={{fontSize:30}} onClick={()=>window.location.href='/'}/>
        </div>
        <div className="header-right">
            {getNavLink()}
        </div>
        </div>
    </div>
  )
}

export default Header