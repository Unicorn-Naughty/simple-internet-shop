import App from "./components/App";
import RootStore from "./store";
import createApi from "./api";
import createHttpPlugin from "./plugins/http";
import storeContext from "./contexts/store";
import { ThemeProvider } from "@mui/material/styles";
import themeContext from "./contexts/theme";

async function createApp() {
  const http = createHttpPlugin("http://faceprog.ru/reactcourseapi");
  const api = createApi(http);
  const store = new RootStore(api);
  await store.catalog.load().then(store.cart.load());
  const app = (
    <ThemeProvider theme={themeContext}>
      <storeContext.Provider value={store}>
        <App />
      </storeContext.Provider>
    </ThemeProvider>
  );
  return app;
}
export default createApp;
