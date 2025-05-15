import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormDataProvider } from "./utils/FormDataContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FormDataProvider>
			<App />
		</FormDataProvider>
	</StrictMode>
);
