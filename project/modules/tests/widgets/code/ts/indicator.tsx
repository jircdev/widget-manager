import React from 'react';
import {Icon} from 'pragmate-ui/icons';

interface IProps {
	amount: number;
	title: string;
	icon: string;
}

export function Indicator({amount, title, icon}: IProps) {
	return (
		<article className="indicator-container">
			<header>
				<div className="icon">
					<Icon icon={icon} />
				</div>
				<div className="title">{title}</div>
			</header>
			<p className="amount">{amount}</p>
		</article>
	);
}
