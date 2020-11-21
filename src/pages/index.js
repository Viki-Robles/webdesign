import React from "react"
import { Link } from "gatsby"
import Header from '../components/header';
import Hero from '../components/hero';
import Main from '../components/main';
import About from '../components/about';
import Form from '../components/form';
import Layout from "../components/layout"

const IndexPage = () => (
 <>
<Layout>
    <Header/>
    <Hero/>
    <Main/>
    <About/>
    <Form/>
    </Layout>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

</>
)

export default IndexPage
