import jsonServerProvider from 'ra-data-json-server';
import { Admin, ListGuesser, Resource } from 'react-admin';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com/posts');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
}

export default App;
