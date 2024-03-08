import { useEffect, useState } from "react";

export function Typewriter(props) {
  const [text, setText] = useState("");

  const write = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => write(text, i + 1), 100);
    } else {
        setTimeout(() => write(props.text), 1000)
    }
  };

  useEffect(() => {
   write(props.text)
  }, [props.text]);

  return <div>{text}</div>;
}
