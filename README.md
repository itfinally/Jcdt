It it a toolbox for javascript( and typescript ).

One day, I want to use HashMap/HashSet and found something package to use it,
but I found something wrong, this map is hash with 'toString()' function, that mean
it can't identity what difference between two instance of one class, it is a huge mistake.

Then I think, Why do I write my own toolkit ? 
so reference java 7 api document and source code to write this tools.

After all, I don't know how to write a red-black tree, not yet. = =||
And hashMap added red-black tree in java 8. 

include:
  1. exception        - as the name say
  2. lang             - something common tool like event, type-judgement, also implement object.hashcode
  3. collection       - a collection definition, written reference to java 7 api document
  4. list             - ArrayList, ArrayDeque, LinkedList
  5. map              - HashMap, HashSet
    
That all.