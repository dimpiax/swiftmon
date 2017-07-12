/* @flow */

import fs from 'fs'
import { spawn } from 'child_process'
import colors from 'colors/safe'

export default class Daemon {
    _child: ?Object

    options: { buildDir: string, env: string, startScript: string }

    start() {
        console.log(colors.yellow(`[swiftmon] watching ${this.options.buildDir}/**`))
        fs.watch(this.options.buildDir, this._watchHandler)
        this._update()
    }

    // PRIVATE
    _watchHandler(event: any, filename: ?string) {
        console.log(`${filename || 'unknown'} file has been changed.\nreloading...`)

        this._update()
    }

    _update() {
        const startScript = `./.build/${this.options.env}/${this.options.startScript}`
        console.log(colors.green(`[swiftmon] building and starting ${startScript}`))

        this._killChild()
        this._child = spawn(`swift build && ${startScript}`, { shell: true, detached: true })

        if (this._child.stderr != null) {
            this._child.stderr.on('data', (data: Object) => { console.error(`stderr: ${data.toString()}`) })
        }

        if (this._child.stdout != null) {
            this._child.stdout.on('data', (data: Object) => { console.log(`stdout: ${data.toString()}`) })
        }

        this._child.on('exit', (code: any) => { console.log(`Exited with code: ${code}`) })
    }

    _killChild() {
        if (this._child == null) return

        // kill child process and group of processes
        process.kill(-this._child.pid)
    }
}
