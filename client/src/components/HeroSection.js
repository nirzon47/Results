import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Get Your Results Here</h1>
            <div className="hero-btns">
                <Link to="/Marks">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        ENTER MARKS
                    </Button>
                </Link>
                <Link to='/Leaderboards'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                    VIEW LEADERBOARDS
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
