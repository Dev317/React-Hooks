import UseState from './useState/UseState';
import UseReducer from './useReducer/UseReducer';
import UseEffect from './useEffect/UseEffect';
import UseRef from './useRef/UseRef';
import UseLayoutEffect from './useLayoutEffect/UseLayoutEffect';
import UseImperativeHandle from './useImperativeHandle/UseImperativeHandle';
import UseContext from './useContext/UseContext';
import UseMemo from './useMemo/UseMemo';
import UseCallBack from './useCallBack/UseCallBack';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>UseState</h1>
      <UseState />
      <hr/>
      <h1>UseReducer</h1>
      <UseReducer />
      <hr/>
      <h1>UseEffect</h1>
      <UseEffect />
      <hr/>
      <h1>UseRef</h1>
      <UseRef />
      <hr/>
      <h1>UseLayoutEffect</h1>
      <UseLayoutEffect />
      <hr/>
      <h1>UseImperativeHandle</h1>
      <UseImperativeHandle />
      <hr/>
      <h1>UseContext</h1>
      <UseContext />
      <hr/>
      <h1>UseMemo</h1>
      <UseMemo />
      <hr/>
      <h1>UseCallback</h1>
      <UseCallBack />
    </div>
  );
}

export default App;