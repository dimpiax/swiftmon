'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Daemon = function () {
    function Daemon() {
        (0, _classCallCheck3.default)(this, Daemon);
    }

    (0, _createClass3.default)(Daemon, [{
        key: 'start',
        value: function start() {
            console.log(_safe2.default.yellow('[swiftmon] watching ' + this.options.buildDir + '/**'));
            // fs.watch(this.options.buildDir, this._watchHandler)
            this._update();
        }

        // PRIVATE

    }, {
        key: '_watchHandler',
        value: function _watchHandler(event, filename) {
            console.log((filename || 'unknown') + ' file has been changed.\nreloading...');

            this._update();
        }
    }, {
        key: '_update',
        value: function _update() {
            var startScript = './.build/' + this.options.env + '/' + this.options.startScript;
            console.log(_safe2.default.green('[swiftmon] building and starting ' + startScript));

            this._killChild();
            this._child = (0, _child_process.spawn)('swift build && ' + startScript, { shell: true, detached: true });

            if (this._child.stderr != null) {
                this._child.stderr.on('data', function (data) {
                    console.error('stderr: ' + data.toString());
                });
            }

            if (this._child.stdout != null) {
                this._child.stdout.on('data', function (data) {
                    console.log('stdout: ' + data.toString());
                });
            }

            this._child.on('exit', function (code) {
                console.log('Exited with code: ' + code);
            });
        }
    }, {
        key: '_killChild',
        value: function _killChild() {
            if (this._child == null) return;

            // kill child process and group of processes
            process.kill(-this._child.pid);
        }
    }]);
    return Daemon;
}();

exports.default = Daemon;