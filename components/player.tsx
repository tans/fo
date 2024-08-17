"use client";
import { Howl, Howler } from "howler";
import { useEffect } from "react";
export default function () {
  let sound = null;
  useEffect(function () {
    if (sound) {
      return;
    }
    sound = new Howl({
      src: ["/mp3/xinjing.mp3"],
      autoplay: true,
      loop: true,
    });
    sound.play();
  }, []);
  return <></>;
}
