const pre = document.querySelector('pre');

const maxRotationDegrees = 45

document.addEventListener('mousemove', (e) => {
  rotateElement(e, pre)
})

function rotateElement(event, element) {
  // Get mouse position
  const x = event.clientX
  const y = event.clientY
  
  // Find middle of element
  const rect = element.getBoundingClientRect()
  const middleX = rect.x + rect.width / 2
  const middleY = rect.y + rect.height / 2
  
  // Get offset from middle
  const offsetX = ((x - middleX) / middleX) * maxRotationDegrees
  const offsetY = ((y - middleY) / middleY) * maxRotationDegrees

  // Update custom properties (X & Y flipped, because CSS sees X & Y as the axes, not the direction)
  element.style.setProperty('--rotateX', -1 * offsetY + 'deg')
  element.style.setProperty('--rotateY', offsetX + 'deg')
}