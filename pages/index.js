import React from 'react'
import Header from '../Layouts/Dashboard/header'
import Hero from '../Layouts/Dashboard/hero'
import Trust from '../Layouts/Dashboard/trust'
import Sixth from '../Layouts/Dashboard/sixth'
import Fifth from '../Layouts/Dashboard/fifth'
import Fourth from '../Layouts/Dashboard/fourth'
import Third from '../Layouts/Dashboard/third'
import Second from '../Layouts/Dashboard/second'
import First from '../Layouts/Dashboard/first'
import Last from '../Layouts/Dashboard/last'
import Footer from '../Layouts/Dashboard/footer'

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Trust />
        <Sixth />
      <Fifth />
      <Fourth />
      <Third />
      <Second />
      <First />
      <Last />
      <Footer />
    </div>
  )
}
