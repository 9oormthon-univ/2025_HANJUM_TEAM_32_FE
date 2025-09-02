type BaseProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  src?:string;
  alt?:string;
}


export function Card({className = "", ...props}: BaseProps) {
  return(
    <div className={`${className}`} {...props}>
      {props.children}
    </div>
  )
}
export function CardImg({className = "",src="", alt="", ...props}: BaseProps) {
  return(
    <img src={src} alt={alt} className={`h-48 object-cover rounded-t-[10px] ${className}`} {...props} />
  )
}
export function CaardHeader({className = "", ...props}: BaseProps) {
  return(
    <p className={`px-4 py-4 line-clamp-2 ${className}`} {...props}>
      {props.children}
    </p>
  )
}
export function CardBody({className = "", ...props}: BaseProps) {
  return(
    <div className={`px-4 pb-4 ${className}`} {...props}>
      {props.children}
    </div>
  )
}
export function CardFooter({className = "", ...props}: BaseProps) {
  return(
    <div className={`px-4 pb-4 ${className}`} {...props}>
      {props.children}
    </div>
  )
}