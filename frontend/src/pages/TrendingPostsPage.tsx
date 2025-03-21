import { useState } from "react";
import { getTrendingPosts } from "../services/api";

interface Post {
  id: number;
  content: string;
}

const TrendingPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [userId, setUserId] = useState<string>("");

  const fetchPosts = async () => {
    if (!userId) return alert("Please enter a User ID");
    try {
      const data = await getTrendingPosts(userId);
      if (data.posts) setPosts(data.posts);
      else console.error("Invalid response format:", data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Trending Posts</h1>

      {/* Input for User ID */}
      <div className="flex space-x-3 mb-6">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <button
          onClick={fetchPosts}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
        >
          Fetch
        </button>
      </div>

     
      <div className="w-full max-w-lg space-y-3 px-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <p className="text-gray-800">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPostsPage;
