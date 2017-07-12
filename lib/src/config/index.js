'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _system = require('../utils/system');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get args() {
        var cliArgs = _system2.default.cliArgs;

        return {
            buildDir: cliArgs.buildDir || 'Sources'
        };
    }
};