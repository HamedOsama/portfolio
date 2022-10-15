import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Line from '../UI/Line/Line'
import LineContainer from '../UI/Line/LineContainer'
import { Facebook, Github, Twitter, YouTube } from './SVGS'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 2rem;
`
const SocialIcons = () => {
  return (
    <Icons>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div className="">
        <NavLink target="_blank" to={{ pathname: "https://github.com/HamedOsama" }}>
          <YouTube width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <LineContainer>
        <Line />
      </LineContainer>
    </Icons>
  )
}

export default SocialIcons