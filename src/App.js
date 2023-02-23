import './App.css';
import Header from './components/Header/Header';
import Feed from './components/Layouts/Main/Feed';
import Sidebar from './components/Layouts/Sidebar/Sidebar';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <Feed />
      </div>

    </div>
  );
}

export default App;
