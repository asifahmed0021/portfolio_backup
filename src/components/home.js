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
                    <h1 className='hello'>Hello, I am Asif.</h1>
                    {/* <p className='me'>Idhar kya likhna hai woh zarbai se puchunga. Abhi kuch likh deta hu taaki idea aa jaye positioning ka.
                    Baadme bhi lagbhag itne hi words ka likhna hai.Cheap bana dunga!!</p> */}
                    {/* <p className='me'></p> */}
                </div>
            </div>
        )
    }


}

export default Home