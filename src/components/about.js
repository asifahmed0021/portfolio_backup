import React from 'react'
import '../style/about.css'
import $ from 'jquery'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

//variables for whether component is visited or not (Initially all false)
let aboutContainerShowed=false
//Event listener to show component when visited first time 
window.addEventListener('scroll',()=>{
    if(document.querySelector('.aboutContainer').getBoundingClientRect().top-window.innerHeight<-250 && !aboutContainerShowed){
        aboutContainerShowed=true
        $(function(){
            $('.cardsContainer').animate({opacity:'1'},0,()=>{
                $('.cardsContainer').css('transition-delay','.3s')
                $('.cardsContainer').css('transition-duration','1s')
                $('.cardsContainer').css('transform','translateY(-250px)')
            })
            $('.head').animate({opacity:'1'},0,()=>{
                $('.head').css('transition-duration','1.2s')
                $('.head').css('transform','translateY(-250px)')
            })
            $('.profile').animate({opacity:'1'},0,()=>{
                $('.profile').css('transition-delay','.7s')
                $('.profile').css('transition-duration','1s')
                $('.profile').css('transform','translateY(-200px)')
            })
        })
    }

})
$(function(){
    $('.icon').hover(function(){
        $(this).css('transform','translateY(-5px)')
    },function(){
        $(this).css('transform','translateY(0px)')
    })
})


class About extends React.Component{

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
        // this.setState({icolor:'rgb(181,35,151)'})
        this.setState({icolor:'rgb(181,35,151)'})
    }
    leave(){
        this.setState({icolor:'rgb(50,50,50)',gcolor:'rgb(50,50,50)',wcolor:'rgb(50,50,50)',lcolor:'rgb(50,50,50)'})
    }

    render(){
        return(
            
            <div className='aboutContainer'>
                <div className='leftSection'>
                    <div className='profile'>
                        <div className='imageDiv'>
                        </div>
                        <div className='icons'>
                            <div onMouseEnter={this.gitEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='icon'>
                                <a target='blank' href='https://github.com/asifahmed0021'><FontAwesomeIcon  color={this.state.gcolor} icon={['fab','github']} size='3x'/></a>
                            </div>
                            <div onMouseEnter={this.instaEnter.bind(this)} onMouseLeave={this.leave.bind(this)}  className='icon'>
                                <a target='blank' href='https://www.instagram.com/asifahmed0010'><FontAwesomeIcon  color={this.state.icolor} icon={['fab','instagram']} size='3x' /></a>
                            </div>
                            <div onMouseEnter={this.whatsappEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='icon'>
                                <a target='blank' href='https://api.whatsapp.com/send?phone=919685422752'><FontAwesomeIcon color={this.state.wcolor} icon={['fab','whatsapp']} size='3x'/></a>
                            </div>
                            <div onMouseEnter={this.linkedEnter.bind(this)} onMouseLeave={this.leave.bind(this)} className='icon'>
                                <a target='blank' href='https://www.linkedin.com/in/asifahmed0021'><FontAwesomeIcon color={this.state.lcolor} icon={['fab','linkedin']} size='3x'/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightSection'>
                    <h1 className='head'>A little more about Asif Ahmed</h1>
                    <div className='cardsContainer'>
                        <div className='card'>
                            <div className='title'>
                                <h1 className='titleh1'>Education</h1>
                            </div>
                            <div className='slot3'>
                                <h2 className='category'>Bachelors Degree</h2>
                                <p className='place'>Indian Institue of Technology, Jodhpur<br></br>(2017-2021)</p>
                            </div>

                            <div className='slot1'>
                                <h2 className='category'>Primary and <br></br>secondary <br></br>education</h2>
                                <p className='place'>SpringWood <br></br>School,<br></br>Neemuch (M.P)</p>
                            </div>
                            <div className='slot2'>
                                <h2 className='category'>Higher<br></br>secondary <br></br>education</h2>
                                <p className='place'>SR public<br></br>School,<br></br>Kota (R.J)</p>
                            </div>


                        </div>
                        <div className='card'>
                            <div className='title'>
                                <h1 className='titleh1'>Skills</h1>
                            </div>
                                <div className='slot4'>
                                    <div className='sub'>
                                    <h2 className='category4'>Languages i generally like to use:</h2>
                                    <p className='lang'>•I like to code in Java and do the development work in javasciprt.</p><br></br>
                                    <p className='lang'>•I know the basics of Python,C++,C and have completed some Deep-learning, artificial Intelligence and automation projects in Python.</p><br></br>
                                    
                                    </div>
                                    <div className='sub'>
                                    <h2 className='category4'>Fameworks and libraries i know:</h2>
                                    <p className='lang'>•Mainly i like to develop things using <br></br>React.js | Node.js | React-native | Jquery</p><br></br>
                                    <p className='lang'>•I also have a basic understanding of Django and Android studio and cuurrently i am learning java servlets and spring framework.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        )
    }
}

export default About