"use client";
import React from "react";
import {
	Phone,
	Mail,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ArrowRight,
	Cpu,
} from "lucide-react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#0b1120] text-slate-300 px-16 pb-8 border-t border-slate-800">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<div className="bg-orange-500 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 transform -translate-y-4 shadow-xl">
					<div className="text-center md:text-left">
						<h3 className="text-white text-2xl md:text-3xl font-black mb-2">
							Ready to Upgrade?
						</h3>
						<p className="text-orange-100 opacity-90">
							Subscribe for technical updates and new model releases.
						</p>
					</div>
					<div className="flex w-full md:w-auto bg-white/10 p-1.5 rounded-full backdrop-blur-sm border border-white/20">
						<input
							type="email"
							placeholder="Enter your email"
							className="bg-transparent border-none outline-none px-4 py-2 w-full text-white placeholder:text-orange-100"
						/>
						<button className="bg-white text-orange-600 font-bold px-6 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap">
							Join Now <ArrowRight size={18} />
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					<div className="space-y-6">
						<div className="flex items-center gap-2 text-white font-black text-2xl">
							<Cpu className="text-orange-500" size={32} />
							<span>
								CNC<span className="text-orange-500">PRO</span>
							</span>
						</div>
						<p className="text-sm leading-relaxed text-slate-400">
							Leading provider of high-precision CNC solutions since 1995. We
							specialize in Vertical, Horizontal, and 5-Axis machining centers
							for global industrial leaders.
						</p>
						<div className="flex gap-4">
							{[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
								<a
									key={i}
									href="#"
									className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
									<Icon size={18} />
								</a>
							))}
						</div>
					</div>

					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Product Range
						</h4>
						<ul className="space-y-4 text-sm">
							{[
								"Vertical Centers",
								"Horizontal Centers",
								"5-Axis Solutions",
								"Turning Lathes",
								"Surface Grinders",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-orange-500 transition-colors flex items-center gap-2">
										<div className="w-1 h-1 bg-orange-500 rounded-full"></div>{" "}
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Support & Service
						</h4>
						<ul className="space-y-4 text-sm">
							{[
								"Request a Quote",
								"Technical Manuals",
								"Spare Parts",
								"Maintenance Service",
								"Warranty Info",
							].map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-orange-500 transition-colors">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
							Global Head Office
						</h4>
						<ul className="space-y-4 text-sm">
							<li className="flex items-start gap-3">
								<MapPin className="text-orange-500 shrink-0" size={20} />
								<span>
									123 Industrial Park, Tech Avenue, <br />
									Silicon Valley, CA 94025
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="text-orange-500 shrink-0" size={20} />
								<span>+1 (555) 123-4567</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="text-orange-500 shrink-0" size={20} />
								<span>sales@cncpro-industrial.com</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
					<p>
						© {currentYear} CNC PRO Industrial Solutions. All rights reserved.
					</p>
					<div className="flex gap-8">
						<a href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Terms of Service
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
