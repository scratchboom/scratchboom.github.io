(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ThreadAnalyzer-ThreadAnalyzer'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ThreadAnalyzer-ThreadAnalyzer'.");
    }
    root['ThreadAnalyzer-ThreadAnalyzer'] = factory(typeof this['ThreadAnalyzer-ThreadAnalyzer'] === 'undefined' ? {} : this['ThreadAnalyzer-ThreadAnalyzer'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.k;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  var lineSequence = kotlin_kotlin.$_$.q;
  var filter = kotlin_kotlin.$_$.p;
  var substringAfterLast$default = kotlin_kotlin.$_$.b;
  var substringBefore$default = kotlin_kotlin.$_$.d;
  var removeSuffix = kotlin_kotlin.$_$.s;
  var substringAfter$default = kotlin_kotlin.$_$.c;
  var Pair = kotlin_kotlin.$_$.v;
  var println = kotlin_kotlin.$_$.l;
  var println_0 = kotlin_kotlin.$_$.m;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i;
  var trimMargin$default = kotlin_kotlin.$_$.e;
  var charSequenceLength = kotlin_kotlin.$_$.o;
  var removeSurrounding = kotlin_kotlin.$_$.t;
  var contains$default = kotlin_kotlin.$_$.a;
  var charSequenceGet = kotlin_kotlin.$_$.n;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.u;
  var padStart = kotlin_kotlin.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.x;
  var THROW_CCE = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  //endregion
  function generatePumlFirebase(dump) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    var locks = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    var threads = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var tidToName = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$3 = LinkedHashSet_init_$Create$();
    var waits = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$4 = LinkedHashSet_init_$Create$();
    var holds = tmp$ret$4;
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = lineSequence(dump);
    var tmp0_forEach = filter(tmp, generatePumlFirebase$lambda);
    var tmp0_iterator = tmp0_forEach.b();
    while (tmp0_iterator.c()) {
      var element = tmp0_iterator.d();
      // Inline function 'thread.analyzer.generatePumlFirebase.<anonymous>' call
      var tmp_0 = substringAfterLast$default(element, 'waiting to lock <', null, 2, null);
      var lock = substringBefore$default(tmp_0, '> ', null, 2, null);
      var threadIdWhoHelds = substringAfterLast$default(element, 'held by thread ', null, 2, null);
      var threadNameWhoWaits = removeSuffix(substringBefore$default(element, ':tid=', null, 2, null), ' (blocked)');
      var tmp_1 = substringAfter$default(element, ':tid=', null, 2, null);
      var threadIdWhoWaits = substringBefore$default(tmp_1, ' ', null, 2, null);
      // Inline function 'kotlin.collections.set' call
      tidToName.a4(threadIdWhoWaits, threadNameWhoWaits);
      locks.i(lock);
      threads.i(threadIdWhoWaits);
      holds.i(new Pair(threadIdWhoHelds, lock));
      waits.i(new Pair(threadIdWhoWaits, lock));
      println(element);
      println('lock: ' + lock + '    thread: ' + threadNameWhoWaits + '    tid: ' + threadIdWhoWaits);
      println_0();
    }
    println('locks: ' + locks);
    println('threads: ' + threads);
    println('waits: ' + waits);
    println('holds: ' + holds);
    println('tidToName: ' + tidToName);
    var sb = StringBuilder_init_$Create$();
    var tmp$ret$6;
    // Inline function 'kotlin.text.appendLine' call
    var tmp$ret$5;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = sb.f6('@startuml');
    tmp$ret$5 = tmp0_appendLine.j2(_Char___init__impl__6a9atx(10));
    tmp$ret$6 = tmp$ret$5;
    var tmp0_iterator_0 = threads.b();
    while (tmp0_iterator_0.c()) {
      var tid = tmp0_iterator_0.d();
      var tmp$ret$8;
      // Inline function 'kotlin.text.appendLine' call
      var tmp_2 = 'object T' + tid + ' {\n            |    ' + tidToName.b1(tid) + '\n            |}\n        ';
      var tmp1_appendLine = trimMargin$default(tmp_2, null, 1, null);
      var tmp$ret$7;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_0 = sb.f6(tmp1_appendLine);
      tmp$ret$7 = tmp0_appendLine_0.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$8 = tmp$ret$7;
    }
    var tmp1_iterator = locks.b();
    while (tmp1_iterator.c()) {
      var lock_0 = tmp1_iterator.d();
      var tmp$ret$10;
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = 'object L' + lock_0;
      var tmp$ret$9;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_1 = sb.f6(tmp2_appendLine);
      tmp$ret$9 = tmp0_appendLine_1.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$10 = tmp$ret$9;
    }
    var tmp2_iterator = holds.b();
    while (tmp2_iterator.c()) {
      var hold = tmp2_iterator.d();
      var tmp$ret$12;
      // Inline function 'kotlin.text.appendLine' call
      var tmp3_appendLine = 'T' + hold.v2_1 + ' --[#blue]--> L' + hold.w2_1 + ': holds';
      var tmp$ret$11;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_2 = sb.f6(tmp3_appendLine);
      tmp$ret$11 = tmp0_appendLine_2.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$12 = tmp$ret$11;
    }
    var tmp3_iterator = waits.b();
    while (tmp3_iterator.c()) {
      var w = tmp3_iterator.d();
      var tmp$ret$14;
      // Inline function 'kotlin.text.appendLine' call
      var tmp4_appendLine = 'T' + w.v2_1 + ' --[#red]--> L' + w.w2_1 + ': waits';
      var tmp$ret$13;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_3 = sb.f6(tmp4_appendLine);
      tmp$ret$13 = tmp0_appendLine_3.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$14 = tmp$ret$13;
    }
    var tmp$ret$16;
    // Inline function 'kotlin.text.appendLine' call
    var tmp$ret$15;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_4 = sb.f6('@enduml');
    tmp$ret$15 = tmp0_appendLine_4.j2(_Char___init__impl__6a9atx(10));
    tmp$ret$16 = tmp$ret$15;
    if (locks.k() ? waits.k() : false)
      return '';
    return sb.toString();
  }
  function generatePumlStudio(dump) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    var locks = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    var threads = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var tidToName = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$3 = LinkedHashSet_init_$Create$();
    var waits = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$4 = LinkedHashSet_init_$Create$();
    var holds = tmp$ret$4;
    var threadNameWhoWaits = '';
    var threadIdWhoWaits = '';
    var threadNameWhoHelds = '';
    var threadIdWhoHelds = '';
    var lock = '';
    // Inline function 'kotlin.sequences.forEach' call
    var tmp0_forEach = lineSequence(dump);
    var tmp0_iterator = tmp0_forEach.b();
    while (tmp0_iterator.c()) {
      var element = tmp0_iterator.d();
      // Inline function 'thread.analyzer.generatePumlStudio.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$5 = charSequenceLength(element) === 0;
      if (tmp$ret$5) {
        threadNameWhoWaits = '';
        threadIdWhoWaits = '';
        threadNameWhoHelds = '';
        threadIdWhoHelds = '';
        lock = '';
      }
      if (contains$default(element, 'waiting for monitor entry', false, 2, null)) {
        var tmp = substringBefore$default(element, ' prio=', null, 2, null);
        var threadNameAndIdWhoWaits = removeSurrounding(substringBefore$default(tmp, ' daemon', null, 2, null), '"');
        threadNameWhoWaits = substringBefore$default(threadNameAndIdWhoWaits, '@', null, 2, null);
        threadIdWhoWaits = substringAfter$default(threadNameAndIdWhoWaits, '@', null, 2, null);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = threadIdWhoWaits;
        var tmp1_set = threadNameWhoWaits;
        tidToName.a4(tmp0_set, tmp1_set);
        threads.i(threadIdWhoWaits);
      }
      var tmp_0;
      if (contains$default(element, 'waiting for', false, 2, null)) {
        tmp_0 = contains$default(element, 'to release lock on', false, 2, null);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = substringAfterLast$default(element, 'to release lock on <', null, 2, null);
        lock = substringBefore$default(tmp_1, '> ', null, 2, null);
        var tmp_2 = substringAfterLast$default(element, 'waiting for ', null, 2, null);
        var threadNameAndIdWhoHelds = substringBefore$default(tmp_2, ' to release lock on ', null, 2, null);
        threadNameWhoHelds = substringBefore$default(threadNameAndIdWhoHelds, '@', null, 2, null);
        threadIdWhoHelds = substringAfter$default(threadNameAndIdWhoHelds, '@', null, 2, null);
        locks.i(lock);
        holds.i(new Pair(threadIdWhoHelds, lock));
        waits.i(new Pair(threadIdWhoWaits, lock));
      }
    }
    println('locks: ' + locks);
    println('threads: ' + threads);
    println('waits: ' + waits);
    println('holds: ' + holds);
    println('tidToName: ' + tidToName);
    var sb = StringBuilder_init_$Create$();
    var tmp$ret$7;
    // Inline function 'kotlin.text.appendLine' call
    var tmp$ret$6;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = sb.f6('@startuml');
    tmp$ret$6 = tmp0_appendLine.j2(_Char___init__impl__6a9atx(10));
    tmp$ret$7 = tmp$ret$6;
    var tmp0_iterator_0 = threads.b();
    while (tmp0_iterator_0.c()) {
      var tid = tmp0_iterator_0.d();
      var tmp$ret$9;
      // Inline function 'kotlin.text.appendLine' call
      var tmp_3 = 'object T' + tid + ' {\n            |    ' + tidToName.b1(tid) + '\n            |}\n        ';
      var tmp1_appendLine = trimMargin$default(tmp_3, null, 1, null);
      var tmp$ret$8;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_0 = sb.f6(tmp1_appendLine);
      tmp$ret$8 = tmp0_appendLine_0.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$9 = tmp$ret$8;
    }
    var tmp1_iterator = locks.b();
    while (tmp1_iterator.c()) {
      var lock_0 = tmp1_iterator.d();
      var tmp$ret$11;
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = 'object L' + lock_0;
      var tmp$ret$10;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_1 = sb.f6(tmp2_appendLine);
      tmp$ret$10 = tmp0_appendLine_1.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$11 = tmp$ret$10;
    }
    var tmp2_iterator = holds.b();
    while (tmp2_iterator.c()) {
      var hold = tmp2_iterator.d();
      var tmp$ret$13;
      // Inline function 'kotlin.text.appendLine' call
      var tmp3_appendLine = 'T' + hold.v2_1 + ' --[#blue]--> L' + hold.w2_1 + ': holds';
      var tmp$ret$12;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_2 = sb.f6(tmp3_appendLine);
      tmp$ret$12 = tmp0_appendLine_2.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$13 = tmp$ret$12;
    }
    var tmp3_iterator = waits.b();
    while (tmp3_iterator.c()) {
      var w = tmp3_iterator.d();
      var tmp$ret$15;
      // Inline function 'kotlin.text.appendLine' call
      var tmp4_appendLine = 'T' + w.v2_1 + ' --[#red]--> L' + w.w2_1 + ': waits';
      var tmp$ret$14;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_3 = sb.f6(tmp4_appendLine);
      tmp$ret$14 = tmp0_appendLine_3.j2(_Char___init__impl__6a9atx(10));
      tmp$ret$15 = tmp$ret$14;
    }
    var tmp$ret$17;
    // Inline function 'kotlin.text.appendLine' call
    var tmp$ret$16;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_4 = sb.f6('@enduml');
    tmp$ret$16 = tmp0_appendLine_4.j2(_Char___init__impl__6a9atx(10));
    tmp$ret$17 = tmp$ret$16;
    if (locks.k() ? waits.k() : false)
      return '@startuml\n\nnote as n1\n\n\n\n\n <size:20>Locks and Waits Not Detected<\/size>\n\n\n\n\nend note\n@enduml';
    return sb.toString();
  }
  function generatePuml(dump) {
    var firebaseDiagram = generatePumlFirebase(dump);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(firebaseDiagram) > 0;
    if (tmp$ret$0)
      return firebaseDiagram;
    return generatePumlStudio(dump);
  }
  function getPumlLink(diagramCode) {
    var res = StringBuilder_init_$Create$();
    var indexedObject = diagramCode;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var ch = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(ch);
      res.f6(padStart(toString(tmp$ret$0, 16), 2, _Char___init__impl__6a9atx(48)));
    }
    return 'https://www.plantuml.com/plantuml/png/~h' + res;
  }
  function generatePumlFirebase$lambda(line) {
    var tmp;
    if (contains$default(line, 'held by thread', false, 2, null)) {
      tmp = contains$default(line, ':tid=', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  }
  var platform;
  function main() {
    println('main1');
    var tmp = window;
    tmp.onload = main$lambda;
  }
  function main$lambda(it) {
    var textArea = ensureNotNull(window.document.getElementById('thread_dump_textarea'));
    println('main2');
    var img = ensureNotNull(window.document.getElementById('diagram'));
    println('main3');
    textArea.addEventListener('change', main$lambda$lambda, false);
    textArea.addEventListener('keyup', main$lambda$lambda_0(textArea, img), false);
    println('Thread Analyzer');
    return Unit_getInstance();
  }
  function main$lambda$lambda(event) {
    println('ta changed 1');
    return Unit_getInstance();
  }
  function main$lambda$lambda_0($textArea, $img) {
    return function (event) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $textArea;
      var tmp = tmp$ret$0.value;
      var diagramCode = generatePuml((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE());
      println(diagramCode);
      var diagramLink = getPumlLink(diagramCode);
      println(diagramLink);
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = $img;
      tmp$ret$1.src = diagramLink;
      return Unit_getInstance();
    };
  }
  //region block: init
  platform = 'js';
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $thread = _.thread || (_.thread = {});
    var $thread$analyzer = $thread.analyzer || ($thread.analyzer = {});
    $thread$analyzer.main = main;
  }
  $jsExportAll$(_);
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=ThreadAnalyzer-ThreadAnalyzer.js.map
