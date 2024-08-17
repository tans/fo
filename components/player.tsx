"use client";
import { Howl, Howler } from "howler";
import { useEffect, useState } from "react";
export default function () {
  let sound = null;

  let [playing, setPlaying] = useState(false);

  useEffect(function () {
    if (sound) {
      return;
    }
    sound = new Howl({
      src: ["/mp3/xinjing.mp3"],
      loop: true,
      html5: true,
    });
  }, []);
  return (
    <>
      {!playing && (
        <div
          onClick={() => {
            sound.play();
            setPlaying(true);
          }}
        >
          播放
        </div>
      )}
      {playing && (
        <div
          onClick={() => {
            sound.stop();
            setPlaying(false);
          }}
        >
          暂停
        </div>
      )}
    </>
  );
}
