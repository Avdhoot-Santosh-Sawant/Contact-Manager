import React from 'react'
import '../component css/Header.css'
import linkedin from '../images/linkedin.png'


const Header = () => {

    return (
        <>
            <div id='header'>
                <h3 id="h">Contact Manager</h3>
                <span id="linkedin">
                    <a href="https://www.linkedin.com/in/avdhoot-sawant-44259025b/" target={'_blank'} rel="noreferrer"><img alt=".in" src={linkedin} width={'15px'} />
                    </a>
                </span>
            </div>

        </>
    )


}

export default Header