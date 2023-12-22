import { Route, Routes } from 'react-router-dom';
import HomeClientPage from 'modules/patients/common/pages/HomeClientPage';
import { NotFoundPage, PrivateLayout } from 'shared/components';

function RouterClient(): React.ReactNode {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<HomeClientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default RouterClient;
