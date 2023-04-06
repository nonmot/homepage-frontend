import './App.css';
import Top from "./pages/top.js"
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
		<Header />
		<Hero />
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<Top />
		</div>
		<Footer />
    </div>
  );
}

export default App;
