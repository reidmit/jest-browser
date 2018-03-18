describe('/ (Home Page)', () => {
  it('should load without error', async () => {
    let result = await global.__PAGE__.evaluate(() => document.title);
    expect(result).toBe('some-title');
  });
});
