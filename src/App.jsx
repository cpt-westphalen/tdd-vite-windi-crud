import './App.css';
import Header from './components/Header';
import { Search } from './components/Search';
import { FloatingButton } from './components/FloatingButton';

function App() {
	return (
		<div className="flex m-0 p-0 flex-col items-center min-w-xs h-screen">
			<Header />
			<Search handleSearch={handleSearch} />
			<ProductGrid />
			<FloatingButton>New Product</FloatingButton>
		</div>
	);
}

const ProductGrid = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full lg:w-200">
			<h2 className="text-2xl font-extrabold mt-10 mb-5 self-start">
				Products
			</h2>
			<div
				role="grid"
				aria-label="products"
				className="grid gap-4 grid-cols-3 lg:gap-15 lg:grid-cols-6"
			>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
				<div>[ product ]</div>
			</div>
		</main>
	);
};

const handleSearch = (prop) => {
	console.log(prop);
};

export default App;
