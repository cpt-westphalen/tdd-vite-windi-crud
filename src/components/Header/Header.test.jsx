import Header from '.';
import { render, screen } from '../../test/utils/test-utils';

describe('<Header/>', () => {
	it('should render with children', () => {
		const { container } = render(<Header />);
		expect(container.firstChild.childNodes.length).toBeGreaterThan(0);
	});
	it('should have an visible image or icon', () => {
		render(<Header />);
		const logo = screen.getByRole('icon', { name: /logotype/i });
		expect(logo).toBeVisible();
	});
	it('should have nav links', () => {
		render(<Header />);
		const nav = screen.getByRole('navigation');
		expect(nav).toBeVisible();
		const links = screen.getAllByRole('link');
		expect(links.length).toBeGreaterThan(1);
	});
	it('should have a cart icon with link', () => {
		render(<Header />);
		const cartIcon = screen.getByRole('link', { name: 'shopping cart' });
		expect(cartIcon).toBeVisible();
	});
});
