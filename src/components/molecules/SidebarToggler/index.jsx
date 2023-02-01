import { useSelector, useDispatch } from 'react-redux';
import { setSidebarToggle } from '../../../bootstraps/bootstrapActions';
import * as SVG from '../../../utils/Svgs';

export default function Component() {
  const isActive = useSelector(state => state).active;
  const dispatch = useDispatch();

  return (
    <button
      className={`${isActive && 'ml-32'} lg:ml-0 transition-all focus:outline-none`}
      onClick={() => dispatch(setSidebarToggle(!isActive))}
    >
      <SVG.IC_TOGGLE />
    </button>
  );
};