import { createRoot } from 'react-dom/client';
import './popup.css';

function App() {
  const handleClick = () => {
    alert('Hello from your new Chrome extension!');
  };

  return (
    <div className="container">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const container = document.getElementById('app')!;
createRoot(container).render(<App />);
