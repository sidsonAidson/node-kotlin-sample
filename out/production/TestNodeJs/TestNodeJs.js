(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Any = Object;
  var kotlin = Kotlin.kotlin;
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
  function main$lambda$lambda_0(result) {
    var tmp$, tmp$_0;
    return Kotlin.isType(tmp$_0 = (tmp$ = result.json()) != null ? tmp$ : Kotlin.throwNPE(), Any) ? tmp$_0 : Kotlin.throwCCE();
  }
  function main$lambda$lambda_1(closure$res) {
    return function (jsonResult) {
      var tmp$;
      return Kotlin.isType(tmp$ = closure$res.json(json([to('success', 1), to('user', jsonResult), to('others', ['Kotin', 'Javascript', 'Intercal', 'Malbodge', 'BrainFuck'])])), Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : null;
    };
  }
  function main$lambda$lambda_2(closure$res) {
    return function (f) {
      var tmp$;
      return Kotlin.isType(tmp$ = closure$res.json(json([to('success', -1)])), Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : null;
    };
  }
  function main$lambda_0(f, res) {
    var tmp$, tmp$_0;
    var fetch = typeof (tmp$_0 = (tmp$ = require('node-fetch')) != null ? tmp$ : Kotlin.throwNPE()) === 'function' ? tmp$_0 : Kotlin.throwCCE();
    return fetch('https://randomuser.me/api/').then(main$lambda$lambda_0).then(main$lambda$lambda_1(res)).catch(main$lambda$lambda_2(res));
  }
  function main$lambda_1() {
    println('Listening on port 5000');
  }
  function main(args) {
    println('Hello Word!');
    var express = require('express');
    var app = express();
    var request = require('request');
    app.get('/', main$lambda(request));
    app.get('/with-promise', main$lambda_0);
    app.listen(5000, main$lambda_1);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('TestNodeJs', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=TestNodeJs.js.map
