import React from 'react'
import './aboutSection.css'
import { Button, Typography, Avatar } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
const About = () => {
  const visitLinkedIn = () => {
    window.location = 'https://www.linkedin.com/in/kishan-patel-b50466205/'
  }
  return (
    <div className='aboutSection'>
      <div></div>
      <div className='aboutSectionGradient'></div>
      <div className='aboutSectionContainer'>
        <Typography component='h1'>About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src='https://res.cloudinary.com/dfq7evxe2/image/upload/v1639998835/avatars/IMG_20211219_230005_bbgngq.jpg'
              alt='Founder'
            />
            <Typography>Kishan Patel</Typography>
            <Button onClick={visitLinkedIn} color='primary'>
              Visit LinkedIn
            </Button>
            <span>This is a sample wesbite made by @meKishan.</span>
          </div>
          <div className='aboutSectionContainer2'>
            <Typography component='h2'>Our Brands</Typography>
            <a
              href='https://www.linkedin.com/in/kishan-patel-b50466205/'
              target='blank'
            >
              <LinkedInIcon className='linkedInSvgIcon' />
            </a>
            <a href='https://www.instagram.com/kishanpatel3834/' target='blank'>
              <InstagramIcon className='instagramSvgIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
