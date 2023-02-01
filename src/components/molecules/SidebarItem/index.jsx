import { Link } from 'react-router-dom';
import clsx from 'classnames';
import styles from './style.module.css';

export default function Component(props) {
  const { active, path, icon, title, className, onClick } = props;

  return (
    <Link
      to={path}
      className={clsx(`${styles.sidebaritem} group`, {
        [styles.active]: active,
        [className]: className,
      })}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <p
        className={clsx('font-medium text-sm group-hover:text-white', {
          'text-secondary': !active,
          'text-white': active,
        })}
      >
        {title}
      </p>
    </Link>
  );
}