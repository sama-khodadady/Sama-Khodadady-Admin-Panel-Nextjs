import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import defaultOptions from "../configs/reactQuery";

const queryClient = new QueryClient({ defaultOptions });

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
