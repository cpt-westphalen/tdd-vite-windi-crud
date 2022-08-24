export default function Link({
	href = '#',
	className = '',
	style = {},
	children = [],
}) {
	return (
		<a href={href} className={className || 'px-5'} style={style}>
			{children}
		</a>
	);
}
