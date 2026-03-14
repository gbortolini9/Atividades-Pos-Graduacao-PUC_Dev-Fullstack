const assert = require('assert');
const { soma } = require('../app');

describe('Teste da função soma', function () {
  it('deve retornar 4 ao somar 2 + 2', function () {
    assert.strictEqual(soma(2, 2), 4);
  });
});
