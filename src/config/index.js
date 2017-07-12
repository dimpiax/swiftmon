/* @flow */

import system from '../utils/system'
import pkg from '../../package.json'

export default {
    get data(): { title: string, version: string } {
        return {
            title: '[swiftmon]',
            version: pkg.version
        }
    },

    get args(): { buildDir: string } {
        const cliArgs = system.cliArgs

        return {
            buildDir: cliArgs.buildDir || 'Sources'
        }
    }
}
