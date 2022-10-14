import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from './SVGS'

const Power = styled.span`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FCF6F4;
  padding: 0.3rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
  z-index: 10;
  &:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 0.4rem 0.4rem rgba(0,255,0,0.4);
  }
`
const PowerButton = () => {
  return (
    <div>
      <Power>
        <NavLink to="/">
          <PowerBtn width={30} height={30} fill="currentColor" />
        </NavLink>
      </Power>
    </div>
  )
}

export default PowerButton