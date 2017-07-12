/* @flow */

import fs from 'fs'
import { spawn } from 'child_process'
import colors from 'colors/safe'

import config from '../config'

export default class Daemon {
    _child: ?Object

    options: { buildDir: string, env: string, startScript: string }

    start() {
        console.log(colors.yellow(`${config.data.title} watching ${this.options.buildDir}`))
        fs.watch(this.options.buildDir, this._watchHandler.bind(this))
        this._restartProcess()
    }

    destroy() {
        this._killChild()
        this._child = null
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
        this._child = spawn(`swift build && ${startScript}`, { shell: true, detached: true })

        if (this._child.stderr != null) {
            this._child.stderr.on('data', (data: Object) => { console.error(data.toString().trim()) })
        }

        if (this._child.stdout != null) {
            this._child.stdout.on('data', (data: Object) => { console.log(data.toString().trim()) })
        }

        this._child.on('exit', (code: ?number) => {
            if (code == null) return

            console.log(`Exited with code: ${code}`)
        })
    }

    _killChild() {
        if (this._child == null) return

        // kill child process and group of processes
        process.kill(-this._child.pid)
    }
}
