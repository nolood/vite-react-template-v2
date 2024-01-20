import { type FC } from "react";
import "./styles/globals.css";
import { ThemeProvider } from "~/app/providers";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";

const App: FC = () => {
  return (
    <ThemeProvider defaultTheme={"dark"}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
