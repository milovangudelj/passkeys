import { Container } from "@components";
import { LanguageSwitcher } from "@components/LanguageSwitcher/LanguageSwitcher";
import { DemoPopover } from "@components/DemoPopover/DemoPopover";
import { Passkey } from "@components/icons";
import { Link } from "next-intl";

export const Navbar = () => {
	return (
		<div className="bg-gray-900/75 backdrop-blur border-b border-gray-50/[0.06] sticky top-0 z-10 ">
			<Container className="flex items-center justify-between py-4">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<span className="inline-block p-2 mr-4 bg-slate-50 rounded-full text-gray-900">
						<Passkey />
					</span>
					<span className="font-bold text-2xl leading-tight">
						Passkeys
					</span>
				</div>
				<nav className="gap-2 flex items-center">
					<ul className="flex">
						<li>
							<Link
								href={""}
								className="px-4 py-2 text-base font-medium leading-6 opacity-60 hover:opacity-100 transition"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="px-4 py-2 text-base font-medium leading-6 opacity-60 hover:opacity-100 transition"
							>
								Philosophy
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="px-4 py-2 text-base font-medium leading-6 opacity-60 hover:opacity-100 transition"
							>
								How
							</Link>
						</li>
					</ul>
					<DemoPopover />
					<LanguageSwitcher />
				</nav>
			</Container>
		</div>
	);
};
