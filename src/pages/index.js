import React from "react"
// import { Link } from "gatsby"
import Hero from '../components/hero';
import Main from '../components/main';
import Timeline from '../components/index'
import Form from '../components/form';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';

const IndexPage = () => (
    <>

            <NavBar />
            <Hero />
            <Main />
            <Timeline />
            <Testimonials/>
            <Form />
            <Footer />
       
    </>
)

export default IndexPage
