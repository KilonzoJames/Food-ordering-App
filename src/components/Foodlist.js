import React from 'react'

function Foodlist({food,setFood}) {
  return (
    <div class="ui card">
        <div class="image">
            <img src="https://image.shutterstock.com/image-photo/tasty-french-fries-on-cutting-260nw-273398612.jpg" alt='Logo'/>
            </div>
            <div class="content">
                <div class="header">Matthew</div>
                <div class="meta"><span class="date">Joined in 2015</span></div>
                <div class="description">Matthew is a musician living in Nashville.</div></div>
                <div class="extra content">
                {/* <a><i aria-hidden="true" class="user icon"></i>22 Friends</a> */}
                </div></div>
  )
}

export default Foodlist