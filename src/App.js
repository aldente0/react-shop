import { Headers } from './components/Headers';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { ContextProvider } from './context';

function App() {
	return (
		<>
			<Headers />
			<ContextProvider>
				<Main />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
