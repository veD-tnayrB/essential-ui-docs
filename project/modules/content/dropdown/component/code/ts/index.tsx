import { ArrowRight2 } from 'iconsax-react';
import React from 'react';

interface Props extends Partial<HTMLElement> {
	title: string;
}

export /*bundle*/ function Dropdown({ title = '', children, ...props }: Props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const cls = isOpen ? 'open' : '';

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<section className={`essential__dropdown ${props.className}`} {...props}>
			<div className={`title ${cls}`} onClick={toggleOpen}>
				<h6>{title}</h6>
				<ArrowRight2 className="icon" />
			</div>
			{isOpen && <div className="content">{children}</div>}
		</section>
	);
}