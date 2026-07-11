import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "App";
import * as serviceWorker from "serviceWorker";

const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 1000 * 60 * 10, retry: 1 } },
});

const root = createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
