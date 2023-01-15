import React from 'react';
import { Button } from '@essential-js/ui/buttons';
import { InfoModal } from '@essential-js/ui/modals';

export function Results() {
	const [show, setShow] = React.useState(false);

	function toggleShow() {
		setShow(!show);
	}

	return (
		<div className="results">
			<Button onClick={toggleShow}>Show info modal</Button>
			{show && (
				<InfoModal title="Information!" onHide={toggleShow}>
					This is an example
				</InfoModal>
			)}
		</div>
	);
}
