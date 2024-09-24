import React from 'react'
import "./style.scss"
import { themeDecider } from '../CommonHelper'
import { HomeOutlined } from '@ant-design/icons'
import { route } from '../../routing'

const Header = () => {

    const getNavLink = () => {
        return route?.map((link)=>
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