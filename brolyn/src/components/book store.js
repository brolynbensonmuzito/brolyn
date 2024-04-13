import { Link } from 'react-router-dom';
import './BROLYN BOOKSTORE.css'; // Create a new CSS file for BOOKSTORE styles
import React from 'react';
import NavBar from './NavBar';

function BOOKSTORE() {
    return (
        <div className='BROLYN BOOKSTORE'>
            <NavBar />
            <div className='Container'>
                <div className='BROLYN BOOKSTORE'>
                    <img
                        className='img1'
                        src='https://cdn.grabon.in/gograbon/images/merchant/1536747990676.png'
                        alt='KFC Food Image'
                    />
                </div>
                <div className='Heading'>
                    <h3 className='heading3'>Welcome to BROLYN BOOKSTORE</h3>
                    <p>
                        "In a world filled with constant distractions, rapid technological advancements, and ever-changing societal norms,
                        it is easy to lose sight of our true essence. This book serves as a guiding light,
                        rekindling the flame of introspection and inviting you to embark on a transformative expedition.."
                    </p>
                    <Link to='/SignUp'>
                        <button className='signUp'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BOOKSTORE;
