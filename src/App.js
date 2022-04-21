import HomePage from "./pages/HomePage/homepage.component";
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    {/**Routes used to have multilple route options just
      like nav in html */}
      <Routes>
      {/** path represents the navigation path where it should
        redirect to which component using element */}
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
