import React from 'react'
import Title from '../../Components/Title'
// import { FaBeer } from 'react-icons/fa';

export default function Trust() {
  return (
  <div className='trust normal-bg'> 
    <div className='d-md-flex d-block'>

  <div className='col-12 col-md-7'>
    <Title   label={""} type='title40'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia do amet sint velit officia.
    </Title>
    {/* <h1>The most trusted way to build future.</h1> */}
  </div>
  <div className='col-1'></div>
  <div className='col-12 col-md-4'>
  <Title type="font24" className='mt-5 mt-md-0'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Title>
<Title type="font24" className='mt-5'>
Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Title>
  </div>
  
   </div>
   <div className='m514 col-12 col-md-10 m-auto'>
    <Title type='font80'>
    A octahedron shaped continents with 7 layers. 
    </Title>
    <div className='col-10 m-auto text-center mt-5'>
      <Title type='font24'>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </Title>
    </div>
    
   </div>
  </div>
    )
  }