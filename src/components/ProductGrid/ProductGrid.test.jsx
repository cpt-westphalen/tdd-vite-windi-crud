import { ProductGrid } from '.';
import { Mocks } from '../../test/Mocks';
import { render, screen } from '../../test/utils/test-utils';

describe('<ProductGrid />', () => {
	it('should show text if no list prop', () => {
		render(<ProductGrid />);
		expect(screen.getByText(/no product/i)).toBeVisible();
	});
	it('should show products if a list is passed', () => {
		render(<ProductGrid list={Mocks.productList} />);
		expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
	});
});
