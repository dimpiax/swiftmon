/* @flow */

import path from 'path'

import Daemon from './src/managers/daemon'
import config from './src/config'

const daemon = new Daemon()

const start = () => {
    // constants
    const env = 'debug'
    const startScript = path.parse(process.cwd()).base

    daemon.options = { buildDir: config.args.buildDir, env, startScript }
    daemon.start()
}

module.exports = {
    start
}
