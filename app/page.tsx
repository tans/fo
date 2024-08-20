import CopyButton from "@/components/app/copy-button";

export default function Home() {
  return (
    <>
      <img src="/img/sketch.jpg" className="w-96 mx-auto my-4" />
      <div className="text-center text-lg font-black text-gray-600">
        般若·田舍
      </div>

      <div className="text-center my-4">
        般若田舍道场, 在这里
        <br />
        <br /> 念经,参禅,修身,悟道
      </div>
      <div className="text-center my-8">
        <a href="/xinjing" className="underline font-black">
          《心经》
        </a>
      </div>
      <div className="text-center text-sm mt-20">
        分享和保存本站: https://fo.m.minapp.xin{" "}
        <CopyButton text="https://fo.m.minapp.xin">复制</CopyButton>
      </div>
    </>
  );
}
