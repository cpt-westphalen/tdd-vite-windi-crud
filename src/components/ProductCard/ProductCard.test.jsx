import { render, screen, userEvent } from "../../test/utils/test-utils";
import { Mocks } from "../../test/Mocks";
import { ProductCard } from ".";

describe("<ProductCard/>", () => {
	const oneInStockProduct = { ...Mocks.product, stock: 1 };
	const noStockProduct = { ...Mocks.product, stock: 0 };

	it("should render", () => {
		render(<ProductCard product={Mocks.product} />);
		expect(
			screen.getByRole("article", { name: Mocks.product.title })
		).toBeVisible();
	});
	it("should display product title, unit and producer", () => {
		render(<ProductCard product={Mocks.product} />);

		const { title, unit, producer } = Mocks.product;

		const producerRegexp = new RegExp(`${producer}`, "i");

		expect(screen.getByText(title)).toBeVisible();
		expect(screen.getByText(unit)).toBeVisible();
		expect(screen.getByText(unit)).toContain(/\d+\w+/i);
		expect(screen.getByText(producerRegexp)).toBeVisible();
	});
	it("should have image with alt text", () => {
		render(<ProductCard product={Mocks.product} />);

		const { title } = Mocks.product;

		expect(screen.getByRole("img", { name: title })).toBeVisible();
	});
	it("should display at least one tag/badge", () => {
		render(<ProductCard product={Mocks.product} />);
		const { badges } = Mocks.product;
		const stringForRegexp = badges.join("|");
		const badgesRegexp = new RegExp(stringForRegexp, "i");
		expect(screen.getAllByText(badgesRegexp).length).toBeGreaterThan(0);
	});

	it('should have an "add to cart" button', () => {
		render(<ProductCard product={Mocks.product} />);
		expect(
			screen.getByRole("button", { name: /add to cart/i })
		).toBeVisible();
	});
	it("should have a quantity increase button", () => {
		render(<ProductCard product={Mocks.product} />);
		expect(screen.getByRole("button", { name: /increase/i })).toBeVisible();
	});
	it("should have a quantity decrease button", () => {
		render(<ProductCard product={Mocks.product} />);
		expect(screen.getByRole("button", { name: /decrease/i })).toBeVisible();
	});
	it("should start with 0 selected quantity and increase or decrease when buttons are clicked", async () => {
		render(<ProductCard product={oneInStockProduct} />);
		const quantitySelected = screen.getByText("0");
		const increaseBtn = screen.getByRole("button", {
			name: /\+|increase/i,
		});
		const decreaseBtn = screen.getByRole("button", { name: /-|decrease/i });
		expect.assertions(3);

		expect(quantitySelected).toBeVisible();

		await userEvent.click(increaseBtn);

		expect(quantitySelected.textContent).toBe("1");

		await userEvent.click(decreaseBtn);

		expect(quantitySelected.textContent).toBe("0");
	});
	it("should not increase when no stock left", async () => {
		render(<ProductCard product={noStockProduct} />);
		const quantitySelected = screen.getByText("0");
		const increaseBtn = screen.getByRole("button", {
			name: /\+|increase/i,
		});
		await userEvent.click(increaseBtn);
		expect(quantitySelected.textContent).toBe("0");
	});
	it("should not decrease when selected quantity is zero", async () => {
		render(<ProductCard product={Mocks.product} />);
		const quantitySelected = screen.getByText("0");
		const decreaseBtn = screen.getByRole("button", { name: /-|decrease/i });
		await userEvent.click(decreaseBtn);
		expect(quantitySelected.textContent).toBe("0");
	});
	it("should disable buttons when no stock or no selected quantity", async () => {
		render(<ProductCard product={noStockProduct} />);
		const quantitySelected = screen.getByText("0");
		const increaseBtn = screen.getByRole("button", {
			name: /\+|increase/i,
		});
		const decreaseBtn = screen.getByRole("button", { name: /-|decrease/i });
		expect(quantitySelected.textContent).toBe("0");
		expect(increaseBtn).toBeDisabled();
		expect(decreaseBtn).toBeDisabled();
	});
});
