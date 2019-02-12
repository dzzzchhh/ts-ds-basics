[![Build Status](https://travis-ci.com/dzmchar/ts-ds-basics.svg?branch=master)](https://travis-ci.com/dzmchar/ts-ds-basics)

Have excercises to suggest? See [Contribution guide](./CONTRIBUTING.md)

## Lists

1. Flatten array of arrays ([Code](./src/lists/flatten.ts)/[Test](./tests/lists-flatten.spec.ts))

```javascript
flatten([[1, 2], [3, 4], [5, 6]]); // -> [1,2,3,4,5,6]
```

2. Given list of integers return sum of all the list's elements

```javascript
sum([1, 2, 3, 4]); // -> 10
```

3. Write a function that takes in array of simple values (numbers,strings) and returns original array without duplicated records
   ([Code](./src/lists/unique.ts)/[Test](./tests/lists-uniqe.spec.ts))

```javascript
unique([1, 2, 3, 4, 5, 2, 3, 4, 1]); // -> [1,2,3,4,5]
```

4. Write a function that returns every n-th element of an array
   ([Code](./src/lists/n-th-element.ts)/[Test](tests/lists-n-th-element.spec.ts))

```javascript
getNthElement([1, 2, 3, 4, 5, 6, 7, 8], 4); // -> [4,8]
```

5. Write a function that returns first `n` elements of array

```javascript
getFirstElements([1, 2, 3, 4, 5], 3); // -> [1,2,3]
```

6. Write a function that takes in a list of numbers and returns difference between smallest and largest value
   ([Code](./src/lists/numeric-value-diff.ts)/[Test](tests/lists-numeric-value-diff.spec.ts))

```javascript
arrayValueDiff([1, 2, 3, 4]); // -> 3
arrayValueDiff([-1, 2, 3, 5]); // -> 6
arrayValueDiff([3, 3, 3]); // -> 0
```

7. Write a function to count the occurrences of a value in an array.
   ([Code](./src/lists/occurence.ts)/[Test](./tests/lists-occurence.spec.ts))

```javascript
countValueOccurences([1, 2, 3, 4, 5, 2, 3, 1, 2], 2); // -> 3
```

## Objects

1. Given a map of employee salaries return sum of all salaries

```javascript
const salariesExample = {
  Max: 50,
  Anna: 50,
  John: 100
};
sumSalaries(salariesExample); // -> 200
```

2. Query string builder
   ([Code](./src/strings/query-string-composer.ts)/[Test](tests/strings-query-string.spec.ts))

```javascript
composeQueryString({ version: 1, user: "Mike", country: "BLR" }); // -> “?version=1&user=Mike&country=BLR”
```

3. Write a function that takes in a collection of items, a parameter value and returns a hash map of lists entities groupped by parameter value
   ([Code](./src/lists/group-collection-by-property.ts)/[Test](./tests/group-collection-by-property.spec.ts))

```javascript
composeGroupsByProperty([
  { age: 20, name: "Peter" },
  { age: 30, name: "Mike" }
]);
// -> {20:[{age:20,name:"Peter"}],30:[{age:30,name:"Mike"}]}
```

4. Given a hashmap of values return the key with the highest value
   ([Code](./src/hashes/find-highest-value.ts)/[Test](./tests/hashes-find-highest-value.spec.ts))

```javascript
const map = {
  "Holly Jackson": 250,
  "Jack Southerland": 100,
  "Peter Higgins": 50
};
findHighestHashValue(map); // -> "Holly Jackson"
```

5. Given an object an list of strings return a new object with key names present in a list
   ([Code](./src/hashes/map-object.ts)/[Test](./tests/hashes-map-object.spec.ts))

```javascript
const baseObject = { xml: 4, http: 2, rest: 2, js: 10 };
const baseFields = ["xml", "js"];
mapObject(baseObject, baseFields); // -> { xml: 4, js: 10 };
```

## Strings

1. Write a function that checks whether or not string is a palindrome
   ([Code](./src/strings/is-palindrome.ts)/[Test](tests/strings-palindromes.spec.ts))

```javascript
isPalindrome("xanax"); // -> true
isPalindrome("xanax2"); // -> false
```

2. Write a function that takes in a string and returns its abbreviation
   ([Code](./src/strings/abbreviation-composer.ts)/[Test](tests/strings-abbreviation-composer.spec.ts))

```javascript
composeAbbreviation("Denial Of Service"); // -> "DOS"
composeAbbreviation("United Nations"); // -> "UN
```

3. Write a function that excludes all integers that are <= 1000 from a string of integers.
   ([Code](./src/strings/filter-by-digit-count.ts)/[Test](./tests/strings-filter-by-digit-count.spec.ts))

```javascript
greaterThan1000("200 150 1200 400 20 1400"); // -> “1200 1400”.
```

4. Write a function that returns first recurring character in a string.
   ([Code](./src/strings/first-recurring-character.ts)/[Test](tests/strings-first-recurring-character.spec.ts))

```javascript
getFirstRecurringCharacter("ABCDEA"); // -> “A”
```

5. Write a function that takes in a string and returns whether the first character of a string is in uppercase
   ([Code](./src/strings/is-first-character-uppercase.ts)/[Test](./tests/strings-is-first-character-uppercase.spec.ts))

```javascript
isFirstCharacterUppercase("ABCDEA"); // -> true
isFirstCharacterUppercase("abcdea"); // -> false
```

6. Write a function that takes in a string and a number `n` of repetitions and returns new string, that is original string repeated `n` times
   ([Code](./src/strings/character-repeat.ts)/[Test](./tests/strings-compose-character-sequence.spec.ts))

```javascript
composeCharacterSequence({ sequence: "+", repeatCount: 5 }); // -> "+++++"
```

7. Write a function that takes in a string and an array of characters. If a string has a character that’s included in an array then make the character uppercase.
   ([Code](./src/strings/to-uppercase.ts)/[Test](tests/strings-to-uppercase.spec.ts))

```javascript
targetUppercase("123xyzabc", ["x", "c"]); // -> ‘123XyzabC’;
```

8. Write a function that takes in a string and returns an object with the following properties of the given string:
   ([Code](./src/strings/heatmap.ts)/[Test](tests/strings-heatmap.spec.ts))

- length of the string
- number of unique characters used to compose a string
- Hash table with the following format -> {character: number of times character occurs in the string};

```javascript
const string = "abcdeabc";
const heatmap = getHeatmap(string);
/* 
heatmap.length -> 8;
heatmap.uniqueTokensCount -> 5;
heatmap.map -> {
      a: 2,
      b: 2,
      c: 2,
      d: 1,
      e: 1
    };
*/
```

9. Write a function that takes a string and converts it to camel case
   ([Code](./src/strings/to-camel-case.ts)/[Test](./tests/strings-to-camel-case.spec.ts))

```javascript
toCamelCase("A string of values"); // -> "aStringOfValues";
```

10. Given a string return a list of all capitalized words
    ([Code](./src/regexp/get-capitalized-words-list.ts)/[Test](./tests/regexp-get-capitalized-words-list.spec.ts))

```javascript
getCapitalizedWords("Visit United States of America today!"); // -> ["Visit","United","States","America"]
```

11. Given a string that contains snake_case'd words, return a string where those words are surrounded with provided HTML tag.
    ([Code](./src/regexp/surround-group.ts)/[Test](./tests/regexp-surround.spec.ts))

```javascript
surroundSnakeCase(
  "a_snake_case_word followed by normal word and then snake_case_again",
  "h1"
); // -> "<h1>a_snake_case_word</h1> followed by normal word and then <h1>snake_case_again</h1>"
```

12. Implement "Fuzzy search" function
    ([Code](./src/strings/fuzzy-search.ts)/[Test](./tests/strings-fuzzy-search.spec.ts))

```javascript
fuzzySearch("car", "cartwheel"); // -> true
fuzzySearch("cwhl", "cartwheel"); // -> true
fuzzySearch("cwheel", "cartwheel"); // -> true
fuzzySearch("cartwheel", "cartwheel"); // -> true
fuzzySearch("cwheeel", "cartwheel"); // -> false
fuzzySearch("lw", "cartwheel"); // -> false
```

## OOP

1. Create a class hierarchy. Function prototyping or class syntax can be used.
   ([Code](./src/oop)/[Test](./tests/oop-prototypes.spec.ts))

Vehicle

- Vehicle is a base class.
- All vehicles upon creation receive a `vendor` (manufacturer) name.
- All vehicles have `start()` method that retunrs a string `"start the <vehicle vendor> vehicle"`
- `Vehicle` has abstract `honk()` method

Truck

- Class `Truck` inherits from `Vehicle`.
- `Truck` also receives `numberOfCarriages` parameter upon creation.
- `honk()` method of `Truck` should return a string `"This is a <vendor> truck with <numberOfCarriages> carriages"`
- `Truck` should be able to call `start()` method, since `Truck` is a `Vehicle`

Car

- Class `Car` inherits from `Vehicle`.
- `Car` also receives `interiorColor` parameter upon creation.
- `honk()` method of `Car` should return a string `"This is a <vendor> car with <interiorColor> interior"`
- `Car` should be able to call `start()` method, since `Car` is a `Vehicle`
