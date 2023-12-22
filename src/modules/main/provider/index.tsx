import React, { ComponentType, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from 'shared/theme';
import { store } from 'modules/main/store';

const queryClient = new QueryClient();

function ProvidersProjectHOC<P extends object>(
  Component: ComponentType<PropsWithChildren<P>>
) {
  const HocComponent: React.FC<PropsWithChildren<P>> = (hocProps) => (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient} contextSharing>
            <Component {...hocProps} />
            {import.meta.env.VITE_NODE_ENV === 'development' && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );

  return HocComponent;
}

export default ProvidersProjectHOC;
