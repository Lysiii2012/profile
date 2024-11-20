 import Header from './components/Header/Header'; 
import ItemGroup from './components/ItemGroup/ItemGroup'; 
import ProfileForm from './components/ProfileForm/ProfileForm';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <div className='container'>
          <div className='main-container'>
            <ItemGroup/>
            <ProfileForm/>
          </div>
        </div>
    </div>
  );
}

export default App;
