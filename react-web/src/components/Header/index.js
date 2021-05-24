import React from 'react'
import { ReactComponent as MenuIcon } from '../../global/assets/icons/menu.svg'
import {ReactComponent as LoginIcon} from "../../global/assets/icons/enter.svg";
import * as STYLE from '../../constants/style'
import './Header.scss'

const Header = (props) => {

  return (
    <section
      className={`Header display-flex align-center justify-space-between box-shadow ${
        props.className ? props.className : ""
      }`}
    >
      <div className="display-flex align-center flex-1-1">
        <MenuIcon
          width={STYLE.ICON_WIDTH}
          height={STYLE.ICON_HEIGHT}
          className="cursor-pointer"
        />
        Header
      </div>
      <div className="display-flex align-center">
        <LoginIcon className="cursor-pointer Loginicon" />
        Student
      </div>

      <div className="display-flex align-center">
        <LoginIcon className="cursor-pointer Loginicon" />
        Teacher
      </div>
    </section>
  );
}

export default Header