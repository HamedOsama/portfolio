import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CustomPageLinkContainer = styled(NavLink)`
color : ${props => props.has_overlay === 'true' && props.is_opened === 'true' ? props.theme.body : props.theme.text};
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
bottom: ${props => props.bottom};
transform: ${props => props.transform};
z-index: 1;
`

export default CustomPageLinkContainer