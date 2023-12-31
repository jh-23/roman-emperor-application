import React from 'react';
import { Link } from 'react-router-dom';

function EmperorCard({ emperor }) {

    return (
        <div>
            <article>
                <p>
                <Link to={`/emperorprofile/${emperor.id}`}>{emperor.name}</Link>
                </p>
            </article>
        </div>
    );
};

export default EmperorCard;