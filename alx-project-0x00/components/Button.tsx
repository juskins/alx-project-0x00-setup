import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title,size,shape}) => {
   return (
      <button className={`border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full size-${size} ${shape}`}>{title}</button>
   )
}

export default Button;