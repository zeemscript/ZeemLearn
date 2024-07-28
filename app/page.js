"use client";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";



export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, text: "HEllo", user: "user2" },
    { id: 2, text: "Hi", user: "user1" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, user: "user2" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <section className="flex flex-col justify-between min-h-screen ">
      <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-80px)]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.user === "user1" ? "justify-end" : "justify-start"
            }`}
          >
            {/* <Image src={msg.user === "user1" ? user1 : user2} alt="User" width={40} height={40} className="rounded-full" /> */}
            <span
              className={`${
                msg.user === "user1" ? "bg-red-600" : "bg-gray-700"
              } text-white py-2 px-4 rounded-lg max-w-xs break-words`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      {/* form */}
      <form
        className="fixed bottom-0 left-0 right-0 flex justify-center items-center px-4 sm:px-0 py-4 bg-black border-t border-gray-700"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center w-full max-w-2xl mx-auto bg-gray-800 rounded-full px-4 py-2">
          <textarea
            type="text"
            placeholder="Enter your message"
            className="flex-grow border-none p-2 rounded-md bg-gray-800 text-white resize-none focus:outline-none"
            rows={1}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="text-white flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            <IoIosSend size={25} />
          </button>
        </div>
      </form>
    </section>
  );
}
