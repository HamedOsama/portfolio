import React from 'react'
import IconContainer from '../../UI/Containers/IconContainer'
import IconsContainer from '../../UI/Containers/IconsContainer'
import Icon from '../../UI/Icon'
import SubTitle from '../../UI/SubTitle'

const Tools = () => {
  return (
    <div>
      <SubTitle>{'<Tools />'}</SubTitle>
      <IconsContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" alt="Git" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" alt="Github" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nginx/nginx-original.svg" alt="Nginx" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="Aws" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" />
        </IconContainer>
        <IconContainer>
          <Icon src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" alt="VScode" />
        </IconContainer>

      </IconsContainer>
    </div>
  )
}

export default Tools