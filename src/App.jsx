import App from "./components/App";
import RootStore from "./store";
import createApi from "./api";
import createHttpPlugin from "./plugins/http";
import storeContext from "./contexts/store";
async function createApp() {
  const http = createHttpPlugin("http://faceprog.ru/reactcourseapi");
  const api = createApi(http);
  const store = new RootStore(api);
  await store.catalog.load();
  await store.cart.load();
  const app = (
    <storeContext.Provider value={store}>
      <App />
    </storeContext.Provider>
  );
  return app;
}
export default createApp;
