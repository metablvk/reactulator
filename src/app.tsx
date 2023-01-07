import './styles/app.css';
import { useState, MouseEvent } from 'react';
const keys: string[] = [
  '(',
  ')',
  '%',
  'CE',
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  'x',
  '1',
  '2',
  '3',
  '-',
  '0',
  '.',
  '=',
  '+',
];

const App = () => {
  let [exp, setExp] = useState<string>('');

  const handleClick = (e: MouseEvent<HTMLButtonElement, Event>) => {
    const { value } = e.target as HTMLButtonElement;
    // Append value to screen.
    if (value !== '=') setExp((exp += value));
    // Clear the screen
    if (value === 'CE') setExp('');
    if (value === '=') {
      if (exp.includes('x')) {
        const newExp = exp.replace('x', '*');
        setExp(eval(newExp));
      } else {
        setExp(eval(exp));
      }
    }
  };

  return (
    <div className='calculator'>
      <h1>Reactulator</h1>
      <div className='screen'>{exp}</div>
      <div className='keys'>
        {keys.map((key) => {
          return (
            <button
              value={key}
              onClick={handleClick}
              className={
                key === '='
                  ? 'equals key'
                  : key === '('
                  ? 'alt-btn key'
                  : key === ')'
                  ? 'alt-btn key'
                  : key === '%'
                  ? 'alt-btn key'
                  : 'key'
              }
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
