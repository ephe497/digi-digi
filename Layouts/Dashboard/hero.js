import React from 'react'
import Header from './header'
import Title from '../../Components/Title'
import Button from '../../Components/button/Button'

export default function Hero() {
  return (
    <div className='hero' id='top'>

              <div className='m-auto col-md-7 col-10 text-center txt'>
                <Title type='title'>Metaverse Reimagined</Title>
                <Title type="title38" className='mt-5'>
                The horizontal layered metaverse that’s ever built
                </Title>
               <Button type="mint">
               < Title type="pop-nav3">Mint Now </Title>
               </Button>
              </div>
        {/* </div> */}

    </div>
  )
}