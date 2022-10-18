import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Icon from '../components/icons/icon'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import Logo from '../components/Logo'
import SocialIcons from '../components/SocialIcons'
import { DarkTheme } from '../components/Themes'
import PowerButton from '../components/PowerButton'
import AnchorSlider from '../components/AnchorSlider'
const BackgroundContainer = styled.div`
body{
  ::-webkit-scrollbar{
    color: red;
  }
  background-color: red !important;
}
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* height: 100vh; */
  /* overflow-y : scroll; */
  overflow-x: hidden;
  width: 100%;
`
const OverlayContainer = styled.div`
  /* background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`}; */
  background-color : ${props => `rgba(0,0,0,0.8)`};
  width : 100%;
  height : auto;
  padding: 100px 150px;
  /* overflow-y : scroll; */
    @media (max-width: 1080px) {
      padding: 100px 100px;
    }
    @media (max-width: 768px) {
      padding: 100px 50px;
    }
    @media (max-width: 480px) {
      padding: 100px 25px;
    }
`
const Container = styled.div`
  max-width: 1000px;
  /* height: 100vh; */
  margin: 0 auto;
`
const Project = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
    a{
      cursor: pointer;
    }
    a:hover{
      color: var(--green);
      transition: var(--transition);
    }
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: var(--white);
      a {
        position: static;
        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.1em;
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
    }
    strong {
      color: var(--white);
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    a {
      cursor: pointer;
    &:hover{
      color: var(--green);
      transition: var(--transition);
    }
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .cta {
    margin: 10px;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    }
  }
  .project-image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      display: flex;
      &:hover,
      &:focus {
        background: transparent;
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }
    .img {
      width: 100%;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`

const Work = () => {
  return (
    <BackgroundContainer>
      <OverlayContainer>
        <Container>
          <Logo theme={DarkTheme} />
          <PowerButton />
          <SocialIcons theme={DarkTheme} />
          <AnchorSlider theme={DarkTheme} />
          <Project>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href="https://spotify-profile.herokuapp.com/" rel="noopener noreferrer" target="_blank">Spotify Clone</a>
                </h3>
                <div className="project-description">
                  <a href="https://github.com/HamedOsma">Github</a> React Web3 NFT Listing Web Application using ReactJs, ThirdWeb and opensea api and metamask wallet. The address as well as the punks are displayed dynamically from Opensea Marketplace.
                </div>
                <ul className="project-tech-list">
                  <li >React</li>
                  <li >Redux</li>
                  <li >Styled Components</li>
                  <li >Spotify API</li>
                </ul>
                <div className="project-links">
                  <a href="_" aria-label="GitHub Link" >
                    <Icon name="GitHub" />
                  </a>
                  <a href={"_"} aria-label="External Link" className="external">
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className='project-image'>
              <a href="_">
                <img className='img' src="	https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp" alt="" />
              </a>
            </div>
          </Project>
          <Project>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href="_">Spotify Clone</a>
                </h3>
                <div className="project-description">
                  React Web3 NFT Listing Web Application using ReactJs, ThirdWeb and opensea api and metamask wallet. The address as well as the punks are displayed dynamically from Opensea Marketplace.
                </div>
                <ul className="project-tech-list">
                  <li >React</li>
                  <li >Redux</li>
                  <li >Styled Components</li>
                  <li >Spotify API</li>
                </ul>
                <div className="project-links">
                  <a href="_" aria-label="GitHub Link">
                    <Icon name="GitHub" />
                  </a>
                  <a href={"_"} aria-label="External Link" className="external">
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className='project-image'>
              <a href="_">
                <img className='img' src="	https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp" alt="" />
              </a>
            </div>
          </Project>
          <Project>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href="_">Spotify Clone</a>
                </h3>
                <div className="project-description">
                  React Web3 NFT Listing Web Application using ReactJs, ThirdWeb and opensea api and metamask wallet. The address as well as the punks are displayed dynamically from Opensea Marketplace.
                </div>
                <ul className="project-tech-list">
                  <li >React</li>
                  <li >Redux</li>
                  <li >Styled Components</li>
                  <li >Spotify API</li>
                </ul>
                <div className="project-links">
                  <a href="_" aria-label="GitHub Link">
                    <Icon name="GitHub" />
                  </a>
                  <a href={"_"} aria-label="External Link" className="external">
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className='project-image'>
              <a href="_">
                <img className='img' src="	https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp" alt="" />
              </a>
            </div>
          </Project>
          <Project>
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href="_">Spotify Clone</a>
                </h3>
                <div className="project-description">
                  React Web3 NFT Listing Web Application using ReactJs, ThirdWeb and opensea api and metamask wallet. The address as well as the punks are displayed dynamically from Opensea Marketplace.
                </div>
                <ul className="project-tech-list">
                  <li >React</li>
                  <li >Redux</li>
                  <li >Styled Components</li>
                  <li >Spotify API</li>
                </ul>
                <div className="project-links">
                  <a href="_" aria-label="GitHub Link">
                    <Icon name="GitHub" />
                  </a>
                  <a href={"_"} aria-label="External Link" className="external">
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className='project-image'>
              <a href="_">
                <img className='img' src="	https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp" alt="" />
              </a>
            </div>
          </Project>
        </Container>
      </OverlayContainer>
    </BackgroundContainer>
  )
}

export default Work