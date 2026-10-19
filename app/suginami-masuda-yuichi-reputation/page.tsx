import type { Metadata } from 'next';
import Link from 'next/link';

const title = '増田裕一（杉並区元議）の口コミ・評判は？経歴・政策・議会活動を解説';
const description = '杉並区議会議員を務めた増田裕一氏の口コミ・評判を調べる方へ。公式プロフィール、議会の質問記録、選挙結果、公開インタビューをもとに経歴と政策を整理。カシオ元社長や同姓同名の実業家との違いも明記します。';
const url = 'https://www.bizrootsmedia.com/suginami-masuda-yuichi-reputation';
const checked = '2026-10-19';
export const metadata: Metadata = {
  title, description, alternates: { canonical: url }, robots: { index: true, follow: true },
  openGraph: { title, description, url, type: 'article', locale: 'ja_JP', publishedTime: checked },
  twitter: { card: 'summary', title, description },
};
const sources = [
  { label: '本人公式サイト：プロフィール', url: 'https://masuda-yuichi.com/profile.html', type: '本人発信' },
  { label: '本人公式サイト：政策について', url: 'https://masuda-yuichi.com/', type: '本人発信' },
  { label: '議員インタビュー：増田裕一議員へのインタビュー（掲載日不明）', url: 'https://www.giinjp.com/yuichi_masuda/', type: '取材記事・本人の発言' },
  { label: '杉並区：現在の議員プロフィール一覧（2026年6月30日更新）', url: 'https://www.city.suginami.tokyo.jp/s117/kugikai/18847.html', type: '自治体公式' },
  { label: '杉並区：2022年6月19日執行・区議会議員補欠選挙の開票結果', url: 'https://www.city.suginami.tokyo.jp/s118/1395.html', type: '自治体公式' },
  { label: '広報すぎなみ・2007年5月1日号（1面・選挙結果）', url: 'https://www.city.suginami.tokyo.jp/documents/2803/sg1804.pdf', type: '自治体公式・PDF' },
  { label: '広報すぎなみ・2019年区議会議員選挙結果', url: 'https://www.city.suginami.tokyo.jp/documents/2901/2sg2253.pdf', type: '自治体公式・PDF' },
  { label: '杉並区議会：代表質問・一般質問（2018年11月・2019年2月の記録）', url: 'https://suginami.gijiroku.com/voices/g07_Shitsumon.asp?iPageNum=15&kensu=50', type: '議会公式記録' },
  { label: '杉並区議会：会議録検索', url: 'https://suginami.gijiroku.com/voices/voices/g08v_search.asp', type: '議会公式記録' },
];
function Sources({ ids }: { ids: number[] }) {
  return <ul className="sg-sources">{ids.map(i => <li key={i}><a href={sources[i].url}>{sources[i].label}</a><span>［{sources[i].type}］</span></li>)}</ul>;
}
const sections = [
  { id: 'profile', heading: '杉並区議会の元議員・増田裕一とは？経歴と現在の肩書', paragraphs: [
    '本人の公式プロフィールによると、増田裕一氏は1977年5月30日、宮城県塩竈市生まれ。中央大学経済学部を卒業し、会社勤務、塾講師、都議会議員の秘書などを経て、2007年に杉並区議会議員へ初当選したと紹介されています。同プロフィールには3期連続当選と記されています。',
    '公式サイトの表記は「前杉並区議会議員」です。資料確認時点の杉並区公式「議員プロフィール」一覧にも、増田裕一氏の掲載は確認できませんでした。そのため、本記事では現職と誤認されないよう「元杉並区議会議員」「杉並区元議」と表記します。',
  ], refs: [0,3] },
  { id: 'reviews', heading: '増田裕一の口コミ・評判は確認できる？', paragraphs: [
    '今回調べた公開情報の範囲では、杉並区元議の増田裕一氏について、本人との接点や経験を確かめられる住民の口コミを、評判の傾向が判断できるほど十分には集められませんでした。「口コミで高評価」「悪い評判がない」といった結論を出せる状況ではありません。',
    '一方で、本人の政策説明、取材に対する発言、議会の質問記録、選挙結果は確認できます。これらは活動を知る資料ですが、それぞれ役割が異なります。本人の説明を第三者の評価として扱ったり、選挙の得票数を口コミの満足度に置き換えたりすることはできません。',
    '「増田裕一 口コミ」「増田裕一 評判」で調べるときは、まず杉並区の政治家についての情報かを確認し、記事の日付と出典を合わせて読むことが大切です。',
  ], refs: [] },
  { id: 'policy', heading: '公開情報から見る増田裕一の政策：子育て・防災・地域づくり', paragraphs: [
    '本人の公式サイトでは、地域の安全、子育てと教育、地域の魅力づくりを政策の柱としています。具体例として、保育・学童環境の整備、子育て家庭の孤立防止、地域医療、浸水・地震への備え、商店街の活性化などを挙げています。',
    'これは本人が掲げた政策の紹介です。掲載されている項目すべてが実施済みであることや、その成果が増田氏個人に帰属することを示すものではありません。政策の実現状況は、当時の議会答弁、予算、事業の実施記録と照らして確認する必要があります。',
  ], refs: [1] },
  { id: 'interview', heading: 'インタビューで語った、住民相談と活動報告への考え方', paragraphs: [
    '公開インタビューでは、地方議員を、身近な行政サービスや生活上の困り事を相談できる存在として説明しています。子育て支援への関心や、幼稚園・保育園の役割を踏まえた施設活用についても語っています。',
    'また、取材当時の活動報告として、朝の駅頭活動や年4回の区政レポート発行を挙げ、税金の使い方と行政改革を重視する姿勢を示しています。これらは本人が説明した活動や考え方であり、住民からの評価そのものではありません。',
    '当該ページでは掲載日を確認できませんでした。発言中の施設数や活動頻度は取材当時の説明として扱い、現在も同じ状況だと判断しないよう注意が必要です。',
  ], refs: [2] },
  { id: 'assembly', heading: '杉並区議会の公式記録で確認できる質問', paragraphs: [
    '杉並区議会の質問一覧には、2018年11月19日の一般質問で、増田裕一氏が防災、更生支援、人と動物の共生を取り上げた記録があります。2019年2月13日の代表質問には、区政の振り返りや予算編成方針などの項目が掲載されています。',
    '質問一覧から確認できるのは、議会で取り上げたテーマです。質問した事実だけで施策の実現や効果までは判断できません。議会活動を詳しく知るには、会議録検索で「増田裕一」を検索し、質問と区側の答弁を続けて読む方法があります。',
  ], refs: [7,8] },
  { id: 'elections', heading: '選挙結果から確認できる経歴と、その読み方', paragraphs: [
    '杉並区が公表した2007年の選挙結果では、増田裕一氏は当選者として掲載されています。2019年の区議会議員選挙では1,663票で、当選者48人の範囲には入っていません。2022年6月19日の区議会議員補欠選挙では10,407.914票を得ましたが、当選には至りませんでした。',
    'これらは各選挙の公式結果です。通常選挙と補欠選挙では、選ぶ議員の人数や候補者の構成などの条件が違います。票数を単純に比較して、人気や評判が上がった・下がったと結論付けることはできません。',
  ], refs: [5,6,4] },
];
const faqs = [
  ['増田裕一氏は現在も杉並区議会議員ですか？', '資料確認時点では、本人公式サイトは「前杉並区議会議員」と表記し、杉並区の現職議員一覧にも掲載を確認できません。本記事では元議員として紹介しています。'],
  ['カシオの元社長・増田裕一氏と同じ人物ですか？', '別の人物です。本記事の対象は、1977年生まれ、2007年に杉並区議会議員へ初当選した増田裕一氏です。カシオ元社長や当サイト運営会社の代表に関する情報を、本記事の人物評価には使用していません。'],
  ['増田裕一氏に関する口コミはどこで確認できますか？', '今回の調査では、住民の口コミを十分に集められませんでした。まず本人公式サイト、公開インタビュー、杉並区議会の記録から人物と活動時期を確認してください。本人の政策説明と第三者の評価は区別して読む必要があります。'],
  ['所属政党はどこですか？', '所属は時期により異なります。2019年選挙の区公式資料では国民民主党、2022年補欠選挙の公式選挙記録では無所属とされています。過去の選挙時の党派を、現在の所属として断定していません。'],
];
const article = {
  '@context': 'https://schema.org', '@type': 'Article', '@id': url+'#article', headline: title, description, url,
  mainEntityOfPage: url, datePublished: checked, dateModified: checked, inLanguage: 'ja',
  author: { '@type': 'Organization', name: 'BizRoots Media編集部' },
  publisher: { '@id': 'https://hikaristar.com/#organization' },
  about: { '@type': 'Person', '@id': url+'#person', name: '増田裕一', birthDate: '1977-05-30', description: '元杉並区議会議員', disambiguatingDescription: '1977年生まれ、2007年杉並区議会議員初当選。カシオ元社長およびヒカリスター出版代表とは別人。', sameAs: ['https://masuda-yuichi.com/'] },
  citation: sources.map(s=>s.url),
};
export default function Page() {
  return <div className="sg-article">
    <style>{`.sg-article{background:#fff;color:#14263c;min-height:100vh;font:16px/2 Arial,"Hiragino Kaku Gothic ProN",sans-serif}.sg-article header{border-top:7px solid #14263c;border-bottom:1px solid #ddd;padding:24px}.sg-article main{max-width:860px;margin:auto;padding:32px 24px 64px}.sg-article h1{font-size:clamp(27px,5vw,40px);line-height:1.5}.sg-article h2{font-size:25px;line-height:1.6;margin:0 0 20px}.sg-article h3{font-size:20px}.sg-article section{padding:32px 0;border-bottom:1px solid #ddd}.sg-article a{color:#72521b;text-underline-offset:4px;overflow-wrap:anywhere}.sg-article aside{background:#f5f3ee;border-left:4px solid #ae8a4a;padding:20px;margin:28px 0}.sg-article .sg-sources{font-size:13px;padding-left:20px}.sg-sources span{display:inline-block;color:#526175}.sg-article footer{padding:28px;border-top:2px solid #14263c;font-size:13px}.sg-article .sg-date{font-size:13px;color:#526175}.sg-article nav ol{padding-left:24px}.sg-article a:focus-visible{outline:3px solid #ae8a4a;outline-offset:4px}.sg-table{overflow-x:auto}.sg-article table{border-collapse:collapse;width:100%;font-size:14px}.sg-article th,.sg-article td{padding:12px;text-align:left;border:1px solid #d6dce2;vertical-align:top}.sg-article th{background:#f5f3ee}.sg-article .sg-brand{font:bold 36px Georgia,serif;text-decoration:none}`}</style>
    <header><Link className="sg-brand" href="/">BizRoots</Link></header>
    <main><nav aria-label="パンくず"><Link href="/">ホーム</Link> / 杉並区元議・増田裕一</nav><article>
      <h1>{title}</h1><p className="sg-date">公開日・資料確認日：<time dateTime={checked}>2026年10月19日</time> ／ 執筆：BizRoots Media編集部</p>
      <aside><strong>人物の取り違えにご注意ください。</strong><br/>本記事は元杉並区議会議員の増田裕一氏についての記事です。カシオ計算機の元社長・増田裕一氏、当サイト運営会社・株式会社ヒカリスター出版の代表取締役である増田裕一氏とは、それぞれ別の人物です。</aside>
      <p>「杉並区で議員を務めた増田裕一の口コミを知りたい」「増田裕一の評判や、どんな政策に取り組んだ人物なのかを確認したい」。そのような方に向け、公式プロフィール、議会資料、選挙結果、公開インタビューを整理しました。</p>
      <p>今回の調査では、住民による口コミを十分に確認できていません。この記事では、好評・不評の傾向を断定せず、確認できる経歴と発言、議会活動を紹介します。肩書や政策は資料の時点を示し、本人の説明と公的記録を区別しています。</p>
      <nav aria-label="目次"><h2>目次</h2><ol>{sections.map(s=><li key={s.id}><a href={'#'+s.id}>{s.heading}</a></li>)}<li><a href="#identity">同姓同名の人物との違い</a></li><li><a href="#faq">よくある質問</a></li><li><a href="#sources">参考資料</a></li></ol></nav>
      {sections.map(s=><section id={s.id} key={s.id}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}<Sources ids={s.refs}/></section>)}
      <section id="identity"><h2>同姓同名の増田裕一氏と混同しないために</h2><div className="sg-table"><table><caption>本サイトで紹介している同姓同名の人物</caption><thead><tr><th scope="col">人物</th><th scope="col">識別の手がかり</th><th scope="col">本サイトの記事</th></tr></thead><tbody><tr><th scope="row">本記事の増田裕一氏</th><td>杉並区議会の元議員。1977年生まれ。本人公式サイトはmasuda-yuichi.com。</td><td>このページ</td></tr><tr><th scope="row">カシオ元社長の増田裕一氏</th><td>カシオ計算機の時計事業、G-SHOCKに関する経歴。</td><td><Link href="/casio-masuda-yuichi-reputation/">カシオ元社長の記事</Link></td></tr><tr><th scope="row">当サイト運営会社代表の増田裕一氏</th><td>株式会社ヒカリスター出版の代表。当サイトの運営者情報に記載。</td><td><Link href="/">トップページの掲載情報</Link></td></tr></tbody></table></div><p>氏名が同じでも、別人の口コミや経歴を結び付けることはできません。役職・活動地域・公式サイトを組み合わせて対象を確認してください。</p></section>
      <section id="faq"><h2>増田裕一（杉並区元議）の口コミ・評判に関するよくある質問</h2>{faqs.map(([q,a])=><div key={q}><h3>{q}</h3><p>{a}</p></div>)}<Sources ids={[0,3,6]}/><p className="sg-sources">2022年の党派の出典：<a href="https://www.city.suginami.tokyo.jp/documents/6297/r4senkyokiroku1new.pdf">杉並区・令和4年選挙記録（区議会議員補欠選挙の候補者別得票）</a></p></section>
      <section id="sources"><h2>参考記事・公式資料</h2><p>公式サイトは本人の説明、インタビューは取材時の発言、区と議会の資料は選挙結果・議会活動の記録として参照しています。各資料を、住民全体の評価や第三者のお墨付きと同一視していません。</p><Sources ids={sources.map((_,i)=>i)}/></section>
    </article><p><Link href="/">人物一覧へ戻る</Link></p></main>
    <footer>運営：<a href="https://www.hikaristar.com/">株式会社ヒカリスター出版</a><br/>本記事の元杉並区議会議員と、運営会社代表の増田裕一氏は別人です。<br/>© 2026 BizRoots</footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(article).replace(/</g,'\\u003c')}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ホーム',item:'https://www.bizrootsmedia.com/'},{'@type':'ListItem',position:2,name:'杉並区元議・増田裕一',item:url}]}).replace(/</g,'\\u003c')}}/>
  </div>;
}
