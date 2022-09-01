

export interface ButtonHTMLAttributes {
	text: string;
	to?: string;
	type: "button" | "submit" | "reset" | undefined;
	handleClick?: () => void;
}