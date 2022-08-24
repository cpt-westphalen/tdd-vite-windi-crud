import Header from '.';
import { render, screen } from '../../test/utils/test-utils';

describe('<Header/>', () => {
	it('should render with children', () => {
		const { container } = render(<Header />);
		expect(container.firstChild.childNodes.length).toBeGreaterThan(0);
	});
	it('should have an visible image or icon', () => {
		render(<Header />);
		const logo = screen.getByRole('img', { name: /logotype/i });
		expect(logo).toBeVisible();
	});
});
