import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🔓": "Unlocked",
  "🔨": "Hammer",
  "🪑": "Chair",
  "🧲": "Magnet",
  "🛒": "Shoppping Cart",
  "⚙️": "Gear",
  "⏰": "Alarm Clock",
  "📢": "LoudSpeaker",
  "🔧": "Wrench",
  "🛁": "Bathtub",
  "📡": "Satellite Antenna",
  "🔬": "Microscope",
  "✏️": "Pencil",
  "💳": "Credit Card",
  "🏮": "Red Lantern",
  "📻": "Radio",
  "🖥️": "Desktop Computer",
  "💾": "Floppy Disk",
  "📰": "Newspaper",
  "📈 ": "Chart Increasing",
  "🖍️": "Crayon",
  "🗺️": "World Map",
  "🛢️": "Oil Drum",
  "🌡️": "Thermometer",
  "🧫": "Petri Dish",
  "🤿": "Diving Mask",
  "🛎️": "Bell",
  "🪁": "Kite",
  "🧱": "Brick",
  "🧳": "Luggage",
  "🕹️": "Joystick",
  "🎈": "Balloon",
  "🛍️": "Shopping Bags",
  "🏷️": "Label",
  "📮": "Postbox",
  "🧷": "Safety Pin",
  "🪒": "Razor",
  "🧼": "Soap",
  "💵": "Dollar Banknote"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not available in  database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1 class="header">Object Emoji Finder</h1>

      <input class="input" onChange={emojiInputHandler} />

      <h2 class="result"> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h2 class="header-inv">Available Emoji's</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "1.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}