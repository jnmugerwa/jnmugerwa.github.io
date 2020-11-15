import React from 'react';
import Timeline from '../components/Timeline';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import GitHubIcon from '@material-ui/icons/GitHub';
import SEO from '../components/SEO';

var resumeURL = 'https://drive.google.com/file/d/1tLvocurLlngwm6fyUViYnhVo_WwSFXEn/view?usp=sharing';
var githubURL = 'https://github.com/jnmugerwa'
function WorkPage() {
    return (
        <div>
            <SEO title="Work"/>
            <Layout> 
                <Button
                    variant="text"
                    color="primary"
                    size="large"
                    startIcon={<LibraryBooksIcon />}
                    href={resumeURL}
                >
                    RESUME
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    size="large"
                    startIcon={<GitHubIcon />}
                    href={githubURL}
                >
                    GITHUB
                </Button>
                <Timeline/> 
            </Layout>
        </div>
    )
}

export default WorkPage
