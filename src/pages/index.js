import React from "react"
import { Link } from "gatsby"
import Header from '../components/header';
import Hero from '../components/hero';
import Main from '../components/main';
import Layout from "../components/layout"
import Timeline from '../components/index'
import Form from '../components/form';

const IndexPage = () => (
 <>
<Layout>
    <Header/>
    <Hero/>
    <Main/>
    <Timeline/>
    <Form/>
    </Layout>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

</>
)

export default IndexPage
