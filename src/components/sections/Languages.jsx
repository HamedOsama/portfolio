import React from 'react'
import IconContainer from '../../UI/Containers/IconContainer'
import IconsContainer from '../../UI/Containers/IconsContainer'
import Icon from '../../UI/Icon'
import SubTitle from '../../UI/SubTitle'

const Languages = () => {
  return (
    <div>
      <SubTitle>{'<Languages />'}</SubTitle>
      <IconsContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" alt="HTML" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" alt="CSS" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TS" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySql" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://camo.githubusercontent.com/42dfd0950d93092d82d677877fe87d5bab1e2acccc1110bf0f9dd755988ccb7e/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3330333232392f6d6963726f736f66742d73716c2d7365727665722d6c6f676f2e737667" alt="SqlServer" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />
        </IconContainer>
      </IconsContainer>
    </div>
  )
}

export default Languages