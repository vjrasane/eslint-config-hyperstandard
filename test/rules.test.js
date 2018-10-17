import { CLIEngine } from 'eslint'
import { join, dirname } from 'path'

it('validate rules', () => {
  const engine = new CLIEngine({
    useEslintrc: false,
    configFile: join(dirname(module.filename), '../src/.hyperstandard.eslintrc.js')
  })

  const rules = [ ...engine.linter.rules.getAllLoadedRules().keys() ]
  expect(rules).toMatchSnapshot()
})
