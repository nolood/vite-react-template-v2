import { Button } from "~/shared/ui/kit/ui/button";
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
