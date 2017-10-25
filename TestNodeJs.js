(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  function main$lambda$lambda(closure$res) {
    return function (f, f_0, body) {
      if (body != null) {
        return closure$res.json(json([to('success', 1), to('user', JSON.parse(body)), to('others', ['Kotin', 'Javascript', 'Intercal', 'Malbodge', 'BrainFuck'])]));
      }
       else {
        return closure$res.json(json([to('success', -1)]));
      }
    };
  }
  function main$lambda(closure$request) {
    return function (f, res) {
      return closure$request('https://randomuser.me/api/', main$lambda$lambda(res));
    };
  }
  function main$lambda_0() {
    println('Listening on port 5000 --');
  }
  function main(args) {
    println('Hello Word!');
    var express = require('express');
    var app = express();
    var request = require('request');
    app.get('/', main$lambda(request));
    app.listen(5000, main$lambda_0);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('TestNodeJs', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=TestNodeJs.js.map
