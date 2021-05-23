import React from 'react'
import './Footer.scss'

const Footer = (props) => {

  return (
    <section className={`Footer ${props.className ? props.className : ''}`}>
      Footer
    </section>
  )
}

export default Footer