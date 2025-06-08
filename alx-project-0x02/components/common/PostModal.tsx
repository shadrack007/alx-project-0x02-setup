import { PostModalProps } from "@/interfaces";
import { ChangeEvent, useState } from "react";

const PostModal = ({ handlePostAdd }: PostModalProps) => {
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
    <div className="bg-white py-8 px-6 w-1/2 items-center justify-center rounded-lg">
      <form className="flex flex-col gap-4">
        <div className="space-y-5">
          <label className="font-semibold" htmlFor="title">
            Title
          </label>
          <input
            className="border-2 border-gray-400 focus:border-orange-700 w-full p-2 rounded-lg"
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

        <div className="space-y-5">
          <label className="font-semibold" htmlFor="content">
            Content
          </label>
          <textarea
            className="border-2 border-gray-400 focus:border-orange-700 w-full p-2 rounded-lg"
            name="content"
            value={content}
            rows={5}
            id="content"
            placeholder="Content ...."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
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
