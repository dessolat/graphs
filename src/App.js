import './App.css';
import PlayerImgRight from './images/player_right.png';
import PlayerImgLeft from './images/player_left.png';
import DotsGraph from './DotsGraph/DotsGraph';
// import TypesGraph from './TypesGraph/TypesGraph';
// import ArsenalGraph from './ArsenalGraph/ArsenalGraph';
// import BreakGraph from './BreakGraph/BreakGraph';
// import FrequencySpeedGraph from './FrequencySpeedGraph/FrequencySpeedGraph';

function App() {
  return (<div className='row'>
     {/* <FrequencySpeedGraph /> */}
     {/* <BreakGraph /> */}
		  {/* <ArsenalGraph /> */}
		 {/* <TypesGraph /> */}
		 <img src={Math.random() > 0.5 ? PlayerImgRight : PlayerImgLeft} alt="player" />
		 <DotsGraph color='red'/>
		 <DotsGraph color='green'/>
		 <DotsGraph color='blue'/>
		 <DotsGraph color='yellow'/>
		 <DotsGraph color='olive'/>
		</div>
  );
}

export default App;
