import {times} from './index'
import {age} from './index'

test("the answer of three numbers", () => {
    expect(times(9,9)).toBe(true)
})

test('check if some is above age', () => {
    expect(age(21)).toBe("You are too old")
})