'use strict'

module.exports = clipboardCopy

function clipboardCopy (text) {
  var div = document.createElement('div')
  div.textContent = text
  document.body.appendChild(div)

  var range = new Range()
  range.selectNode(div)
  window.getSelection().addRange(range)

  let successful = false
  try {
    successful = document.execCommand('copy')
  } catch (err) {}

  window.getSelection().removeAllRanges()
  div.remove()

  return successful
}
