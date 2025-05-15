import { TiMessage } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserLarge } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi"; // icons for hamburger
import BlahblahLogo from "@logo/Blahblah.svg?react";
import UnAutreLogo from "@logo/UnAutreLogo.svg?react";
import { useState } from "react";

const Header = () => {
	const [selectedNav, setSelectedNav] = useState<string>("Rore mipsum");
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = ["Rore mipsum", "Corem ipsumdolor", "Lorem ipsumdolor"];

	return (
		<header className="bg-white shadow-sm border-b border-gray-100">
			<div className="flex items-center justify-between px-4 py-3 md:px-6">
				<div className="flex items-center space-x-4">
					<BlahblahLogo className="h-8" />
					<div className="h-full w-px bg-gray-300 ml-4 hidden md:block" />
					<UnAutreLogo className="hidden md:block" />
				</div>

				<ul className="hidden md:flex items-center space-x-4 list-none ml-6">
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
				</ul>

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

					{/* Mobile Menu */}
					<button
						className="md:hidden p-2"
						onClick={() => setMobileMenuOpen(prev => !prev)}>
						{isMobileMenuOpen ? (
							<FiX className="w-6 h-6" />
						) : (
							<FiMenu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
					{navItems.map(item => (
						<a
							key={item}
							href="#"
							className={`block py-2 ${
								selectedNav === item
									? "text-purple-600 font-semibold"
									: "text-gray-700"
							}`}
							onClick={e => {
								e.preventDefault();
								setSelectedNav(item);
								setMobileMenuOpen(false);
							}}>
							{item}
						</a>
					))}
					<a href="#" className="block py-2 text-gray-700">
						Aide
					</a>
				</div>
			)}
		</header>
	);
};

export default Header;
