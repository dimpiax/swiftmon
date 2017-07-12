'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIArguments = function () {
    (0, _createClass3.default)(CLIArguments, [{
        key: 'buildDir',
        get: function get() {
            return this._buildDir;
        }
    }]);

    function CLIArguments(value) {
        (0, _classCallCheck3.default)(this, CLIArguments);

        this._buildDir = this._findPair(value, ['--b', '--build']);
    }

    (0, _createClass3.default)(CLIArguments, [{
        key: '_findPair',
        value: function _findPair(base, keysCase) {
            var index = base.findIndex(function (el) {
                return keysCase.indexOf(el) !== -1;
            });
            if (index === -1) return null;

            if (index === base.length - 1) return 'true';
            if (base[index + 1].indexOf('-') === 0) return 'true';

            return base[index + 1];
        }
    }]);
    return CLIArguments;
}();

var cliArgs = new CLIArguments(process.argv.slice(2));

exports.default = {
    get cliArgs() {
        return cliArgs;
    }
};