import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type ButtonStyledProps={
    fontSize?:string
    color?:string
   /* primary?:boolean
    outlined?:boolean*/
    btnType: 'primary' | 'outlined'
    active?: boolean
}
export const StyledBtn = styled.button<ButtonStyledProps>`
  border: none;
/*  background-color: ${props=>props.color ||'#fa3f78'};*/
  border-radius: 10px;
  padding: 10px 20px;
  color: snow;
  font-size: ${props=>props.fontSize || '2rem'};
  font-weight: bold;

  &:hover {
    background-color: #6a2081;
  }
  //outlined
  ${props=>props.btnType ==='outlined' &&  css<ButtonStyledProps>`
    border: 2px solid ${props=>props.color ||'#fa3f78'};
    color: ${props=>props.color ||'#fa3f78'};
    background-color: transparent;
    
    &:hover{
      border-color: blue;
      color:blue;
      background-color: transparent;
    }
  `}
 //primary
  ${props=>props.btnType ==='primary' &&  css<ButtonStyledProps>`
  background-color: ${props => props.color || '#fa3f78'};
  color: snow;
`}
 ${props=>props.active &&  css<ButtonStyledProps>`
  box-shadow: 5px 5px 5px 5px rgba(220, 3, 66, 0.67);
`}
`