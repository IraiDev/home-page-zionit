const Button = ({
  children,
  onClick,
  disabled,
  color,
  isShadow = false,
  isOutline = false,
  rounded = 'none',
  block,
  width = 'w-max',
  customStyle = {},
  title,
}) => {
  let btnStyles = {
    bg_color: '',
    text_color: '',
    border_color: '',
    hover_bg_color: '',
    hover_text_color: '',
    hover_border_color: '',
    shadow_size: '',
    shadow_color: '',
    rounded_size: '',
  }

  if (Object.keys(customStyle).length > 0) {
    btnStyles = {
      ...btnStyles,
      ...customStyle,
      hover_bg_color: disabled ? '' : customStyle.hover_bg_color,
      hover_text_color: disabled ? '' : customStyle.hover_text_color,
      hover_border_color: disabled ? '' : customStyle.hover_border_color,
      shadow_size: disabled ? '' : customStyle.shadow_size,
      shadow_color: disabled ? '' : customStyle.shadow_color,
    }
  } else {
    switch (color) {
      case 'blue':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-blue-600',
          text_color: isOutline ? 'text-blue-600' : 'text-white',
          border_color: isOutline ? 'border border-blue-600' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-blue-700/10'
            : 'hover:bg-blue-700',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-blue-600'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-blue-600/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'cyan':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-cyan-500',
          text_color: isOutline ? 'text-cyan-500' : 'text-white',
          border_color: isOutline ? 'border border-cyan-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-cyan-600/10'
            : 'hover:bg-cyan-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-cyan-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-cyan-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'red':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-red-500',
          text_color: isOutline ? 'text-red-500' : 'text-white',
          border_color: isOutline ? 'border border-red-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-red-700/10'
            : 'hover:bg-red-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-red-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-red-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'pink':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-pink-500',
          text_color: isOutline ? 'text-pink-500' : 'text-white',
          border_color: isOutline ? 'border border-pink-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-pink-600/10'
            : 'hover:bg-pink-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-pink-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-pink-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'green':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-green-500',
          text_color: isOutline ? 'text-green-500' : 'text-white',
          border_color: isOutline ? 'border border-green-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-green-700/10'
            : 'hover:bg-green-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-green-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-green-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'emerald':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-emerald-500',
          text_color: isOutline ? 'text-emerald-500' : 'text-white',
          border_color: isOutline ? 'border border-emerald-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-emerald-700/10'
            : 'hover:bg-emerald-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-emerald-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-emerald-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'yellow':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-yellow-400',
          text_color: isOutline ? 'text-yellow-400' : 'text-white',
          border_color: isOutline ? 'border border-yellow-400' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-yellow-500/10'
            : 'hover:bg-yellow-500',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-yellow-400'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-yellow-400/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'orange':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-orange-500',
          text_color: isOutline ? 'text-orange-500' : 'text-white',
          border_color: isOutline ? 'border border-orange-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-orange-600/10'
            : 'hover:bg-orange-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-orange-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-orange-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'purple':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-violet-600',
          text_color: isOutline ? 'text-violet-600' : 'text-white',
          border_color: isOutline ? 'border border-violet-600' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-violet-700/10'
            : 'hover:bg-violet-700',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-violet-600'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-violet-600/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'indigo':
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-indigo-500',
          text_color: isOutline ? 'text-indigo-500' : 'text-white',
          border_color: isOutline ? 'border border-indigo-500' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-indigo-600/10'
            : 'hover:bg-indigo-600',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-indigo-500'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-indigo-500/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
      case 'transparent':
        btnStyles = {
          bg_color: 'bg-transparent',
          text_color: 'text-black',
          border_color: 'border-none',
          hover_bg_color: '',
          hover_text_color: '',
          hover_border_color: '',
          shadow_size: '',
          shadow_color: '',
          rounded_size: 'rounded-none',
        }
        break
      default:
        btnStyles = {
          bg_color: isOutline ? 'bg-transparent' : 'bg-black',
          text_color: isOutline ? 'text-black' : 'text-white',
          border_color: isOutline ? 'border border-black' : 'border-none',
          hover_bg_color: disabled
            ? ''
            : isOutline
            ? 'hover:bg-black/10'
            : 'hover:bg-black/80',
          hover_text_color: disabled
            ? ''
            : isOutline
            ? 'hover:text-black'
            : 'text-white',
          hover_border_color: disabled
            ? ''
            : isOutline
            ? 'hover:border-transparent'
            : 'hover:border-transparent',
          shadow_size: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-lg'
            : 'shadow-none',
          shadow_color: disabled
            ? ''
            : isShadow && !isOutline
            ? 'hover:shadow-black/30'
            : 'shadow-none',
          rounded_size: disabled
            ? ''
            : rounded === 'none'
            ? 'rounded-none'
            : rounded === 'medium'
            ? 'rounded-lg'
            : rounded === 'full'
            ? 'rounded-full'
            : 'rounded-none',
        }
        break
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
      py-1.5 px-4 font-semibold capitalize focus:outline-none 
      flex gap-2 items-center justify-center transition duration-200
      text-base
      ${block ? 'block' : 'inline-block'}
      ${width}
      ${btnStyles.bg_color}
      ${btnStyles.text_color}
      ${btnStyles.border_color}
      ${btnStyles.shadow_size}
      ${btnStyles.shadow_color}
      ${btnStyles.hover_bg_color}
      ${btnStyles.hover_text_color}
      ${btnStyles.hover_border_color}
      ${btnStyles.rounded_size}
      ${
        disabled &&
        'bg-opacity-50 border-opacity-50 text-opacity-70 cursor-not-allowed'
      }
      `}
    >
      {children}
    </button>
  )
}

export default Button
