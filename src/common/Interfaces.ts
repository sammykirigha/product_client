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

export interface InputFieldsProps {
	label?: string;
	type: string;
	value?: string | number;
	onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	placeholder?: string
	left?: number
	id?: string;
	error?: string
}

export interface IFormInput {
  sku: string;
  name: string;
  price: number;
  size: number;
  width: number;
  weight: number;
  height: number;
  length: number;
}

export interface ProductState {
    sku: string;
    name: string;
    price: number;
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
}

export interface IState {
    products: ProductState[];
    message: string
}
