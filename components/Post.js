function Post({ username, title, content }) {
  return (
    <div className="border rounded-lg p-2 my-3 shadow-sm">
      <div className="flex justify-between my-2">
        <div className="font-semibold">{title}</div>
        <div className="text-sm">{username}</div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Post;
