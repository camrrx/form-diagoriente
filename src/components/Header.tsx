import { TiMessage } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserLarge } from "react-icons/fa6";
import BlahblahLogo from "@logo/Blahblah.svg?react";
import UnAutreLogo from "@logo/UnAutreLogo.svg?react";
import { useState } from "react";

const Header = () => {
	const [selectedNav, setSelectedNav] = useState<string>("Rore mipsum");

	const navItems = ["Rore mipsum", "Corem ipsumdolor", "Lorem ipsumdolor"];

	return (
		<header className="bg-white shadow-sm border-b border-gray-100 flex ">
			<BlahblahLogo className="m-2" />
			<div className="h-full w-px bg-gray-300 ml-[2rem]" />
			<div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between">
				<div className="flex items-center space-x-4 list-none">
					<UnAutreLogo />
					{navItems.map(item => (
						<li key={item}>
							<a
								href="#"
								className={
									selectedNav === item
										? "nav-item nav-item-selected"
										: "nav-item nav-item-default"
								}
								onClick={e => {
									e.preventDefault();
									setSelectedNav(item);
								}}>
								{item}
							</a>
						</li>
					))}
				</div>
				<div className="flex items-center space-x-4">
					<a
						href="#"
						className="hidden md:block hover:text-purple-500 transition-colors">
						Aide
					</a>
					<button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative cursor-pointer">
						<TiMessage className="w-5 h-5" />
						<span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full"></span>
					</button>
					<button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
						<CgMenuGridO className="w-5 h-5" />
					</button>
					<div className="w-8 h-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer">
						<FaUserLarge className="w-5 h-5 text-gray-500" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
