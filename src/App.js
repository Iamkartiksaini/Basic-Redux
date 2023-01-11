import { Provider } from "react-redux";
import Button from "./button";
import Header from "./Header";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <h1>Welcome to React Redux</h1>
      <Header />
      <Button />
    </Provider>
  );
}

export default App;
