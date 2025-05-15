import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

type CheckboxProps = {
	label: string;
	value: string;
	selectedValues: string[];
	onChange: (newValues: string[]) => void;
};

export const CheckboxComponent: React.FC<CheckboxProps> = ({
	label,
	value,
	selectedValues,
	onChange,
}) => {
	const checked = selectedValues.includes(value);

	const toggle = () => {
		if (checked) {
			onChange(selectedValues.filter(v => v !== value));
		} else {
			onChange([...selectedValues, value]);
		}
	};

	return (
		<label
			className={`flex items-center space-x-2 cursor-pointer p-2 sm:p-3 rounded-md transition-colors ${
				checked ? "bg-[#F0F4FF]" : "bg-[#F6F6F8]"
			}`}>
			<Checkbox.Root
				className="w-5 h-5 sm:w-6 sm:h-6 border rounded-md flex items-center justify-center data-[state=checked]:bg-[#494BFF]"
				checked={checked}
				onCheckedChange={toggle}>
				<Checkbox.Indicator>
					<CheckIcon className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<span className="max-w-[80%] text-xs sm:text-sm text-left">{label}</span>
		</label>
	);
};
