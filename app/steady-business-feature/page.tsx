import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "派手さより、続く強さ。年商10億円前後の堅実派実業家4人 | BizRoots",
  description:
    "IoTで町工場を再生、活版印刷を直販化、ニッチECの在庫回転を改善、専門工事会社をホワイト化。年商10億円前後の実業家4人に学ぶ堅実経営の実践。",
  alternates: { canonical: "https://www.bizrootsmedia.com/steady-business-feature" },
};

const stories = [
  {
    number: "01",
    category: "アトツギ製造業モデル",
    title: "創業115年の町工場をIoTで再生。泥臭い現場主義と手堅いデジタル化で年商10億円の壁を越える",
    person: "木幡 巌｜株式会社木幡計器製作所 代表取締役",
    lead: "既存のアナログ圧力計を生かし、針の動きを読み取る後付けセンサーを開発。設備を一斉に入れ替えず、目視点検の人手不足という顧客の課題に向き合った。",
    sections: [
      {
        heading: "現場の困りごとから、事業の形を見つける",
        body: "安価な海外製品の流入や工場の空洞化が進むなか、受託製造だけに頼る将来には危機感があったという木幡氏。高機能なデジタル圧力計の開発を試みたものの、大手メーカーとの競争に加え、顧客の現場では「アナログであること」自体が課題ではないと気づく。何百台ものメーターを毎日巡回して読む人手が足りない。そこに事業の糸口を見いだした。",
      },
      {
        heading: "今ある設備に後付けするIoT",
        body: "アナログ圧力計の前面に取り付ける小型センサーで針の動きを読み取り、無線でクラウドへ送信する。設備を廃棄せずに導入できるため初期投資を抑えやすく、高所や危険区域の点検巡回の削減にもつながる。粉塵やノイズのある顧客現場で、作業着を着て耐久性を確かめるPoCを重ねた。",
      },
      {
        heading: "粗利とキャッシュを守り、職人へ還元する",
        body: "開発費は安定した営業キャッシュフローの範囲で賄い、過剰な設備投資を避ける。売上高を追うだけではなく、粗利を確保し、社員に適正な給与を払い続けられるかを重視する。既存の技術や顧客との信用を生かし、顧客の現場と予算に合う解決策をつくることが、アトツギ経営の実務となっている。",
      },
    ],
    lessons: ["ゼロから始める前に、家業の技術や顧客関係に眠る価値を探す", "顧客の現場と導入予算を見て、無理のない提案にする", "粗利とキャッシュフローを管理し、利益を現場に還元する"],
  },
  {
    number: "02",
    category: "印刷・クラフト再生モデル",
    title: "下請け体質からの脱却。活版印刷の価値再定義と直販化で築く、ものづくり経営",
    person: "山添 亮輔｜株式会社山添（THE LETTER PRESS）代表取締役",
    lead: "価格競争に巻き込まれていた印刷会社が、活版ならではの凹凸や紙の手触りを価値に変え、顧客と直接つながる工房をつくった。",
    sections: [
      {
        heading: "効率の競争から、価値の伝え方を変える",
        body: "ペーパーレス化やネット印刷の普及で、従来の商業印刷は厳しい価格競争にさらされた。山添氏が注目したのは、デジタル印刷では出しにくい印刷面の凹凸、インクのかすれ、厚手の紙の風合い。均一さを競うのではなく、手作業が生む個性を求める顧客に向けて、活版印刷を再定義した。",
      },
      {
        heading: "工房を開き、顧客と職人をつなぐ",
        body: "ショールームを兼ねた工房では、顧客が紙を選び、職人とインクを調合し、印刷機を動かす体験を提供する。中間マージンを減らし、技術や制作工程を直接伝えることで適正な価格で受注する。納品物の質感や工房での体験が口コミにつながり、職人が顧客の反応を直接受け取る場にもなった。",
      },
      {
        heading: "クリエイティブを支える原価・在庫管理",
        body: "特殊紙の仕入れロット、インクのロス、職人の作業時間を記録して原価を把握。受注生産を基本にして過剰在庫を抑え、中古機械を整備して使う。直販で得た価格決定権と厳格な管理会計を両立させ、制作の自由と財務の安定を支えている。",
      },
    ],
    lessons: ["業界の当たり前を疑い、既存技術の別の価値を見つける", "顧客と直接つながる販売経路をつくり、適正価格を実現する", "原価・在庫・資金繰りを管理し、ものづくりを続ける"],
  },
  {
    number: "03",
    category: "ニッチEC・D2C実業モデル",
    title: "バズも巨額広告も追わない。在庫回転と物流の徹底管理でつくる堅実型EC",
    person: "水野 貴之｜専門資材・ニッチ日用品EC企業 創業者・代表取締役",
    lead: "職人や専門業者が繰り返し使う消耗部材に特化。派手な広告より、欠品を防ぎ、正確に早く届ける物流オペレーションを磨いた。",
    sections: [
      {
        heading: "トレンドより、繰り返し必要とされる商品",
        body: "一時的な流行商品は、広告獲得単価や売れ残りが経営を圧迫することがある。水野氏が扱うのは、現場で毎月消費され、切らすと仕事に支障が出る専門資材。目立つ商品ではなくても、安定した実需とリピートが見込める分野を選んだ。",
      },
      {
        heading: "倉庫の棚と出荷の確実性を磨く",
        body: "顧客が求めるのは、注文すれば必要な資材が確実に届くこと。バーコード管理や棚の配置、ピッキング動線を見直し、担当者の経験に頼りすぎず正確に出荷できる仕組みを整える。出荷ミスが顧客の現場を止める可能性を意識し、納期と誤配送防止を競争力にしている。",
      },
      {
        heading: "在庫を現金の滞留として見る",
        body: "需要予測と発注点を管理し、在庫回転日数を主要な指標に置く。メーカーとの直取引や小ロットの定期納品を組み合わせ、在庫が過剰にならないようにする。ルーティン業務を標準化・自動化し、少人数でもミスを個人の頑張りで埋めない運営を目指す。",
      },
    ],
    lessons: ["流行より、産業や生活に欠かせない消耗品に注目する", "広告に偏らず、納期・在庫・出荷精度を磨く", "在庫回転と手元資金を日々把握する"],
  },
  {
    number: "04",
    category: "専門工事・自社施工モデル",
    title: "下請け脱却とホワイト化で若手が集まる。直請け比率80％を実現した組織改革",
    person: "佐藤 健一｜地域密着型 建築・専門工事会社 代表取締役",
    lead: "地域向けの情報発信と自社施工体制を整え、顧客との直接取引を拡大。働き方や給与制度を変え、若手職人が長く働ける環境を築いた。",
    sections: [
      {
        heading: "専門知識を開示して、顧客の不安を減らす",
        body: "多重下請け構造のもとで、現場で働く職人に利益が届きにくい状況を変えるため、元請けへの依存を段階的に下げた。外壁塗装や屋根防水では、施主が施工品質を見分けにくい。塗料の耐用年数や下地処理、適正な平米単価などをWebで公開し、工程を写真で共有することで、地域の顧客から直接相談を受ける機会を増やした。",
      },
      {
        heading: "現場のふるまいも、施工品質の一部",
        body: "技術だけでなく、近隣への挨拶、作業後の清掃、分煙、進捗報告などを現場の標準にする。顧客や近隣住民が毎日目にする現場の様子が、会社への信頼につながり、紹介や問い合わせを生む営業の接点にもなる。",
      },
      {
        heading: "待遇改善を、品質と採用への投資にする",
        body: "直請け化で得た利益を、固定月給制、完全週休2日、社会保険、資格取得支援などの待遇改善に充てる。日給月給や休み返上を前提にしない環境を整え、若手が技術を身につけて定着する自社施工チームを育てる。働く人を支える仕組みが、施工品質と事業の継続性を支えている。",
      },
    ],
    lessons: ["情報発信で顧客と直接つながる", "技術とマナーを合わせてサービスとして届ける", "現場で働く人へ利益を還元し、技術を磨ける環境をつくる"],
  },
];

export default function SteadyBusinessFeaturePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#14263c]">
      <header className="border-t-[7px] border-[#14263c] border-b border-slate-300 bg-white">
        <div className="mx-auto flex max-w-5xl items-end justify-between gap-6 px-6 py-6">
          <Link href="/" className="font-serif text-4xl font-bold tracking-tight no-underline">Biz<span className="text-[#a57d39]">Roots</span></Link>
          <span className="text-xs tracking-[0.2em] text-slate-500">THE PEOPLE ISSUE / SPECIAL FEATURE</span>
        </div>
      </header>
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-14">
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#9c773b]">実業・堅実派経営者特集</p>
        <h1 className="max-w-4xl text-3xl font-bold leading-relaxed md:text-5xl">派手さより、続く強さ。<br />年商10億円前後を支える4つの実業モデル</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">資金調達や急成長だけが、事業の強さを測る物差しではありません。現場の困りごとに応え、既存の技術や顧客との関係を生かし、利益を働く人と事業に還元する。製造、印刷、EC、専門工事の4人の経営者から、堅実に続く会社をつくるための実践をたどります。</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {stories.map((story) => <a key={story.number} href={"#story-" + story.number} className="rounded-lg border border-slate-300 bg-white px-5 py-4 text-sm font-semibold no-underline transition hover:border-[#a57d39]"><span className="mr-3 font-serif text-[#a57d39]">{story.number}</span>{story.category}<span className="ml-2">↓</span></a>)}
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6">
        {stories.map((story) => (
          <article id={"story-" + story.number} key={story.number} className="mb-12 scroll-mt-8 border-t-4 border-[#14263c] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
            <p className="text-xs font-bold tracking-[0.2em] text-[#9c773b]">{story.number} / {story.category}</p>
            <h2 className="mt-3 text-2xl font-bold leading-relaxed md:text-3xl">{story.title}</h2>
            <p className="mt-4 text-sm font-semibold text-slate-500">{story.person}</p>
            <p className="mt-6 border-l-4 border-[#a57d39] pl-5 text-lg leading-8">{story.lead}</p>
            <div className="mt-8 space-y-8">
              {story.sections.map((section) => <section key={section.heading} className="border-t border-slate-200 pt-6"><h3 className="text-lg font-bold">{section.heading}</h3><p className="mt-3 leading-8 text-slate-700">{section.body}</p></section>)}
            </div>
            <section className="mt-8 rounded-lg bg-[#f3f3ef] p-6">
              <h3 className="font-bold">次世代の実業家へ｜3つの教訓</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7">{story.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol>
            </section>
          </article>
        ))}
      </div>
      <footer className="mt-16 border-t border-slate-300 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
          <p>BizRoots｜BUSINESS PEOPLE / EDITORIAL ARCHIVE</p>
          <p className="mt-2">掲載内容は提供原稿をもとに編集しています。プロフィール、数値、発言、会社情報は、各記事の掲載前に関係者・一次資料でご確認ください。</p>
          <p className="mt-3"><Link href="/" className="text-[#14263c] underline">人物録トップへ戻る</Link></p>
          <p className="mt-5 text-xs">© 2026 BizRoots</p>
        </div>
      </footer>
    </main>
  );
}
