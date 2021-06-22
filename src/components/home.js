import React from 'react'
import '../style/home.css'
import $ from "jquery";

//parallax for home background image
window.addEventListener('scroll',()=>{
    let bottom=document.querySelector('.homeContainer').getBoundingClientRect().bottom
    let ratio=300/window.innerHeight
    let set=ratio*(window.innerHeight-bottom)
    $('.homeContainer').css('background-position-y',set);
})

//entry for .hello and .me
$(function(){
    $('.hello').css('transition-duration','1.5s')
    $('.hello').css('transform','translateY(-10vw)')
    $('.hello').css('opacity','1')
    $('.me').css('transition-duration','1.5s')
    $('.me').css('transition-delay','.5s')
    $('.me').css('transform','translateY(-10vw)')
    $('.me').css('opacity','1')
})

class Home extends React.Component{

    render(){
        return(
            <div className="homeContainer">
                <div className='topHead'>
                    <h1 className='hello'> I am Asif.</h1>
                    <p className='me'>and this is the tiny part of the web that i call my own. I'm a full time software developer and love playing basketball. The things i do of interest is posted here so i can keep track of it all and maybe even inspire someone. :)</p>

                </div>
            </div>
        )
    }


}

export default Home