const product = {
	id: 1001,
	producer: "Fulano d'Tal",
	img: 'https://acontecebotucatu.com.br/portal/wp-content/uploads/2020/05/alface.jpeg',
	title: 'Alface',
	unit: '220 g',
	badges: ['organic', 'agroforestry', 'vegan'],
	prices: [2.59, 4.49],
	stock: 4,
};

const productList = [
	product,
	{
		id: 1002,
		producer: "Cliclano d'Tal",
		img: '#',
		title: 'Rúcula',
		unit: '150 g',
		badges: ['organic', 'agroforestry', 'vegan'],
		prices: [3.99, 4.99],
		stock: 8,
	},
];

export const Mocks = {
	product,
	productList,
};
