import { render } from '../../test/utils/test-utils';
import { Mocks } from '../../test/Mocks';
import { ProductCard } from '.';

describe('<ProductCard/>', () => {
	it('should render', () => {
		render(<ProductCard product={Mocks.product} />);
	});
});
