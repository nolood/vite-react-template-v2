import { Button } from "~/shared/ui/button.tsx";
import { type FC } from "react";
import "./app/styles/globals.css";
import { ThemeProvider } from "~/app/providers";

const App: FC = () => {
  return (
    <ThemeProvider defaultTheme={"dark"}>
      <Button>dadas</Button>
    </ThemeProvider>
  );
};

export default App;
