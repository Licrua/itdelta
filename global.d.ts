declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}


declare module "*.jpg" {
	const content: string;
	export default content;
  }
  
  declare module "*.jpeg" {
	const content: string;
	export default content;
  }
  
  declare module "*.png" {
	const content: string;
	export default content;
  }
  