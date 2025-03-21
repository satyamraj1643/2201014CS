import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
       
        <nav className="w-full bg-white shadow-md py-4">
          <div className="max-w-4xl mx-auto flex justify-center space-x-8">
            <NavLink to="/" label="Top Users" />
            <NavLink to="/trending" label="Trending Posts" />
            <NavLink to="/feed" label="Live Feed" />
          </div>
        </nav>

    
        <div className="w-full max-w-4xl p-6">
          <Routes>
            <Route path="/" element={<TopUsersPage />} />
            <Route path="/trending" element={<TrendingPostsPage />} />
            <Route path="/feed" element={<FeedPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-gray-800 font-medium text-lg px-4 py-2 rounded-md transition 
    hover:bg-gradient-to-r hover:from-[#0f0c29] hover:via-[#302b63] hover:to-[#24243e] hover:text-white"
  >
    {label}
  </Link>
);

export default App;
