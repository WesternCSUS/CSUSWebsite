import React from 'react';
import '../Styles/MemberCard.css';

// The component representing a card for each team member in the "MEET THE TEAM" section
const MemberCard = (props) => {
    const image = props.image
    const name = props.name
    const role = props.role
    const major = props.major
    const email = props.email
    const description = props.description

    return ( 
        <div className="Card">
            <div className="Card__left_part">
                <img src={image} alt="" className="Card__image"/>
                <div className="Card__name_div"><span className="Card__name">{name}</span><br/></div>
                <span className="Card__role">{role}</span><br/>
                <span className="Card__major">{major}</span><br/>
                <span className="Card__email">{email}</span>
                {/* <div className="Card__info"><span className="Card__role">{role}</span><br/>{major}<br/>{email}</div> */}
            </div>
            <div className="Card__right_part">
                <p className="Card__description">{description}</p>
            </div>
        </div>
    );
}
 
export default MemberCard;
