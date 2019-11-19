import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import theme from '../theme'
import Img from "gatsby-image"



const HeaderWrapper = styled.header`
  padding-top: ${theme.space[6]}px;
  display: flex;
  justify-content: space-between;
`

const MenuItem = styled.p`
  margin-right: ${theme.space[6]}px;
  font-weight: bold;
  display: inline-block;
  opacity: ${p => p.active ? 1 : 0.5};
  cursor: pointer;
  transition: 0.3s ease-in;

  :hover {
    transition: 0.3s ease-in;
    opacity: 1;
  }
`

const Social = styled.a`
  margin-left: ${theme.space[5]}px;
`

const menuItems = [
  "Home",
  "About",
  "Projects",
  "Blog(soon)"
]

const social = {
  "Twitter": "https://twitter.com/torgeadelin",
  "Github": "https://github.com/torgeadelin"
}



const Header = ({ siteTitle }) => (
  <div className="container">
    <HeaderWrapper>
      <div>
        {menuItems.map((item, index) =>
          <MenuItem active={index == 0} key={index} href="">
            <Link to={"/" + item.toLowerCase()}>{item}</Link>
          </MenuItem>
        )}
      </div>
      <div>{Object.entries(social).map(([key, value]) =>
        <Social href={value} key={value}>{key}</Social>
      )}
      </div>

    </HeaderWrapper>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
