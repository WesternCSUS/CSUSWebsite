import React from 'react';
import '../Styles/MemberCard.css';

// The component representing a card for each team member in the "MEET THE TEAM" section
const MemberCard = (props) => {
    const image = props.image
    const name = props.name
    const title = props.title
    const major = props.major
    const email = props.email
    const description = props.description

    return ( 
        <div className="Card">
            <img src={image} alt="" className="Card__image"/>
            <p className="Card__name">{name}</p>
            <p className="Card__title">{title}</p>
            <p className="Card__major">{major}</p>
            <p className="Card__email">{email}</p>
            <p className="Card__description">{description}</p>
        </div>
    );
}
 
export default MemberCard;
