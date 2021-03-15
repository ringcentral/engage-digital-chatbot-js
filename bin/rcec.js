#!/usr/bin/env node
require('dotenv').config()
const { resolve } = require('path')
const program = require('commander')
const { existsSync } = require('fs')

const prodRunBotPath = resolve(__dirname, '../dist/run-bot.js')
const prodRunBotDevPath = resolve(__dirname, '../src/run-bot.js')

const runBot = !existsSync(prodRunBotDevPath) || process.env.NODE_ENV === 'production'
  ? require(prodRunBotPath).default
  : require(prodRunBotDevPath).default

program
  .version(require('../package.json').version)
  .description('Cli tool to run RingCentral Engage Chatbot File')
  .usage('[botFile]')
  .parse(process.argv)

const name = program.args.shift()
if (!name) {
  program.outputHelp()
} else {
  const path = resolve(name)
  runBot({
    name,
    path
  })
}
