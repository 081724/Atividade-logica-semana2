// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
const quantidadeDeKmPercorrido = 200
const quantidadeDeDiasAluguel = 5
const custoDaDiaria = 60
const custoKmRodado = 0.15

const gastoPorDia = quantidadeDeDiasAluguel*custoDaDiaria
const gastoPorKm = quantidadeDeKmPercorrido*custoKmRodado
const gastoTotal = gastoPorDia+gastoPorKm

console.log("Despesas com aluguel : "+ gastoTotal)