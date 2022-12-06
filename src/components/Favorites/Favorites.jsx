import React from 'react'
import "../../styles/favStyles.css"
import {  useNavigate } from "react-router-dom"
import img from '../../img/love.png';


const Favorites = () => {

  const pages = [
    {
      type: "Сменить тариф",
      path: "/premium"
    }
  ]

  
  const navigate = useNavigate()

  return (
    <div>
        <div className='fav-head'>
          <div className='navbar_btn'>
           {pages.map(page =>  (
            <button key={page.type} onClick={() => navigate(page.path)} className="navbar_tarif">Сменить тариф</button>
           ))}
            
          </div>
            <div className='fav-icon'>
            <img src={img} alt="" />
           <div className='fav-block'></div>
             <div className='fav-title'>
                <h5>Плейлист</h5>
                <h1>Любимые треки</h1>
                <h6>Username</h6>
                </div>
             </div>
        </div>
          <div className='fav-footer'>
            <div className='btn-block'>
            {/* <button className='btn-start'>
              <img src="https://o.remove.bg/downloads/c9d672f2-983a-486e-ad4f-a70df5acbbdc/right-triangle-removebg-preview.png" alt="" />
              </button> */}
            </div>
            <div className='table-footer'>
              <div>
              <h2>Здесь появятся треки, которые тебе понравились</h2>
              </div>
              <div>
              <h4>Добавляй треки в медиатеку, нажимая на значок сердечка.</h4>
              </div>
              <div>
              <button>НАЙТИ ТРЕКИ</button>
              </div>
            </div>
          </div>
    </div>
  )
}


export default Favorites