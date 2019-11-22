import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import theme from '../theme'
import Img from "gatsby-image"
import Burger from '../components/burger'


const HeaderWrapper = styled.header`
  ${space}
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

const menuItems = {
  "Home": "/",
  "About": "#about",
  "Projects": "/projects",
  "Blog(soon)": "/"
}

const social = {
  "Twitter": "https://twitter.com/torgeadelin",
  "Github": "https://github.com/torgeadelin"
}


const MobileMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  width: 100%;
  padding: ${theme.space[6]}px;
 
  background-color: black;
  left: 0px;
  z-index: 999;
  transition: 0.3s ease-in;

  a {
    color: white;
    opacity: 1;
    border-bottom-color: white;
    margin-top:  ${theme.space[4]}px;
    cursor: pointer;
  }

  p {
    color:white;
    margin-bottom: ${theme.space[4]}px;
    
  }

`

const DesktopMenuWrapper = styled.div`
  ${layout};
`

class Header extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isMenuExpanded: false
    }
  }

  render() {
    return (
      <div className="container">
        <Burger onClick={() => this.setState({ isMenuExpanded: true })} display={["flex", "none", "none"]} />
        <HeaderWrapper pt={[4, 4, 5]}>

          {this.state.isMenuExpanded && <MobileMenuWrapper>
            {
              Object.entries(menuItems).map(([key, value]) =>
                <MenuItem key={key} href="">
                  <Link to={value}>{key}</Link>
                </MenuItem>
              )}
            <a onClick={() => this.setState({ isMenuExpanded: false })}>Close</a>
          </MobileMenuWrapper>}

          <DesktopMenuWrapper display={["block", "none", "none"]} />
          <DesktopMenuWrapper display={["none", "block", "block"]}>
            {Object.entries(menuItems).map(([key, value]) =>
              <MenuItem key={key} href="">
                <Link to={value}>{key}</Link>
              </MenuItem>
            )}
          </DesktopMenuWrapper>
          <div>{Object.entries(social).map(([key, value]) =>
            <Social href={value} key={value}>{key}</Social>
          )}
          </div>

        </HeaderWrapper>
      </div>
    )
  }
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
