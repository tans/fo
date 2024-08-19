"use client";

import { Howl, Howler } from "howler";
import { useEffect, useState } from "react";

import { Lrc } from "react-lrc";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";

let lrc = `[00:00.550]《般若波罗蜜多心经》
[00:15.550] 观自在菩萨
[00:17.590] 行深般若波罗蜜多时
[00:21.490] 照见五蕴皆空
[00:24.280] 度一切苦厄
[00:26.520] 舍利子
[00:27.920] 色不异空
[00:29.811] 空不异色
[00:31.430] 色即是空
[00:33.430] 空即是色
[00:35.050] 受想行识
[00:36.970] 亦复如是
[00:38.950] 舍利子
[00:40.070] 是诸法空相
[00:42.340] 不生不灭
[00:44.180] 不垢不净
[00:46.110] 不增不减
[00:48.031] 是故空中无色
[00:50.440] 无受想行识
[00:52.600] 无眼耳鼻舌身意
[00:55.900] 无色声香味触法
[00:59.250] 无眼界
[01:00.690] 乃至无意识界
[01:03.380] 无无明
[01:04.760] 亦无无明尽
[01:06.900] 乃至无老死
[01:09.360] 亦无老死尽
[01:11.320] 无苦集灭道
[01:13.700] 无智亦无得
[01:16.000] 以无所得故
[01:18.470] 菩提萨埵
[01:20.170] 依般若波罗蜜多故
[01:23.840] 心无挂碍
[01:25.460] 无挂碍故
[01:27.400] 无有恐怖
[01:29.290] 远离颠倒梦想
[01:32.040] 究竟涅槃
[01:34.450] 三世诸佛
[01:35.250] 依般若波罗蜜多故
[01:39.050] 得阿耨多罗三藐三菩提
[01:43.830] 故知般若波罗蜜多
[01:47.470] 是大神咒
[01:49.390] 是大明咒
[01:51.080] 是无上咒
[01:52.980] 是无等等咒
[01:54.910] 能除一切苦
[01:57.450] 真实不虚
[01:59.360] 故说般若波罗蜜多咒
[02:03.430] 即说咒曰
[02:05.050] 揭谛揭谛
[02:06.900] 波罗揭谛
[02:08.860] 波罗僧揭谛
[02:11.070] 菩提萨婆诃 婆诃
[02:14.320] 般若波罗蜜多
[02:21.210] 观自在菩萨
[02:22.870] 行深般若波罗蜜多时
[02:27.000] 照见五蕴皆空
[02:29.720] 度一切苦厄
[02:31.870] 舍利子
[02:33.265] 色不异空
[02:35.210] 空不异色
[02:36.860] 色即是空
[02:38.770] 空即是色
[02:40.660] 受想行识
[02:42.360] 亦复如是
[02:44.260] 舍利子
[02:45.899] 是诸法空相
[02:47.870] 不生不灭
[02:49.760] 不垢不净
[02:51.419] 不增不减
[02:53.530] 是故空中无色
[02:56.010] 无受想行识
[02:58.480] 无眼耳鼻舌身意
[03:01.570] 无色声香味触法
[03:04.580] 无眼界
[03:06.220] 乃至无意识界
[03:08.730] 无无明
[03:10.150] 亦无无明尽
[03:12.480] 乃至无老死
[03:14.630] 亦无老死尽
[03:16.850] 无苦集灭道
[03:19.130] 无智亦无得
[03:21.400] 以无所得故
[03:23.840] 菩提萨埵
[03:25.480] 依般若波罗蜜多故
[03:29.211] 心无挂碍
[03:30.850] 无挂碍故
[03:32.650] 无有恐怖
[03:34.830] 远离颠倒梦想
[03:37.340] 究竟涅槃
[03:39.290] 三世诸佛
[03:40.890] 依般若波罗蜜多故
[03:44.560] 得阿耨多罗三藐三菩提
[03:49.190] 故知般若波罗蜜多
[03:52.420] 是大神咒
[03:54.590] 是大明咒
[03:56.600] 是无上咒
[03:58.290] 是无等等咒
[04:00.430] 能除一切苦
[04:02.860] 真实不虚
[04:04.740] 故说般若波罗蜜多咒
[04:08.370] 即说咒曰
[04:10.550] 揭谛揭谛
[04:12.530] 波罗揭谛
[04:14.210] 波罗僧揭谛
[04:16.400] 菩提萨婆诃 婆诃
[04:19.670] 般若波罗蜜多
[04:24.720] 观自在菩萨
[04:26.400] 行深般若波罗蜜多时
[04:30.830] 照见五蕴皆空
[04:33.300] 度一切苦厄
[04:35.210] 舍利子
[04:36.900] 色不异空
[04:38.800] 空不异色
[04:40.679] 色即是空
[04:42.360] 空即是色
[04:44.310] 受想行识
[04:46.220] 亦复如是
[04:47.910] 舍利子
[04:49.260] 是诸法空相
[04:51.460] 不生不灭
[04:53.370] 不垢不净
[04:55.360] 不增不减
[04:57.020] 是故空中无色
[04:59.700] 无受想行识
[05:01.920] 无眼耳鼻舌身意
[05:05.260] 无色声香味触法
[05:08.090] 无眼界
[05:09.750] 乃至无意识界
[05:12.230] 无无明
[05:13.600] 亦无无明尽
[05:16.081] 乃至无老死
[05:18.330] 亦无老死尽
[05:20.650] 无苦集灭道
[05:22.870] 无智亦无得
[05:25.350] 以无所得故
[05:27.510] 菩提萨埵
[05:29.140] 依般若波罗蜜多故
[05:32.780] 心无挂碍
[05:34.520] 无挂碍故
[05:36.440] 无有恐怖
[05:38.370] 远离颠倒梦想
[05:40.910] 究竟涅槃
[05:42.850] 三世诸佛
[05:44.540] 依般若波罗蜜多故
[05:48.390] 得阿耨多罗三藐三菩提
[05:52.740] 故知般若波罗蜜多
[05:56.310] 是大神咒
[05:58.550] 是大明咒
[06:00.170] 是无上咒
[06:01.960] 是无等等咒
[06:04.100] 能除一切苦
[06:06.581] 真实不虚
[06:08.560] 故说般若波罗蜜多咒
[06:12.190] 即说咒曰
[06:14.130] 揭谛揭谛
[06:16.040] 波罗揭谛
[06:17.720] 波罗僧揭谛
[06:20.210] 菩提萨婆诃 婆诃
[06:23.480] 般若波罗蜜多 婆诃
[06:26.870] 般若波罗蜜多 婆诃
[06:30.480] 般若波罗蜜多`;

