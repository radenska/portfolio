'use strict';

(function(module) {
  var webDB = {};

  function _config(isVerbose) {
    var msg;
    if (isVerbose) {
      html5sql.logInfo = true;
      html5sql.logErrors = true;
      html5sql.putSelectResultsInArray = true;
      msg = 'html5sql verbosity on';
    } else {
      html5sql.logInfo = false;
      html5sql.logErrors = false;
      html5sql.putSelectResultsInArray = false;
      msg = 'html5sql verbosity off';
    }
    console.log(msg);
  }

  webDB.init = function(isVerbose) {
    try {
      if (openDatabase) {
        _config(isVerbose);
        html5sql.openDatabase('projDB', 'Project Database', 5*1024*1024);
      } else {
        console.log('Web Databases not supported.');
      }
    } catch (e) {
      console.error('Error occured during DB init. Web Database may not be supported.');
    }
  };

  webDB.execute = function (sql, callback) {
    callback = callback || function() {};
    html5sql.process(
      sql,
      function (tx, result, resultArray) {
        callback(resultArray, result, tx);
      }
    );
  };
  module.webDB = webDB;
})(window)

webDB.init(true);
