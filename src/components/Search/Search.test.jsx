import { vi } from "vitest";
import { Search } from ".";
import { render, screen, userEvent } from "../../test/utils/test-utils";

const fn = vi.fn();

describe("<Search/>", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	test("any placeholder text", () => {
		render(<Search handleSearch={fn} />);
		expect(screen.getByPlaceholderText(/\w+/i)).toBeVisible();
	});
	test("'searchbox' aria-role", () => {
		render(<Search />);
		expect(screen.getByRole("searchbox")).toBeVisible();
	});
	test("call spy function with typed value on button click", async () => {
		render(<Search handleSearch={fn} />);
		const searchString = "Alface";
		await userEvent.type(screen.getByRole("searchbox"), searchString);
		await userEvent.click(screen.getByRole("button"));
		expect(fn).toHaveBeenCalledWith(searchString);
	});
	test("call fn on Enter key click", async () => {
		render(<Search handleSearch={fn} />);
		const searchString = "Alface";
		await userEvent.type(screen.getByRole("searchbox"), searchString);
		await userEvent.keyboard("{Enter}");
		expect(fn).toHaveBeenCalledWith(searchString);
	});
});
