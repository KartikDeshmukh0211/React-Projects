import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <ContactHeader />
      <ContactForm />
    </>
  );
}

export default App;
