
export interface ButtonHTMLAttributes {
	text: string;
	to?: string;
	id?: string;
	type: "button" | "submit" | "reset" | undefined;
	handleClick?: () => void;
}

 export interface Product{
	sku: string;
	name: string;
	price: number;
	size?: number;
	weight?: number;
	dimension?: string
	 checked?: boolean;
	 height?: number;
	 width?: number;
	 length?:number
}

export interface ProductProps {
	product: Product;
	id?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>, sku:string) => void;
	isChecked?: boolean;
}

export interface InputFieldsProps {
	label?: string;
	type: string;
	value?: string | number;
	onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	placeholder?: string
	left?: number
}
