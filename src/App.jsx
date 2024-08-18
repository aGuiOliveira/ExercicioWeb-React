import { useState } from 'react';
import Header from '../components/header';
import Info from '../components/info';
import Contact from '../components/contact';
import Footer from '../components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="mainInfo">
        <Info />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
