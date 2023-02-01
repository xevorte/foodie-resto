import Button from '../';
import clsx from 'classnames';

export default function Component(props) {
  const { variant, type, size, leftIcon, rightIcon, className, onClick } = props;

  return (
    <Button
      className={clsx(
        {
          'text-primary border-primary hover:bg-primary hover:text-white': variant === 'primary',
          'text-secondary border-secondary hover:bg-secondary hover:text-white': variant === 'secondary',
          'text-light border-light hover:bg-light hover:text-dark': variant === 'light',
          'text-dark border-dark hover:bg-dark hover:text-white': variant === 'dark',
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