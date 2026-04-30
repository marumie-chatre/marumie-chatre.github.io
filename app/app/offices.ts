// 事務所データの一元管理
// 新しい事務所を追加したらここに追加するだけで全ページに反映される

export const OFFICES = [
  { slug: "ft", name: "フェアリーテイル" },
  { slug: "bright-group", name: "ブライトグループ" },
  { slug: "at-group", name: "アットグループ" },
  { slug: "chatstyle", name: "チャットスタイル" },
  { slug: "flavor-group", name: "フレイバーグループ" },
  { slug: "allure", name: "アリュール" },
  { slug: "nmr-group", name: "NMRグループ" },
  { slug: "chatlady-jp", name: "チャットレディJP" },
  { slug: "asterisk", name: "アスタリスク" },
  { slug: "pocket-work", name: "ポケットワーク" },
  { slug: "liver-support", name: "ライバーサポートグループ" },
] as const;

export const OFFICE_COUNT = OFFICES.length;
