import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpresions';
import Events from './components/Events';
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
    
      <Events/>
      <Challenge/>

    </div>
  );
}

export default App;
