import React from "react";
import "./Tab.css";

export type TabProps = {
	name: string;
	onActiveTabUpdate: Function;
	key: string;
	isActive: boolean;
};
export const Tab = ({ name, onActiveTabUpdate, key, isActive }: TabProps) => {
	return (
		<div className="tab" id={name} onClick={() => onActiveTabUpdate(name)}>
			<sp-label>{name}</sp-label>
		</div>
	);
};
