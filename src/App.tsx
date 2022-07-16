import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import { ModalContextProvider } from "./contexts/ModalContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Modal from "./pages/Home/Components/Modal";
import { GlobalStyles } from "./styles/Global";

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  function handleStateDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <ModalContextProvider>
        <div className="App">
          <Navbar handleStateDrawer={handleStateDrawer} />
          <Drawer optionDrawer={{ openDrawer, handleStateDrawer }} />
          <Outlet />
        </div>
        <Modal />
      </ModalContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
