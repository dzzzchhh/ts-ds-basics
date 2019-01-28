[![Build Status](https://travis-ci.com/dzmchar/ts-ds-basics.svg?branch=master)](https://travis-ci.com/dzmchar/ts-ds-basics)

## Level 1

1. Flatten array of arrays ([Code](./src/lists/flatten.ts)/[Test](./tests/lists-flatten.spec.ts))

```javascript
flatten([[1, 2], [3, 4], [5, 6]]); // -> [1,2,3,4,5,6]
```

2. Given list of integers return sum of all the list's elements

```javascript
sum([1, 2, 3, 4]); // -> 10
```

3. Given a map of employee salaries return sum of all salaries

```javascript
const salariesExample = {
  Max: 50,
  Anna: 50,
  John: 100
};
sumSalaries(salariesExample); // -> 200
```

4. Write a function that checks whether or not string is a palindrome
   ([Code](./src/strings/is-palindrome.ts)/[Test](tests/strings-palindromes.spec.ts))

```javascript
isPalindrome("xanax"); // -> true
isPalindrome("xanax2"); // -> false
```

5. Write a function that takes in array of simple values (numbers,strings) and returns original array without duplicated records
   ([Code](./src/lists/unique.ts)/[Test](./tests/lists-uniqe.spec.ts))

```javascript
unique([1, 2, 3, 4, 5, 2, 3, 4, 1]); // -> [1,2,3,4,5]
```

6. Write a function that returns every n-th element of an array
   ([Code](./src/lists/n-th-element.ts)/[Test](tests/lists-n-th-element.spec.ts))

```javascript
getNthElement([1, 2, 3, 4, 5, 6, 7, 8], 4); // -> [4,8]
```

7. Write a function that takes in array of integers and returns an array, where all odd values come first, event values come after odd ones.

```javascript
groupByOddEven([1, 2, 3, 4, 5, 6, 20, 21]); // -> [2,4,6,20,1,3,5,21]
```

8. Write a function that returns first `n` elements of array

```javascript
getFirstElements([1, 2, 3, 4, 5], 3); // -> [1,2,3]
```

9. Write a function that returns whether string is blank or not

```javascript
isBlank(""); // -> true
isBlank("1"); // -> false
```

10. Write a function that takes in a string and returns its abbreviation
    ([Code](./src/strings/abbreviation-composer.ts)/[Test](tests/strings-abbreviation-composer.spec.ts))

```javascript
composeAbbreviation("Denial Of Service"); // -> "DOS"
composeAbbreviation("United Nations"); // -> "UN
```

11. Write a function that takes in a list of numbers and returns difference between smallest and largest value
    ([Code](./src/lists/numeric-value-diff.ts)/[Test](tests/lists-numeric-value-diff.spec.ts))

```javascript
arrayValueDiff([1, 2, 3, 4]); // -> 3
arrayValueDiff([-1, 2, 3, 5]); // -> 6
arrayValueDiff([3, 3, 3]); // -> 0
```

## Level 2

1. Query string builder
   ([Code](./src/strings/query-string-composer.ts)/[Test](tests/strings-query-string.spec.ts))

```javascript
composeQueryString({ version: 1, user: "Mike", country: "BLR" }); // -> “?version=1&user=Mike&country=BLR”
```

2. Write a function that excludes all integers that are <= 1000 from a string of integers.
   ([Code](./src/strings/filter-by-digit-count.ts)/[Test](./tests/strings-filter-by-digit-count.spec.ts))

```javascript
greaterThan1000("200 150 1200 400 20 1400"); // -> “1200 1400”.
```

3. Create a class hierarchy. Function prototyping or class syntax can be used. (TBD)
4. Write a function to count the occurrences of a value in an array.
   ([Code](./src/lists/occurence.ts)/[Test](./tests/lists-occurence.spec.ts))

```javascript
countValueOccurences([1, 2, 3, 4, 5, 2, 3, 1, 2], 2); // -> 3
```

5. Write a function that returns first recurring character in a string.
   ([Code](./src/strings/query-string-composer.ts)/[Test](tests/strings-query-string.spec.ts))

```javascript
getFirstRecurringCharacter("ABCDEA"); // -> “A”
```

6. Write a function that takes in a string and returns whether the first character of a string is in uppercase
   ([Code](./src/strings/is-first-character-uppercase.ts)/[Test](./tests/strings-is-first-character-uppercase.spec.ts))

```javascript
isFirstCharacterUppercase("ABCDEA"); // -> true
isFirstCharacterUppercase("abcdea"); // -> false
```

## Level 3

1. Write a function that takes time string and converts it to AM/PM format. (TBD)

```javascript
convertTime("22:35"); // -> “10:35 PM”
convertTime("08:15"); // -> “08:15 AM”
```

2. Write a function that takes in a string and an array of characters. If a string has a character that’s included in an array then make the character uppercase.
   ([Code](./src/strings/to-uppercase.ts)/[Test](tests/strings-to-uppercase.spec.ts))

```javascript
targetUppercase("123xyzabc", ["x", "c"]); // -> ‘123XyzabC’;
```

Example:

3. Write a function that takes in a string and returns an object with the following properties of the given string:
   ([Code](./src/strings/heatmap.ts)/[Test](tests/strings-heatmap.spec.ts))

- length of the string
- number of unique characters used to compose a string
- Hash table with the following format -> {character: number of times character occurs in the string};

4. Write a function that takes a string and converts it to camel case
   ([Code](./src/strings/to-camel-case.ts)/[Test](./tests/strings-to-camel-case.spec.ts))

```javascript
toCamelCase("A string of values"); // -> "aStringOfValues";
```
