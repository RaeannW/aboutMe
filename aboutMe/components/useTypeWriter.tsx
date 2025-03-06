import { useState, useEffect } from "react";

export default function useTypeWriter(text, speed = 50, pause = 6000) {
  const [typeWriterText, setTypeWriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (!isDeleting) {
      // Typing effect
      if (index < text.length) {
        typingInterval = setTimeout(() => {
          setTypeWriterText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Once typing is done, wait before deleting
        setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      // Deleting effect
      if (index > 0) {
        typingInterval = setTimeout(() => {
          setTypeWriterText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, speed);
      } else {
        // Once deletion is done, restart typing
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(typingInterval);
  }, [index, isDeleting, text, speed, pause]);

  return typeWriterText;
}
