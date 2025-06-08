import { PostModalProps } from "@/interfaces";
import { ChangeEvent, useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ handlePostAdd }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    // Basic validation
    if (!title || !content) {
      alert("Please fill out both title and content.");
      return;
    }

    handlePostAdd({ title: title, content: content });

    // Reset form after submission
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white w-1/2 items-center justify-center rounded-lg">
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            id="content"
            placeholder="Title"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="content">Title</label>
          <input
            type="text"
            name="content"
            value={content}
            id="content"
            placeholder="Title"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContent(e.target.value)
            }
          />
        </div>

        <div>
          <input
            onClick={(e) => handleSubmit(e)}
            type="button"
            value="Add Post"
            className="bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default PostModal;
