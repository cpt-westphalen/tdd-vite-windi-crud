import { render, screen } from '../../test/utils/test-utils';
import { Mocks } from '../../test/Mocks';
import { ProductCard } from '.';

describe('<ProductCard/>', () => {
	it('should render', () => {
		render(<ProductCard product={Mocks.product} />);
		expect(
			screen.getByRole('article', { name: Mocks.product.title })
		).toBeVisible();
	});
	it('should display product title, unit and producer', () => {
		render(<ProductCard product={Mocks.product} />);

		const { title, unit, producer } = Mocks.product;

		expect(screen.getByText(title)).toBeVisible();
		expect(screen.getByText(unit)).toBeVisible();
		expect(screen.getByText(unit)).toContain(/\d+\w+/i);
		expect(screen.getByText(producer)).toBeVisible();
	});
	it('should have image with alt text', () => {
		render(<ProductCard product={Mocks.product} />);

		const { title } = Mocks.product;

		expect(screen.getByRole('img', { name: title })).toBeVisible();
	});
	it('should have an "add to cart" button', () => {
		render(<ProductCard product={Mocks.product} />);
		expect(screen.getByRole('button', { name: /add to cart/i })).toBeVisible();
	});
	it('should have a quantity increase button', () => {
		render(<ProductCard product={Mocks.product} />);
		expect(screen.getByRole('button', { name: /increase/i })).toBeVisible();
	});
	it('should have a quantity decrease button', () => {
		render(<ProductCard product={Mocks.product} />);
		expect(screen.getByRole('button', { name: /decrease/i })).toBeVisible();
	});
});
