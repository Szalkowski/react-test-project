import React from 'react';
import TopBar from "../sections/top-bar";
import Header from "../sections/header";
import Navigation from "../components/navigation";
import Footer from "../sections/footer";
import styled from 'styled-components';

const Container = styled.div`
  width: 1280px;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

const Layout = ({children}) =>
    <Container>
        <TopBar/>
        <Header/>
        <Navigation/>
        <main>
            {children}
        </main>
        <Footer/>
    </Container>;

export default Layout;
