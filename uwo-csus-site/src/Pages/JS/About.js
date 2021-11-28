// The About Page
import React from 'react';
import '../Styles/About.css';

const About = () => {
    return ( 
        <div className="About">
            <div className="About__description">
                <p className="About__description_header">What We Do</p>
                <p className="About__description_text">The Computer Science Undergraduate Society is the organization that 
                represents all computer science students at Western University in London, Ontario. As the oldest and 
                most established computer science organization on campus, CSUS is run by students and for students. 
                We work closely with the Department of Computer Science to promote computer science as an academic 
                discipline, to connect students to related university services, and to provide methods of networking 
                between students, faculty, and employers.</p>
            </div>

            <div className="About__members">
                <p className="About__members_header">MEET THE TEAM</p>
            </div>
        </div>
    );
}
 
export default About;
