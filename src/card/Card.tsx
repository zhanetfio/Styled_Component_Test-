import styled from "styled-components";
import desertDuneImg from '../common/images/Rectangle1.png'
import {StyledBtn} from "../components/Button.styled";

export const Card = () => {

    return (
        <CardBox>
            <Image/>
            <CardContent>
                <Title>Headline</Title>
                <Description>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </Description>
                <ButtonGroup>
                    <StyledBtn fontSize={'10px'} btnType={"primary"}> See more</StyledBtn>
                    <StyledBtn fontSize={'10px'} btnType={"outlined"}> Save</StyledBtn>
                </ButtonGroup>
            </CardContent>

        </CardBox>
    )
}

const CardBox = styled.div`
  width: 300px;
  height: 350px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
`
const Image = styled.div`
  width: 280px;
  height: 170px;
  background-image: url(${desertDuneImg});
  border-radius: 10px;
`
const CardContent = styled.div`
  padding: 20px 10px;
  
`

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
const Description = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ABB3BA;
  padding: 10px 0;
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`