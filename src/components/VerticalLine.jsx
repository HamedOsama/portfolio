import React from 'react'
import StaticLine from '../UI/Line/StaticLine'
import VerticalLineContainer, { Up, Down, Circle } from '../UI/Line/VerticalLineContainer'

const VerticalLine = props => {
  const reverse = props.reverse ? 'reverse' : '';
  return (
    <VerticalLineContainer height={props.height} style={{ justifyContent: `${props.right ? 'right' : ''}` }} >
      {/* <StaticLine /> */}
      <Up className={reverse} />
      <Circle />
      <Down className={reverse} />
    </VerticalLineContainer>
  )
}

export default VerticalLine