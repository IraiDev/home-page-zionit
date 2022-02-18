const Button = ({
   children,
   onClick,
   disabled,
   block,
   width = 'w-max',
   title,
   hidden = false,
   className = 'bg-transparent hover:bg-slate-100',
   type = 'button',
}) => {
   if (hidden) return null

   return (
      <button
         onClick={onClick}
         disabled={disabled}
         title={title}
         type={type}
         className={`
      py-2 px-2.5 font-semibold first-letter:capitalize focus:outline-none 
      flex gap-2 items-baseline justify-center transition duration-300
      text-base rounded-full
      ${className}
      ${block ? 'block' : 'inline-block'}
      ${width}
      ${disabled ? 'opacity-30' : ''}
      `}>
         {children}
      </button>
   )
}

export default Button
