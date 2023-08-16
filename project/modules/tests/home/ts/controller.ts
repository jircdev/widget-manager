import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {Page} from './views';
import {ns_2} from '@beyond-js/widgets/controller';
import {Manager} from './manager';

export /*bundle*/
class Controller extends PageReactWidgetController {
	get Widget() {
		return Page;
	}

	#store;

	createStore(): ns_2.IWidgetStore {
		this.#store = new Manager();
		return this.#store;
	}

	show() {
		this.#store.load();
	}
}
