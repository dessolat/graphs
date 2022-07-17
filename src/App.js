import './App.css';
import TypesGraph from './TypesGraph/TypesGraph';
// import ArsenalGraph from './ArsenalGraph/ArsenalGraph';
// import BreakGraph from './BreakGraph/BreakGraph';
// import FrequencySpeedGraph from './FrequencySpeedGraph/FrequencySpeedGraph';

function App() {
  return (<div className='row'>
     {/* <FrequencySpeedGraph />
     <BreakGraph /> */}
		 {/* <ArsenalGraph /> */}
		 <TypesGraph />
		</div>
  );
}

export default App;
