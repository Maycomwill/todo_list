import { AppProvider } from "./hooks";
import AppRoutes from "./routes";
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
