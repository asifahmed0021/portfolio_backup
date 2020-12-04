import React from 'react'
import '../style/extra.css'
import $ from 'jquery'
$(function(){
    $('.extraContainer').hover(function(){
        $(this).find('.backgroundAbsoluteContainer').css('opacity','0')
        $(this).find('.extraAbout').css('opacity','1')
    },function(){
        $(this).find('.backgroundAbsoluteContainer').css('opacity','1')
        $(this).find('.extraAbout').css('opacity','0')
    })
})
let extra1Showed=false
let extra2Showed=false
let extra3Showed=false
let extra4Showed=false
let extra5Showed=false

window.addEventListener('scroll',()=>{
    if(document.querySelector('.extra1').getBoundingClientRect().top-window.innerHeight<200 && !extra1Showed){
        $(function(){
            $('.extra1').animate({opacity:'1'},0,()=>{
                $('.extra1').css('transition-delay','.1s')
                $('.extra1').css('transition-duration','1s')
                $('.extra1').css('transform','translateY(-300px)')
            })
        })
        extra1Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.extra2').getBoundingClientRect().top-window.innerHeight<200 && !extra2Showed){
        $(function(){
            $('.extra2').animate({opacity:'1'},0,()=>{
                $('.extra2').css('transition-delay','.2s')
                $('.extra2').css('transition-duration','1s')
                $('.extra2').css('transform','translateY(-300px)')
            })
        })
        extra2Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.extra3').getBoundingClientRect().top-window.innerHeight<200 && !extra3Showed){
        $(function(){
            $('.extra3').animate({opacity:'1'},0,()=>{
                $('.extra3').css('transition-delay','.3s')
                $('.extra3').css('transition-duration','1s')
                $('.extra3').css('transform','translateY(-300px)')
            })
        })
        extra3Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.extra4').getBoundingClientRect().top-window.innerHeight<200 && !extra4Showed){
        $(function(){
            $('.extra4').animate({opacity:'1'},0,()=>{
                $('.extra4').css('transition-delay','.1s')
                $('.extra4').css('transition-duration','1s')
                $('.extra4').css('transform','translateY(-300px)')
            })
        })
        extra4Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.extra5').getBoundingClientRect().top-window.innerHeight<200 && !extra5Showed){
        $(function(){
            $('.extra5').animate({opacity:'1'},0,()=>{
                $('.extra5').css('transition-delay','.2s')
                $('.extra5').css('transition-duration','1s')
                $('.extra5').css('transform','translateY(-300px)')
            })
        })
        extra5Showed=true
    }
})


class Extra extends React.Component{

    render(){
        return(
            <div className={`extraContainer ${this.props.class2}`}>
                <div  className={`backgroundAbsoluteContainer ${this.props.secondAbsoluteImageContainerClass}`}>
                </div>
                <h1 className='extraHead'>{this.props.heading}</h1>
                <p className='extraAbout'>{this.props.about}<br></br><br></br>{this.props.next}</p>
            </div>
        )
    }
}

export default Extra