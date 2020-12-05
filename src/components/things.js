import React from 'react'
import Thing from '../components/thing'
import $ from 'jquery'
import '../style/things.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

let thingsTitleShowed=false

window.addEventListener('scroll',()=>{
    if(document.querySelector('.thingsTitle').getBoundingClientRect().top-window.innerHeight<0 && !thingsTitleShowed){
        $(function(){
            $('.thingsTitle').animate({opacity:'1'},0,()=>{
                $('.thingsTitle').css('transition-duration','1.2s')
                $('.thingsTitle').css('transform','translateY(-150px)')
            })
        })
        thingsTitleShowed=true
    }
})

class Things extends React.Component{
    render(){
        return(
            <div className='thingsContainer'>
                <div className='thingsTitle'><h1 className='thingsTitleh1'>Things i have done or doing...</h1></div>
                <Thing class2='thing1' iconName={faWarehouse} title='Warehouse Asset Management System' about='The project focused on managing and tracking warehouse assets and their movement.All movements and arrival 
                of products were stored in an SQL database.'/>
                <Thing class2='thing2' iconName={faComments} title='ChatRoom Web App' about='WebApp for a ChatRoom built using Node.js and Socket.io for a number of people to join the room with 
                a Room ID initiated by the owner.Active members can see all activities of other members.'/>
                <Thing class2='thing3'  iconName={faArchive} title="Online Delivery System" about="Online food delivery portal app for clients and server app integrated with firebase database, made using MERN stack to order and manage the client's orders with added functionalities.  "/>
                <Thing class2='thing4' iconName={faWarehouse} title='Face Aging Using CGANS' about='As the name suggests the project focussed on building a face aging algorithm using conditional generative adversarial network with identity preservation.'/>
                <Thing class2='thing5' iconName={faWarehouse} title='Fake news prediction' about='Made an unsupervised algorithm for detecting fake news spreads, by exploiting users interaction on the tweets and diversifying verified and unverified users.'/>

            </div>
        )
    }
}

export default Things