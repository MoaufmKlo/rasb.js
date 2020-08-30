<div align="center">
    <h1>rasb.js</h1>
    <img alt="npm Version" src="https://img.shields.io/npm/v/rasb.js">
    <img alt="npm Downloads" src="https://img.shields.io/npm/dw/rasb.js">
    <br>
</div>

## Table of contents
- [Table of contents](#table-of-contents)
- [About](#about)
- [Installation](#installation)
- [Example usage](#example-usage)
- [Links](#links)
- [Contributing](#contributing)

## About

rasb.js is an unofficial [Node.js](https://nodejs.org/) module for interacting with the RASB API.

- Object-oriented
- Performant

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install rasb.js:

```bash
npm install rasb.js
```

## Example usage

```javascript
const rasb = require("rasb.js");
const RASB = new rasb();

RASB.isUserBanned("329991150712651776").then((isUserBanned) => {
    if(isUserBanned) {
        console.log("User is banned");
    } else {
        console.log("User is not banned")
    }
});
```

## Links

- [Wiki/Documentation](https://github.com/MoaufmKlo/rasb.js/wiki)
- [npm](https://www.npmjs.com/package/rasb.js)
- [GitHub](https://github.com/MoaufmKlo/rasb.js)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.