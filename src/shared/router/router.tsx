import { createBrowserRouter } from "react-router-dom";
import { ProtectedLayout } from "~/shared/ui";
import { LoginPage } from "~/pages";
import { paths } from "~/shared/router/paths.ts";

export const router = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: paths.login,
        element: <LoginPage />,
      },
    ],
  },
]);
