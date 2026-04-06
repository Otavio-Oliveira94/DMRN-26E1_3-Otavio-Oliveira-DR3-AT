export const CATEGORIAS = [
  { id: '1', nome: 'Lanches', descricao: 'Sanduíches, hambúrgueres e afins' },
  { id: '2', nome: 'Bebidas', descricao: 'Refrigerantes, sucos e shakes' },
  { id: '3', nome: 'Sobremesas', descricao: 'Doces, bolos e sorvetes' },
  { id: '4', nome: 'Pratos Executivos', descricao: 'Refeições completas' },
  { id: '5', nome: 'Vegetariano', descricao: 'Opções sem carne' },
  { id: '6', nome: 'Promoções', descricao: 'Ofertas e combos' },
  { id: '7', nome: 'Infantil', descricao: 'Refeições para crianças' },
  { id: '8', nome: 'Saudável', descricao: 'Opções leves e nutritivas' },
];

export const PRODUTOS = [
  {
    id: 'p1',
    categoriaId: '1',
    nome: 'Hambúrguer Clássico',
    descricao: 'Carne, queijo, alface, tomate',
    preco: 28.5,
  },
  {
    id: 'p2',
    categoriaId: '1',
    nome: 'X-Salada',
    descricao: 'Hambúrguer, queijo, salada',
    preco: 26.0,
  },
  {
    id: 'p3',
    categoriaId: '2',
    nome: 'Refrigerante 350ml',
    descricao: 'Coca-Cola',
    preco: 6.5,
  },
  {
    id: 'p4',
    categoriaId: '2',
    nome: 'Suco Natural',
    descricao: 'Laranja',
    preco: 8.0,
  },
  {
    id: 'p5',
    categoriaId: '3',
    nome: 'Brownie',
    descricao: 'Brownie com sorvete',
    preco: 12.0,
  },
  {
    id: 'p6',
    categoriaId: '4',
    nome: 'Arroz, feijão e bife',
    descricao: 'Prato executivo do dia',
    preco: 32.0,
  },
  {
    id: 'p7',
    categoriaId: '5',
    nome: 'Salada Vegetariana',
    descricao: 'Mix de folhas e grãos',
    preco: 22.0,
  },
  {
    id: 'p8',
    categoriaId: '6',
    nome: 'Combo Econômico',
    descricao: 'Hambúrguer + batata + refrigerante',
    preco: 34.0,
  },
];

export const USUARIO_MOCK = {
  id: 'u1',
  nome: 'Otavio Oliveira',
  email: 'otavio.oliveira@infnet.com',
  telefone: '(11) 99999-9999',
  endereco: 'Av. Paulista, 1200 - Centro, São Paulo - SP',
};

export const PEDIDOS_MOCK = [
  {
    id: 'Order-1001',
    data: '01/04/2026',
    status: 'Em preparo',
    itens: [
      { id: 'p1', nome: 'Hambúrguer Clássico', quantidade: 1, preco: 28.5 },
      { id: 'p3', nome: 'Refrigerante 350ml', quantidade: 2, preco: 6.5 },
    ],
  },
  {
    id: 'Order-1002',
    data: '28/03/2026',
    status: 'Entregue',
    itens: [{ id: 'p5', nome: 'Brownie', quantidade: 1, preco: 12.0 }],
  },
  {
    id: 'Order-1003',
    data: '20/03/2026',
    status: 'Cancelado',
    itens: [
      { id: 'p2', nome: 'X-Salada', quantidade: 1, preco: 26.0 },
      { id: 'p4', nome: 'Suco Natural', quantidade: 1, preco: 8.0 },
    ],
  },
];

export const CREDENCIAIS_TESTE = {
  email: 'usuarioTESTE@infnet.com',
  senha: 'senha123',
};

export const RESTAURANTES = [
  {
    id: 'r1',
    nome: 'Restaurante Central 1',
    endereco: 'Rua Primeiro de Março, Centro, Rio de Janeiro',
    lat: -22.9068,
    lng: -43.1729,
    telefone: '(21) 3000-0001',
  },
  {
    id: 'r2',
    nome: 'Restaurante Central 2',
    endereco: 'Rua do Ouvidor, Centro, Rio de Janeiro',
    lat: -22.9055,
    lng: -43.176,
    telefone: '(21) 3000-0002',
  },
  {
    id: 'r3',
    nome: 'Restaurante Central 3',
    endereco: 'Av. Rio Branco, Centro, Rio de Janeiro',
    lat: -22.906,
    lng: -43.1792,
    telefone: '(21) 3000-0003',
  },
  {
    id: 'r4',
    nome: 'Restaurante Central 4',
    endereco: 'Praça Mauá, Centro, Rio de Janeiro',
    lat: -22.8958,
    lng: -43.1796,
    telefone: '(21) 3000-0004',
  },
  {
    id: 'r5',
    nome: 'Restaurante Central 5',
    endereco: 'Rua do Senado, Centro, Rio de Janeiro',
    lat: -22.9072,
    lng: -43.1705,
    telefone: '(21) 3000-0005',
  },
  {
    id: 'r6',
    nome: 'Restaurante Central 6',
    endereco: 'Rua da Assembleia, Centro, Rio de Janeiro',
    lat: -22.905,
    lng: -43.169,
    telefone: '(21) 3000-0006',
  },
  {
    id: 'r7',
    nome: 'Restaurante Central 7',
    endereco: 'Rua do Mercado, Centro, Rio de Janeiro',
    lat: -22.9025,
    lng: -43.174,
    telefone: '(21) 3000-0007',
  },
  {
    id: 'r8',
    nome: 'Restaurante Central 8',
    endereco: 'Rua da Alfândega, Centro, Rio de Janeiro',
    lat: -22.8989,
    lng: -43.1768,
    telefone: '(21) 3000-0008',
  },
  {
    id: 'r9',
    nome: 'Restaurante Central 9',
    endereco: 'Rua do Lavradio, Centro, Rio de Janeiro',
    lat: -22.9038,
    lng: -43.1775,
    telefone: '(21) 3000-0009',
  },
  {
    id: 'r10',
    nome: 'Restaurante Central 10',
    endereco: 'Rua da Carioca, Centro, Rio de Janeiro',
    lat: -22.9085,
    lng: -43.1762,
    telefone: '(21) 3000-0010',
  },
];

export const METODOS_PAGAMENTO = ['Cartão', 'Dinheiro', 'Pix'];
