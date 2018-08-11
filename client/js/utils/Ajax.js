/**
 * utils/Ajax.js
 *
 * @copyright Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @author Vinicius Hagamenon <vinicius@movedigital.com.br>
 * @version 0.0.1
 * @since
 */
'use strict'

class Ajax {
  static fetch(url, callback) {
    let oReq = new XMLHttpRequest()

    oReq.overrideMimeType('application/json')
    oReq.open('GET', url, true)

    oReq.onload = () => {
      callback(oReq.responseText)
    }

    oReq.send()
  }
}

export default Ajax
