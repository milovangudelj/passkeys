import { Container } from "@components";
import { LanguageSwitcher } from "@components/LanguageSwitcher/LanguageSwitcher";
import { DemoPopover } from "@components/DemoPopover/DemoPopover";
import { Passkey } from "@components/icons";
import { Link } from "next-intl";

export const Navbar = () => {
	return (
		<div className="bg-gray-900">
			<Container className="flex items-center justify-between py-4">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<span className="inline-block p-2 mr-2 bg-slate-50 rounded-full text-gray-900">
						<Passkey />
					</span>
					<span className="font-semibold text-xl tracking-tight">
						Passkeys
					</span>
				</div>
				<nav className="gap-4 flex items-center">
					<ul className="flex">
						<li>
							<Link
								href={""}
								className="px-4 py-2 opacity-60 hover:opacity-100 transition"
							>
								What
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="px-4 py-2 opacity-60 hover:opacity-100 transition"
							>
								Why
							</Link>
						</li>
						<li>
							<Link
								href={""}
								className="px-4 py-2 opacity-60 hover:opacity-100 transition"
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
