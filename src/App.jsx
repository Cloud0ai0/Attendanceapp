import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Card = ({title}) =>{
  return (
    <div>
      <h2>{title}</h2>
      
    </div>

  )
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1  >
      <Card title="black panther"/>
      <Card title="king kong"/>
      <Card title="Avatar"/>
      <MyButton />
    </div>
  );
}

export default App

