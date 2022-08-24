import Link from '../Link';
import { GiFruitTree } from 'react-icons/gi';

export default function Header(props) {
	return (
		<header className="flex h-max sm:h-20 flex-wrap sm:flex-nowrap min-w-full justify-around py-2 border-b-1 border-b-dark-300">
			<div className="min-h-10 flex items-center">
				<GiFruitTree
					role="img"
					aria-label="Logotype"
					alt="logotype"
					className="h-10 text-center flex-shrink-0 w-30"
				/>
			</div>
			<nav className="flex min-w-xs w-full flex-shrink-0 sm:flex-1 items-center justify-center gap-x-5 sm:gap-x-20 px-3 pb-1 pt-2 sm:px-0">
				<Link href="/">Home</Link>
				<Link href="/products">Products</Link>
				<Link href="/about">About</Link>
			</nav>
		</header>
	);
}
