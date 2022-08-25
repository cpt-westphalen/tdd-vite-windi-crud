import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

export const Search = ({ handleSearch }) => {
	const [searchInput, setSearchInput] = useState('');

	function handleChange(event) {
		setSearchInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		handleSearch(searchInput);
	}

	return (
		<div className="flex w-full py-2 justify-center items-center">
			<form
				className="min-w-40 flex px-4 py-2 gap-x-2 items-center justify-center bg-dark-100 border-solid border-2 border-dark-300 rounded-xl"
				role="search"
				onSubmit={handleSubmit}
			>
				<BiSearchAlt2 alt="" height="100%" />
				<input
					className="p-1 bg-transparent w-50"
					placeholder="Search for products"
					type="search"
					name="search"
					onChange={handleChange}
				/>
				<button
					className="m-0 p-0 self-center min-w-8 min-h-8 rounded-full bg-transparent"
					type="submit"
					name="submit"
				>
					{'>'}
				</button>
			</form>
		</div>
	);
};
