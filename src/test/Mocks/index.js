import abobrinha from "../../assets/abobrinha.jpeg";
import alfaceCrespa from "../../assets/alface-crespa.jpeg";
import alfaceLisa from "../../assets/alface-lisa.jpeg";
import bergamota from "../../assets/bergamota.jpeg";
import brocolis from "../../assets/brocolis.jpeg";
import couveManteiga from "../../assets/couve-manteiga.jpeg";
import rucula from "../../assets/rucula.jpeg";

const product = {
	id: 1001,
	producer: "Fulano d'Tal",
	img: alfaceLisa,
	title: "Alface Lisa",
	unit: "220 g",
	badges: ["organic", "agroforestry", "vegan"],
	prices: [2.59, 4.49],
	stock: 4,
};

const productList = [
	product,
	{
		id: 1002,
		producer: "Cliclano d'Tal",
		img: rucula,
		title: "Rúcula",
		unit: "150 g",
		badges: ["organic", "agroforestry", "vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
	{
		id: 1003,
		producer: "Cliclano d'Tal",
		img: brocolis,
		title: "Brócolis Híbrido",
		unit: "250 g",
		badges: ["organic", "agroforestry", "vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
	{
		id: 1004,
		producer: "Cliclano d'Tal",
		img: abobrinha,
		title: "Abobrinha Italiana",
		unit: "150 g",
		badges: ["vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
	{
		id: 1005,
		producer: "Cliclano d'Tal",
		img: alfaceCrespa,
		title: "Alface Crespa",
		unit: "80 g",
		badges: ["organic", "vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
	{
		id: 1006,
		producer: "Cliclano d'Tal",
		img: bergamota,
		title: "Bergamota Montenegrina",
		unit: "300 g",
		badges: ["organic", "vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
	{
		id: 1007,
		producer: "Cliclano d'Tal",
		img: couveManteiga,
		title: "Couve Manteiga",
		unit: "150 g",
		badges: ["vegan"],
		prices: [3.99, 4.99],
		stock: 8,
	},
];

export const Mocks = {
	product,
	productList,
};
