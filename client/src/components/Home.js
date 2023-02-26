import React from 'react'
import ImageSlider from './ImageSlider'
import { Link } from "react-router-dom";
import { SliderData } from './SliderData'
import clarityOne from '../assets/images/clarityOne.jpeg'
import creativity from '../assets/images/creativity.jpeg'
import gratitude from '../assets/images/gratitude.jpeg'
import memory from '../assets/images/memory.jpeg'
import reflection from '../assets/images/reflection.jpeg'
import stress from '../assets/images/stress.jpeg'
import journalDivider from '../assets/images/journalDivider.jpeg'


const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <div className='textContainer section text-center a'>
        <h3>What are you writing for?</h3>
        <p> Whether you're looking for a tool to record your daily emotions and activities in a reflective journal, keep track of milestones in a food diary or pregnancy journal, or even record your dreams in a dream journal, Journey has you covered.</p>
        <p>Journey gives you all the tools you need to focus on the ideas you want to preserve, rather than the process of writing itself.</p>
        <Link to="/users/new" className="button">
        Get Started
        </Link>
      </div>
      <div className="journal-divider">
        <img src={journalDivider} alt="Journal Divider" />
      </div>
      <div className='textContainer section c'>
        <h3>Why you should Journal</h3>
        <div className='grid-x grid-margin-x'>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={reflection}/>
            </div>
            <h5>Reflection</h5>
            <p>Writing in a journal allows for self-reflection, helping to process thoughts and feelings.</p>
          </div>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={creativity}/>
            </div>
            <h5>Creativity</h5>
            <p>Journaling can stimulate creativity, allowing for new ideas to flow freely.</p>
          </div>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={clarityOne}/>
            </div>
            <h5>Clarity</h5>
            <p>Journaling can bring clarity to confusing or overwhelming situations, helping to organize thoughts and emotions.</p>
          </div>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={gratitude}/>
            </div>
            <h5>Gratitude</h5>
            <p>Writing down things to be grateful for can boost mood and improve overall well-being.</p>
          </div>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={memory}/>
            </div>
            <h5>Memory</h5>
            <p>Journaling can serve as a record of important memories, experiences, and personal growth.</p>
          </div>
          <div className='cell small-12 medium-4 text-center'>
            <div className="image-cropper center-image">
              <img className='why-pics' src={stress}/>
            </div>
            <h5>Stress Reduction</h5>
            <p>Journaling has been shown to reduce stress levels by providing a healthy outlet for emotional expression.</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3>Ready to start a Journey? Sign Up Now!</h3>
        <Link to="/users/new" className="button">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Home