import './singlePage.scss'
import BackgroundImg from '../../assets/Profile header decoration.png'
import HeadDecorationImg from '../../assets/Top decoration.png'
import React from "react";


function SinglePage() {
  return (
    <div>
      {/*nav-bar*/}
      <nav className='navbar'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='logo'>PORTFOLIO.</div>
            <ul className='nav-links'>
              <li><a href='#' className='list-item'>About</a></li>
              <li><a href='#' className='list-item'>Skill</a></li>
              <li><a href='#' className='list-item'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/*header*/}
      <header className='header'>
        <div className='container'>
          <img src={HeadDecorationImg} alt='img'/>
        </div>
      </header>

    </div>
  )
}

export default SinglePage;