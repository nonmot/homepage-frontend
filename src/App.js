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
		<Router basename={process.env.PUBLIC_URL}>
			<Header />
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Routes>
					<Route exact path='/' element={<Top />} />
					<Route exact path='/detail' element={<Detail />}>
						<Route path=":postId" element={<Detail />} />
					</Route>
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
