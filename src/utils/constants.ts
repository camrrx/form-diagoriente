export const themeOptions = [
	{ label: "Yorem ipsum dolor", value: "1" },
	{ label: "Porem ipsum", value: "2" },
	{ label: "Qorem ipsum dolor sit", value: "3" },
	{ label: "Rorem ipsum dolor", value: "4" },
	{ label: "Torem ipsum dolor", value: "5" },
	{ label: "Porem ipsum dolor", value: "6" },
	{ label: "Torem ipsum dolor", value: "7" },
	{ label: "Vorem ipsum dolor sit", value: "8" },
];

export type FormCard = {
	id: string;
	title: string;
	subtitle: string;
	validated: boolean;
	options: CardOption[];
};

export type CardOption = {
	id: string;
	label: string;
	selected: boolean;
};
export const initialCards: FormCard[] = [
	{
		id: "1",
		title: "01 Worem ipsum dolor sit amet, consectetur adipiscing elit.",
		subtitle: "Nunc vulputate libero et velit interdum, ac aliquet odio",
		validated: false,
		options: [
			{
				id: "option-1-1",
				label:
					"Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
			{
				id: "option-1-2",
				label:
					"Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
			{
				id: "option-1-3",
				label:
					"Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
			{
				id: "option-1-4",
				label: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
				selected: false,
			},
			{
				id: "option-1-5",
				label:
					"Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
		],
	},
	{
		id: "2",
		title: "02 Worem ipsum dolor sit amet, consectetur adipiscing elit.",
		subtitle:
			"Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		validated: false,
		options: [
			{
				id: "option-2-1",
				label:
					"Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum",
				selected: false,
			},
			{
				id: "option-2-2",
				label:
					"Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
			{
				id: "option-2-3",
				label:
					"Ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				selected: false,
			},
			{
				id: "option-2-4",
				label: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
				selected: false,
			},
			{
				id: "option-2-5",
				label:
					"Dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
				selected: false,
			},
		],
	},
];
