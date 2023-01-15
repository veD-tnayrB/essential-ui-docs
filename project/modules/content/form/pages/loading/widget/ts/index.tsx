import * as React from 'react';
import { Header } from '@essential-js/ui/header';
import { Overview } from '@essential-js/ui/overview';
import { CopyableCode } from '@essential-js/ui/code';
import { Results } from './components/results';
import { implementation } from './components/implementation';

export /*bundle*/
function View({ store }) {
	return (
		<div className="component">
			<Header>Loading</Header>
			<section>
				<Overview>The loading version of the toast component, if you want to remove it at some point use toast.remove as explained in the example below:</Overview>
				<Overview>
					<strong>toast.remove() also works for every toast type</strong>
				</Overview>

				<h5>Results: </h5>
				<Results />
			</section>
			<section>
				<h5>Use: </h5>
				<CopyableCode title="Importation">{`import { toast } from '@essential-js/ui/toast';`}</CopyableCode>
				<CopyableCode title="random-implementation.tsx">{implementation}</CopyableCode>
			</section>
		</div>
	);
}
