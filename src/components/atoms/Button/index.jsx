import * as COMPONENT from '../../';
import clsx from 'classnames';

export default function Component(props) {
  const { type, size, className, leftIcon, rightIcon, onClick } = props;

  return (
    <button
      className={clsx(
        'flex items-center justify-center border focus:outline-none transition-all', className
      )}
      onClick={onClick}
    >
      {leftIcon && <div className="mr-2">{leftIcon}</div>}
      {
        {
          'XS': <COMPONENT.TextXS type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextXS>,
          'SM': <COMPONENT.TextSM type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextSM>,
          'M': <COMPONENT.TextM type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextM>,
          'LG': <COMPONENT.TextLG type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextLG>,
          'XL': <COMPONENT.TextXL type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextXL>,
          'XXL': <COMPONENT.TextXXL type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextXXL>,
          'XXXL': <COMPONENT.TextXXXL type={type} className='pt-[1px]'>{props?.children}</COMPONENT.TextXXXL>,
        }[size]
      }
      {rightIcon && <div className="ml-2">{rightIcon}</div>}
    </button>
  );
};