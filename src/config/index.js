/* @flow */

import system from '../utils/system'

export default {
    get args(): { buildDir: string } {
        const cliArgs = system.cliArgs

        return {
            buildDir: cliArgs.buildDir || 'Sources'
        }
    }
}
