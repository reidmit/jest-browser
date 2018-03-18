const path = require('path');

describe('select ($)', () => {
  beforeEach(async () => {
    await goTo(path.resolve(__dirname, '../examples/test-page.html'));
  });

  describe('without a second argument', () => {
    it('selects existing elements', async () => {
      expect(await $('#root')).toBeTruthy();
    });

    it('returns null for non-existent elements', async () => {
      expect(await $('#something-else')).toBeNull();
    });
  });

  describe('with a string second argument', () => {
    it('gets a property of the element', async () => {
      expect(await $('#root', 'innerHTML')).toBe('hello, world');
    });

    it('gets an attribute of the element', async () => {
      expect(await $('#link', 'href')).toMatch('example.com');
    });

    it('throws on non-existent element', () => {
      return expect($('#something-else', 'attr')).rejects.toThrow();
    });
  });

  describe('with a function second argument', () => {
    it('gets a property of the element', async () => {
      expect(await $('#root', el => el.innerHTML)).toBe('hello, world');
    });

    it('gets an attribute of the element', async () => {
      expect(await $('#link', el => el.href)).toMatch('example.com');
    });

    it('throws on non-existent element', () => {
      return expect($('#something-else', el => el.href)).rejects.toThrow();
    });
  });
});
