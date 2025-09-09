describe('Pipeline Example Tests', () => {
  test('should pass a basic test', () => {
    expect(true).toBe(true)
  })

  test('should perform arithmetic correctly', () => {
    expect(2 + 2).toBe(4)
    expect(10 - 5).toBe(5)
    expect(3 * 4).toBe(12)
  })

  test('should handle arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
  })

  test('should handle async operations', async () => {
    const promise = Promise.resolve('success')
    await expect(promise).resolves.toBe('success')
  })

  test('should test string operations', () => {
    const str = 'Hello Pipeline!'
    expect(str).toMatch(/Pipeline/)
    expect(str.toLowerCase()).toBe('hello pipeline!')
  })
})
