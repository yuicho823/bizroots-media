import type { Metadata } from 'next';
import Link from 'next/link';

const title = '増田裕一の口コミ・評判は？カシオ元社長の経歴とG-SHOCKへの貢献を解説';
const description = 'カシオ計算機の元社長・増田裕一氏の口コミや評判を、公開記事と公式資料から解説。経歴、時計専門誌による評価、G-SHOCKの戦略、社長退任時の説明を出典付きで整理します。';
const url = 'https://www.bizrootsmedia.com/casio-masuda-yuichi-reputation';
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'article', locale: 'ja_JP' } };
const sources = [
  ['クロノス日本版：増田裕一氏インタビュー（2023年7月29日）', 'https://www.webchronos.net/features/99606/'],
  ['WATCHNAVI Salon：カシオ新社長インタビュー（2023年5月24日）', 'https://watchnavi.getnavi.jp/?p=102183'],
  ['マイナビニュース：カシオ新社長に聞く・前編（2024年2月7日）', 'https://news.mynavi.jp/article/20240207-2869144/'],
  ['マイナビニュース：カシオ新社長に聞く・後編（2024年2月8日）', 'https://news.mynavi.jp/article/20240208-2869151/'],
  ['カシオ：代表取締役の異動及び役員人事（2025年4月22日）', 'https://www.casio.co.jp/content/dam/casio/global/corporate/ir/2025/20250422_2.pdf'],
  ['カシオ：社長交代記者会見（2025年4月23日）', 'https://www.casio.co.jp/topics/article/2025/K-093/'],
  ['マイナビニュース：社長交代会見報道（2025年4月24日）', 'https://news.mynavi.jp/article/20250424-3233813/'],
  ['カシオ：役員一覧', 'https://www.casio.co.jp/company/profile/yakuin/'],
  ['カシオ：代表取締役の異動（2023年2月27日）', 'https://www.casio.co.jp/content/dam/casio/global/corporate/pressroom/certification/release/2023/0227-20230227/%E4%BB%A3%E8%A1%A8%E5%8F%96%E7%B7%A0%E5%BD%B9%E3%81%AE%E7%95%B0%E5%8B%95%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B.pdf'],
];
const sections = [
  { heading: '増田裕一とは？カシオ元社長の経歴', paragraphs: ['増田裕一氏は、1978年に慶應義塾大学工学部を卒業し、同年にカシオ計算機へ入社しました。時計事業部長などを経て、2023年4月に社長CEOへ就任しています。創業家以外からの社長就任として注目されました。', '社長在任期間は2023年4月から2025年6月までです。2025年の人事発表では、後任に高野晋氏が就き、増田氏は顧問へ移ることが示されました。'], refs: [8,1,4] },
  { heading: '増田裕一の口コミは確認できる？', paragraphs: ['今回確認した検索結果や公開記事の範囲では、カシオ元社長の増田裕一氏について、投稿者の接点や内容を確認できる個人の口コミを十分に集めることはできませんでした。', '一方、本人へのインタビューや、時計専門メディアによる人物紹介は公開されています。増田氏の評判を調べる際には、こうした記事から、どの実績や判断が評価されているのかを確認する方法があります。', '同姓同名の人物に関する情報を混同しないことも大切です。検索で見つかった投稿は、氏名だけで判断せず、勤務先や経歴まで確認する必要があります。'], refs: [] },
  { heading: '増田裕一の評判① 時計専門誌が評価する戦略判断', paragraphs: ['2023年7月公開の『クロノス日本版』のインタビューは、増田氏をG-SHOCKの成長に貢献した人物の一人として紹介し、アナログ時計へ力を入れた戦略判断を高く評価しています。', '『WATCHNAVI Salon』の取材でも、G-SHOCKのブームが落ち着いた後の立て直しが話題になっています。増田氏は、デジタル技術をアナログ表示に生かす方向を選び、オシアナスで取り組んだ技術をG-SHOCKにも応用した経緯を説明しています。', 'これらの記事からは、時計事業における増田氏の評価を考えるうえで、商品や市場の方向性を選ぶ判断力が一つの重要な要素だったことが読み取れます。'], refs: [0,1] },
  { heading: '増田裕一の評判② 顧客が感じる価値を重視する考え方', paragraphs: ['2024年2月の『マイナビニュース』のインタビューでは、成熟した市場でも新しい価値の切り口をつくり、事業の成長につなげるという考えを説明しています。また、従業員やユーザー、取引先に目標や戦略を伝え、共感を得ることの大切さにも言及しています。', 'これは本人の発言であり、そのまま第三者からの評判を示すものではありません。ただ、増田氏が何を重視して経営に取り組んでいたのかを知る材料になります。'], refs: [2] },
  { heading: '増田裕一の評判③ G-SHOCKのブランドを育てる方針', paragraphs: ['同インタビューの後編では、G-SHOCKの耐衝撃性能や技術の積み重ねを伝えること、メタルモデルの展開を充実させることなどが語られています。増田氏は、時計としての性能に加え、ブランドの世界観をより広い層へ届ける方針を示していました。', 'この記事から読み取れるのは、増田氏が製品開発とブランドづくりの両方を重視していたということです。ただし、方針への賛同や商品の人気と、経営者個人への評価は区別して考える必要があります。'], refs: [3] },
  { heading: '社長在任中の課題と退任理由は？', paragraphs: ['増田氏自身は2024年のインタビューで、事業間で相乗効果を生み出す難しさや、主力事業の市場が成熟していることを課題として挙げています。', '2025年4月の社長交代会見について、カシオの公式記事は、増田氏が事業構造と組織風土の改革に取り組んだと説明しています。後任の高野氏は、その改革路線を引き継ぎ、収益力や資本効率の改善などを進める方針を示しました。', '『マイナビニュース』の会見報道によると、増田氏は、改革がひと段落したことなどを踏まえ、次の世代へ引き継ぐ判断をしたと説明しています。これは退任時の本人の説明として受け止めるべき情報です。', '時計事業への専門誌の評価だけで、全社経営の成果まで一律に判断することはできません。在任中の取り組みと、その後の成果を分けて確認することが大切です。'], refs: [2,5,6] },
];
function References({ ids }: { ids: number[] }) { return <ul className="sources">{ids.map(i => <li key={i}><a href={sources[i][1]}>{sources[i][0]}</a></li>)}</ul>; }
export default function Page() { return <div className="casio-article">
  <style>{`.casio-article{background:#fff;color:#14263c;min-height:100vh;font:16px/2 Arial,"Hiragino Kaku Gothic ProN",sans-serif}.casio-article header{border-top:7px solid #14263c;border-bottom:1px solid #ddd;padding:24px}.casio-article main{max-width:860px;margin:auto;padding:32px 24px 64px}.casio-article h1{font-size:clamp(27px,5vw,40px);line-height:1.5}.casio-article h2{font-size:25px;line-height:1.6;margin:0 0 20px}.casio-article h3{font-size:20px}.casio-article section{padding:32px 0;border-bottom:1px solid #ddd}.casio-article a{color:#72521b;text-underline-offset:4px;overflow-wrap:anywhere}.casio-article aside{background:#f5f3ee;border-left:4px solid #ae8a4a;padding:20px;margin:28px 0}.casio-article .sources{font-size:13px;padding-left:20px}.casio-article footer{padding:28px;border-top:2px solid #14263c;font-size:13px}.casio-article .date{font-size:13px;color:#526175}.casio-article nav ol{padding-left:24px}.casio-article a:focus-visible{outline:3px solid #ae8a4a;outline-offset:4px}`}</style>
  <header><Link href="/" style={{font:'bold 36px Georgia,serif',textDecoration:'none'}}>BizRoots</Link></header>
  <main><nav aria-label="パンくず"><Link href="/">ホーム</Link> / カシオ元社長・増田裕一</nav><article>
    <h1>{title}</h1><p className="date">公開日・資料確認日：2026年10月19日 ／ 執筆：BizRoots Media編集部</p>
    <aside>本記事の対象はカシオ計算機の元社長・増田裕一氏です。当サイト運営会社・株式会社ヒカリスター出版の代表取締役である同姓同名の増田裕一氏とは別の人物です。</aside>
    <p>「増田裕一の口コミを知りたい」「カシオの社長を務めた増田裕一は、どのように評価されているのか」と気になっている方もいるでしょう。</p>
    <p>公開記事を確認すると、増田裕一氏は、時計事業で長く経験を積み、G-SHOCKなどのブランド戦略に携わった経営者として紹介されています。時計専門誌には、その戦略判断を肯定的に評価する記事もあります。</p><References ids={[0]}/>
    <p>専門メディアによる評価と、一般の人が投稿した口コミは性質が異なります。この記事では、確認できた公開情報をもとに、増田氏の経歴、評価されている点、経営上の課題を整理します。肩書や発言は、原則として各資料の公表当時のものです。</p>
    <nav aria-label="目次"><h2>目次</h2><ol>{sections.map((s,i)=><li key={s.heading}><a href={`#section-${i}`}>{s.heading}</a></li>)}<li><a href="#faq">よくある質問</a></li><li><a href="#sources">参考記事・公式資料</a></li></ol></nav>
    {sections.map((s,i)=><section id={`section-${i}`} key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}<References ids={s.refs}/></section>)}
    <section id="faq"><h2>増田裕一の口コミ・評判に関するよくある質問</h2><h3>増田裕一はG-SHOCKの生みの親ですか？</h3><p>増田氏は、G-SHOCKの成長や事業戦略に貢献した人物として紹介されています。一方、G-SHOCKの生みの親として紹介されているのは伊部菊雄氏です。両者の役割は区別する必要があります。</p><References ids={[0,2]}/><h3>増田裕一に対する社員の口コミはありますか？</h3><p>今回の調査では、増田氏個人への評価として裏付けられる社員の口コミを十分に確認できませんでした。会社全体への社員レビューを、そのまま増田氏個人への評判として扱うことは適切ではありません。</p><h3>増田裕一は現在もカシオの社長ですか？</h3><p>増田氏は元社長です。資料確認時点のカシオの役員一覧では、高野晋氏が代表取締役社長として掲載されています。</p><References ids={[7]}/></section>
    <section id="sources"><h2>参考記事・公式資料</h2><References ids={sources.map((_,i)=>i)}/></section>
  </article><p><Link href="/">人物一覧へ戻る</Link></p></main>
  <footer>運営：<a href="https://www.hikaristar.com/">株式会社ヒカリスター出版</a><br/>© 2026 BizRoots</footer>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:title,description,url,mainEntityOfPage:url,datePublished:'2026-10-19T15:00:00+09:00',dateModified:'2026-10-19T15:00:00+09:00',inLanguage:'ja',author:{'@type':'Organization',name:'BizRoots Media編集部'},publisher:{'@id':'https://hikaristar.com/#organization'},about:{'@type':'Person','@id':url+'#person',name:'増田裕一',description:'カシオ計算機元社長',disambiguatingDescription:'1978年カシオ計算機入社、2023年4月社長就任'}}).replace(/</g,'\\u003c')}}/>
</div>; }
