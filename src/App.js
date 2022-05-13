import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import { makeStyles } from "@material-ui/core/styles";

const HomePage = lazy(() => import("./Pages/HomePage"));
const CoinPage = lazy(() => import("./Pages/CoinPage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "white",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
