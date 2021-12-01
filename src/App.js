import "./styles.css";
import AppRouter from "./components/routes/AppRouter";
import StoreProvider from "./store/StoreProvider";
export default function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}
