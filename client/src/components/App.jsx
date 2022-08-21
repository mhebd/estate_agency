import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/style.css';
import AdminRoutes from './common/AdminRoutes';
import UserRoutes from './common/UserRoutes';

function App() {
  return (
    <>
      <UserRoutes />
      <AdminRoutes />
    </>
  );
}

export default App;
