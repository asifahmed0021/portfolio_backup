import React from 'react'
import '../style/thing.css'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

$(function(){
    $('.thing').hover(function(){
        $(this).css('transform','translateY(-5px)')
    },function(){
        $(this).css('transform','translateY(0px)')
    })
})
let thing1Showed=false
let thing2Showed=false
let thing3Showed=false
let thing4Showed=false
let thing5Showed=false
let thing6Showed=false

window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing1').getBoundingClientRect().top-window.innerHeight<200 && !thing1Showed){
        $(function(){
            $('.thing1').animate({opacity:'1'},0,()=>{
                $('.thing1').css('transition-delay','0s')
                $('.thing1').css('transition-duration','1s')
                $('.thing1').css('transform','translateY(-300px)')
            })
        })
        thing1Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing2').getBoundingClientRect().top-window.innerHeight<200 && !thing2Showed){
        $(function(){
            $('.thing2').animate({opacity:'1'},0,()=>{
                $('.thing2').css('transition-delay','.1s')
                $('.thing2').css('transition-duration','1s')
                $('.thing2').css('transform','translateY(-300px)')
            })
        })
        thing2Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing3').getBoundingClientRect().top-window.innerHeight<200 && !thing3Showed){
        $(function(){
            $('.thing3').animate({opacity:'1'},0,()=>{
                $('.thing3').css('transition-delay','.2s')
                $('.thing3').css('transition-duration','1s')
                $('.thing3').css('transform','translateY(-300px)')
            })
        })
        thing3Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing4').getBoundingClientRect().top-window.innerHeight<200 && !thing4Showed){
        $(function(){
            $('.thing4').animate({opacity:'1'},0,()=>{
                $('.thing4').css('transition-delay','.3s')
                $('.thing4').css('transition-duration','1s')
                $('.thing4').css('transform','translateY(-300px)')
            })
        })
        thing4Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing5').getBoundingClientRect().top-window.innerHeight<300 && !thing5Showed){
        $(function(){
            $('.thing5').animate({opacity:'1'},0,()=>{
                $('.thing5').css('transition-delay','0s')
                $('.thing5').css('transition-duration','1s')
                $('.thing5').css('transform','translateY(-300px)')
            })
        })
        thing5Showed=true
    }
})
window.addEventListener('scroll',()=>{
    if(document.querySelector('.thing6').getBoundingClientRect().top-window.innerHeight<200 && !thing6Showed){
        $(function(){
            $('.thing6').animate({opacity:'1'},0,()=>{
                $('.thing6').css('transition-delay','.1s')
                $('.thing6').css('transition-duration','1s')
                $('.thing6').css('transform','translateY(-300px)')
            })
        })
        thing1Showed=true
    }
})


class Thing extends React.Component{
    constructor(props){
        super(props)
        this.state={iconColor:'rgb(153,160,227)'}
    }
    changeToWhite(){
        this.setState({iconColor:'white'})
    }
    changeToBlue(){
        this.setState({iconColor:'rgb(153,160,227)'})
    }

    render(){

        return(
                <div className={`thingContainer ${this.props.class2}`}>
                    <a target='blank' href={this.props.link}>
                        <div onMouseEnter={this.changeToWhite.bind(this)} onMouseLeave={this.changeToBlue.bind(this)} className='thing'>
                            <div className='thingLogo'>
                                <FontAwesomeIcon icon={this.props.iconName} size='4x' color={this.state.iconColor} />
                            </div>
                            <h1 className='thingTitle'>{this.props.title}</h1>
                            <p className='thingAbout'>{this.props.about}</p>
                        </div>
                    </a>
                </div>

        )
    }
}
export default Thing