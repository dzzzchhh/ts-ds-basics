[![Build Status](https://travis-ci.com/dzmchar/ts-ds-basics.svg?branch=master)](https://travis-ci.com/dzmchar/ts-ds-basics)

Set of tasks for JavaScript interviews

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

4. Write a function that checks whether or not string is a palindrome([Code](./src/strings/is-palindrome.ts)/[Test](./tests/palindromes.spec.ts))

```javascript
isPalindrome("xanax"); // -> true
isPalindrome("xanax2"); // -> false
```

5. Write a function that takes in array of simple values (numbers,strings) and returns original array without duplicated records ([Code](./src/lists/unique.ts)/[Test](./tests/lists-uniqe.spec.ts))

```javascript
unique([1, 2, 3, 4, 5, 2, 3, 4, 1]); // -> [1,2,3,4,5]
```

6. Write a function that returns every n-th element of an array ([Code](./src/lists/n-th-element.ts)/[Test](./tests/n-th-element.spec.ts))

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

10. Write a function that takes in a string and returns its abbreviation ([Code](./src/strings/abbreviation-composer.ts)/[Test](./tests/abbreviation-composer.spec.ts))

```javascript
composeAbbreviation("Denial Of Service"); // -> "DOS"
composeAbbreviation("United Nations"); // -> "UN
```
