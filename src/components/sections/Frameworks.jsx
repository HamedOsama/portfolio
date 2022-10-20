import React from 'react'

import SubTitle from '../../UI/SubTitle'
import IconContainer from '../../UI/Containers/IconContainer'
import IconsContainer from '../../UI/Containers/IconsContainer'
import Icon from '../../UI/Icon'

const Frameworks = () => {
  return (
    <div>
      <SubTitle>{'<Frameworks />'}</SubTitle>
      <IconsContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original.svg" alt="NextJs" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg" alt="Express" />
        </IconContainer>
        <IconContainer className='white__bg'>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/django/django-plain-wordmark.svg" alt="Django" />
        </IconContainer>
      </IconsContainer>
    </div>
  )
}

export default Frameworks