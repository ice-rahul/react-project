import React from 'react'
import { ReactComponent as MenuIcon } from '../../global/assets/icons/menu.svg'
import {ReactComponent as StudentIcon} from "../../global/assets/icons/student.svg";
import {ReactComponent as TeacherIcon} from "../../global/assets/icons/teacher.svg";
import * as STYLE from '../../constants/style'
import * as CONFIG from '../../constants/config'
import './Header.scss'

const Header = (props) => {

  return (
    <section
      className={`Header display-flex align-center justify-space-between box-shadow ${
        props.className ? props.className : ""
      }`}
    >
      <div className="display-flex align-center cursor-pointer gap-10px">
        <MenuIcon width={STYLE.ICON_WIDTH} height={STYLE.ICON_HEIGHT} />
        <span className="font-bold font-1-25em">{CONFIG.WEBSITE_NAME}</span>
      </div>

      <div className="display-flex align-center gap-10px">
        <div
          className="display-flex align-center cursor-pointer"
          title="Student Login"
        >
          <StudentIcon width={STYLE.ICON_WIDTH} height={STYLE.ICON_HEIGHT} />
          Student
        </div>
        <div
          className="display-flex align-center cursor-pointer"
          title="Teacher Login"
        >
          <TeacherIcon width={STYLE.ICON_WIDTH} height={STYLE.ICON_HEIGHT} />
          Teacher
        </div>
      </div>
    </section>
  );
}

export default Header