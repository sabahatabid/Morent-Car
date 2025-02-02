import React from 'react'
import Content from '@/app/components/content/Content'
import Card from '@/app/components/content/Card' 
import Card2 from '@/app/components/content/Card-2' 



const Hero = () => {
  return (
    <div className='w-full h-fit bg-contentBg border border-black-900'>
      <Content />
      <Card />
      <Card2 />
    </div>
  )
}

export default Hero