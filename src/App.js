import React from 'react'
import logo from './images/logo.svg'

const App = () => (
  <>
    <img className="logo" src={logo} width={150} height={150} data-testid="logo" />
    <marquee data-testid="marquee">Leroy Merlin Brasil - Front-end Test</marquee>
  </>
)

export default App
