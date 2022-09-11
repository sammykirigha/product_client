
export interface ButtonHTMLAttributes {
	text: string;
	to?: string;
	id?: string;
	type: "button" | "submit" | "reset" | undefined;
	handleClick?: () => void;
}

 export interface Product{
	SKU: string;
	name: string;
	price: number;
	size?: string;
	weight?: string;
	 dimension?: string
	 checked?: boolean;
}

export interface ProductProps {
	product: Product;
	id?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isChecked?: boolean;
}

export interface InputFieldsProps {
	label?: string;
	type: string;
	value?: string | number;
	onChange?: (event:React.ChangeEventHandler<HTMLInputElement>) => void;
	name?: string;
	placeholder?: string
	left?: number
}
