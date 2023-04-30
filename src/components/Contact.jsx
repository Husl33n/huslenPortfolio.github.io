import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="px-8 flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/4e54fbe5-af04-4e46-92d8-1a7465ab8236"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Холбоо барих</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 border-stone-600 focus:border-stone-800 rounded-md focus:outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 border-stone-600 focus:border-stone-800 rounded-md focus:outline-none "
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="resize-none mb-4 p-2 bg-transparent border-2 border-stone-600 focus:border-stone-800 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-16 py-3 w-max  font-semibold rounded-xl text-stone-800 hover:text-black bg-gradient-to-r from-yellow-300 to-pink-300 hover:from-yellow-400 hover:to-pink-400 duration-500 ease-in drop-shadow-md hover:stroke-white self-center"
          >
            Надтай холбогдоорой
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
