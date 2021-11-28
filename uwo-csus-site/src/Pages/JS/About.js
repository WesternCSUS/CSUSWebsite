// The About Page
import React from 'react';
import '../Styles/About.css';
import MemberCard from '../../Components/JS/MemberCard.js';
import test_image from '../../logo.svg';

const About = () => {
    return ( 
        <div className="About">
            <div className="About__description">
                <p className="About__description_header">What We Do</p>
                <p className="About__description_text">The Computer Science Undergraduate Society is the organization that 
                represents all computer science students at Western University in London, Ontario. As the oldest and 
                most established computer science organization on campus, CSUS is run by students and for students. <br/><br/>
                We work closely with the Department of Computer Science to promote computer science as an academic 
                discipline, to connect students to related university services, and to provide methods of networking 
                between students, faculty, and employers.</p>
            </div>

            <div className="About__members">
                <p className="About__members_header">MEET THE TEAM</p>
                <div className="About__member_cards">
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                    <div className="About__member_card"><MemberCard image={test_image} name = "john doe" role = "president" major = "CS/Statistics" email="johndow@gmail.com" description="I'm not a real person"/></div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
