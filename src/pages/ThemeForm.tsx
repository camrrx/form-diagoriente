import { useFormController } from "../hooks/FormController";
import { CheckboxComponent } from "../components/Checkbox";
import { PiWarningCircleBold } from "react-icons/pi";
import { themeOptions } from "../utils/constants";
import IconThemeImg from "../logo/iconThemePage.png";

const ThemeForm = () => {
	const { handleSubmit, onSubmit, watch, setValue, isFormError } =
		useFormController();

	const selectedThemes = watch("theme");

	const handleThemeChange = (newValues: string[]) => {
		setValue("theme", newValues, { shouldValidate: true });
	};

	return (
		<div className="min-h-screen flex flex-col bg-[#f5f7ff]">
			<main className="flex-grow container mx-auto px-4 py-8">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-2xl text-[#494BFF] font-light text-center mb-8">
						Thèmes Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h1>

					<div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="shadow-sm  bg-white p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
								{themeOptions.map(option => (
									<CheckboxComponent
										key={option.value}
										label={option.label}
										value={option.value}
										selectedValues={selectedThemes}
										onChange={handleThemeChange}
									/>
								))}
							</div>
							{isFormError && (
								<p className="bg-[#e40000]/25 text-sm rounded-lg px-3 py-1 w-fit text-left flex gap-2 items-center mt-2">
									<PiWarningCircleBold />
									Veuillez sélectionner un thème.
								</p>
							)}
							<div className="flex justify-center mt-8">
								<button
									type="submit"
									className="px-5 py-4 rounded-lg bg-[#494BFF] hover:bg-[#3a3cd5] text-white cursor-pointer">
									Suivant
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>

			<img src={IconThemeImg} className=" fixed bottom-0 right-0 h-80 w-auto" />
		</div>
	);
};

export default ThemeForm;
