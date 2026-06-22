# Cowork 移管プロンプト（このブロックをそのまま貼ってください）

> 使い方：下の「===」で囲んだ本文を Cowork に貼り付けてください。リポジトリ `marumie-chatre` にアクセスできる前提です。全データの正本は [`docs/COWORK-HANDOFF.md`](COWORK-HANDOFF.md) にあります。

===================================================================

あなたには、チャットレディ事務所の比較・口コミサイト **「まるみえチャトレ」（marumie-chatre）** の制作を引き継いでもらいます。まず **`docs/COWORK-HANDOFF.md` を最初から最後まで読んでください**。そこに、これまでの経緯・規約・法的制約・全データ（10社レビュー新下書き・4ストーリー・構造データ）を逐語で保全してあります。

## プロジェクト要点
- Next.js **16.2.4**（App Router）/ React 19 / TS / Vercel自動デプロイ。リポジトリ：`harmonychatcafe-cmd/marumie-chatre`。
- ⚠️ `AGENTS.md` に従い、コードを書く前に `node_modules/next/dist/docs/` を確認すること（この Next は破壊的変更あり）。
- 書き手はペルソナ **「みなみ」**（実筆者は業界経験者）。読者は **清楚系・まじめ層「さくら」**（アダルトはしたくない／続けられるか不安）。
- ビジネス上の狙い：競合10社レビューから、ノンアダ専門 **フェアリーテイル（FT・rank1）** へ自然に送客（けなさず誠実に）。

## いま依頼したい最優先タスク：10社レビューの実装（テキストは承認済み・あとは反映するだけ）
対象：`app/jimusho/{bright-group,at-group,chatstyle,flavor-group,allure,nmr-group,chatlady-jp,asterisk,pocket-work,liver-support}/page.tsx`
各 `OFFICE_DATA` を更新する：
- **維持**：`slug / rank / score / isPR / logoSrc / headerImage / breakdown / applyUrl / RELATED`
- **差し替え**：`tagline / tags / goodComment / honestComment / basic` → `COWORK-HANDOFF.md` §6 の新下書きへ
- **新規追加**：`features`（4つ・各 `{n, icon, t, d}`）と、§6に `note` がある社は `note`
- **ストーリー追加（4社のみ）**：`chatstyle / bright-group / at-group / flavor-group` に `story: {title, paragraphs}` → §7（`【】`マーカー入り）
- 実装テンプレは完成済みの `app/jimusho/ft/page.tsx` に倣う（features/story/note の使い方が同じ。L3 は `note?` 対応済み）。

手順：§6・§7を反映 → `npm run build` でエラー確認 → 公開前QA → commit → push（main）→ Vercel確認。

## 厳守する制約（詳細は §8・§9）
- 🚫 **偽（AI生成）口コミは作らない**（景表法ステマ規制違反・Googleペナルティ）。エピソードは**実話のみ**。実話がない6社は `note`「口コミ調査中」のままにする。
- ✍️ 口調は**柔らかい語りかけ**（「あるんです」「〜ね」）。AIっぽい定型句・「先駆者」「ガッツリ」「桁違い」等はNG。GOOD＝雰囲気／FEATURES＝具体、と役割分担。
- 🤝 競合を品なくけなさない。FT送客は「合う人には合う」程度に自然に。名誉毀損リスクのある具体は和らげる（§7のソフト化①②は適用済み・維持）。

## 実装前に直す細部（§13）
- アスタリスクの tagline 「ガッツリ」→ NG語。「しっかり」等へ修正。
- `flavor-group` の名は「フレイバーグループ」に統一（下書きの「フレイバー」を直す）。
- 各ページ `RELATED` の表示 score が古い箇所あり（正値は §5/§13）。可能なら整合させる。
- 10社の `metadata.title/description` は旧基調。新ポジショニングに合わせ見直し（任意）。

不明点があれば、`docs/COWORK-HANDOFF.md` の該当セクション番号を挙げて確認してください。勝手な創作（特に口コミ）はしないこと。

===================================================================

## 補足（Coworkに貼らない・運用メモ）
- もし Cowork がこのリポジトリに直接アクセスできない場合は、`docs/COWORK-HANDOFF.md` の中身ごと共有してください（そこに全データが入っています）。
- 一時ファイル（`%TEMP%\claude\…\tasks\*.output`）は消える可能性があるため、**正本は `docs/COWORK-HANDOFF.md` の §6・§7** です。
