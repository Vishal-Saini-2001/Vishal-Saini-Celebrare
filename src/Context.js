// Context.js
import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [textBoxes, setTextBoxes] = useState([1]);

	return (
		<Context.Provider value={{ textBoxes, setTextBoxes }}>
			{children}
		</Context.Provider>
	);
};
