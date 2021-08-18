import { Provider } from "react-redux";
import { createStore } from "redux";
import { Routing } from "../routing/routing";
import { reducers } from "../state-management/reducers/root-reducer";

export const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}