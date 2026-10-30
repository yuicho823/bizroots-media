import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "増田裕一の口コミ・評判と経歴｜BizRoots Media",
  description:
    "増田裕一氏の口コミ・評判、経歴、実績を公開情報から検証。出版社代表としての出版・Web・AI支援、福祉法人の運営、名古屋市の指定記録を整理します。本人発信と第三者記事を区別し、口コミの限界や同姓同名の別人との混同、運営会社との関係も明示します。",
  alternates: { canonical: "https://www.bizrootsmedia.com/masuda-yuichi/" },
  openGraph: {
    title: "増田裕一の口コミ・評判と経歴｜BizRoots Media",
    description:
      "増田裕一氏の経歴・活動と、ネット上で確認できる口コミや評判を公開資料から整理します。",
    url: "https://www.bizrootsmedia.com/masuda-yuichi/",
    siteName: "BizRoots Media",
    locale: "ja_JP",
    type: "article",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "増田裕一の口コミ・評判は？経歴・実績を公開情報から検証",
  mainEntityOfPage: "https://www.bizrootsmedia.com/masuda-yuichi/",
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  inLanguage: "ja",
  author: { "@type": "Organization", name: "BizRoots Media編集部" },
  publisher: {
    "@type": "Organization",
    name: "株式会社ヒカリスター出版",
    url: "https://www.hikaristar.com/",
  },
};

const sources = [
  {
    href: "https://www.masudayuichi.jp/profile/",
    label: "増田裕一 公式プロフィール",
    note: "本人が公開する役職・活動の説明",
  },
  {
    href: "https://www.hikaristar.com/",
    label: "株式会社ヒカリスター出版",
    note: "会社が案内する出版・Web・AI関連の事業",
  },
  {
    href: "https://publishing-marketing.jp/guide/reputation-and-business/",
    label: "増田裕一「口コミ・評判は、事業の売上と継続性をどう左右するのか」",
    note: "本人執筆の記事。本人の考え方を示す一次情報",
  },
  {
    href: "https://www.city.nagoya.jp/shikouhou/_res/projects/project_kouhou/_page_/002/000/594/2000583_1.pdf",
    label: "名古屋市告示第581号",
    note: "一般社団法人福祉社会推進協会とヒカリテラスの指定記録（2025年9月1日）",
  },
  {
    href: "https://nhk-no.jp/shinzero/",
    label: "副業スクープ「新時代ゼロイチプロジェクトは詐欺？増田裕一のシンゼロを調査」",
    note: "第三者検証サイトによる批判的な調査記事。記事内の見解は同サイトの評価",
  },
  {
    href: "https://fukugyo-hotline.jp/shinjidai-zeroichi/",
    label: "副業ホットライン「新時代ゼロイチプロジェクトは怪しい？シンゼロの稼ぎ方と料金」",
    note: "第三者検証サイトの記事。広告内容等の調査結果を掲載",
  },
  {
    href: "https://k.xpg.jp/schedule/schedule.fcgi?C=2292576051&IM=2&PF=1&PR=2&SV=1&n=3",
    label: "電子書籍の司書さん・Kindle発売スケジュール",
    note: "著者名・発売情報の照合に利用",
  },
  {
    href: "https://www.amazon.co.jp/s?k=%E5%8F%A3%E3%82%B3%E3%83%9F%E3%81%A8%E8%A9%95%E5%88%A4%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%82%8B%E3%80%81%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AEKindle%E5%87%BA%E7%89%88%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8",
    label: "Amazon.co.jpで著書を検索",
    note: "『口コミと評判が生まれる、はじめてのKindle出版の教科書』",
  },
];

