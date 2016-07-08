/**
 * utils/SvgIcon.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since 07-07-2016
 */
'use strict'

import React from 'react'

const SvgIcon = ({ icon }) => {
  let svgClass = `icon icon-${icon}`
  return (
    <svg className={svgClass}>
      <use xlinkHref={`#icon-${icon}`}></use>
    </svg>
  )
}

export default SvgIcon
