import { useEffect, useState } from "react";
import { getTopUsers } from "../services/api";

interface User {
  id: string;
  name: string;
  postCount: number;
}

const TopUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getTopUsers().then(setUsers);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex flex-col items-center py-10">
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">🏆 Top Users</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center p-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center text-2xl font-bold text-white shadow-md">
              {user.name[0]}
            </div>
            <div className="ml-6">
              <p className="text-2xl font-semibold text-white">{user.name}</p>
              <p className="text-gray-300">🔥 {user.postCount} posts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersPage;
