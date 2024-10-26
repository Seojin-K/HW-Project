import React from 'react';
import { Button, Container } from 'react-bootstrap';
import MainContent from '../components/MainContent';
import '../App.css';

function Home() {
    return (
        <div className="home-cont">
            <Container>
                <header className="App-header">
                    <main className="main-content">
                        <MainContent />
                    </main>
                </header>
            </Container>
        </div>
    );
}

export default Home;