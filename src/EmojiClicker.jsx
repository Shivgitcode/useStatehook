import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
  const [emoji, setEmoji] = useState([{ id: uuid(), emoji: ":)" }]);
  console.log("hello");

  function addEmoji() {
    setEmoji((newemoji) => {
      console.log("done");
      return [...newemoji, { id: uuid(), emoji: ":)" }];
    });
    // console.log("yo");
  }
  function removeEmoji(id) {
    // console.log(id);
    setEmoji((newEmoji) => {
      return newEmoji.filter((e) => {
        if (e.id !== id) {
          return e;
        }
      });
    });
    // setEmoji((newemoji) => {
    //   newemoji.pop();
    //   console.log("i am from remove", newemoji);
    //   return [...newemoji];
    // });
  }
  function updateEmoji() {
    setEmoji((newEmoji) => {
      return newEmoji.map((item) => {
        return { ...item, emoji: "❤️" };
      });
    });
  }
  return (
    <div>
      <p>
        {emoji.map((e) => {
          return (
            <span key={e.id} onClick={() => removeEmoji(e.id)}>
              {e.emoji}
            </span>
          );
        })}
      </p>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={updateEmoji}>make them all hearts</button>
    </div>
  );
}
