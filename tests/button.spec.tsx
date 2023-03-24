import React from 'react'
import renderer from 'react-test-renderer'
import {Button, Child, Parent} from "../src/Button";
import {test, expect} from 'vitest'


test('Button renders correctly', () => {
    expect(
        renderer.create(  <div>
            <Parent>
                <Child>Green because I am inside a Parent</Child>
            </Parent>
            <Child>Red because I am not inside a Parent</Child>
        </div>).toJSON()
).toMatchSnapshot()
})