import React from "react";
import { Tab } from "./Tab";
import "./Tabs.css";
import { Shelf } from "../Manifest";

export type TabsContainerProps = { tabs: Shelf[]; onActiveTabUpdate: Function };
export const Tabs = ({ tabs, onActiveTabUpdate }: TabsContainerProps) => {
	return (
		<div className={"Tabs"}>
			{tabs.map((shelf: Shelf) => (
				<Tab
					key={shelf.name}
					name={shelf.name}
					onActiveTabUpdate={(name: string) => onActiveTabUpdate(name)}
					isActive={true}
				></Tab>
			))}
			<Tab
				name={"TEST"}
				onActiveTabUpdate={(name: string) => onActiveTabUpdate(name)}
				key={"TEST"}
				isActive={true}
			></Tab>
		</div>
	);
};
