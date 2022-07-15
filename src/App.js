import './App.css';

function App() {
  const PARAMS = {
    LEFT_VERTICAL_GRID_LINES_NUMBER: 5,
    VERTICAL_GRID_LINES_TOP: 20,
    VERTICAL_GRID_LINES_LEFT: 70,
    VERTICAL_GRID_LINES_HEIGHT: 463
  };

  PARAMS.VERTICAL_GRID_LINES_STEP = 166 / PARAMS.LEFT_VERTICAL_GRID_LINES_NUMBER;
  PARAMS.ZERO_COORDS = { X: PARAMS.VERTICAL_GRID_LINES_LEFT + 166, Y: PARAMS.VERTICAL_GRID_LINES_TOP + 209 };

  const frequenciesArr = [
    { title: 'Fastball', value: 54.5 },
    { title: 'Slider', value: 29.4 },
    { title: 'Curveball', value: 16.1 }
  ];

  const frequenciesValues = frequenciesArr.reduce((sum, freq, i) => {
    sum.push(freq.value);
    return sum;
  }, []);

  const maxFrequency = Math.max(...frequenciesValues);
  const maxFrequencyLineValue = (Number((maxFrequency / 10).toFixed(0)) + 1) * 10;

  const bottomLeftNumbers = [];
  for (let i = 1; i <= PARAMS.LEFT_VERTICAL_GRID_LINES_NUMBER; i++) {
    bottomLeftNumbers.push((maxFrequencyLineValue / (PARAMS.LEFT_VERTICAL_GRID_LINES_NUMBER + 1)) * i);
  }

  const bottomLeftUnitMeasure = '%';

  return (
    <div className='App'>
      <div className='wrapper'>
        <svg
          viewBox='0 0 480 560'
          xmlns='http://www.w3.org/2000/svg'
          className='graph'
          preserveAspectRatio='none'>
          {/* Left vertical lines */}
          {bottomLeftNumbers.map((number, i) => (
            <line
              key={i}
              x1={PARAMS.ZERO_COORDS.X - PARAMS.VERTICAL_GRID_LINES_STEP * (i + 1)}
              y1={PARAMS.VERTICAL_GRID_LINES_TOP}
              x2={PARAMS.ZERO_COORDS.X - PARAMS.VERTICAL_GRID_LINES_STEP * (i + 1)}
							y2={PARAMS.VERTICAL_GRID_LINES_TOP + PARAMS.VERTICAL_GRID_LINES_HEIGHT}
              stroke='#E3E1E1'
              stroke-dasharray='4 2'
            />
          ))}

          {/* Vertical center grid line */}
          <line
            x1={PARAMS.ZERO_COORDS.X}
            y1={PARAMS.VERTICAL_GRID_LINES_TOP}
            x2={PARAMS.ZERO_COORDS.X}
            y2={PARAMS.VERTICAL_GRID_LINES_TOP + PARAMS.VERTICAL_GRID_LINES_HEIGHT}
            stroke='#ACACAC'
          />

          {/* Bottom-left numbers */}
          {bottomLeftNumbers.map((number, i) => (
            <text
              key={i}
              x={PARAMS.ZERO_COORDS.X - (PARAMS.VERTICAL_GRID_LINES_STEP * (i + 1) + 17 / 2)}
              y='488'
              className='bottom-numbers'>
              {number}
            </text>
          ))}

          {/* Bottom-left unit measurement */}
          <text
            x={
              PARAMS.ZERO_COORDS.X -
              (PARAMS.VERTICAL_GRID_LINES_STEP * (PARAMS.LEFT_VERTICAL_GRID_LINES_NUMBER + 1) + 17 / 2)
            }
            y='15'
            className='top-bottom-numbers'>
            %
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
