/* @flow */

class CLIArguments {
    _buildDir: ?string

    get buildDir(): ?string { return this._buildDir }

    constructor(value: string[]) {
        this._buildDir = this._findPair(value, ['--b', '--build'])
    }

    _findPair(base: string[], keysCase: string[]): ?string {
        const index = base.findIndex((el: string): boolean => keysCase.indexOf(el) !== -1)
        if (index === -1) return null

        if (index === base.length - 1) return 'true'
        if (base[index + 1].indexOf('-') === 0) return 'true'

        return base[index + 1]
    }
}

const cliArgs = new CLIArguments(process.argv.slice(2))

export default {
    get cliArgs(): CLIArguments { return cliArgs }
}
