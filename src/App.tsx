import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import './global.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export default App;
