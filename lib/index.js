'use strict';var _path=require('path'),_path2=_interopRequireDefault(_path),_safe=require('colors/safe'),_safe2=_interopRequireDefault(_safe),_daemon=require('./managers/daemon'),_daemon2=_interopRequireDefault(_daemon),_config=require('./config'),_config2=_interopRequireDefault(_config);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}console.log(_safe2.default.yellow('\n'+_config2.default.data.title+' '+_config2.default.data.version));var daemon=new _daemon2.default,start=function(){var a=_path2.default.parse(process.cwd()).base;daemon.options={buildDir:_config2.default.args.buildDir,env:'debug',startScript:a},daemon.start()},clear=function(){daemon.destroy()};start(),process.on('uncaughtException',function(a){console.error(a),clear()}),process.on('SIGINT',function(){clear(),process.exit()});