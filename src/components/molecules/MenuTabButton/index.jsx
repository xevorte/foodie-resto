import * as COMPONENT from '../../';
import clsx from 'classnames';

export default function Component(props) {
  const { label, active } = props

  return (
    <div
      className={clsx(
        'group cursor-pointer after:block after:w-0 after:opacity-0 after:border-[3px] after:rounded-t-lg after:mt-2 after:transition-all mr-16 after:hover:opacity-100 after:hover:w-full after:hover:border-primary',
        {
          'after:border-primary after:w-full after:opacity-100': active,
          'after:border-transparent': !active,
        }
      )}
    >
      <COMPONENT.TextM
        variant={active ? 'primary' : 'secondary'}
        type="medium"
        className="group-hover:text-primary transition-all whitespace-nowrap"
      >
        {label}
      </COMPONENT.TextM>
    </div>
  );
};