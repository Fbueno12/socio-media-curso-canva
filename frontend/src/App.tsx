import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="container sm-container-bg">
      <div className="sm-bg-animation"></div>
      <div className="sm-bg-ball"></div>
      <Header />
      <main className="sm-main">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
