import React from 'react'
import chalk from 'chalk'
import test from 'ava'
import {render} from 'ink-testing-library'
import App from './ui'

test('show selectable list', t => {
  const {lastFrame} = render(<App/>)

  t.is(lastFrame(), chalk`.ごっちの情報が出るかもしれない
❯ info
  Twitter
  Blog
  GitHub
  さよなら`
  )
})
