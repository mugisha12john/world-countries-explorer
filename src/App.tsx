import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <SearchForm />
      </ThemeProvider>
    </>
  );
}

export default App;
