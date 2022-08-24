import { vi } from 'vitest';
import { Search } from '.';
import { render, screen, userEvent } from '../../test/utils/test-utils';

const fn = vi.fn();

describe('<Search/>', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	it('should have a searchbox role', () => {
		render(<Search />);
		expect(screen.getByRole('searchbox')).toBeVisible();
	});
	it('should call spy function with typed value', async () => {
		render(<Search handleSearch={fn} />);
		await userEvent.type(screen.getByRole('searchbox'), 'Organic Apples');
		await userEvent.click(screen.getByRole('button'));
		expect(fn).toHaveBeenCalled();
	});
});
