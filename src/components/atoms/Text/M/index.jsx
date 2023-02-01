import Text from '../';
import clsx from 'classnames';

export default function Component(props) {
  const { variant, type, className } = props;

  return (
    <Text
      variant={variant}
      type={type}
      className={clsx('text-base', className)}
    >
      {props.children}
    </Text>
  );
};