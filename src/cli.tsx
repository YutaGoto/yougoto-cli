#!/usr/bin/env node
import React from 'react'
import {render} from 'ink'
import meow from 'meow'

const App = require('./ui')

meow(`
  Usage
    $ yougoto
`)

render(<App />)
