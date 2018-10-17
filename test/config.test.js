import config from '../src/.hyperstandard.eslintrc.js'

it('validate config', () => {
  expect(config).toMatchSnapshot()
})
