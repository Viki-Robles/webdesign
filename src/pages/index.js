import React from "react"
// import { Link } from "gatsby"
import Hero from '../components/hero';
import Main from '../components/main';
import Layout from "../components/layout"
import Timeline from '../components/index'
import Form from '../components/form';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const IndexPage = () => (
    <>
     
            <NavBar />
            <Hero />
            <Main />
            <Timeline />
            <Form />
            <Footer />

    </>
)

export default IndexPage
