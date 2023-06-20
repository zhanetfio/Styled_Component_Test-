import './App.css';
import styled from 'styled-components';
import {StyledBtn } from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {myTheme} from "./styles/Theme.styled";
import {Card} from "./card/Card";


function App() {
    return (
        <div className="App">

            <Box>
                <Card/>
               {/* <StyledBtn color='red' fontSize={'20px'}>Hello</StyledBtn>
                <StyledBtn color='green'>Hello</StyledBtn>
                <StyledBtn fontSize={'30px'}>Hello</StyledBtn>*/}

                {/*<StyledBtn primary> Hello</StyledBtn>
                <StyledBtn outlined> Hello</StyledBtn>*/}

              {/*  <StyledBtn color={myTheme.colors.secondary}  btnType={'primary'} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.primary} btnType={'outlined'}>Hello</StyledBtn>*/}
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet}{
    flex-direction: column;
  }
`
