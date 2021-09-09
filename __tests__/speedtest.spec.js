const speedtest = require('../speedtest')

test('retorna um json com a palavra download', () => {
    const test_result = speedtest()
    expect(test_result).toMatch(/download/)
})