import React from 'react';
import { Footer as AppFooter } from 'react-materialize';

const Footer = () => {
    return (
        <AppFooter copyrights="2018 | Szymon Sitko"
            moreLinks={
                <a
                    className="grey-text text-lighten-4 right"
                    href="https://github.com/szymonsitko/React-Redux-Example">
                        GitHub Repository
                    </a>
            }
            className='example'
            >   
            <h5 className="white-text">Application Details</h5>
            <p className="grey-text text-lighten-4">This is a basic example of modern React + Redux application.</p>
        </AppFooter>
    )
}

export default Footer;


