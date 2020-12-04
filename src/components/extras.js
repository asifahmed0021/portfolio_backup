import React from 'react'
import '../style/extras.css'
import Extra from './extra'
import $ from 'jquery'

let extrasHeadShowed=false

window.addEventListener('scroll',()=>{
    if(document.querySelector('.extrasHead').getBoundingClientRect().top-window.innerHeight<0 && !extrasHeadShowed){
        $(function(){
            $('.extrasHead').animate({opacity:'1'},0,()=>{
                $('.extrasHead').css('transition-duration','1.2s')
                $('.extrasHead').css('transform','translateY(-150px)')
            })
            $('.extrasSemiHead').animate({opacity:'1'},0,()=>{
                $('.extrasSemiHead').css('transition-delay','.2s')
                $('.extrasSemiHead').css('transition-duration','1s')
                $('.extrasSemiHead').css('transform','translateY(-250px)')
            })
        })
        extrasHeadShowed=true

    }
})



class Extras extends React.Component{
    render(){
        return(
            <div className='extrasContainer'>
                <div className='extrasHeader'>
                    <h1 className='extrasHead'>Experiences...</h1>
                    <p className='extrasSemiHead'>Hover over the cards to experience my experiences.</p>
                </div>
                <div className='extrasSemiContainer'>
                    <Extra secondAbsoluteImageContainerClass='absolute1' class2='extra1' heading="Inter IIT Sports Meet" about="Inter IIT sports meet, is a huge annual gathering of teams from all IITs (currently 23) across India, where they compete across wide range of sporting activities." next="I attended this meet every year in three different IITs (Madras,Guwahati,Kharagpur) representing my IIT's Basketball team." />
                    <Extra secondAbsoluteImageContainerClass='absolute2' class2='extra2' heading='Ignus Asst Marketing Head' about="Ignus is asia's fifth biggest socio-cultural fest. I was the assistant marketing head of our marketing team." next="My role was to manage a team of 20 members and guiding them through the process of communicating with third party vendors and seeking sponsorship."/>
                    <Extra secondAbsoluteImageContainerClass='absolute3' class2='extra3' heading='Basketball Championship' about="Two things that i've definitely learnt from Basketball is great teamwork and giving my 100% while doing a task." next="In Jodhpur open college Basketball tournament we won four heated matches and bagged third position after giving a tough fight in the semi-finals." />
                    <Extra secondAbsoluteImageContainerClass='absolute4' class2='extra4' heading='College Cultural Fests' about='Talking is the voice of human, singing is the voice of soul.' next="I have always been very active and interested in co-curricular activities. Even though i am not a 'great' singer, i thought why not participate?" />
                    <Extra secondAbsoluteImageContainerClass='absolute4' class2='extra5' heading='College Cultural Fests' about='Talking is the voice of human, singing is the voice of soul.' next=" " />
                </div>
            </div>
        )
    }
}

export default Extras 
