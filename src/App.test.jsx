import App from './App';
import { render, screen } from './test/utils/test-utils';

describe('App.jsx', () => {
	it('should render, goddamit', () => {
		render(<App />);
	});
	it('should have children', () => {
		const { container } = render(<App />);
		expect(container.firstChild.childNodes.length).toBeGreaterThan(0);
	});
	it('should have a header with links', () => {
		render(<App />);
		const header = screen.getByRole('banner');
		expect(header).toBeVisible();
		const headerLinks = screen.queryAllByRole('link');
		expect(headerLinks.length).toBeGreaterThan(1);
	});
	it('should have a search input', () => {
		render(<App />);
		expect(screen.getByRole('searchbox')).toBeVisible();
	});
	it('should have an button for adding products', () => {
		render(<App />);
		expect(
			screen.getByRole('button', { name: /(add|new) product/i })
		).toBeVisible();
	});
	it('should have a product grid', () => {
		render(<App />);
		expect(screen.getByRole('grid', { name: /products?/i })).toBeVisible();
	});
});
