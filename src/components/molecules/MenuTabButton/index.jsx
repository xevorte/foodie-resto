import * as COMPONENT from '../../';
import clsx from 'classnames';

export default function Component(props) {
  const { label, active } = props

  return (
    <div className={clsx('cursor-pointer after:block after:border-[3px] after:rounded-t-lg after:mt-2 mr-16', {
      'after:border-primary': active,
      'after:border-transparent': !active
    })}>
      <COMPONENT.TextM
        variant={active ? 'primary' : 'secondary'}
        type='medium'
        className='hover:text-primary transition-all whitespace-nowrap'
      >
        {label}
      </COMPONENT.TextM>
    </div>
  );
};