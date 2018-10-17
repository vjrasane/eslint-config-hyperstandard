import { CLIEngine } from 'eslint'
import { join, dirname } from 'path'

it('validate execution', () => {
  const engine = new CLIEngine({ useEslintrc: false, configFile: join(dirname(module.filename), '../src/.hyperstandard.eslintrc.js') })

  const codeString = 'const foo = 1\nconst bar = () => {}\nbar(foo)\n'

  expect(engine.executeOnText(codeString).errorCount).toBe(0)
})
