import { useState } from 'react';
import axios from 'axios';

function CreatePost({ setPosts, posts }) {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const createNewPost = async (e) => {
    e.preventDefault();
    const post = {
      title,
      username,
      content,
    };

    try {
      const res = await axios.post(
        'https://posts.zexianli.workers.dev/posts',
        JSON.stringify(post)
      );
      console.log(res);
      setPosts([post, ...posts]);
      setTitle('');
      setUsername('');
      setContent('');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <form onSubmit={createNewPost}>
      <div className="flex justify-between py-2">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="title"
            className="inputField"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="username"
            className="inputField"
            autoComplete="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
      </div>
      <div>
        <label htmlFor="content" className="text-sm">
          Content
        </label>
        <textarea
          id="content"
          type="text"
          placeholder="content"
          className="w-full inputField"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-100 mt-2 mb-1 rounded-md p-2"
      >
        Post
      </button>
    </form>
  );
}

export default CreatePost;
