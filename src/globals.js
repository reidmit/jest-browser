const options = require('./options');

const assignGlobals = async global => {
  await global.page.addScriptTag({
    path: require.resolve('jquery')
  });

  global.sleep = secs => global.page.waitFor(secs * 1000);
  global.sleepMs = ms => global.page.waitFor(ms);

  global[options.jQuery] = async selector => {
    try {
      return await global.page.evaluate(
        `window.jQuery(${JSON.stringify(selector)})`
      );
    } catch (err) {
      console.error(err);
      return null;
    }
  };
};

module.exports = { assignGlobals };
