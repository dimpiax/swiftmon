/* @flow */

import fs from 'fs'
import { spawn } from 'child_process'
import colors from 'colors/safe'

import config from '../config'

export default class Daemon {
    _child: Object

    options: { buildDir: string, env: string, startScript: string }

    start() {
        console.log(colors.yellow(`${config.data.title} watching ${this.options.buildDir}`))
        fs.watch(this.options.buildDir, this._watchHandler.bind(this))
        this._restartProcess()
    }

    destroy() {
        this._killChild()
    }

    // PRIVATE
    _watchHandler(event: any, filename: ?string) {
        console.log(colors.gray(`\n'${filename || 'unknown'}' file has been changed`), colors.green('restarting...'))

        this._restartProcess()
    }

    _restartProcess() {
        const startScript = `./.build/${this.options.env}/${this.options.startScript}`
        console.log(colors.green(`${config.data.title} building and starting...`))

        this._killChild()
        this._child = spawn(`swift build && ${startScript}`, { shell: true, detached: true, stdio: [0, 1] })

        this._child.on('exit', (code: ?number) => {
            if (code == null) return

            if (code === 1) console.log(colors.yellow(`${config.data.title} waiting for changes...`))
            else {
                console.error(`exit on code ${code}`)
            }
        })
    }

    _killChild() {
        if (this._child == null) return

        // kill child process and group of processes,
        // in exist case, child process can be closed by itself
        try {
            process.kill(-this._child.pid)
        } catch (err) {
            // do nothing
        }
    }
}
