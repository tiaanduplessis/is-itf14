/* eslint-env jest */
'use strict'

const isItf14 = require('./')

test('is-itf14', () => {
  expect(isItf14('00123456789012')).toBeTruthy()
  expect(isItf14('0012345678901')).toBeTruthy()
  expect(isItf14('foobarbaz')).toBeFalsy()
})
