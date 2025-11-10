import { createRoot } from "react-dom/client";
import MainPage from "@pages/MainPage";

import "@shared/scss/index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<MainPage />);
