import './App.css';
import Form from './componens/Form';
import NewUser from './screens/NewUser';
import EditUser from './screens/EditUser';

const App = () => {
  return (
    <>
      <h1>New user</h1>
      <NewUser/>
      <br/>
      <br/>
      <br/>
      <h1>Edit user</h1>
      <h5>First save one and reload the page</h5>
      <EditUser userNumber={2}/>
    </>
  );
}

export default App;
