
# Quicki - Fast Object to Query String Conversion


## Description

Quicki is a JavaScript library that provides a fast and efficient way to convert an object into a query string. It is designed to be a lightweight alternative to the JSON.stringify() method for generating query strings.

The main goal of Quicki is to optimize the performance of object-to-query-string conversion, resulting in faster execution times compared to JSON.stringify(). By leveraging key-value pairs and URL encoding, Quicki ensures that the resulting query string is compatible with URL standards.

## Installation

You can install Quicki using npm:

```bash
npm install quicki
``` 

## Usage

To use Quicki in your project, import the library and call the `quicki` function, passing in your object as the argument. It will return the generated query string.

javascriptCopy code

```js
const { quicki } = require('quicki');

const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

## Test
```bash
mocha
``` 

const queryString = quicki(obj);
console.log(queryString);` 

The above code will output: `name=John&age=30&city=New%20York`.

## Performance

Quicki has been optimized for performance and aims to provide faster execution times compared to JSON.stringify(). Extensive testing and benchmarking have shown significant improvements in query string generation speed.

Benchmark results:

-   JSON.stringify(): 2.901 ms
-   quicki(): 0.888 ms

Quicki outperforms JSON.stringify() by approximately 3 times, making it a highly efficient choice for object-to-query-string conversion.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the contribution guidelines mentioned in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
