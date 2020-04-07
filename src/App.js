import React from 'react';
import './App.css';
import DiscordLogin from './DiscordLogin'

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DiscordLogin>
          Login with Discord
        </DiscordLogin>
      </header>
    </div>
  );
}
