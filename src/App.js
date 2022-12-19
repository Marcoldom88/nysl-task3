import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home  from './components/Home';
import { Schedule } from './components/Schedule/Schedule';
import { CreateGamesDetails } from './components/GamesDetails';
import { MessageBoard } from './components/messageboard/MessageBoard';
import Protected from './utilities/Protected';
import { useUserState } from './utilities/firebase';

function App() {
  const [user] = useUserState();

  return (
    <Router>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/games/:id' element={<CreateGamesDetails />} />
            <Route element={<Protected user={user} />}>
              <Route path='/messageboard' element={<MessageBoard user={user} />} />
            </Route>
          </Routes>
        </div>
    </Router>
 );
}

export default App;