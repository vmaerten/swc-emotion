import React from 'react'
import renderer from 'react-test-renderer'
import { Parent } from "../src/Component";
import {test, expect} from 'vitest'


test('Button renders correctly', () => {
    expect(
        renderer.create(<div><Parent> I am the parent</Parent></div>).toJSON()
).toMatchSnapshot()
})