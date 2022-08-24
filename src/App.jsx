import './App.css';
import Header from './components/Header';
import { Search } from './components/Search';
import { FloatingButton } from './components/FloatingButton';
import { ProductGrid } from './components/ProductGrid';
import { Mocks } from './test/Mocks';

function App() {
	return (
		<div className="flex m-0 p-0 flex-col items-center min-w-xs h-screen">
			<Header />
			<Search handleSearch={handleSearch} />
			<ProductGrid list={Mocks.productList} />
			<FloatingButton>New Product</FloatingButton>
		</div>
	);
}

const handleSearch = (prop) => {
	console.log(prop);
};

export default App;
