describe('/ (Home Page)', () => {
  it('should load without error', async () => {
    let result = await page.evaluate(() => document.title);
    expect(result).toBe('some-title');
  });
});
