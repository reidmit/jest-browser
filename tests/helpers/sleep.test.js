import path from 'path';

describe('sleep', () => {
  beforeEach(() => {
    jest.setTimeout(1);
  });

  it('pauses async timeout', async () => {
    await sleep(0.5);
  });
});

describe('sleepMs', () => {
  beforeEach(() => {
    jest.setTimeout(1);
  });

  it('pauses async timeout', async () => {
    await sleepMs(500);
  });
});
