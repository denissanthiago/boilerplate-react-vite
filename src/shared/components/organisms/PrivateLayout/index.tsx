import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
  return (
    <div>
      <div>
        <div>PrivateLayout</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
