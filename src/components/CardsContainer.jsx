import React from 'react'
import styled from 'styled-components'

import Frameworks from './sections/Frameworks'
import Languages from './sections/Languages'
import VerticalLine from './VerticalLine'
import WindowCard from './WindowCard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardsContainer = () => {
  return (
    <Container>
      <WindowCard
        title="<About Me />"
      >
        <div >
          <p>I am FullStack Developer with a bachelors in Computer Science and experience 1+ year;</p>
          <p>I am also fascinated with Mathematics and wish to make a career out of it someday;</p>
          <p>Currently, I am focused on learning AI and ML;</p>
        </div>
      </WindowCard>
      <VerticalLine
        height="100px"
      />
      <WindowCard
        title="<Experience />"
      >
        <div >
          <h3>FullStack Developer @ Finvo - Part time</h3>
          <p>August 2022 - Present</p>
        </div>
        <div>
          <p>Designed 15+ pages for Finvo system;</p>
          <p>Designed main components for Finvo system;</p>
          <p>Implemented the business logic of the company;</p>
          <p>Integrate the front-end with back-end stack;</p>
          <p>Ensured the performance, quality, and responsiveness for all apps worked on;</p>
          <p>Designed and developed 10+ new features;</p>
        </div>
      </WindowCard>
      {/* <VerticalLine
        height="100px"
        right={true}
      /> */}
      <VerticalLine
        height="100px"
        reverse={true}
      />
      <WindowCard
        title="<Skills />"
      >
        <Languages />
        <Frameworks />
      </WindowCard>
    </Container>
  )
}

export default CardsContainer