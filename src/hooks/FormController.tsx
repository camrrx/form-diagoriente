import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../utils/FormDataContext";

export type ThemeFormData = {
	theme: string[]; // page 1
	cardsOptions: string[]; // page 2
};

export const useFormController = () => {
	const { formData, setFormData } = useFormData();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
		trigger,
	} = useForm<ThemeFormData>({
		defaultValues: {
			theme: formData.theme,
			cardsOptions: formData.cardsOptions,
		},
		mode: "onSubmit",
	});

	const navigate = useNavigate();

	const [isFormError, setIsFormError] = useState(false);
	const [isValid, setIsValid] = useState(false);

	const onSubmit = (data: ThemeFormData) => {
		if (location.pathname === "/") {
			if (data.theme.length === 0) {
				setIsFormError(true);
				return;
			}
			setFormData(prev => ({ ...prev, theme: data.theme }));
			navigate("/cardsForm");
		} else if (location.pathname === "/cardsForm") {
			// Page du caroussel
			if (data.cardsOptions.length === 0) {
				setIsFormError(true);
				console.log("Erreur de soumission !");
				return;
			}
			setFormData(prev => ({ ...prev, cardsOptions: data.cardsOptions }));
			setIsValid(true);
			console.log("Données séléctionnées:", data);
		}
	};
	useEffect(() => {
		if (isFormError) {
			const watchedValues =
				location.pathname === "/" ? watch("theme") : watch("cardsOptions");
			if (watchedValues.length > 0) setIsFormError(false);
		}
	}, [watch, isFormError]);

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		watch,
		setValue,
		trigger,
		isFormError,
		setIsFormError,
		isValid,
	};
};
