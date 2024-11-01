"use client";
import React, { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "I'm sorry :(",
      "Please Babe :(",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4 rounded-lg shadow-lg">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <div className="text-5xl font-extrabold my-4 text-pink-600">Yay! Thank you! 😊</div>
        </>
      ) : (
        <>
          <img
            className="h-48 mb-4 rounded-lg shadow-lg border-2 border-pink-300"
            src="https://media1.tenor.com/m/n8Ql8FxaWTMAAAAd/kitten-love.gif"
          />
          <h1 className="text-4xl my-4 text-purple-800 font-semibold">Will you please forgive me?</h1>
          <div className="flex space-x-4">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes!
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
