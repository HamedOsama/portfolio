import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #24292f;
  border-radius: 1rem;
  overflow: hidden;
`
const Container = styled.div`
  padding: 2rem ;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p{
    color : #94969b ; 
  }
  p::selection{
    background-color: var(--green);
  }
`
const Header = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid transparent;
  background-color: #1b1f23;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 1rem;
`
const Button = styled.span`
  width: 0.65rem;
  height : 0.65rem;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const Title = styled.h2`
  color :#94969b;
  text-align: center;
`
const WindowCard = props => {
  return (
    <Card>
      <Header >
        <ButtonContainer>
          <Button color='#d2534f' />
          <Button color='#d29f2f' />
          <Button color='#25a83d' />
        </ButtonContainer>
      </Header>
      <Container>
        <Title>{props.title}</Title>
        {props.children}
      </Container>
    </Card>
  )
}

export default WindowCard