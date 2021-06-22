import React from 'react'
import '../style/contact.css'
import $ from 'jquery'
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

$(function(){
    $('.contactIcon').hover(function(){
        $(this).css('bottom','5px')
    },function(){
        $(this).css('bottom','0px')
    })
})
let formShowed=false
let detailShowed=false
let getInTouchHeadShowed=false
let semiHeadShowed=false

window.addEventListener('scroll',()=>{
    if(document.querySelector('.formContainer').getBoundingClientRect().top-window.innerHeight<200 && !formShowed){
        $(function(){
            $('.formContainer').animate({opacity:'1'},0,()=>{
                $('.formContainer').css('transition-delay','.1s')
                $('.formContainer').css('transition-duration','1.5s')
                $('.formContainer').css('transform','translateY(-300px)')
            })
        })
        formShowed=true
    }
    if(document.querySelector('.detailContainer').getBoundingClientRect().top-window.innerHeight<200 && !detailShowed){
        $(function(){
            $('.detailContainer').animate({opacity:'1'},0,()=>{
                $('.detailContainer').css('transition-delay','.5s')
                $('.detailContainer').css('transition-duration','1.5s')
                $('.detailContainer').css('transform','translateY(-300px)')
            })
        })
        detailShowed=true
    }
    if(document.querySelector('.getInTouchHead').getBoundingClientRect().top-window.innerHeight<200 && !getInTouchHeadShowed){
        $(function(){
            $('.getInTouchHead').animate({opacity:'1'},0,()=>{
                $('.getInTouchHead').css('transition-delay','.1s')
                $('.getInTouchHead').css('transition-duration','1.5s')
                $('.getInTouchHead').css('transform','translateY(-300px)')
                $('.contactSemiHead').css('transition-delay','.1s')
                $('.contactSemiHead').css('transition-duration','1.5s')
                $('.contactSemiHead').css('transform','translateY(-450px)')
                $('.contactSemiHead').css('opacity','1')

            })
        })
        semiHeadShowed=true
        getInTouchHeadShowed=true
    }
})



class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state={icolor:'rgb(50,50,50)',gcolor:'rgb(50,50,50)',wcolor:'rgb(50,50,50)',lcolor:'rgb(50,50,50)'}
    }

    
    gitEnter(){
        this.setState({gcolor:'black'})
    }
    whatsappEnter(){
        this.setState({wcolor:'green'})
    }
    linkedEnter(){
        this.setState({lcolor:'rgb(33,99,166)'})
    }
    instaEnter(){
        this.setState({icolor:'rgb(181,35,151)'})
    }
    leave(){
        this.setState({icolor:'rgb(50,50,50)',gcolor:'rgb(50,50,50)',wcolor:'rgb(50,50,50)',lcolor:'rgb(50,50,50)'})
    }


    sendEmail(e){
        e.preventDefault()
        if (e.target.name.value==='' ||  e.target.email.value==='' || e.target.message.value==='')            alert('Please fill out all the fields.');
        
        else            emailjs.sendForm('service_lmo89ej', 'template_8ej7n4k', e.target, 'user_noWTsjUTcyNdW82LZr2Kz')
            .then((result) => {
                alert('Message sent successfully to Asif!')
                e.target.name.value=''
                e.target.email.value=''
                e.target.message.value=''
            }, (error) => {
                console.log(error.text);
            });

      }

      temp(e){
          
          e.preventDefault()
          console.log(e.target.name.value)
          
      }
    
    render(){
        return(
            <div className='contactContainer'>
                <div className='getInTouch'>
                    <h1 className='getInTouchHead'>Get in touch</h1>
                    <p className='contactSemiHead'>I am always open for new ideas and interesting talks.</p>
                </div>
                <div className='contactSemiContainer'>
                    <div className='formContainer'>
                        <form onSubmit={this.sendEmail.bind(this)} >
                            <input autoComplete='on' className='nameInput' type='text' placeholder='Name' name='name'></input>
                            <input className='emailInput' type='email' placeholder='Email' name='email'></input>
                            <textarea className='messageInput' placeholder='Message' name='message'></textarea>
                            <input className='sendButton' type='submit' value='Send Message'></input>
                        </form>
                    </div>
                    <div className='detailContainer'>
                        <h1 className='contactInfo'>Contact Info</h1>
                        <p className='line'>Feel free to contact me.</p>
                        <a target='blank' href='https://www.google.com/maps/place/Indian+Institute+of+Technology+Jodhpur+(Permanent+Campus)/@26.4754958,73.113301,17z/data=!3m1!4b1!4m5!3m4!1s0x3941eb1936c09137:0x86e85867a6284e3f!8m2!3d26.475491!4d73.1154897'><p className={`line ${'link'}`}><span><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Indian Institute of Technology,Jodhpur,Rajasthan,India</p></a>
                        <a target='blank' href='mailto:ahmed.1@iitj.ac.in'><p className={`line ${'link'}`}> <span><FontAwesomeIcon icon={faEnvelope}/></span> ahmed.1@iitj.ac.in</p></a>
                        <a href='tel:9685422752'><p className={`line ${'link'}`}> <span><FontAwesomeIcon icon={faPhoneAlt}/></span> +91 9685422752</p></a>
                        <div className='contactIcons'>
                            <div onMouseEnter={this.gitEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='contactIcon'>
                                <a target='blank' href='https://github.com/asifahmed0021'><FontAwesomeIcon  color={this.state.gcolor} icon={['fab','github']} size='3x'/></a>
                            </div>
                            <div onMouseEnter={this.instaEnter.bind(this)} onMouseLeave={this.leave.bind(this)}  className='contactIcon'>
                                <a target='blank' href='https://www.instagram.com/asifahmed0010'><FontAwesomeIcon  color={this.state.icolor} icon={['fab','instagram']} size='3x' /></a>
                            </div>
                            <div onMouseEnter={this.whatsappEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='contactIcon'>
                                <a target='blank' href='https://api.whatsapp.com/send?phone=919685422752'><FontAwesomeIcon color={this.state.wcolor} icon={['fab','whatsapp']} size='3x'/></a>
                            </div>
                            <div onMouseEnter={this.linkedEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='contactIcon'>
                                <a target='blank' href='https://www.linkedin.com/in/asifahmed0021'><FontAwesomeIcon color={this.state.lcolor} icon={['fab','linkedin']} size='3x'/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact