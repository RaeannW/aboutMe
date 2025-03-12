import { useEffect, useState } from "react";

export default function TypedBanner() {
  const [loop, setLoop] = useState(0);
  const wordsToLoop = ["Blogger", "Developer", "Designer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  //how fast btwn words
  const delay = 1000;
  //how fast btwn letters
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loop % wordsToLoop.length;
    let fullText = wordsToLoop[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(delay);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
      setDelta(500);
    }
  };

  return (
    <>
    <div className="h-[300px]">
      <h1 className="p-12 text-6xl font-primary text-[#3D2C22]">{text}</h1>
      </div>
    </>
  );
}
