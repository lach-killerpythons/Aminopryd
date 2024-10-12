import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import LoadCards from './LoadCards';
import PersonAdd from './PersonAdd';
import ReloadMe from './ReloadMe';
import ProfileCardList from './ProfileCardList';
//import SubmitForm from './SubmitForm';

function App() {


  return (
    <>
    <Hello/>
    {/* <SubmitForm/> */}

    <PersonAdd/>
    <ReloadMe/>
    <LoadCards/>

    

    </>
  );
}

export default App;
