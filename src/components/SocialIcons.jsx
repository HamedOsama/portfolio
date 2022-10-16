import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Line from '../UI/Line/Line'
import LineContainer from '../UI/Line/LineContainer'
import { Facebook, Github, Twitter, YouTube } from './SVGS'
// import { DarkTheme } from './Themes'
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 1;
`
const SocialIcons = props => {
  return (
    <Icons>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Github width={25} height={25} fill={props.theme.text} />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Facebook width={25} height={25} fill={props.theme.text} />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Twitter width={25} height={25} fill={props.theme.text} />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <YouTube width={25} height={25} fill={props.theme.text} />
        </NavLink>
      </div>
      <LineContainer>
        <Line theme={props.theme} />
      </LineContainer>
    </Icons>
  )
}

export default SocialIcons