import React from 'react';
import './styles/components/media.css';

const User = () => {
    return (
        <div className="media">
            {/* Code Challenge note: the following TODO is a flag to show how I would make a note for myself to handle when we have a user image. */}
            {/* TODO: if no profile image, display placeholder image */}
            <span className="media__image media__image--placeholder"></span>
            {/* else, display image with alt text being the users name*/}
            {/* <img className="media__image" src="http://placehold.it/36" alt="{user.name}" /> */}
            <div className="media__content">
                <p>Julie Howard</p>
                <p>Admin</p>
            </div>
        </div>
    )
}

export default User;