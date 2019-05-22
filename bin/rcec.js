#!/usr/bin/env node
require('dotenv').config()
const { resolve } = require('path')
const program = require('commander')
const { existsSync } = require('fs')

const prodRunBotPath = resolve(__dirname, '../dist/server/run-bot.js')
const prodRunBotDevPath = resolve(__dirname, '../src/server/run-bot.js')

const runBot = !existsSync(prodRunBotDevPath) || process.env.NODE_ENV === 'production'
  ? require(prodRunBotPath).default
  : require(prodRunBotDevPath).default

program
  .version(require('../package.json').version)
  .description('Cli tool to run RingCentral Engage Chatbot File')
  .usage('[botFile]')
  .parse(process.argv)

let name = program.args.shift()
if (!name) {
  program.outputHelp()
} else {
  let path = resolve(name)
  runBot({
    name,
    path
  })
}
