import { HiPlus } from "react-icons/hi";

export const FloatingButton = ({ children, onClick }) => {
	function handleClick() {
		console.log("click was handled by default");
	}

	return (
		<div className='flex justify-center pointer-events-none items-center w-full m-0 h-max py-6 md:pb-12 fixed bottom-0 bg-gradient-to-t from-dark-800 to-transparent'>
			<button
				onClick={onClick || handleClick}
				className='pointer-events-auto min-w-10 min-h-10 py-3 pl-2 pr-6 max-w-max bg-green-900 self-center flex justify-center items-center drop-shadow-xlg shadow-black'>
				<HiPlus className='mx-2' />
				{children}
			</button>
		</div>
	);
};
