import { render, screen, userEvent } from '../../test/utils/test-utils';
import { vi } from 'vitest';
import { FloatingButton } from '.';

const textProp = 'Text';
const mockFn = vi.fn();

describe('<FloatingButton/>', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render with prop text', () => {
		render(<FloatingButton>{textProp}</FloatingButton>);
		expect(screen.getByRole('button', { name: textProp })).toBeVisible();
	});
	it('should call onClick prop when clicked', async () => {
		render(<FloatingButton onClick={mockFn}>{textProp}</FloatingButton>);
		await userEvent.click(screen.getByRole('button', { name: textProp }));
		expect(mockFn).toBeCalled();
	});
	it('should be floating, duh', async () => {
		const { container } = render(<FloatingButton>{textProp}</FloatingButton>);
		expect(container.firstChild).toHaveClass('fixed');
	});
});
