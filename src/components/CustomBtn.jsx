import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import './CustomBtn.css';

const CustomBtn = ({ text }) => {
    return (
        <Link
            to="/"
            className="return_home_btn"
        >
            <BsFillHouseHeartFill className="house_icon" />
            {text}
        </Link>
    );
};

export default CustomBtn;
