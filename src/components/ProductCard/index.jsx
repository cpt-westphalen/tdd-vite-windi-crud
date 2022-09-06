import { useState } from 'react';

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
		<article className="card-container" aria-label={product.title}>
			<div className="card-heading">
				<div className="card-farmer">
					{product.producer || 'Produtor Fulano'}
				</div>
				<button className="card-tip">?</button>
			</div>
			<div className="card-img">
				{(product.img && (
					<img src={product.img} width="100%" alt={product.title} />
				)) ||
					'[ imagem destaque ]'}
			</div>
			<div className="card-info">
				<div className="card-title">{product.title || 'Nome Produto'}</div>
				<div className="card-measure">{product.unit || '500 g'}</div>
			</div>
			<div className="card-badges">
				<div>badge1</div>
				<div>badge2</div>
				<div>badge3</div>
			</div>
			<div className="card-action-container">
				<div className="card-prices">
					<div className="card-prices-old">{'R$ 59,99'}</div>
					<div className="card-prices-new">R$ 31,99</div>
				</div>
				<div className="card-quantity-container">
					<button
						onClick={handleMinusClick}
						disabled={selectedQuantity === 0}
						className="card-quantity-minus"
						aria-label="decrease selected quantity"
					>
						-
					</button>
					<div className="card-quantity-number">{selectedQuantity}</div>
					<button
						onClick={handlePlusClick}
						disabled={selectedQuantity >= product.stock}
						className="card-quantity-plus"
						aria-label="increase selected quantity"
					>
						+
					</button>
				</div>
				<button
					className="card-add-btn"
					disabled={selectedQuantity === 0 || selectedQuantity >= product.stock}
				>
					Add to Cart
				</button>
			</div>
		</article>
	);
};
