import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Albums from './pages/Albums';
import EspecificAlbum from './pages/EspecificAlbum';
import Todos from './pages/Todos';
import EspecificTodo from './pages/EspecificTodo';
import Posts from './pages/Posts';
import EspecificPost from './pages/EspecificPost';
import Home from './pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/albums' element={ <Albums /> } />
        <Route path='/album/:id' element={ <EspecificAlbum /> } />
        <Route path='/posts' element={ <Posts /> } />
        <Route path='/post/:id' element={ <EspecificPost /> } />
        <Route path='/todos' element={ <Todos /> } />
        <Route path='/todo/:id' element={ <EspecificTodo /> } />
        <Route path='/todo/:id' element={ <EspecificTodo /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
};
