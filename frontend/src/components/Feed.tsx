import { useEffect, useState } from "react";
import { getFeed } from "../services/api";

interface Post {
  id: string;
  title: string;
  content: string;
}

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const newFeed = await getFeed();
      setPosts(newFeed);
    };

    fetchFeed();
    const interval = setInterval(fetchFeed, 5000); // Auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#2c3e50] to-[#34495e] flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">📢 Live Feed</h1>
      <div className="w-full max-w-4xl space-y-4 px-4">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-cyan-400/50 transition transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-gray-300 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