export default function () {
  let [sound, setSound] = useState("");
  let [playing, setPlaying] = useState(false);
  let [currentMillisecond, setCM] = useState(0);
  useEffect(function () {
    if (sound) {
      return;
    }
    let s = new Howl({
      src: ["/mp3/xinjing.mp3"],
      loop: true,
      html5: true,
    });
    setSound(s);
  }, []);
  if (typeof window !== "undefined") {
    setInterval(function () {
      console.log("-");
      if (sound) {
        let d = sound.seek();
        setCM(d * 1000);
      }
    }, 200);
  }

  function lineRenderer(props) {
    if (props.active) {
      return <div>{props.line.content}</div>;
    }
  }

  return (
    <>
      <div className=" my-2 p-2">
        <div className="relative ">
          <div className="absolute top-20 w-full text-lg text-gray-900 font-black  text-center">
            <Lrc
              lrc={lrc}
              currentMillisecond={currentMillisecond}
              lineRenderer={lineRenderer}
            />
          </div>
          <img src="/img/04.jpg" className="w-full rounded-md opacity-70" />
        </div>
      </div>
      <div className="mb-2 text-center">
        {!playing && (
          <Button
            onClick={function () {
              sound.play();
              setPlaying(true);
            }}
          >
            <Play className="w-4 h-4 mr-2" /> 播放
          </Button>
        )}
        {playing && (
          <Button
            onClick={function () {
              sound.pause();
              setPlaying(false);
            }}
          >
            <Pause className="w-4 h-4 mr-2" />
            暂停
          </Button>
        )}
      </div>
    </>
  );
}
