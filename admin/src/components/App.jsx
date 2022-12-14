import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../assets/css/style.css';
import setHeader from '../utility/setHeader';
import Router from './Router';

if (localStorage.token) setHeader(localStorage.token);

function App() {
  return <Router />;
}

export default App;
