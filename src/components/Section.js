import React from 'react';
import styled  from 'styled-components';
import sectionData from './data/sectionData.json';

function Section() {
        
    return (
        <>
            { sectionData && sectionData.map((data, index) => (
                <Wrap key={index}>
                    <ItemText>
                        <h1>{data.title}</h1>
                        <p>{data.subTitle}</p>
                    </ItemText>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>
                                Custom Order
                            </LeftButton>
                            <RightButton>
                                Existing Inventory
                            </RightButton>
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg" />
                    </Buttons>
                </Wrap>
            ))}
        </>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('/images/model-s.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical 
    align-items: center; // horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1{
        padding-bottom: 15px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    width: 256px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
  
`
const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    animation: animationDown infinite 1.5s;
`

const Buttons = styled.div`


`