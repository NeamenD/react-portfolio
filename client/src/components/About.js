import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1> About.</h1>
            
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;