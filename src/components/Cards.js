import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects and Skills</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/itential.jpg'
              text='2021 Summer Internship at Itential'
              label='Node.js/Javascript/MongoDB/MySQL'
              path='/projects'
            />
            <CardItem
              src='images/alan.png'
              text='2020 Internship at Alan AI'
              label='Swift/Objective C/Javascript'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lab.jpg'
              text='2019 Summer Internship at Lawrence-Berkeley Lab'
              label='Python/Jupyter Notebook'
              path='/projects'
            />
            <CardItem
              src='images/coding.jpg'
              text='Side Projects'
              label='Swift/Javascript/HTML/CSS/React'
              path='/projects'
            />
            <CardItem
              src='images/langs.jpg'
              text='Programming Languages and Proficiency'
              label='All Languages'
              path='/langs-skills'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
