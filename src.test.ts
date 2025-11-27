import { describe, it, expect } from 'vitest'
import { add, isEven } from './src'

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true)
  })
})
