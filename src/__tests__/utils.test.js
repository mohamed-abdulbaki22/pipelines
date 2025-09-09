import { add, multiply, greet, calculateCircleArea, fetchUserData } from '../utils.js'

describe('Utility Functions', () => {
  describe('Math Operations', () => {
    test('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(-1, 1)).toBe(0)
      expect(add(0, 0)).toBe(0)
    })

    test('should multiply two numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12)
      expect(multiply(-2, 3)).toBe(-6)
      expect(multiply(0, 5)).toBe(0)
    })

    test('should calculate circle area correctly', () => {
      expect(calculateCircleArea(1)).toBeCloseTo(Math.PI, 5)
      expect(calculateCircleArea(2)).toBeCloseTo(4 * Math.PI, 5)
    })

    test('should throw error for invalid radius', () => {
      expect(() => calculateCircleArea(0)).toThrow('Radius must be positive')
      expect(() => calculateCircleArea(-5)).toThrow('Radius must be positive')
    })
  })

  describe('String Operations', () => {
    test('should greet user correctly', () => {
      expect(greet('Alice')).toBe('Hello, Alice!')
      expect(greet('Bob')).toBe('Hello, Bob!')
    })
  })

  describe('Async Operations', () => {
    test('should fetch user data correctly', async () => {
      const userData = await fetchUserData(123)
      
      expect(userData).toEqual({
        id: 123,
        name: 'User 123',
        email: 'user123@example.com'
      })
    })

    test('should handle multiple user requests', async () => {
      const promises = [
        fetchUserData(1),
        fetchUserData(2),
        fetchUserData(3)
      ]
      
      const results = await Promise.all(promises)
      
      expect(results).toHaveLength(3)
      expect(results[0].id).toBe(1)
      expect(results[1].id).toBe(2)
      expect(results[2].id).toBe(3)
    })
  })
})
