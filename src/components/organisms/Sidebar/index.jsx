import * as SVG from '../../../utils/Svgs';
import * as COMPONENT from '../../';
import { useLocation } from 'react-router-dom';
import clsx from 'classnames';
import { useSelector } from 'react-redux';

export default function Component() {
  const location = useLocation();
  const isActive = useSelector(state => state).active;

  return (
    <div
      className={clsx(
        'fixed lg:relative min-w-[130px] min-h-screen lg:min-h-[127vh] lg:h-auto bg-white shadow-lg shadow-slate-200 pt-9 transition-all z-20',
        {
          'min-w-[130px] overflow-y-scroll lg:overflow-hidden': isActive,
          'min-w-[0] overflow-hidden': !isActive,
        }
      )}
    >
      <div className="absolute left-2/4 right-2/4 flex flex-col items-center justify-between h-full">
        <div className="sidebar-logo">
          <SVG.LOGO />
        </div>
        <div className="sidebar-menu pt-6 pb-10">
          <div className="menu pr-0.5 pb-2 border-b-4 border-light">
            <COMPONENT.SidebarItem
              active={location.pathname === '/'}
              path={'/'}
              icon={<SVG.IC_HOME />}
              title="Home"
              className="my-6"
            />
            <COMPONENT.SidebarItem
              active={location.pathname === '/menu'}
              path={'/menu'}
              icon={<SVG.IC_MENU />}
              title="Menu"
              className="my-6"
            />
            <COMPONENT.SidebarItem
              active={location.pathname === '/history'}
              path={'/history'}
              icon={<SVG.IC_HISTORY />}
              title="History"
              className="my-6"
            />
            <COMPONENT.SidebarItem
              active={location.pathname === '/promo'}
              path={'/promo'}
              icon={<SVG.IC_PROMO />}
              title="Promo"
              className="my-6"
            />
          </div>
          <div className="menu pr-0.5 pt-2">
            <COMPONENT.SidebarItem
              active={location.pathname === '/partners'}
              path={'/partners'}
              icon={<SVG.IC_PARTNERS />}
              title="Partners"
              className="my-6"
            />
            <COMPONENT.SidebarItem
              active={location.pathname === '/settings'}
              path={'/settings'}
              icon={<SVG.IC_SETTINGS />}
              title="Settings"
              className="my-6"
            />
          </div>
        </div>
        <div className="sidebar-footer pb-10 lg:pb-20">
          <COMPONENT.SidebarItem
            path={'/logout'}
            icon={<SVG.IC_LOGOUT />}
            title="Logout"
          />
        </div>
      </div>
    </div>
  );
}