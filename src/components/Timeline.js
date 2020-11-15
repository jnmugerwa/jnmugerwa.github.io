import React from 'react'
import TimelineItem from './TimelineItem';
//Logos
import bamlLogo from '../../content/assets/company/bamlPNG.png';
import lmcoLogo from '../../content/assets/company/lmcoJPEG.jpg';
import fbLogo from '../../content/assets/company/facebookGIF.gif';
import stripeLogo from '../../content/assets/company/stripeGIF.gif';
import googLogo from '../../content/assets/company/googleGIF.gif';
import Divider from '@material-ui/core/Divider';

function Timeline() {
    var data = {
        'baml': {
            'title': 'Sales and Trading Analyst, Summer 2019',
            'desc': 'Rotated on equities, derivatives and FOREX desks. Pitched derivatives trades and conducted statistical analyses on market data.' 
        },
        'lmco': {
            'title': 'Software Engineering Intern, Fall 2020',
            'desc': 'Building web applications using React/Node/Express/Material-UI and APIs in .NET.',
        },
        'fb': {
            'title': 'Software Engineering Intern, Winter 2021',
            'desc': 'Incoming 🧭'
        },
        'stripe': {
            'title': 'Software Engineering Intern, Summer 2021',
            'desc': 'Incoming ⚡'
        },
        'goog': {
            'title': 'Software Engineering Intern, Fall 2021',
            'desc': 'Incoming ⚡'
        }
    }
    var baml = <TimelineItem title={data['baml']['title']} description={data['baml']['desc']} image={bamlLogo}/>
    var lmco = <TimelineItem title={data['lmco']['title']} description={data['lmco']['desc']} image={lmcoLogo}/>
    var fb = <TimelineItem title={data['fb']['title']} description={data['fb']['desc']} image={fbLogo}/>
    var stripe = <TimelineItem title={data['stripe']['title']} description={data['stripe']['desc']} image={stripeLogo}/>
    var goog = <TimelineItem title={data['goog']['title']} description={data['goog']['desc']} image={googLogo}/>

    return (
        <div className="global-wrapper" style={{display:"flex", justifyContent:"center",
                                                marginBottom:"45px", position:"left",
                                                left:"79px"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                {baml}
                <Divider orientation="vertical" style={{height:"100px", margin:"30px", 
                                                        position:"relative", left:"40%"}}/>
                {lmco}
                <Divider orientation="vertical" style={{height:"100px", margin:"30px", 
                                                        position:"relative", left:"40%"}}/>
                {fb}
                <Divider orientation="vertical" style={{height:"100px", margin:"30px", 
                                                        position:"relative", left:"40%"}}/>
                {stripe}
                <Divider orientation="vertical" style={{height:"100px", margin:"30px", 
                                                        position:"relative", left:"40%"}}/>
                {goog}
            </div>
        </div>
    )
}

export default Timeline
