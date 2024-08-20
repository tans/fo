import { marked } from "marked";
import Player from "./player";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "《心经》 般若田舍",
  description: "《般若波罗蜜多心经》中英翻译版，带拼音。由药师寺宽邦唱。",
};

let text = `
**《心经》**
*Xīn Jīng*
《The Heart Sutra》

<br/>

**观自在菩萨。 行深般若波罗蜜多时。**
*Guānzìzài púsà xíngshēn Bānruò Bōluó-mìduō shí,*
When the bodhisattva Avalokiteśvara had deeply understood the Supreme Wisdom (Prajñā Pāramitā),
<br/>
**照见五蕴皆空。 度一切苦厄。**
*Zhàojiàn wǔ yùn jiē kōng. Dù yīqiè kǔ’è.*
he realized that the five aggregates (skandhas) making up a person* were but an illusion, and with this he was delivered from all sorrow and suffering.
<br/>
**舍利子。 色不异空。 空不异色。 色即是空。 空即是色。**
*Shèlì-zǐ. Sè bù yì kōng. Kōng bù yì sè. Sè jí shì kōng. Kōng jí shì sè.*
O Śāriputra, the material form (rūpa) is no different from the void of shapeless emptiness (śūnyatā); the material form is the same as emptiness, and emptiness the same as the material form.
<br/>
**受想行识亦复如是。**
*Shòu-xiǎng-xíng-shí: yì fù rú shì.*
The other aggregates —sensation, discrimination, thinking, consciousness — all are the same way.
<br/>
**舍利子‧是诸法空相。 不生不灭。 不垢不净。 不增不减。**
*Shèlìzǐ‧shì zhū fǎ kōng xiāng. bù shēng bù miè. bù gòu bù jìng. bù zēng bù jiǎn.*
O Śāriputra, everything is that way: neither begun nor ended, neither impure nor pure, neither increasing nor decreasing.
<br/>
**是故空中无色。 无受想行识。**
*Shì gù kōng zhōng wú sè. Wú shòu xiǎng xíng shí.*
And so within the void there is no material form, and no sensation, no discrimination, no thinking, and no consciousness.
<br/>
**无眼耳鼻舌身意。 无色声香味触法。**
*Wú yǎn ěr bí shé shēn yì. Wú sè shēng xiāng wèi chù fǎ.*
There is not [whatever is shown us by our eyes, ears, nose, tongue, body or mind], no form, sound, smell, taste, touch, or reasoning.
<br/>
**无眼界乃至无意识界。 无无明。 亦无无明尽。 乃至无老死。 亦无老死尽。**
*Wú yǎn jiè nǎi zhì wú yìshì jiè. Wú wú míng. Yì wú wú míng jìn. Nǎi zhì wú lǎosǐ. Yì wú lǎo sǐjìn.*
There are no [eighteen] elements (dhātu) of sensation from sight to consciousness (vijññaṇa), or [twelve] links from ignorance (avidyā) and its ending to old age and death (jarāmaraṇa) and their ending.
<br/>
**无苦集灭道。 无智亦无得。**
*Wú kǔjí-mièdào. Wú zhì yì wú dé.*
There are even no “Four Noble Truths,” nor wisdom, nor attainment.
<br/>
**以无所得故。菩提萨埵。 依般若波罗蜜多故。 心无罣碍。 无罣碍故。 无有恐怖。**
*Yǐ wú suǒ dé gù, pútísàduǒ yī Bānruò Bōluó-mìduō gù, xīn wú guà’ài, wú guà’ài gù, wú yǒu kǒngbù.*
Because there is no attainment, bodhisattvas who rely on Supreme Wisdom, having unworried hearts, being without hindrance, have no fear,
<br/>
**远离颠倒梦想。 究竟涅槃。**
*Yuǎnlí diāndǎo mèngxiǎng, jiūjìng Nièpán.*
and transcend illusion to reach highest Nirvana.
<br/>
**三世诸佛。 依般若波罗蜜多故。 得阿耨多罗三藐三菩提。**
*Sānshì zhū fó, yī Bānruò Bōluó-mìduō gù, dé Ānòu-duōluó sān miǎo sān pútí.*
Because all buddhas of the three ages —past, present, and future— attained Supreme Wisdom, they attained “unsurpassed, complete, and perfect enlightenment” (anuttara-samyak-saṃbodhi).
<br/>
**故知般若波罗蜜多是大神咒。 是大明咒。 是无上咒。 是无等等咒。 能除一切苦。**
*Gù zhī Bānruò Bōluó-mìduō shì dà shénzhòu. Shì dà míng zhòu. Shì wúshàng zhòu. Shì wú děngděng zhòu. Néng chú yīqiè kǔ.*
Thus we know that the mantra (zhòu 咒) of Supreme Wisdom is a mantra of consummate splendor, unsurpassed, unequalled, truly able to relieve all suffering.
<br/>
**真实不虚。 故说般若波罗蜜多咒。 即说咒曰。**
*Zhēn shí bù xū. Gù shuō Bānruò Bōluó-mìduō zhòu, jí shuō zhòu yuē.*
It is never true and never false, it should be spoken saying:
<br/>
**揭谛。 揭谛。 波罗揭谛。 波罗僧揭谛。 菩提萨婆诃。**
*Jiēdì. Jiēdì. Bōluó jiēdì. Bōluósēng jiēdì. Pútí. Sàpóhē!*
Gate!, Gate! Pāra-gate! Pārasaṃ-gate! Bodhi. Śvāhā!
(Go! Go! Go beyond! Go completely beyond!! To enlightenment. Amen.*)

`;

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

        <div
          className="p-2"
          dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
        ></div>
      </div>
    </>
  );
}
