#!/usr/bin/env node
import React from 'react'
import {render} from 'ink'
import meow from 'meow'
import App from './ui'

meow(`
	Usage
	  $ yougoto
`)

render(<App />)
