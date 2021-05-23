import React from 'react'
import { ReactComponent as MenuIcon } from '../../global/assets/icons/menu.svg'
import * as STYLE from '../../constants/style'
import './Header.scss'

const Header = (props) => {

  return (
    <section className={`Header display-flex align-center justify-space-between ${props.className ? props.className : ''}`}>
      <div className="display-flex align-center">
        <MenuIcon width={STYLE.ICON_WIDTH} height={STYLE.ICON_HEIGHT}  className="cursor-pointer"/>
        Header
      </div>
      <span>Login</span>
    </section>
  )
}

export default Header