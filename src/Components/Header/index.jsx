import React, { useState } from 'react'
import "./style.scss"
import { themeDecider } from '../CommonHelper'
import { HomeOutlined, CodepenCircleOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { route } from '../../routing'
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg'

const Header = () => {
    const isMobile =  window.innerWidth <= 768;
    const [ isVisible,setIsVisible ] = useState(!isMobile)
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
            <CodepenCircleOutlined style={{fontSize:30}} onClick={()=>window.location.href='/'}/>
            <span>AKG</span>
        </div>
        {(isMobile && isVisible) ? <CloseOutlined  className='cross' onClick={()=>setIsVisible(!isVisible)}/> : (isMobile) ? <MenuOutlined className='menu' onClick={()=>setIsVisible(!isVisible)} /> : null }
        { (isVisible ) && <div className="header-right">
            {getNavLink()}
        </div>}
        </div>
    </div>
  )
}

export default Header