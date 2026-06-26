import Link from "next/link";
import { L3ArticleShell } from "../L3";

export const metadata = {
  alternates: { canonical: "/tokushoho" },
  title: "特定商取引法に基づく表記",
  description: "まるみえチャトレの特定商取引法に基づく表記。",
};

export default function TokushohoPage() {
  return (
    <L3ArticleShell
      breadcrumb={[
        { l: "トップ", href: "/" },
        { l: "特定商取引法表記" },
      ]}
      kicker="運営情報｜特商法表記"
      title="特定商取引法に基づく表記"
      meta={{ date: "制定日:2026年5月16日" }}
    >
      <article className="col-article-body">
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "24px",
        }}>
          <tbody>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", width: "30%", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>サイト名</th>
              <td style={{padding: "12px 16px"}}>まるみえチャトレ</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>運営責任者</th>
              <td style={{padding: "12px 16px"}}>みなみ</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>所在地</th>
              <td style={{padding: "12px 16px"}}>ご請求があり次第、遅滞なく開示いたします</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>連絡先</th>
              <td style={{padding: "12px 16px"}}>ご請求があり次第、遅滞なく開示いたします</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>提供サービス</th>
              <td style={{padding: "12px 16px"}}>チャットレディ事務所の口コミ・比較情報の提供</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>料金</th>
              <td style={{padding: "12px 16px"}}>無料（ユーザーから料金を徴収しません）</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>支払方法</th>
              <td style={{padding: "12px 16px"}}>該当なし（無料サービス）</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>役務の提供時期</th>
              <td style={{padding: "12px 16px"}}>サイト公開中、随時</td>
            </tr>
            <tr style={{borderBottom: "1px solid var(--color-rule)"}}>
              <th style={{padding: "12px 16px", textAlign: "left", background: "var(--cream)", fontWeight: 700, color: "var(--text)"}}>返品・キャンセル</th>
              <td style={{padding: "12px 16px"}}>該当なし（無料サービス）</td>
            </tr>
          </tbody>
        </table>

        <p>※本サイトは情報提供を目的とした口コミ・比較サイトです。実際の事務所への応募・契約は、各事務所と直接行ってください。</p>
        <p>※当サイトから事務所に応募された場合、当サイトには紹介料が発生する場合があります。詳しくは <Link href="/privacy">プライバシーポリシー</Link> をご確認ください。</p>

        <div style={{textAlign:"center", marginTop:"48px"}}>
          <Link href="/" className="btn-main">トップに戻る →</Link>
        </div>
      </article>
    </L3ArticleShell>
  );
}
