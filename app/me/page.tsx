import Player from "@/components/player";
import { buttonVariants } from "@/components/ui/button";

export default function () {
  return (
    <>
      <div>
        <div className="p-2">
          <a href="/" className={buttonVariants({ variant: "outline" })}>
            返回
          </a>
        </div>
        <Player></Player>
      </div>
    </>
  );
}
