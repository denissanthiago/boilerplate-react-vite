import { Route, Routes, Navigate } from 'react-router-dom';
import { NotFoundPage, PublicLayout } from 'shared/components';
import LoginPage from '../pages/LoginPage';

function RouterAuth(): React.ReactNode {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RouterAuth;
