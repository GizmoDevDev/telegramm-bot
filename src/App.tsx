import React, { useState } from 'react';
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import fs from 'fs';
import logo from './assets/logo.png';
import {Main} from "./pages/Main";
import {Interview} from "./pages/Interview";

const file = fs.readFileSync(logo);

function Logo() {
    const [title, setTitle] = useState('Urban Bot');

    const addRobot = () => {
        setTitle(title + '🤖');
    };

    return (
        <Image
            title={title}
            file={file}
            buttons={
                <ButtonGroup>
                    <Button onClick={addRobot}>Add robot</Button>
                </ButtonGroup>
            }
        />
    );
}

export function App() {
    return (
        <>
            <Router>
                <Route path="/">
                  <Main />
                </Route>
                <Route path="/:id">
                    <Interview />
                </Route>
            </Router>
        </>
    );
}
