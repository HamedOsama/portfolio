import React from 'react'
import { motion } from 'framer-motion'
import CustomPageLinkContainer from '../UI/Links/CustomPageLinkContainer'

const CustomPageLink = props => {
  return (
    <CustomPageLinkContainer to={props.link} {...props}>
      <motion.h2
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {props.title}
      </motion.h2>
    </CustomPageLinkContainer>
  )
}

export default CustomPageLink