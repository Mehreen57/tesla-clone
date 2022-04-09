import React from 'react';
import styled from "styled-components";
import Header from './Header';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Header />
        <Section />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`