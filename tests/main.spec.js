describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it.skip('should happen fun', () => {
        // Espera que aconteça
        // Entrada de dados / métodos sum(4,4)
        // Espera retornar (8) => true | (9) => broken test
        throw new Error('just an Error');
      });
    });
    context.only('Case 2', () => {
      it('should happen fun', () => {
        throw new Error('just an Error');
      });

      it('should happen mimimi', () => {});
    });
  });
  describe('Method B', () => {});
});
