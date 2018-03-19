# jest-browser

Run Jest tests in a real browser! No more [fake DOM](https://github.com/jsdom/jsdom)! This Jest environment uses [puppeteer](https://github.com/GoogleChrome/puppeteer) to run tests in both headless and windowed Chrome/Chromium.

It also adds a bunch of helpful global functions for manipulating/asserting against real DOM nodes.

## Usage

_still a work-in-progress, but it'll be something like this..._

Assuming you already have a project with some Jest tests (like one created with Create React App):

```bash
yarn add -D jest-browser
```

In your `package.json`, under a top-level key called `"jest"`, you'll need to set this option:

```json
"jest": {
  "preset": "jest-browser"
}
```

If you're using Create React App, you'll have to eject in order to set the `"preset"` option.

## Configuration

`jest-browser` can be configured by creating a file called `browser.config.js` at your project root. It should look something like this:

```js
module.exports = {
  headless: false,
  verbose: true,
  executablePath:
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
};
```

### Options

#### `headless` (default: true)

Whether or not to run headless Chrome/Chromium (if false, it'll open a new window).

#### `executablePath` (default: undefined)

A path to an installed version of Chrome or Chromium somewhere on your computer. If not provided, the tests will use the bundled version of Chromium that ships with the `puppeteer` module.

#### `verbose` (default: false)

Whether or not to log some information as the tests are running. Might be useful for debugging, if something isn't working right.

Until the rest of the API/options are stabilized, look [here](https://github.com/reid47/jest-browser/blob/master/src/options.js) for the most up-to-date list of options and defaults.

## Development

Run the tests for the project like this:

```bash
yarn test
```
