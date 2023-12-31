import React from 'react';
import { Link } from 'react-router-dom';

function EmperorCard({ emperor }) {

    return (
        <div>
            <article>
                <h2>{emperor.name}</h2>
                <p>
                <Link to={`/emperorprofile/${emperor.id}`}>View Profile</Link>
                </p>
            </article>
        </div>
    );
};

export default EmperorCard;