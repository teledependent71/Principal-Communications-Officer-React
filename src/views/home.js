import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Communications Officer</title>
        <meta property="og:title" content="Principal Communications Officer" />
      </Helmet>
    </div>
  )
}

export default Home
