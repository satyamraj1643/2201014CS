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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded shadow mb-3">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;
