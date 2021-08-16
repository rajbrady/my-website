import React from 'react';
import './Aboutme.css';
import Aboutitem from './Aboutitem'
import CardItem from './CardItem';

function Aboutme() {
  return (
    <>

      <div className='aboutme'>
      <h1> About Me </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <Aboutitem
            text="Hi! My name is Raj Janardhan and welcome to my website!
            I'm a sophomore at Georgia Tech majoring in Computer Science. My threads are Information and Infonetworks and Artificial Intelligence. My interests in computer science range from app development, machine learning, full stack, and more. I am always looking for ways to expand my knowledge in all realms of Computer Science. Currently, I am looking for an internship for Summer 2022, so if you have any related me, feel free to contact me at rjanardhan3@gatech.edu."
            label='Introduction'
            />
            <div className='interests'>
              <h1> Interests </h1>
              <ul>
                <li> Full-Stack Development </li>
                <li> Machine Learning </li>
                <li> Adapters </li>
                <li> Databases </li>
                <li> Natural Language Processing </li>
                <li> Mobile App Development </li>
              </ul>
            </div>
          </ul>

        </div>
      </div>
      <div class="timeline">
        <div class="container right">
          <div class="content">
            <h1> Active Safety for Autonomous and Semi-Autonomous Vehicles </h1>
            <h3> Researcher </h3>
            <h4> August 2021 - Present </h4>
            <p> Implementing models to advance predictive capabilities within the car's
            object detection, so that the autonomous car can drive like an "expert" car
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h1>Itential</h1>
            <h3>Software Engineering Intern</h3>
            <h4>May 2021 - June 2021 </h4>
            <p> Worked on the Adapters team. Wrote parsers to dereference and handle circular
            references. Implemented the dereferencing and optimized the company's adapter engine's
            handling of openAPI files. Built an open-source Clearpass Adapter and debugged Itential's
            open-source SQL adapter. Implemented broker integration within the company's adapter engine.
             </p>
          </div>
        </div>
      <div class="container right">
        <div class="content">
          <h1>IpserLab</h1>
          <h3>Software Engineering Intern</h3>
          <h4> January 2021 - May 2021 </h4>
          <p> Connected the database to the desktop application. Debugged problems within the
          website in Firebase. Built the login pages using HTML, CSS, and Javascript.
          </p>
        </div>
      </div>
      <div class="container left">
       <div class="content">
        <h1> Alan AI</h1>
        <h3>Software Engineering Intern</h3>
        <h4> June 2020 - December 2020 </h4>
        <p> Built mobile applications that implemented Alan AI's voice capabilities. Wrote an
        iOS application that used Alan to help medicare individuals communicate patient information and an
        application to consolidate all the communication services. Also wrote scripts for Alan AI's
        Udemy course.</p>
       </div>
      </div>
      <div class="container right">
        <div class="content">
          <h1> Lawrence-Berkeley National Lab</h1>
          <h3>Software Engineering Intern</h3>
          <h4> June 2019 - August 2019 </h4>
          <p> Coded neural networks that used natural language processing to detect and identify
          suicidal trends within veterans based on their medical notes. Trained these models on
          data from the US Department of Veteran Affairs and on the Cori Supercomputer
          </p>
        </div>
      </div>
      <div class="container left">
       <div class="content">
        <h1> UC Berkeley </h1>
        <h3>Intern</h3>
        <h4> June 2018 - August 2018 </h4>
        <p> Studied the limbic system and sensorimotor control and looked for ideas to implemented in neural networks.</p>
       </div>
      </div>
      </div>
      </div>
      <div class='graph'>

      </div>
    </>
  )
}

export default Aboutme;
