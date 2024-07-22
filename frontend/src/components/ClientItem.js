import React from 'react';

const ClientItem = ({ logo }) => (
    <li className="clients-item">
        <a href="#">
            <img src={logo} alt="client logo" />
        </a>
    </li>
);

export default ClientItem;
