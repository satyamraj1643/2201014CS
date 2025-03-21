import { useEffect, useState } from "react";
import { getTopUsers } from "../services/api";

interface User {
  id: string;
  name: string;
}

const TopUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getTopUsers().then((data) => {
      if (data.users) {
        const usersArray: User[] = Object.entries(data.users).map(([id, name]) => ({
          id,
          name: name as string,
        }));
        setUsers(usersArray);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Top Users</h1>

      <div className="w-full max-w-lg space-y-3 px-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center p-4 bg-white border border-gray-300 rounded-md shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white text-lg font-medium rounded-md">
              {user.name[0]}
            </div>
            <p className="ml-4 text-gray-800 text-lg">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersPage;
