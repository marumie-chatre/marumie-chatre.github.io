import { Icon } from "./Icon";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeoozsXNP5R5hgyPbxMlVPNPBrc2NOceFtI5f97Lbv3KUATkw/viewform?usp=dialog";

// 「働いた経験がある方へ」全ページ共通CTA（緑帯＋白カード）
// 編集部署名・お悩みフッターと同じ緑帯に連なるフッターゾーンの先頭。
export default function WorkedBeforeCTA() {
  return (
    <section style={{ background: "#F3F6EC", borderTop: "1px solid #E4E8DA", padding: "28px 20px 6px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E4E8DA",
          borderRadius: 18,
          padding: "22px 20px",
          boxShadow: "0 2px 12px rgba(46,31,16,0.05)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 11px", borderRadius: 99,
            background: "#587A38", color: "#fff",
            fontSize: 9.5, letterSpacing: 1.8, fontWeight: 800,
          }}>
            <Icon.Pencil size={11} />
            FOR YOU
          </div>
          <h3 style={{ margin: "12px 0 8px", fontSize: 20, lineHeight: 1.45, fontWeight: 700, color: "#2C3326" }}>
            働いた経験がある方へ
          </h3>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.9, color: "#46503E" }}>
            匿名・個人情報不要で投稿できます。<br />
            良かった点はもちろん、気になった点も歓迎です。
          </p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{
            marginTop: 16, width: "100%", padding: 14,
            background: "#6FA858", color: "#fff",
            borderRadius: 12, fontSize: 13, fontWeight: 800,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            textDecoration: "none", boxSizing: "border-box",
          }}>
            <Icon.Pencil size={14} />
            匿名で口コミを書く
          </a>
        </div>
      </div>
    </section>
  );
}
