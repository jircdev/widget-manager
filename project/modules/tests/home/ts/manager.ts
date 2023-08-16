import {ReactiveModel} from '@beyond-js/reactive/model';
import {IWidgets} from 'widgets-manager/core';
import {data} from './data';

export class Manager extends ReactiveModel<Manager> {
	#widgets: IWidgets[] | undefined[] = [];
	get widgets() {
		return this.#widgets;
	}

	load = () => {
		return new Promise<void>((resolve, reject) => {
			try {
				this.fetching = true;

				setTimeout(() => {
					this.#widgets = data;
					this.fetching = false;
					resolve();
				}, 1000);
			} catch (error) {
				this.fetching = false;
				reject(error);
			}
		});
	};
}
