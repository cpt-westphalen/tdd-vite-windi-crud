import { ProductCard } from '../ProductCard';
import './styles.css';

export const ProductGrid = ({ list = [] }) => {
	const productsToShow = () => {
		if (list.length > 0) {
			return list.map((e) => <ProductCard key={e.id} product={e} />);
		}
		return <p>Ops, no products to show!</p>;
	};
	return (
		<main className="flex flex-col items-center justify-center w-full px-5 lg:w-230 xl:w-300">
			<h2 className="text-2xl font-extrabold mt-10 mb-5 self-start">
				Products
			</h2>
			<div
				role="grid"
				aria-label="products"
				className="grid gap-4 grid-cols-1 lg:gap-5 lg:grid-cols-3 xl:grid-cols-4 max-w-full"
			>
				{productsToShow()}
			</div>
		</main>
	);
};
