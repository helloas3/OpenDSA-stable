/*global ODSA */
"use strict";
// Sequential Tree serialization visualization slideshow
$(document).ready(function () {
  var av_name = "SequentialTreeCON";
  var av = new JSAV(av_name);
  var temp1;
  var arr = av.ds.array(['A','B','/','D','/','/','C','E','G','/','/','/','F','H','/','/','I','/','/']);
  arr.highlight(0);
  var bt = av.ds.binarytree({visible: true, nodegap: 35});
  bt.root('A');
  var a = bt.root();
  a.left('B');
  var b = a.left();
  var d = a.left().right('D');
  var c = a.right('C');
  var e = a.right().left('E');
  var g = a.right().left().left('G');
  var f = a.right().right('F');
  var h = a.right().right().left('H');
  var i = a.right().right().right('I');

  b.hide();
  d.hide();
  c.hide({recursive:false});
  e.hide({recursive:false});
  g.hide({recursive:false});
  f.hide({recursive:false});
  h.hide({recursive:false});
  i.hide({recursive:false});
  av.umsg("We begin with the first node in the string 'A' which will be the root node");
    bt.layout();

  var ptr = av.pointer("rt", bt.root(), {anchor: "center top", top: -10});

  av.displayInit();



  //Slide 1

  //Slide 2
  av.umsg("The next character in the serialized string represents A's left child");
  arr.highlight(1);
  av.step();

  //Slide 3
  av.umsg("We insert B as the left child of A");
  b.show({recursive:false});
  bt.layout();
  ptr.target(b);
  av.step();

  //Slide 4
  av.umsg("The next character in the serialized string says B has no left child ('/') ");
  arr.highlight(2);
  av.step();

  //Slide 5
  av.umsg("The next token 'D' is the right child of 'B' ");
  d.show();
  bt.layout();
  ptr.target(d);
  arr.highlight(3);
  //point to D
  av.step();

  //Slide 6
  arr.highlight(4);
  arr.highlight(5);
  av.umsg("The two slashes imply D has no children and is a leaf node");
  av.step();

  //Slide 7
  av.umsg("We pop back up to the parent of D");
  //point to B
  ptr.target(b);
  av.step();

  //Slide 8
  av.umsg("Since we have already processed both of B's children, we continue popping up to the root.");
  //point to A
  ptr.target(a);
  av.step();

  //Slide 9
  av.umsg("The next character in the string represents A's right child 'C' ");
  c.show({recursive:false});
  bt.layout();
  ptr.target(c);
  arr.highlight(6);
  //point to C
  av.step();

  //Slide 10
  av.umsg("'E' must be C's left child");
  e.show({recursive:false});
  bt.layout();
  ptr.target(e);
  arr.highlight(7);
  //point to E
  av.step(); 

  //Slide 11
  av.umsg("The next character 'G' represents E's left child");
  g.show({recursive:false});
  bt.layout();
  ptr.target(g);
  arr.highlight(8);
  //point to G
  av.step();

  //Slide 12
  av.umsg("Double slashes implies G has no children");
  arr.highlight(9);
  arr.highlight(10);
  av.step();

  //Slide 13
  av.umsg("Pop back up to G's parent ('E') ");
  ptr.target(e);
  //point to E
  av.step(); 

  //Slide 14
  av.umsg("The next character in the serialized string ('/') represents E's right child");
  arr.highlight(11);
  av.step();

  //Slide 15
  av.umsg("It is a slash, so no right child for E");
  av.step();  

  //Slide 16
  av.umsg("We pop back up to E's parent ('C') ");
  ptr.target(c);
  //point to C
  av.step();  

  //Slide 17
  av.umsg("F represents C's right child");
  f.show({recursive:false});
  bt.layout();
  ptr.target(f);
  arr.highlight(12);
  //point to F
  av.step();

  //Slide 18
  av.umsg("H represents F's left child");
  h.show({recursive:false});
  bt.layout();
  ptr.target(h);
  arr.highlight(13);
  //point to H
  av.step();

  //Slide 19
  av.umsg("Double slash implies H is a leaf node with no children. Pop back up to F");
  ptr.target(f);
  arr.highlight(14);
  arr.highlight(15);
  av.step();

  //Slide 20
  av.umsg("I must be the right child of F");
  i.show({recursive:false});
  bt.layout();
  ptr.target(i);
  //point to I
  arr.highlight(16);
  av.step();

  //Slide 21
  av.umsg("Double slashes implies I is a leaf node with no children");
  arr.highlight(17);
  arr.highlight(18);
  av.step();
  av.recorded();

});
