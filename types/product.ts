import { LucideIcon } from "lucide-react";
export interface ProductSpec {
	icon: LucideIcon;
	label: string;
	value: string;
}

export default interface Product {
	id: number;
	category: string;
	badge: string;
	title: string;
	model: string;
	badge2?: string;
	image: string;
	feature1?: any;
	feature2?: any;
	download?: string;
	specs: ProductSpec[];
	models?: any;
}
