describe('Main', () => {
  // roda uma vez só antes do bloco
  before(() => {
    console.log('before');
  });
  // roda uma vez só depois do bloco
  after(() => {
    console.log('after');
  });
  // roda todas as vezes antes de cada bloco
  beforeEach(() => {
    console.log('beforeEach');
  });
  // roda todas as vezes depois de cada bloco
  afterEach(() => {
    console.log('afterEach');
  });
  it('teste 1', () => {
    console.log('teste 1');
  });
  it('teste 2', () => {
    console.log('teste 2');
  });
});

// before
// after
// test 1
// beforeEach
// afterEach
// test 2
// afeterEach
// after
