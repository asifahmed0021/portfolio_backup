import React from 'react'
import Home from './home'
import About from './about'
import Things from './things'
import Extras from './extras'
import Contact from './contact'
import Footer from './footer'
class App extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Things/>
                <Extras/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default App