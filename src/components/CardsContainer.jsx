import React from 'react'
import WindowCard from './WindowCard'

const CardsContainer = () => {
  return (
    <div>
      <WindowCard
        title="<About Me />"
      >
        <div >
          <p>I am FullStack Developer with a bachelors in Computer Science and experience 1+ year;</p>
          <p>I am also fascinated with Mathematics and wish to make a career out of it someday;</p>
          <p>Currently, I am focused on learning AI and ML;</p>
        </div>
      </WindowCard>
      <div style={{ height: 75 }} />
      <WindowCard
        title="<Experience />"
      >
        <div >
          <h3>FullStack Developer @ Finvo</h3>
          <p>January 2022 - May 2022</p>
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
    </div>
  )
}

export default CardsContainer