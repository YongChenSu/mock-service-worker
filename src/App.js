import './App.css';
const fetchData = () => {
	fetch('/superhero').then(res => {
		console.log(res);
		res.json();
	});
};

function App() {
	fetchData();
	if (!fetchData) return <div>error</div>;
	return <>app</>;
}

export default App;
