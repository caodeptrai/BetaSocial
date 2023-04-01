import './App.scss';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import Inbox from './pages/inbox/Inbox';
import Profile from './pages/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Saved from './pages/saved/Saved';
import Post from './pages/post/Post';
import Reels from './pages/reels/Reels';
import ChatWindow from './pages/chatWindow/ChatWindow';

function App() {
    const Layout = () => {
        return (
            <div className="app">
                <div className="container">
                    <div className="leftSide">
                        <Sidebar />
                    </div>
                    <div className="rightSide">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:username" element={<Profile />}>
                        <Route path="/profile/:username" element={<Post />} />
                        <Route path="/profile/:username/saved" element={<Saved />} />
                    </Route>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/reels" element={<Reels />} />
                    <Route path="/inbox/" element={<Inbox />}>
                        <Route path="/inbox/:username" element={<ChatWindow />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
