import PDFViewer from './components/PDFViewer';
import { StateProvider } from './store';
import reducer, { initialState } from './store/reducer';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <PDFViewer />
      </div>
    </StateProvider>
  );
}

export default App;
