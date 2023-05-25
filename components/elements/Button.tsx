import classnames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    className,
  )
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}

export default Button
