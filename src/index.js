/* @flow */

import path from 'path'
import colors from 'colors/safe'

import Daemon from './managers/daemon'
import config from './config'

console.log(colors.yellow(`\n${config.data.title} ${config.data.version}`))

const daemon = new Daemon()

// functions
const start = () => {
    // constants
    const env = 'debug'
    const startScript = path.parse(process.cwd()).base

    daemon.options = { buildDir: config.args.buildDir, env, startScript }
    daemon.start()
}

const clear = () => {
    daemon.destroy()
}

start()

// process handlers
process.on('uncaughtException', (err: Error) => {
    console.error(err)

    clear()
})

process.on('SIGINT', () => {
    clear()

    process.exit()
})
