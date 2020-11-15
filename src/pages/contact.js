import React from 'react';
import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper'
import SEO from "../components/SEO"

function ContactPage() {
    return (
        <div className="contact">
            <SEO title="Contact"/>
            <Layout> 
                <Paper elevation="5" style={{padding:"10px", textAlign:"center"}}>
                    <p> I'm easiest to contact via e-mail: <strong>jnathanmugerwa@gmail.com</strong></p>
                    <p>If that doesn't work, you can contact me via carrier pigeon or primally 
                        screaming towards the moon on a cloudless night.</p> 
                </Paper>               
                {/* <p> I'm easiest to contact via e-mail: <strong>jnathanmugerwa@gmail.com</strong></p>
                <p>If that doesn't work, you can contact me via carrier pigeon or primally 
                    screaming towards the moon on a cloudless night.</p> */}
            </Layout>
        </div>
    )
}

export default ContactPage
