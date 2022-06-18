import React from 'react'
import Banner from '../components/Banner'
import { CourseDesc } from '../components/CourseDesc'
import CourseList from '../components/CourseList'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
        <Banner />

        <CourseDesc />
        <CourseList />
        <Footer />


    </div>
  )
}

export default Home