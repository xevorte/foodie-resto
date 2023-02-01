import clsx from 'classnames';

export default function Component(props) {
  const { variant, type, className } = props;

  return (
    <div className={clsx(
      {
        'text-white': variant === 'white',
        'text-primary': variant === 'primary',
        'text-dark': variant === 'dark',
        'text-secondary': variant === 'secondary',
        'text-light': variant === 'light',
      },
      {
        'font-light': type === 'light',
        'font-normal': type === 'normal',
        'font-medium': type === 'medium',
        'font-semibold': type === 'semibold',
        'font-bold': type === 'bold',
        'font-extrabold': type === 'extrabold',
      },
      className
    )}>{props.children}</div>
  );
};