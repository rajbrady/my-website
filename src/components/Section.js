import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='hero-container'>
      <video src='/videos/video2.mp4' autoPlay loop muted />
      <h1> Welcome to my Website</h1>
      <p> What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn-outline'
          buttonSize='btn--large'
        >
          View Projects
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View Languages and Skills
        </Button>
      </div>
    </div>
  )
}

export default Section;