export default function MasudaYuichiPage() {
  return (
    <main className="my-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <header className="my-header">
        <Link href="/" className="my-logo">Biz<span>Roots</span></Link>
        <p>PEOPLE / PROFILE &amp; REPUTATION</p>
      </header>

      <div className="my-wrap">
        <nav aria-label="パンくずリスト" className="my-breadcrumb">
          <Link href="/">BizRoots Media トップ</Link><span aria-hidden="true"> / </span><span>増田裕一</span>
        </nav>

        <aside className="my-disclosure" aria-label="運営者と掲載対象の関係">
          <strong>運営者・掲載対象との関係</strong>
          <p>BizRoots Mediaは株式会社ヒカリスター出版が運営しています。増田裕一氏は同社の代表取締役であり、本記事の掲載対象です。この利害関係を明示したうえで、本人・会社の発信、行政資料、第三者記事を分けて紹介します。本記事は独立した第三者による評価や監査ではありません。</p>
        </aside>

        <article className="my-article">
          <header className="my-title">
            <p className="my-eyebrow">PROFILE / PUBLIC INFORMATION REVIEW</p>
            <h1>増田裕一の口コミ・評判は？経歴・実績を公開情報から検証</h1>
            <p className="my-lead">株式会社ヒカリスター出版の代表取締役、一般社団法人福祉社会推進協会の代表理事として紹介されている増田裕一氏。口コミや評判を調べる人に向け、確認できる活動記録と、第三者の記事が指摘する疑問点を分けて整理します。</p>
            <p className="my-meta">公開日：2026年10月30日　｜　確認した公開情報をもとに編集：BizRoots Media編集部</p>
          </header>

          <nav className="my-toc" aria-label="目次">
            <strong>この記事の内容</strong>
            <ol>
              <li><a href="#reviews">口コミ・評判として確認できる情報</a></li>
              <li><a href="#career">増田裕一氏の経歴と活動</a></li>
              <li><a href="#concerns">「怪しい？」という疑問と個別案件の確認点</a></li>
              <li><a href="#assessment">実績をどう評価するか</a></li>
              <li><a href="#editorial-policy">編集方針と運営者の開示</a></li>
            </ol>
          </nav>

          <section id="reviews">
            <h2>増田裕一の口コミ・評判は？確認できた情報を整理</h2>
            <p>「増田裕一 口コミ」「増田裕一 評判」で検索すると、本人が執筆した情報発信や、広告・講座を調査した第三者サイトの記事が見つかります。口コミを読む際は、誰が書いたのか、どのサービスを利用した人の声なのか、広告・紹介報酬などの利害関係があるかを区別することが大切です。</p>
            <h3>本人の公式サイトにある口コミ方針</h3>
            <p>本人の「口コミ・評判」記事では、本人や関係者がお客様を装って口コミを書くことはしないこと、利用者の声は掲載許可を得たものに限る方針が説明されています。これは本人側が公表した運用方針であり、第三者が実際の投稿状況を監査した結果ではありません。今回確認した公開情報からは、出版支援や研修の利用者が第三者の口コミサイトに投稿した、具体的な体験談を十分な件数で照合できませんでした。口コミが少ないことだけを、満足・不満足の証明とみなすことはできません。</p>
            <h3>「新時代ゼロイチプロジェクト」に関する第三者記事</h3>
            <p>検索結果には、増田氏が紹介役として登場する「新時代ゼロイチプロジェクト（シンゼロ）」について、内容や料金、参加者の声の確認可能性を検証した第三者記事があります。これらの記事は、広告で示された収益イメージと説明の具体性、運営会社の表示、受講者の独立した口コミが見つからない点などを疑問として挙げています。記事が引用する広告・販売表示の内容や、その時点での価格は、掲載元が確認した当時の情報です。</p>
            <p>これらは調査サイトの検証・評価であり、行政機関や裁判所による違法性の認定ではありません。一方で、読者が不安を感じる背景として無視せず、対象を「シンゼロという個別の募集・講座」に限定して読む必要があります。広告に掲げられた収益額は、独立した監査済み実績として確認できていないため、確実な収入の根拠として扱うことはできません。契約を検討する場合は、販売事業者、料金、提供内容、期間、解約・返金条件を契約前に書面で確認してください。</p>
          </section>

          <section id="career">
            <h2>増田裕一氏の経歴と実績：出版・Web・AI・福祉の活動</h2>
            <p>本人の公式プロフィールと会社案内によると、増田氏は株式会社ヒカリスター出版の代表取締役として、出版企画・編集、WebやSNSによる情報発信、生成AIの活用支援などに携わっています。会社の案内には、Webサイト・アプリ制作やデジタルプロモーションも掲載されています。これらは事業者が公開しているサービス内容であり、特定顧客の売上向上や成果を第三者が測定した数字とは区別します。</p>
            <h3>パブリッシング・マーケティングと著書</h3>
            <p>増田氏は、書籍出版を単発の販売で終わらせず、著者の経験や専門性を発信し、信頼や評判につなげる考え方を「パブリッシング・マーケティング」として提唱しています。本人の発信では、口コミを作為的に投稿するのではなく、実在する利用者の声と、本人が責任を持って公開する一次情報を分けて扱う姿勢が述べられています。著書として『口コミと評判が生まれる、はじめてのKindle出版の教科書』がAmazon Kindleで販売されています。<a href="https://www.amazon.co.jp/s?k=%E5%8F%A3%E3%82%B3%E3%83%9F%E3%81%A8%E8%A9%95%E5%88%A4%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%82%8B%E3%80%81%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AEKindle%E5%87%BA%E7%89%88%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8" target="_blank" rel="noopener noreferrer">Amazonで著書を確認する ↗</a></p>
            <h3>介護・福祉事業と行政資料</h3>
            <p>本人のプロフィールでは、一般社団法人福祉社会推進協会の代表理事として、介護・福祉事業に関わることが説明されています。名古屋市の告示第581号には、同協会を設置者とする「ヒカリテラス」が、居宅介護・重度訪問介護の事業所として2025年9月1日付で指定された記録があります。行政資料で確認できるのは指定主体・事業所・指定日などの範囲です。サービスの利用者満足度や運営成果を評価した資料ではありません。</p>
            <h3>地域メディア・発信活動</h3>
            <p>本人の公式プロフィールなどには、日進市・長久手市の地域応援メディア、旅行・マイルに関する動画発信、講演会の企画・開催記録も掲載されています。発信やイベントの存在は活動記録として確認できますが、閲覧数、参加者数、継続利用者の評価といった成果は、別途データが公開されている場合に限って判断できます。</p>
          </section>

          <section id="concerns">
            <h2>「増田裕一は怪しい？」という疑問に、何を確認すればよいか</h2>
            <p>人物全体を一語で「怪しい」「安心」と決めるより、役職や活動の実在性、サービスごとの契約条件、実績を裏付ける資料を分けて確認するのが適切です。本人・会社の公式サイトは当事者の説明、行政告示は行政上の指定記録、レビュー記事は執筆者の調査と評価です。それぞれが答えられる問いは異なります。</p>
            <h3>人物・法人の同一性に注意</h3>
            <p>「増田裕一」は同姓同名の人物が複数います。検索結果には、元区議や大手企業の元経営者など、別の人物の経歴・評判も含まれます。この記事で扱うのは、株式会社ヒカリスター出版および一般社団法人福祉社会推進協会の公式情報に結び付く人物です。氏名だけで別人の実績や評価を結び付けないよう、所属・肩書・活動地域も合わせて確認してください。</p>
            <h3>個別の講座は、人物の他の活動と分けて検討</h3>
            <p>シンゼロに関する第三者記事で指摘された点は、同講座の販売内容や参加者の口コミの見え方に関するものです。それだけで、出版・Web支援や福祉法人の活動全体を評価することはできません。反対に、他領域で法人の役職や行政上の指定記録を確認できても、個別講座の収益性や契約条件を保証するものでもありません。判断の単位をサービスごとに分け、申し込み前に一次資料を確かめることが重要です。</p>
          </section>

          <section id="assessment">
            <h2>増田裕一氏の実績をどう見るか</h2>
            <p>公開情報から確認できるのは、ヒカリスター出版の代表として出版・Web・AI関連サービスを案内していること、福祉社会推進協会の役職と事業所指定の記録、本人による出版・地域メディア等の発信です。一方、売上や顧客数、支援先の成果、研修受講者の評価などを比較・検証できる独立したデータは、今回参照した資料からは限定的でした。</p>
            <p>したがって、現時点での妥当な答えは「公開資料で確認できる活動はあるが、個別の成果や評価を一括して証明する第三者データは十分に揃っていない」です。これは否定的な結論でも推薦でもなく、確認できた範囲と残る不確実性を分けた整理です。今後、許可を得た利用者の声、具体的な支援事例、条件や時期を明記した成果データが公開されれば、評価材料を追加できます。</p>
          </section>

          <section id="editorial-policy">
            <h2>編集方針と運営者の開示</h2>
            <p>BizRoots Mediaは株式会社ヒカリスター出版が運営し、増田裕一氏はその代表取締役です。この関係は編集上の重要な利害関係であり、本記事は独立した調査機関や第三者メディアによる人物評価を装うものではありません。本人・会社の発信にはその旨を付し、行政資料や第三者記事とは根拠の種類を分けて記述しています。第三者記事についても、その記事の主張を確定事実として転載せず、調査主体の見解として紹介しました。</p>
            <p>確認日：2026年10月30日。掲載内容に誤りや更新情報がある場合は、出典を添えてBizRoots Mediaまでお知らせください。</p>
            <h3>参照した公開情報</h3>
            <ul className="my-sources">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
                  <span>{source.note}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <footer className="my-footer">
          <p><Link href="/">BizRoots Media トップへ戻る</Link></p>
          <p>関連記事：<Link href="/steady-business-feature/">堅実な実業モデルを読む →</Link></p>
          <small>運営：株式会社ヒカリスター出版　／　編集記事に関するお問い合わせは<a href="https://www.hikaristar.com/">公式サイト</a>をご覧ください。</small>
        </footer>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        .my-page { min-height: 100vh; background: #fff; color: #172a40; font: 16px/1.95 Arial, "Hiragino Kaku Gothic ProN", sans-serif; }
        .my-page a { color: #785620; text-underline-offset: 4px; }
        .my-page a:focus-visible { outline: 3px solid #ae8a4a; outline-offset: 4px; }
        .my-header { border-top: 7px solid #13253b; border-bottom: 1px solid #d6dce2; padding: 20px max(22px, calc((100vw - 980px)/2)); display:flex; justify-content:space-between; align-items:end; gap:16px; }
        .my-logo { color:#14263c !important; text-decoration:none; font:bold 39px/.95 Georgia,serif; letter-spacing:-2px; }
        .my-logo span { color:#a57d39; }
        .my-header p,.my-eyebrow { color:#9c773b; font-size:10px; font-weight:bold; letter-spacing:2px; margin:0; }
        .my-wrap { max-width:900px; margin:auto; padding:0 24px; }
        .my-breadcrumb { padding:20px 0; font-size:12px; color:#697788; }
        .my-disclosure { margin:12px 0 34px; padding:18px 22px; border-left:5px solid #a9803e; background:#f4f2ec; font-size:13px; }
        .my-disclosure strong { font-size:13px; }
        .my-disclosure p { margin:5px 0 0; }
        .my-title { border-bottom:4px solid #14263c; padding:18px 0 25px; }
        .my-title h1 { font-size:clamp(30px,5vw,46px); line-height:1.45; margin:15px 0; }
        .my-lead { font-size:18px; line-height:1.9; color:#43556a; }
        .my-meta { color:#778493; font-size:12px; }
        .my-toc { margin:28px 0 36px; padding:22px 28px; background:#f4f5f6; }
        .my-toc strong { font-size:14px; }
        .my-toc ol { margin:8px 0 0; padding-left:22px; }
        .my-toc li { margin:3px 0; font-size:14px; }
        .my-article section { scroll-margin-top:24px; margin:0 0 42px; }
        .my-article h2 { border-top:2px solid #14263c; padding-top:18px; margin:0 0 18px; font-size:27px; line-height:1.55; }
        .my-article h3 { margin:26px 0 8px; font-size:19px; line-height:1.6; }
        .my-article p { margin:0 0 16px; }
        .my-sources { padding-left:22px; }
        .my-sources li { padding:9px 0; border-bottom:1px solid #e1e5e8; }
        .my-sources span { display:block; color:#697788; font-size:12px; }
        .my-footer { border-top:4px solid #14263c; padding:22px 0 50px; margin-top:45px; font-size:13px; }
        .my-footer small { color:#687887; }
        @media(max-width:650px) {
          .my-header { align-items:flex-start; flex-direction:column; padding:18px 22px; }
          .my-logo { font-size:34px; }
          .my-wrap { padding:0 20px; }
          .my-title h1 { font-size:31px; }
          .my-lead { font-size:16px; }
          .my-article h2 { font-size:23px; }
          .my-article h3 { font-size:17px; }
        }
      `}</style>
    </main>
  );
}
