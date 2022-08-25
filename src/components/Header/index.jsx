import Link from '../Link';
import { GiFruitTree } from 'react-icons/gi';
import { MdShoppingBasket } from 'react-icons/md';

export default function Header(props) {
	return (
		<header className="flex h-max sm:h-20 flex-wrap sm:flex-nowrap w-full justify-around md:justify-evenly lg:px-30 py-2 border-b-1 border-b-dark-300">
			<div className="min-h-10 flex items-center">
				<GiFruitTree
					role="icon"
					aria-label="Logotype"
					alt="logotype"
					className="h-10 text-center flex-shrink-0 w-30"
				/>
			</div>
			<nav className="flex min-w-xs w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-20 px-3 pb-1 pt-2 sm:px-0">
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
				<Link href="/about">About</Link>
				<a href="/cart" aria-label="shopping cart">
					<MdShoppingBasket size="30px" />
				</a>
			</nav>
		</header>
	);
}
