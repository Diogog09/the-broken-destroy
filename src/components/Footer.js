import React from 'react'

function Footer(props) {
    return ( 
        <footer id = "footer" >
            <div className = "inner" >
                <div className = "flex" >
                    <div className = "copyright" >
                        &copy; { props.message } 
                    </div > 
                    <div >
                        <p>Email: diogo.goncalves.mello@gmail.com</p>
                    </div>
                    < ul className = "icons" >
                        <li > 
                            < a href = "#"className = "icon fa-facebook" > 
                            < span className = "label" > Facebook </span></a > 
                        </li> 
                        <li > 
                            < a href = "#"className = "icon fa-twitter" >
                            < span className = "label" > Twitter </span></a > 
                        </li> 
                        <li > 
                            < a href = "#"className = "icon fa-linkedin" > 
                            < span className = "label" > linkedIn </span></a > 
                        </li> 
                    </ul >
                </div> 
            </div > 
        </footer>

    );
}
export default Footer;