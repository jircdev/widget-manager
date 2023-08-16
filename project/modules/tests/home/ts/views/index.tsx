import * as React from 'react';
import {widgetController, WidgetManager} from 'widgets-manager/core';
import {useBinder} from '@beyond-js/react-18-widgets/hooks';

export /*bundle*/
function Page({store: manager}): JSX.Element {
	const [data, setData] = React.useState(manager.widgets);
	useBinder([manager], () => setData(manager.widgets));
	return (
		<div className="page__container">
			<h1>Bienvenido a Pepito's Dashboard 🤙!</h1>
			<WidgetManager data={data} />
		</div>
	);
}
