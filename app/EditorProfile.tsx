import Link from "next/link";
import Image from "next/image";

// まるみえチャトレ編集部の情報（みなみ）
// 投稿CTAの白カードに対して「緑帯に直接置く署名風」だが、
// サムネ・名前・編集部ラベルはしっかり目立たせる。
export default function EditorProfile() {
  return (
    <section style={{ background: "#F3F6EC", padding: "6px 20px 14px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src="/minami-icon.jpg" alt="みなみ" width={84} height={84}
          style={{
            width: 84, height: 84, borderRadius: "50%", objectFit: "cover",
            border: "2.5px solid #fff", boxShadow: "0 2px 8px rgba(46,31,16,0.16)",
          }}
        />
        <div style={{ fontSize: 10.5, letterSpacing: 1.2, fontWeight: 800, color: "#587A38", marginTop: 10 }}>
          まるみえチャトレ編集部の情報
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#2C3326", marginTop: 3 }}>
          みなみ
          <span style={{ fontSize: 11, fontWeight: 600, color: "#8E9882", marginLeft: 6 }}>（まるみえ編集部）</span>
        </div>
        <div style={{ fontSize: 11, color: "#8E9882", marginTop: 2 }}>このサイトを作った人</div>
        <p style={{ margin: "11px auto 0", fontSize: 11.5, lineHeight: 1.75, color: "#46503E", maxWidth: 460 }}>
          <span style={{ color: "#587A38", fontWeight: 700 }}>お話しのみ</span>で配信してきた経験をもとに、「<span style={{ color: "#587A38", fontWeight: 700 }}>お話しで稼ぐ事務所</span>」を紹介しています。
        </p>
        <Link href="/profile" style={{
          marginTop: 11, display: "inline-flex", alignItems: "center", gap: 5,
          fontSize: 12, fontWeight: 700, color: "#2C3326",
          borderBottom: "1px solid rgba(44,51,38,0.3)", paddingBottom: 1,
          textDecoration: "none",
        }}>
          運営方針はこちら →
        </Link>
      </div>
    </section>
  );
}
