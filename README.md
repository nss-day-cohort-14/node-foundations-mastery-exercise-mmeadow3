# Word Search

## Requirements

The purpose of this program is to list English words that begin with a search
term.

Use a JavaScript file to act as a Node.js program named `word-search.js`.

This program should read a file `/usr/share/dict/words`. This file is used by
the operating system for spell checking. If this file does not exist on your
system, you can use one from GitHub such as: https://github.com/atebits/Words

Allow an argument to be passed to this program which should be used as a search
term. The case of the search term should not matter. If no argument is passed,
respond only with a simple [usage message][usage].

Limit the results to only ten words and case should not matter.

Start with a `createReadStream` and use the [event-stream][es] module's `split`
and `map` methods to manipulate the stream.

You will also create your own `Transform` stream as a module called
`limit-ten.js`. This `Transform` should be a limiter before finally `pipe`ing
the results to stdout.

Expected:

```bash
$ ./word-search.js
Usage: 10.js [searchterm]
$ ./word-search.js app
Usage: 10.js [searchterm]
Appalachia
Appalachian
appall
appalling
appallingly
appallment
appalment
appanage
appanagist
apparatus
$ ./10.js JAVA
Java
Javahai
javali
Javan
Javanee
Javanese
```

## Bonus

-   Optionally accept the wordlist as stdin with no argument given
    `cat file | ./word-search.js`
-   Write another `Transform` module `hackerTyper` to stream each letter to the
    terminal every 50 ms
-   Try another popular stream library: Highland.js
-   If you search for something at the beginning of the alphabet, like 'a' or
    'aal', there is a slight delay before the program exits while the stream
    continues through the wordlist even though the app has printed the 10
    results or will not find any more results. End the stream as soon as
    possible to remove this delay.

## Links

-   [event-stream library][es]
-   [Highland.js library][highland]
-   [Usage messages][usage]
-   [Words (Unix)][words]

[es]: https://github.com/dominictarr/event-stream
[highland]: http://highlandjs.org/
[usage]: https://en.wikipedia.org/wiki/Usage_message
[words]: https://en.wikipedia.org/wiki/Words_(Unix)
