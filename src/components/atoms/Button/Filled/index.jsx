import Button from '../';
import clsx from 'classnames';

export default function Component(props) {
  const { variant, type, size, leftIcon, rightIcon, className, onClick } = props;

  return (
    <Button
      className={clsx(
        {
          'bg-primary text-white hover:bg-[#bd3e3e]': variant === 'primary',
          'bg-secondary text-white hover:bg-[#726b6b]': variant === 'secondary',
          'bg-light text-dark hover:bg-[#e1d8e1]': variant === 'light',
          'bg-dark text-white hover:bg-[#423e3e]': variant === 'dark',
        },
        className
      )}
      type={type}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
    >
      {props?.children}
    </Button>
  );
}