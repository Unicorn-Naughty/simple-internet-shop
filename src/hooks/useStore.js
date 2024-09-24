import storeContext from "../contexts/store";
import { useContext } from "react";
function useStore() {
  const store = useContext(storeContext);
  if (store === null) {
    throw new Error(
      "Some moron run system without store provider, please check who is it"
    );
  }

  return store;
}
export default useStore;
