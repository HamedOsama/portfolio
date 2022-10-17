import React, { useState } from 'react'
import styled from 'styled-components'
import DarkContainer from '../UI/Containers/DarkContainer'
import MainContainer from '../UI/Containers/MainContainer'
import CustomPageLink from './CustomPageLink'
import Intro from './Intro'
import Logo from './Logo'
import MainAnimatedLogo from './MainAnimatedLogo'
import PowerButton from './PowerButton'
import SocialIcons from './SocialIcons'
import { LightTheme, DarkTheme } from './Themes'

const Container = styled.div`
  padding : 2rem;
`

const Main = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openHandler = () => {
    setIsOpened(prev => !prev);
  }
  console.log(isOpened)
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Logo theme={isOpened ? DarkTheme : LightTheme} />
        <MainAnimatedLogo onClick={openHandler} isOpened={isOpened} />
        <DarkContainer isOpened={isOpened} />
        <SocialIcons theme={isOpened ? DarkTheme : LightTheme} />
        <CustomPageLink
          title="Blog"
          link="/blog"
          top="50%"
          right="calc(1rem + 2vw)"
          transform='rotate(90deg) translate(-50%,-50%)'
        />
        <CustomPageLink
          title="Work"
          link="/work"
          top="50%"
          left="calc(1rem + 2vw)"
          transform='translate(-50%,-50%) rotate(-90deg)'
          is_opened={`${isOpened}`}
          has_overlay={'true'}
        />
        <CustomPageLink
          title="About"
          link="/about"
          bottom="1rem"
          left="calc(50% - 20vw)"
          transform='translateX(-50%)'
          is_opened={`${isOpened}`}
          has_overlay={'true'}
        />
        <CustomPageLink
          title="Skills"
          link="/skills"
          bottom="1rem"
          left="calc(50% + 20vw)"
          transform='translateX(-50%)'
        />
      </Container>
      {isOpened && <Intro />}
    </MainContainer>
  )
}

export default Main