import './App.css';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import Top from "./pages/top.js"
import Detail from './pages/detail';

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
		<Router>
			<Header />
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Routes>
					<Route exact path='/top' element={<Top />} />
					<Route exact path='/detail/1' element={<Detail />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
