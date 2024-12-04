
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <Header />
      <main>
      <Outlet />

      </main>
      <Footer />
    </>
  );
}

export default App;
