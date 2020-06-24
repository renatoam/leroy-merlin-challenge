import '@testing-library/jest-dom'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

// describe('<App /> spec', () => {
//   test('renders .marquee element', () => {
//     const { getByTestId } = render(<App />)

//     expect(getByTestId('logo')).toBeVisible()
//   })

//   test('renders correct text inside [data-testid="marquee"]', () => {
//     const { getByTestId } = render(<App />)

//     expect(getByTestId('marquee')).toHaveTextContent('Leroy Merlin Brasil - Front-end Test')
//   })
// })
