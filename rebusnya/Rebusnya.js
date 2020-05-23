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
  var unboxChar = Kotlin.unboxChar;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Array_0 = Array;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_xqrb1d$;
  var equals = Kotlin.equals;
  var Pair = Kotlin.kotlin.Pair;
  var toShort = Kotlin.toShort;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var appendElement = Kotlin.kotlin.dom.appendElement_ldvnw0$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
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
    var $receiver = split(columns, [' ']);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length > 0)
        destination.add_11rb$(element);
    }
    return findCodelock(destination, dictionary);
  }
  var NOKIA_LETTERS;
  function findNokia(numbersString, dictionary) {
    var destination = ArrayList_init_0(numbersString.length);
    var tmp$;
    tmp$ = iterator(numbersString);
    while (tmp$.hasNext()) {
      var item = unboxChar(tmp$.next());
      destination.add_11rb$(NOKIA_LETTERS[unboxChar(toBoxedChar(item)) - 48]);
    }
    var columnsList = destination;
    return findCodelock(columnsList, dictionary);
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
    var res = LinkedHashSet_init();
    var $receiver = split(wordsAndNums, [' ']);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.length > 0)
        destination.add_11rb$(element);
    }
    var wordsAndNumsSplit = destination;
    var n = wordsAndNumsSplit.size / 2 | 0;
    var array = Array_0(n);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = wordsAndNumsSplit.get_za3lpa$(i * 2 | 0);
    }
    var words = array;
    var array_0 = new Int32Array(n);
    var tmp$_2;
    tmp$_2 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_2; i_0++) {
      array_0[i_0] = toInt(wordsAndNumsSplit.get_za3lpa$((i_0 * 2 | 0) + 1 | 0));
    }
    var counts = array_0;
    var destination_0 = ArrayList_init_0(words.length);
    var tmp$_3, tmp$_0_0;
    var index = 0;
    for (tmp$_3 = 0; tmp$_3 !== words.length; ++tmp$_3) {
      var item = words[tmp$_3];
      destination_0.add_11rb$(subWords(item, counts[tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0]));
    }
    var listOfListOfSubwords = destination_0;
    var cart = cartesianProduct(listOfListOfSubwords);
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(cart, 10));
    var tmp$_4;
    tmp$_4 = cart.iterator();
    while (tmp$_4.hasNext()) {
      var item_0 = tmp$_4.next();
      destination_1.add_11rb$(joinToString(item_0, ''));
    }
    var possibleWords = destination_1;
    tmp$ = possibleWords.iterator();
    while (tmp$.hasNext()) {
      var possibleWord = tmp$.next();
      if (dicSet.contains_11rb$(possibleWord)) {
        res.add_11rb$(possibleWord);
      }
    }
    return toList(res);
  }
  var RUS_LETTERS;
  function findZitaGita(words, dicSet) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var res = ArrayList_init();
    tmp$ = words.iterator();
    while (tmp$.hasNext()) {
      var word = tmp$.next();
      var chars = Kotlin.charArray(word.length);
      tmp$_0 = word.length;
      for (var i = 0; i < tmp$_0; i++) {
        chars[i] = word.charCodeAt(i);
      }
      var newWords = ArrayList_init();
      tmp$_1 = word.length;
      for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
        tmp$_2 = iterator(RUS_LETTERS);
        while (tmp$_2.hasNext()) {
          var letter = unboxChar(tmp$_2.next());
          chars[i_0] = letter;
          var newWord = joinToString_0(chars, '');
          if (dicSet.contains_11rb$(newWord) && !equals(word, newWord)) {
            newWords.add_11rb$(newWord);
          }
        }
        chars[i_0] = word.charCodeAt(i_0);
      }
      if (!newWords.isEmpty()) {
        res.add_11rb$(new Pair(word, newWords));
      }
    }
    return res;
  }
  var HTTP_OK;
  var dicSet;
  var dicList;
  function main() {
    loadWords();
    configureNokia();
    configureCodeLock();
    configureViralMath();
    configureZitaGita();
  }
  function configureViralMath$lambda(closure$inputLine, closure$outputContainer) {
    return function (mouseEvent) {
      closure$inputLine.value = '';
      closure$outputContainer.innerHTML = '';
      console.log('clear');
      return Unit;
    };
  }
  function configureViralMath$lambda$lambda(closure$foundWord) {
    return function ($receiver) {
      appendText($receiver, closure$foundWord);
      return Unit;
    };
  }
  function configureViralMath$lambda_0(closure$outputContainer, closure$inputLine) {
    return function (mouseEvent) {
      var tmp$;
      closure$outputContainer.innerHTML = '';
      var foundWords = findViralMath(closure$inputLine.value, dicSet);
      tmp$ = foundWords.iterator();
      while (tmp$.hasNext()) {
        var foundWord = tmp$.next();
        console.log(foundWord);
        appendElement(closure$outputContainer, 'div', configureViralMath$lambda$lambda(foundWord));
      }
      return Unit;
    };
  }
  function configureViralMath() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var searchBtn = Kotlin.isType(tmp$ = document.getElementById('searchBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    var clearBtn = Kotlin.isType(tmp$_0 = document.getElementById('clearBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var inputLine = Kotlin.isType(tmp$_1 = document.getElementById('inputLine'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var outputContainer = Kotlin.isType(tmp$_2 = document.getElementById('outputContainer'), HTMLDivElement) ? tmp$_2 : throwCCE();
    console.log(inputLine);
    clearBtn.onclick = configureViralMath$lambda(inputLine, outputContainer);
    searchBtn.onclick = configureViralMath$lambda_0(outputContainer, inputLine);
  }
  function configureCodeLock$lambda(closure$inputLine, closure$outputContainer) {
    return function (mouseEvent) {
      closure$inputLine.value = '';
      closure$outputContainer.innerHTML = '';
      console.log('clear');
      return Unit;
    };
  }
  function configureCodeLock$lambda$lambda(closure$foundWord) {
    return function ($receiver) {
      appendText($receiver, closure$foundWord);
      return Unit;
    };
  }
  function configureCodeLock$lambda_0(closure$outputContainer, closure$inputLine) {
    return function (mouseEvent) {
      var tmp$;
      closure$outputContainer.innerHTML = '';
      var foundWords = findCodeLock(closure$inputLine.value, dicList);
      tmp$ = foundWords.iterator();
      while (tmp$.hasNext()) {
        var foundWord = tmp$.next();
        console.log(foundWord);
        appendElement(closure$outputContainer, 'div', configureCodeLock$lambda$lambda(foundWord));
      }
      return Unit;
    };
  }
  function configureCodeLock() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var searchBtn = Kotlin.isType(tmp$ = document.getElementById('codeLockSearchBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    var clearBtn = Kotlin.isType(tmp$_0 = document.getElementById('codeLockClearBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var inputLine = Kotlin.isType(tmp$_1 = document.getElementById('codeLockInputLine'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var outputContainer = Kotlin.isType(tmp$_2 = document.getElementById('codeLockOutputContainer'), HTMLDivElement) ? tmp$_2 : throwCCE();
    clearBtn.onclick = configureCodeLock$lambda(inputLine, outputContainer);
    searchBtn.onclick = configureCodeLock$lambda_0(outputContainer, inputLine);
  }
  function configureNokia$lambda(closure$inputLine, closure$outputContainer) {
    return function (mouseEvent) {
      closure$inputLine.value = '';
      closure$outputContainer.innerHTML = '';
      console.log('clear');
      return Unit;
    };
  }
  function configureNokia$lambda$lambda(closure$foundWord) {
    return function ($receiver) {
      appendText($receiver, closure$foundWord);
      return Unit;
    };
  }
  function configureNokia$lambda_0(closure$outputContainer, closure$inputLine) {
    return function (mouseEvent) {
      var tmp$;
      closure$outputContainer.innerHTML = '';
      var $receiver = closure$inputLine.value;
      var destination = StringBuilder_init();
      var tmp$_0;
      tmp$_0 = $receiver.length;
      for (var index = 0; index < tmp$_0; index++) {
        var element = $receiver.charCodeAt(index);
        var ch = toBoxedChar(element);
        if ((new CharRange(50, 57)).contains_mef7kx$(unboxChar(ch)))
          destination.append_s8itvh$(element);
      }
      var fixedInput = destination.toString();
      closure$inputLine.value = fixedInput;
      var foundWords = findNokia(fixedInput, dicList);
      console.log(foundWords.size.toString() + ' words found');
      tmp$ = foundWords.iterator();
      while (tmp$.hasNext()) {
        var foundWord = tmp$.next();
        console.log(foundWord);
        appendElement(closure$outputContainer, 'div', configureNokia$lambda$lambda(foundWord));
      }
      return Unit;
    };
  }
  function configureNokia() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var searchBtn = Kotlin.isType(tmp$ = document.getElementById('nokiaSearchBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    var clearBtn = Kotlin.isType(tmp$_0 = document.getElementById('nokiaClearBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var inputLine = Kotlin.isType(tmp$_1 = document.getElementById('nokiaInputLine'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var outputContainer = Kotlin.isType(tmp$_2 = document.getElementById('nokiaOutputContainer'), HTMLDivElement) ? tmp$_2 : throwCCE();
    clearBtn.onclick = configureNokia$lambda(inputLine, outputContainer);
    searchBtn.onclick = configureNokia$lambda_0(outputContainer, inputLine);
  }
  function configureZitaGita$lambda(closure$inputLine, closure$outputContainer) {
    return function (mouseEvent) {
      closure$inputLine.value = '';
      closure$outputContainer.innerHTML = '';
      console.log('clear');
      return Unit;
    };
  }
  function configureZitaGita$lambda$lambda(closure$foundWord) {
    return function ($receiver) {
      appendText($receiver, closure$foundWord.toString());
      return Unit;
    };
  }
  function configureZitaGita$lambda_0(closure$outputContainer, closure$inputLine) {
    return function (mouseEvent) {
      var tmp$;
      closure$outputContainer.innerHTML = '';
      var $receiver = split(closure$inputLine.value, [' ']);
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.length > 0)
          destination.add_11rb$(element);
      }
      var words = destination;
      var foundWords = findZitaGita(words, dicSet);
      console.log('found words ' + foundWords);
      tmp$ = foundWords.iterator();
      while (tmp$.hasNext()) {
        var foundWord = tmp$.next();
        console.log(foundWord);
        appendElement(closure$outputContainer, 'div', configureZitaGita$lambda$lambda(foundWord));
      }
      return Unit;
    };
  }
  function configureZitaGita() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var searchBtn = Kotlin.isType(tmp$ = document.getElementById('zitaGitaSearchBtn'), HTMLButtonElement) ? tmp$ : throwCCE();
    var clearBtn = Kotlin.isType(tmp$_0 = document.getElementById('zitaGitaClearBtn'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var inputLine = Kotlin.isType(tmp$_1 = document.getElementById('zitaGitaInputLine'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var outputContainer = Kotlin.isType(tmp$_2 = document.getElementById('zitaGitaOutputContainer'), HTMLDivElement) ? tmp$_2 : throwCCE();
    clearBtn.onclick = configureZitaGita$lambda(inputLine, outputContainer);
    searchBtn.onclick = configureZitaGita$lambda_0(outputContainer, inputLine);
  }
  function loadWords$lambda(closure$req, closure$loadingDiv, closure$contentDiv) {
    return function (loadEvent) {
      var tmp$;
      console.log('loading words...');
      if (closure$req.status !== HTTP_OK) {
        console.log('\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u043B\u043E\u0432 ' + closure$req.status + ': ' + closure$req.statusText);
      }
       else {
        dicList = lines(typeof (tmp$ = closure$req.response) === 'string' ? tmp$ : throwCCE());
        console.log('\u0413\u043E\u0442\u043E\u0432\u043E, \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u043B\u043E\u0432 (' + dicList.size + ')');
        dicSet.clear();
        dicSet.addAll_brywnq$(dicList);
      }
      closure$loadingDiv.hidden = true;
      closure$contentDiv.hidden = false;
      console.log('words list loaded ' + new Date());
      return Unit;
    };
  }
  function loadWords() {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.overrideMimeType('text/plain; charset=windows-1251');
    var loadingDiv = Kotlin.isType(tmp$ = document.getElementById('loading'), HTMLDivElement) ? tmp$ : throwCCE();
    var contentDiv = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    loadingDiv.hidden = false;
    req.onload = loadWords$lambda(req, loadingDiv, contentDiv);
    req.open('get', 'russian.txt', true);
    req.setRequestHeader('Cache-Control', 'max-age=86400');
    req.send();
  }
  var package$ru = _.ru || (_.ru = {});
  var package$sw = package$ru.sw || (package$ru.sw = {});
  var package$rebusnya = package$sw.rebusnya || (package$sw.rebusnya = {});
  package$rebusnya.findCodelock_2mkhiy$ = findCodelock;
  package$rebusnya.findCodeLock_kwv3np$ = findCodeLock;
  Object.defineProperty(package$rebusnya, 'NOKIA_LETTERS', {
    get: function () {
      return NOKIA_LETTERS;
    }
  });
  package$rebusnya.findNokia_kwv3np$ = findNokia;
  package$rebusnya.subWords_bm4lxs$ = subWords;
  package$rebusnya.cartesianProduct_n7b3v4$ = cartesianProduct;
  package$rebusnya.findViralMath_qif5s$ = findViralMath;
  Object.defineProperty(package$rebusnya, 'RUS_LETTERS', {
    get: function () {
      return RUS_LETTERS;
    }
  });
  package$rebusnya.findZitaGita_sx1o23$ = findZitaGita;
  Object.defineProperty(package$rebusnya, 'HTTP_OK', {
    get: function () {
      return HTTP_OK;
    }
  });
  Object.defineProperty(package$rebusnya, 'dicSet', {
    get: function () {
      return dicSet;
    }
  });
  Object.defineProperty(package$rebusnya, 'dicList', {
    get: function () {
      return dicList;
    },
    set: function (value) {
      dicList = value;
    }
  });
  package$rebusnya.main = main;
  NOKIA_LETTERS = ['', '', '\u0430\u0431\u0432\u0433', '\u0434\u0435\u0436\u0437', '\u0438\u0439\u043A\u043B', '\u043C\u043D\u043E\u043F', '\u0440\u0441\u0442\u0443', '\u0444\u0445\u0446\u0447', '\u0448\u0449\u044A\u044B', '\u044C\u044D\u044E\u044F'];
  RUS_LETTERS = '\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044C\u044B\u044A\u044D\u044E\u044F';
  HTTP_OK = toShort(200);
  dicSet = HashSet_init();
  dicList = emptyList();
  main();
  Kotlin.defineModule('Rebusnya', _);
  return _;
}));

//# sourceMappingURL=Rebusnya.js.map
