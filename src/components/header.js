
import PropTypes from "prop-types"
import React from "react"
import Basketball from '../assets/icon.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2c3965`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, color: 'white' }}>
          <img src={Basketball} style={{ maxHeight: '60px', marginBottom: 0, marginRight: '10px'}} /> 
          {siteTitle} 
          <img src={Basketball} style={{ maxHeight: '60px', marginBottom: 0, marginLeft: '10px'}} /> 

      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
