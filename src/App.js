import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Mailbox from "./components/mailbox/Mailbox";
import Product from "./components/product/Product";
import Sidebar from "./components/sidebar/Sidebar";
import Sort from "./components/sort/Sort";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Sort />
      <div className="rowc">
        <Sidebar />
        <Product />
      </div>
      <Mailbox />
      <Footer />
    </div>
  );
}

export default App;
