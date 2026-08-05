import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContainerPlayer from "./features/player/ContainerPlayer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import ContainerList from "./features/favoriteMusic/ContainerList";
import ContainerPlayerFavorite from "./features/favoriteMusic/ContainerPlayerFavorite";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/musics" />} />
          <Route element={<AppLayout />}>
            <Route path="/musics" element={<ContainerPlayer />} />
            <Route path="/musicsFavorite" element={<ContainerList />} />
            <Route
              path="/musicsFavorite/:musicId"
              element={<ContainerPlayerFavorite />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
