const path = require('path');

describe('$ helper', () => {
  beforeEach(async () => {
    await goTo(path.resolve(__dirname, './examples/test-page.html'));
  });

  it('selects existing elements', async () => {
    expect(await $('#root')).toBeTruthy();
  });

  it('returns null for non-existent elements', async () => {
    expect(await $('#something-else')).toBeNull();
  });
});
