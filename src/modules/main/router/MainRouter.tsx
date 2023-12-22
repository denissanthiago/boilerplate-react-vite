import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProvidersProjectHOC from 'modules/main/provider';
import useAuthUser from 'modules/auth/user/implementation/hooks/useAuthUser';

function MainRouter() {
  const ClientsModule = React.lazy(
    () =>
      import(
        /* vite:module-name: "ClientsModule" */ 'modules/patients/common/router'
      )
  );

  const AuthModule = React.lazy(
    () =>
      import(/* vite:module-name: "AuthModule" */ 'modules/auth/common/router')
  );

  const { isAuth } = useAuthUser();

  return (
    <React.Suspense fallback={<>...Loading</>}>
      <Routes>
        <Route
          index
          element={isAuth ? <Navigate to="clients" /> : <Navigate to="auth" />}
        />
        <Route path="/clients/*" element={<ClientsModule />} />
        <Route path="/auth/*" element={<AuthModule />} />
        <Route path="*" element={<Navigate to="clients" />} />
      </Routes>
    </React.Suspense>
  );
}

export default ProvidersProjectHOC(MainRouter);
