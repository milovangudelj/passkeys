import Image, { StaticImageData } from "next/image";

import onepassword from "../../public/images/fido-members/1password-logo.svg";
import amazon from "../../public/images/fido-members/amazon-logo.svg";
import amex from "../../public/images/fido-members/amex-logo.svg";
import apple from "../../public/images/fido-members/apple-logo.svg";
import google from "../../public/images/fido-members/google-logo.svg";
import intel from "../../public/images/fido-members/intel-logo.svg";
import lenovo from "../../public/images/fido-members/lenovo-logo.svg";
import mastercard from "../../public/images/fido-members/mastercard-logo.svg";
import microsoft from "../../public/images/fido-members/microsoft-logo.svg";
import paypal from "../../public/images/fido-members/paypal-logo.svg";
import qualcomm from "../../public/images/fido-members/qualcomm-logo.svg";
import samsung from "../../public/images/fido-members/samsung-logo.svg";
import visa from "../../public/images/fido-members/visa-logo.svg";
import yubico from "../../public/images/fido-members/yubico-logo.svg";
import wellsfargo from "../../public/images/fido-members/wellsfargo-logo.svg";
import vmware from "../../public/images/fido-members/vmware-logo.svg";
import usbank from "../../public/images/fido-members/usbank-logo.svg";

export const MembersMarquee = () => {
	const fidoMembers: { image: StaticImageData; name: string }[] = [
		{ image: onepassword, name: "1Password" },
		{ image: amazon, name: "Amazon" },
		{ image: amex, name: "American Express" },
		{ image: apple, name: "Apple" },
		{ image: google, name: "Google" },
		{ image: intel, name: "Intel" },
		{ image: lenovo, name: "Lenovo" },
		{ image: mastercard, name: "Mastercard" },
		{ image: microsoft, name: "Microsoft" },
		{ image: paypal, name: "PayPal" },
		{ image: qualcomm, name: "Qualcomm" },
		{ image: samsung, name: "Samsung" },
		{ image: visa, name: "Visa" },
		{ image: yubico, name: "Yubico" },
		{ image: wellsfargo, name: "Wells Fargo" },
		{ image: vmware, name: "VMware" },
		{ image: usbank, name: "US Bank" },
	];

	return (
		<div className="flex overflow-hidden select-none mt-8">
			<ul className="flex-shrink-0 flex gap-16 min-w-full pr-16 animate-slide will-change-transform items-center">
				{fidoMembers.map((member) => (
					<li
						key={member.name}
						className="opacity-60 hover:opacity-100 transition"
					>
						<Image
							alt={member.name}
							title={member.name}
							src={member.image}
							loading="eager"
						/>
					</li>
				))}
			</ul>
			<ul
				className="flex-shrink-0 flex gap-16 min-w-full pr-16 motion-safe:animate-slide will-change-transform items-center"
				aria-hidden={true}
			>
				{fidoMembers.map((member) => (
					<li
						key={member.name}
						className="opacity-60 hover:opacity-100 transition"
					>
						<Image
							alt="FIDO member logo"
							src={member.image}
							loading="eager"
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
