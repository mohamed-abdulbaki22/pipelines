import { subtract, divide } from '../math.js'

describe('Math Operations Extended', () => {
  test('should subtract numbers correctly', () => {
    expect(subtract(10, 3)).toBe(7)
    expect(subtract(0, 5)).toBe(-5)
    expect(subtract(-2, -8)).toBe(6)
  })

  test('should divide numbers correctly', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(7, 2)).toBe(3.5)
    expect(divide(-10, 2)).toBe(-5)
  })

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
    expect(() => divide(-5, 0)).toThrow('Cannot divide by zero')
  })
})
