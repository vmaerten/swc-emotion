import React from 'react'
import renderer from 'react-test-renderer'
import {Parent} from "../src/Component";
import {test, expect} from 'vitest'
import { test as testS, serialize } from '@emotion/jest/serializer'

expect.addSnapshotSerializer({ test: testS, serialize })
test('Button renders correctly2', () => {
    expect(
        renderer.create(<div><Parent> I am the parent</Parent></div>).toJSON()
).toMatchSnapshot()
})