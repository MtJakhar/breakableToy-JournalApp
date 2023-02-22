import React from 'react'
import ImageSlider from './ImageSlider'
import { Link } from "react-router-dom";
import { SliderData } from './SliderData'

const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <div className='textContainer'>
        <h3>What are you writing for?</h3>
        <p> Whether youre looking for a tool to record your daily emotions and activities in a reflective journal, keep track of milestones in a food diary or pregnancy journal, or even record your dreams in a dream journal, MyJournal has you covered.</p>
        <p>MyJournal gives you all the tools you need to focus on the ideas you want to preserve, rather than the process of writing itself.</p>
        <Link to="/users/new" className="button">
        Get Started
        </Link>
      </div>
      <div className='textContainer'>
        <h3>Why you should Journal</h3>
        <div className='grid-x'>
          <div className='cell small-4'>
            <h5>Reflection:</h5>
            <p>Writing in a journal allows for self-reflection, helping to process thoughts and feelings.</p>
          </div>
          <div className='cell small-4'>
            <h5>Creativity:</h5>
            <p>Journaling can stimulate creativity, allowing for new ideas to flow freely.</p>
          </div>
          <div className='cell small-4'>
            <h5>Clarity:</h5>
            <p>Journaling can bring clarity to confusing or overwhelming situations, helping to organize thoughts and emotions.</p>
          </div>
          <div className='cell small-4'>
            <h5>Gratitude:</h5>
            <p>Writing down things to be grateful for can boost mood and improve overall well-being.</p>
          </div>
          <div className='cell small-4'>
            <h5>Memory:</h5>
            <p>Journaling can serve as a record of important memories, experiences, and personal growth.</p>
          </div>
          <div className='cell small-4'>
            <h5>Stress Reduction:</h5>
            <p>Journaling has been shown to reduce stress levels by providing a healthy outlet for emotional expression.</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3>Ready to start writing? Sign Up Now!</h3>
        <Link to="/users/new" className="button">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Home