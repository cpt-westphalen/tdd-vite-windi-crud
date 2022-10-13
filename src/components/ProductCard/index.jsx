import "./styles.css";
import { useState } from "react";

export const ProductCard = ({ product = {} }) => {
	const [selectedQuantity, setSelectedQuantity] = useState(0);

	function handlePlusClick() {
		setSelectedQuantity(selectedQuantity + 1);
	}
	function handleMinusClick() {
		if (selectedQuantity > 0) {
			setSelectedQuantity(selectedQuantity - 1);
		}
	}

	return (
		<article
			className='p-3 flex flex-col justify-start items-stretch border-1 border-solid border-zinc-600 rounded-xl'
			aria-label={product.title}>
			<div className='flex justify-between items-baseline pt-2 border-b border-solid border-b-zinc-700'>
				<h3 className='text-2xl font-bold'>
					{product.title || "Nome Produto"}
				</h3>
				<p className='text-base text-zinc-300'>
					{product.unit || "500 g"}
				</p>
			</div>
			<div className='my-2 overflow-hidden flex self-center items-center justify-center w-full h-32'>
				{(product.img && (
					<img
						src={product.img}
						width='100%'
						alt={product.title}
					/>
				)) ||
					"[ imagem destaque ]"}
			</div>
			<div className='flex justify-between items-center'>
				<p className='font-bold'>
					{product.producer || "Produtor Fulano"}
				</p>
				<button className='text-xs flex justify-center items-center m-0 p-0 w-6 text-center h-6 rounded-full'>
					?
				</button>
			</div>
			<div className='my-2 flex justify-around items-center text-sm'>
				<div className='bg-zinc-900 rounded-2xl px-2 py-1'>
					vegan 🌱
				</div>
				<div className='bg-zinc-900 rounded-2xl px-2 py-1'>
					agroforestry 🌳
				</div>
			</div>
			<div className='flex flex-col gap-1 flex-wrap'>
				<div className='grid grid-cols-3'>
					<div className='justify-self-end self-center text-[0.7rem] text-zinc-500 line-through'>
						{`R$ ${product.prices[1]}`}
					</div>
					<div className='justify-self-center text-lg mx-2'>{`R$ ${product.prices[0]}`}</div>
				</div>
				<div className='flex gap-3'>
					<div className='flex flex-1 items-center justify-center'>
						<button
							onClick={handleMinusClick}
							disabled={selectedQuantity === 0}
							className='py-0 px-2 h-min'
							aria-label='decrease quantity selected'>
							-
						</button>
					</div>
					<div className='flex flex-1 items-center justify-center'>
						{selectedQuantity}
					</div>
					<div className='flex flex-1 items-center justify-center'>
						<button
							onClick={handlePlusClick}
							disabled={selectedQuantity >= product.stock}
							className='py-0 px-2 h-min'
							aria-label='increase quantity selected'>
							+
						</button>
					</div>
				</div>
				<button
					className='mt-2'
					disabled={
						selectedQuantity === 0 ||
						selectedQuantity >= product.stock
					}>
					Add to Cart
				</button>
			</div>
		</article>
	);
};
