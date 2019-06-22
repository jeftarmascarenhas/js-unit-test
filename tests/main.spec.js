/*
  Pensando em teste
  1. O que o código precisa fazer?
  2. Que dados ele recebe?
  3. Que dados ele precisa retornar?
  4. Que ações precisa acontecer para o código rodar?
  4.1 ex: Se é pra chamar um método quando clicar, da focus...
*/

/*
  Padrão de teste
  1. O método tem que fazer isso quando aquilo
  1.1. en - It should do that when this
  ex: it('should return 4 when receive 2,2', () => {
    expect(sum(2,2)).to.equal(4) // expect return 4
  })
*/

const { expect } = require('chai');

describe('Main', () => {
  let arr;
  // roda uma vez só antes do bloco
  before(() => {});
  // roda uma vez só depois do bloco
  after(() => {});
  // roda todas as vezes antes de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });
  // roda todas as vezes depois de cada bloco
  afterEach(() => {});

  // Teste inicial para saber o tipo ou se exite(smoke test)
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    // expect = espero; to = ligação; not = negação; include = condição
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});

// Hooks
// before
// after
// test 1
// beforeEach
// afterEach
// test 2
// afeterEach
// after
