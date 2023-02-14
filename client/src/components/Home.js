import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'

const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Nibh nisl condimentum id venenatis a condimentum vitae. Tincidunt eget nullam non nisi est. Dictum non consectetur a erat nam at lectus urna. Vitae elementum curabitur vitae nunc sed velit dignissim. Molestie a iaculis at erat pellentesque adipiscing. Morbi tristique senectus et netus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas purus viverra accumsan in. Leo duis ut diam quam nulla porttitor massa id neque. Eget magna fermentum iaculis eu non diam phasellus. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Elementum facilisis leo vel fringilla est. Pulvinar elementum integer enim neque volutpat. Vulputate dignissim suspendisse in est ante. Commodo viverra maecenas accumsan lacus vel. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pulvinar neque laoreet suspendisse interdum consectetur libero. Est ullamcorper eget nulla facilisi etiam dignissim.</p>
      <div className='footer'>
        <button className='button'>Sign Up</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed libero enim. Vulputate odio ut enim blandit volutpat.</p>
      </div>
    </div>
  )
}

export default Home