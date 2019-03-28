# Staircase Sentence

### Question:


Write a script that takes a sentence-like string as an argument. Then, it logs each word on their own line according to their word position in the sentence times 2.

```

$ node staircaseSentence.js "hello world"
hello
  world

$ node staircaseSentence.js "The quick brown fox jumps over the lazy dog"
The
  quick
    brown
      jumps
        over
          the
            lazy
              dog
```


Have it reset the word indentation when a . appears.



```

$ node staircaseSentence.js "i am tarzan. you are jane"
i
  am
    tarzan
you
  are
    jane
```


Accept an optional number as a second argument to specify the multiple of spaces words are indented by.

```

$ node staircaseSentence.js "i am tarzan. you are jane" 5
i
     am
          tarzan
you
     are
          jane
```


At the beginning of every indentation level except for the first one, show a | character.

```

$ node staircaseSentence.js "i am tarzan. you are jane goodhall" 5
i
     am
     |    tarzan
you
     are
     |    jane
     |    |    goodhall
```

