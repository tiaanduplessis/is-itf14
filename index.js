'use strict'

/**
 * Calculate checksum digit
 * http://www.businessrefinery.com/knowledge/itf_14.html
 * @param {String} value
 */
function checksum (value) {
  let result = 0

  for (let i = 0; i < 13; i++) {
    result += Number.parseInt(value[i]) * (i % 2 === 0 ? 3 : 1)
  }

  return Math.ceil(result / 10) * 10 - result
}

module.exports = function (value) {
  if (typeof value !== 'string') {
    throw new Error('invalid value provided')
  }

  const re = /^[0-9]{13,14}$/

  if (value.length === 13) {
    return re.test(value)
  } else {
    return re.test(value) && Number.parseInt(value[13]) === checksum(value)
  }
}
