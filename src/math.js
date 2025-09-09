export function subtract(a, b) {
  return a - b
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}
