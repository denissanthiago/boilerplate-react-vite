import { Outlet } from 'react-router-dom';

export function PublicLayout() {
  return (
    <div>
      <div>
        <div>PublicLayout</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
