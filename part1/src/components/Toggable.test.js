import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Toggable from './Toggable'

describe('<Toggable />', () => {
    let component

    beforeEach(() => {
        component = render(
            <Toggable buttonLabel={'show...'}>
                <div className={'testDiv'} />
            </Toggable>
        )
    })

    test('renders its children', () => {
        expect(
            component.container.querySelector('.testDiv')
        ).toBeDefined()
    })

    test('at start the children are not displayed', () => {
        const div = component.container.querySelector('.toggableContent')
        expect(div).toHaveStyle('display: none')
    })

    test('after clicking the button, children are displayed', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)
        const div = component.container.querySelector('.toggableContent')
        expect(div).not.toHaveStyle('display: none')
    })

    //not reccomended test
    test('toggled content can be closed', () => {
        const button = component.container.querySelector('button')
        fireEvent.click(button)
        const closeButton = component.container.querySelector(
            'button:nth-child(2)'
        )
        fireEvent.click(closeButton)
        const div = component.container.querySelector('.toggableContent')
        expect(div).toHaveStyle('display: none')
    })
    //recommended test
    test('toggled content can be closed right way', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)
        const  closeButton = component.getByText('cancel')
        fireEvent.click(closeButton)
        const div = component.container.querySelector('.toggableContent')
        expect(div).toHaveStyle('display: none')
    })
})
