describe('jQuery tests with $', () => {
  beforeEach(async () => {
    await page.setContent(`
      <html>
        <head>
          <title>browser test!</title>
        </head>
        <body>
          <div id="root">hello, world</div>
        </body>
      </html>
    `);
  });

  it('has a title', async () => {
    const title = await page.evaluate(() => document.title);
    expect(title).toBe('browser test!');
  });

  it('has a root element', async () => {
    const root = await $('#root');
    expect(root).toBeTruthy();
  });
});
