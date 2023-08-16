import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useBinder} from '@beyond-js/react-18-widgets/hooks';
import {IWidget, widgetController} from './index';

interface IProps {
	data: IWidget[];
}

export /*bundle*/ function WidgetManager({data}: IProps) {
	const [widgets, setWidgets] = React.useState(widgetController.widgets);
	useBinder([widgetController], () => setWidgets(widgetController.widgets));

	const output = data.map(widget => {
		const WidgetComponent = widgets.get(widget.type);
		if (!WidgetComponent) {
			console.warn(`${widget.type} isnt registered as a widget.`);
			return null;
		}

		return <WidgetComponent key={uuidv4()} {...(widget.metadata as object)} />;
	});

	return <main>{output}</main>;
}
