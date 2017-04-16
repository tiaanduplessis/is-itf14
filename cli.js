#!/usr/bin/env node
'use strict'

const isItf14 = require('./')
const str = process.argv[2]

console.log(isItf14(str))
