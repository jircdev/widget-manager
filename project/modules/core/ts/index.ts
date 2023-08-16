import React from 'react';
import {ReactiveModel} from '@beyond-js/reactive/model';

export /*bundle*/ interface IWidget {
	type: string;
	metadata: Record<string, unknown>;
}

class WidgetManager extends ReactiveModel<WidgetManager> {
	#widgets: Map<string, React.ComponentType>;
	get widgets() {
		return this.#widgets;
	}

	defineWidgets = (widgets: {[key: string]: React.ComponentType}[]) => {
		const map = new Map<string, React.ComponentType>();
		widgets.forEach(widget => {
			Object.keys(widget).forEach(key => {
				map.set(key, widget[key]);
			});
		});
		this.#widgets = map;
	};
}

export /*bundle*/ const widgetController = new WidgetManager();
