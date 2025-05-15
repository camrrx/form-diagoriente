import React, { createContext, useContext, useState } from "react";

export type FormData = {
	theme: string[];
	cardsOptions: string[];
};

type FormDataContextType = {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const FormDataContext = createContext<FormDataContextType | undefined>(
	undefined
);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [formData, setFormData] = useState<FormData>({
		theme: [],
		cardsOptions: [],
	});

	return (
		<FormDataContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormDataContext.Provider>
	);
};

export const useFormData = () => {
	const context = useContext(FormDataContext);
	if (!context) {
		throw new Error("useFormData must be used within a FormDataProvider");
	}
	return context;
};
