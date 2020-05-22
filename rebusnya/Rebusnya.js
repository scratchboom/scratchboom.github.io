(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Rebusnya'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rebusnya'.");
    }
    root.Rebusnya = factory(typeof Rebusnya === 'undefined' ? {} : Rebusnya, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Array_0 = Array;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var toShort = Kotlin.toShort;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var appendElement = Kotlin.kotlin.dom.appendElement_ldvnw0$;
  function findCodelock(columns, dictionary) {
    var wordSize = columns.size;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = dictionary.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === wordSize)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var goodWord = true;
      for (var i = 0; i < wordSize; i++) {
        goodWord = contains(columns.get_za3lpa$(i), element_0.charCodeAt(i));
        if (!goodWord)
          break;
      }
      if (goodWord)
        destination_0.add_11rb$(element_0);
    }
    return destination_0;
  }
  function findCodeLock(columns, dictionary) {
    return findCodelock(split(columns, [' ']), dictionary);
  }
  function subWords(word, subWordSize) {
    var tmp$;
    var res = ArrayList_init();
    tmp$ = word.length - subWordSize | 0;
    for (var i = 0; i <= tmp$; i++) {
      var endIndex = i + subWordSize | 0;
      res.add_11rb$(word.substring(i, endIndex));
    }
    return res;
  }
  function cartesianProduct(lists) {
    var tmp$, tmp$_0;
    var resultLists = ArrayList_init();
    if (lists.size === 0) {
      resultLists.add_11rb$(ArrayList_init());
      return resultLists;
    }
     else {
      var firstList = lists.get_za3lpa$(0);
      var remainingLists = cartesianProduct(lists.subList_vux9f0$(1, lists.size));
      tmp$ = firstList.iterator();
      while (tmp$.hasNext()) {
        var condition = tmp$.next();
        tmp$_0 = remainingLists.iterator();
        while (tmp$_0.hasNext()) {
          var remainingList = tmp$_0.next();
          var resultList = ArrayList_init();
          resultList.add_11rb$(condition);
          resultList.addAll_brywnq$(remainingList);
          resultLists.add_11rb$(resultList);
        }
      }
    }
    return resultLists;
  }
  function findViralMath(wordsAndNums, dicSet) {
    var tmp$;
    var res = ArrayList_init();
    var wordsAndNumsSplit = split(wordsAndNums, [' ']);
    var n = wordsAndNumsSplit.size / 2 | 0;
    var array = Array_0(n);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = wordsAndNumsSplit.get_za3lpa$(i * 2 | 0);
    }
    var words = array;
    var array_0 = new Int32Array(n);
    var tmp$_1;
    tmp$_1 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
      array_0[i_0] = toInt(wordsAndNumsSplit.get_za3lpa$((i_0 * 2 | 0) + 1 | 0));
    }
    var counts = array_0;
    var destination = ArrayList_init_0(words.length);
    var tmp$_2, tmp$_0_0;
    var index = 0;
    for (tmp$_2 = 0; tmp$_2 !== words.length; ++tmp$_2) {
      var item = words[tmp$_2];
      destination.add_11rb$(subWords(item, counts[tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0]));
    }
    var listOfListOfSubwords = destination;
    var cart = cartesianProduct(listOfListOfSubwords);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(cart, 10));
    var tmp$_3;
    tmp$_3 = cart.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(joinToString(item_0, ''));
    }
    var possibleWords = destination_0;
    tmp$ = possibleWords.iterator();
    while (tmp$.hasNext()) {
      var possibleWord = tmp$.next();
      if (dicSet.contains_11rb$(possibleWord)) {
        res.add_11rb$(possibleWord);
      }
    }
    return res;
  }
  var HTTP_OK;
  function main$lambda(closure$inputLine) {
    return function (event) {
      var wordsAndNumsSeparated = closure$inputLine.value;
      console.log(wordsAndNumsSeparated);
      return Unit;
    };
  }
  function main$lambda_0(closure$req, closure$dicSet) {
    return function (loadEvent) {
      var tmp$;
      console.log('loading words...');
      if (closure$req.status !== HTTP_OK) {
        console.log('\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043B\u043E\u0432 ' + closure$req.status + ': ' + closure$req.statusText);
      }
       else {
        var wordsList = lines(typeof (tmp$ = closure$req.response) === 'string' ? tmp$ : throwCCE());
        console.log('\u0413\u043E\u0442\u043E\u0432\u043E, \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u043B\u043E\u0432 (' + wordsList.size + ')');
        closure$dicSet.clear();
        closure$dicSet.addAll_brywnq$(wordsList);
      }
      console.log('words list loaded ' + new Date());
      return Unit;
    };
  }
  function main$lambda_1(closure$inputLine) {
    return function (mouseEvent) {
      clear(closure$inputLine);
      return Unit;
    };
  }
  function main$lambda$lambda(closure$foundWord) {
    return function ($receiver) {
      appendText($receiver, closure$foundWord);
      return Unit;
    };
  }
  function main$lambda_2(closure$outputContainer, closure$inputLine, closure$dicSet) {
    return function (mouseEvent) {
      var tmp$;
      closure$outputContainer.innerHTML = '';
      var foundWords = findViralMath(closure$inputLine.value, closure$dicSet);
      tmp$ = foundWords.iterator();
      while (tmp$.hasNext()) {
        var foundWord = tmp$.next();
        console.log(foundWord);
        appendElement(closure$outputContainer, 'div', main$lambda$lambda(foundWord));
      }
      return Unit;
    };
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var searchBtn = Kotlin.isType(tmp$ = document.getElementById('searchBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    var clearBtn = Kotlin.isType(tmp$_0 = document.getElementById('clearBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var inputLine = Kotlin.isType(tmp$_1 = document.getElementById('inputLine'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var outputContainer = Kotlin.isType(tmp$_2 = document.getElementById('outputContainer'), HTMLDivElement) ? tmp$_2 : throwCCE();
    console.log(inputLine);
    var i = 1;
    searchBtn.onclick = main$lambda(inputLine);
    var dicSet = HashSet_init();
    var req = new XMLHttpRequest();
    req.overrideMimeType('text/plain; charset=windows-1251');
    req.onload = main$lambda_0(req, dicSet);
    req.open('get', 'russian.txt', true);
    req.setRequestHeader('Cache-Control', 'max-age=86400');
    req.send();
    clearBtn.onclick = main$lambda_1(inputLine);
    searchBtn.onclick = main$lambda_2(outputContainer, inputLine, dicSet);
  }
  var package$ru = _.ru || (_.ru = {});
  var package$sw = package$ru.sw || (package$ru.sw = {});
  var package$rebusnya = package$sw.rebusnya || (package$sw.rebusnya = {});
  package$rebusnya.findCodelock_2mkhiy$ = findCodelock;
  package$rebusnya.findCodeLock_kwv3np$ = findCodeLock;
  package$rebusnya.subWords_bm4lxs$ = subWords;
  package$rebusnya.cartesianProduct_n7b3v4$ = cartesianProduct;
  package$rebusnya.findViralMath_qif5s$ = findViralMath;
  Object.defineProperty(package$rebusnya, 'HTTP_OK', {
    get: function () {
      return HTTP_OK;
    }
  });
  package$rebusnya.main = main;
  HTTP_OK = toShort(200);
  main();
  Kotlin.defineModule('Rebusnya', _);
  return _;
}));

//# sourceMappingURL=Rebusnya.js.map
