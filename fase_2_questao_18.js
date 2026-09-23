const lista = [4, 8, 12, 16];
// Forma 1 
const listaCopia1 = [...lista];
const r1 = listaCopia1.splice(1, 2);

// Forma 2 
const r2 = lista.filter((_, idx) => idx === 1 || idx === 2);
const listaNaoMutada = lista.filter((_, idx) => idx !== 1 && idx !== 2);

console.log('Original intacto:', lista);
console.log('Removidos (método 1):', r1);
console.log('Novo array sem os itens:', listaNaoMutada);
