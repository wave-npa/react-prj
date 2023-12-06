import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DiscussionPage from "./pages/DiscussionPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./components/layouts/Layout";

function App() {
  //route path direct to pages on the website
  //rn its localhost
  //on a real site it could be: mysite/main or mysite/discussion

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/discussion' element={<DiscussionPage/>}/>
        <Route path='/favorite' element={<FavoritePage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
