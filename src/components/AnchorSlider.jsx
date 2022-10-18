import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useSpring, useViewportScroll } from "framer-motion";

import { Anchor, Link } from './SVGS'

const Container = styled.div`
  position: relative;
`
const Slider = styled(motion.div)`
  position: fixed;
  top: -100%;
  right: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .chain{
    transform: rotate(135deg);
  }
`
const AnchorSlider = props => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const { scrollYProgress } = useViewportScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  useEffect(
    () => {
      scaleY.onChange(e => {
        setCurrentPosition(e * 100)
      })
    }, [scaleY])
  return (
    <Container>
      <Slider style={{ translateY: `${currentPosition}%` }}>
        {
          [...Array(25)].map((_, i) => (
            <Link className="chain" key={i} width={25} height={25} fill={props.theme.text} />
          )
          )
        }
        <Anchor width={70} height={70} fill={props.theme.text} />
      </Slider>
    </Container>
  )
}

export default AnchorSlider