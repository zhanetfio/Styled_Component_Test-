import styled from "styled-components";


export const Menu=styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: #0f8c0f;
    }

    li + li {
      margin-left: 20px;
    }
  }
`