import { useEffect, useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { initialCards } from "../utils/constants";
import { useFormController } from "../hooks/FormController";
import { CheckboxComponent } from "../components/Checkbox";
import ValidationImg from "../logo/validation.png";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardsForm = () => {
	const { watch, setValue, handleSubmit, onSubmit } = useFormController();

	const selectedOptions = watch("cardsOptions") as string[];

	const [cards, setCards] = useState(initialCards);
	const [activeIndex, setActiveIndex] = useState(0);
	const [showBravoCard, setShowBravoCard] = useState(false);

	const handleOptionToggle = (newSelectedValues: string[]) => {
		setValue("cardsOptions", newSelectedValues);
	};

	const handleNext = () => {
		const updatedCards = cards.map((card, i) =>
			i === activeIndex ? { ...card, validated: true } : card
		);
		setCards(updatedCards);
		setActiveIndex(activeIndex + 1);
	};

	useEffect(() => {
		if (showBravoCard) {
			setActiveIndex(cards.length);
		}
	}, []);

	useEffect(() => {
		setShowBravoCard(cards.every(card => card.validated));
	}, [activeIndex]);

	return (
		<div className="relative w-full">
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<h1 className="text-2xl text-[#494BFF] font-bold text-center mb-4">
					Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et
				</h1>
				<h2 className="text-center mb-2">
					Forem ipsum dolor sit amet, consectetur adipiscing elit.
				</h2>

				<div className="flex items-center h-auto">
					<div
						className="flex transition-transform duration-500 ease-in-out "
						style={{
							transform: `translateX(calc(60vw - ${
								activeIndex * 30
							}vw - 25vw))`,
						}}>
						{cards.map((card, index) => {
							const isActive = index === activeIndex;

							return (
								<div
									key={card.id}
									className={`transition-all duration-300 ${
										isActive
											? "scale-100 opacity-100 z-10"
											: "scale-90 cursor-pointer z-0"
									} mx-[-10vw] relative`}
									onClick={e => {
										if (!isActive) {
											e.stopPropagation();
											e.preventDefault();
											setActiveIndex(index);
											card.validated = false;
										}
									}}>
									<div
										className={`relative bg-white p-4 rounded-xl shadow-sm h-[70vh] w-[50vw] ${
											!isActive ? "blur-sm opacity-60 " : ""
										}`}>
										<p>{`${card.id}/${cards.length}`}</p>
										<h2 className="text-1xl font-semibold mb-2">
											{card.title} <br />
											{card.subtitle}
										</h2>

										<div className="flex flex-col gap-4">
											{card.options.map(option => (
												<CheckboxComponent
													key={option.id}
													label={option.label}
													value={option.id}
													selectedValues={selectedOptions}
													onChange={handleOptionToggle}
												/>
											))}
										</div>

										<div className="flex justify-center mt-8">
											<button
												type="submit"
												onClick={handleNext}
												className="px-6 py-3 bg-[#494BFF] text-white rounded-lg hover:bg-[#3a3cd5]">
												Suivant
											</button>
										</div>
									</div>
									{card.validated && (
										<div className="absolute top-60 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#494BFF] flex items-center justify-center shadow-md">
											<CheckIcon className="text-white w-15 h-15" />
										</div>
									)}
								</div>
							);
						})}

						{showBravoCard && (
							<div className="px-2 scale-100 opacity-100">
								<div className="relative bg-white p-8 rounded-xl shadow-sm h-130 w-200 flex flex-col items-center justify-center gap-6">
									<img src={ValidationImg} className="h-60" />
									<h2 className="text-2xl font-bold text-[#494BFF]">Bravo !</h2>
									<p className="text-center text-gray-600">
										Corem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
									<Link to={"/"}>
										<button className="px-6 py-3 bg-[#494BFF] text-white rounded-lg hover:bg-[#3a3cd5]">
											Terminer
										</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Pagination */}
				<div className="flex justify-center gap-4 mt-8 items-center">
					<FaChevronLeft
						onClick={() => setActiveIndex(prev => Math.max(prev - 1, 0))}
						className="cursor-pointer"
					/>

					{cards.map((card, index) => (
						<button
							type="button"
							key={card.id}
							onClick={() => setActiveIndex(index)}
							className={`relative w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer
        ${
					index === activeIndex
						? "bg-[#494BFF] border-[#494BFF] text-white"
						: "bg-white border-black text-black"
				}`}
						/>
					))}

					<FaChevronRight
						onClick={() =>
							setActiveIndex(prev => Math.min(prev + 1, cards.length - 1))
						}
						className="cursor-pointer"
					/>
				</div>
			</form>
		</div>
	);
};

export default CardsForm;
