import React from 'react'
import CustomPageLinkContainer from '../UI/Links/CustomPageLinkContainer'

const CustomPageLink = props => {
  return (
    <CustomPageLinkContainer to={props.link} {...props}>
      <h2>{props.title}</h2>
    </CustomPageLinkContainer>
  )
}

export default CustomPageLink