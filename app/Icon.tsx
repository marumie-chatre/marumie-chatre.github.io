/**
 * Icon kit — Design Refresh v2（5/23 handoff）
 *
 * 線アイコン中心・stroke 1.6px・rounded caps。
 * 絵文字（🛡️💼🏠❓🌱 など）の置き換え用。
 *
 * 使い方：
 *   import { Icon } from "./Icon";
 *   <Icon.Shield size={22} />
 *
 * デフォルトサイズは各アイコンに設定済み（22:hero, 18:nav, 14:inline, 11:tiny）。
 *
 * 詳細：handoff/docs/01-design-tokens.md の Iconography セクション参照。
 */

type IconProps = {
  size?: number;
  color?: string;
};

type StarProps = IconProps & { fill?: string };
type QuoteProps = { size?: number; color?: string };

const baseSvg = (
  size: number,
  children: React.ReactNode,
  viewBox = "0 0 24 24",
  stroke = "currentColor"
) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke={stroke}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ===== 5評価軸 ===== */
const Shield = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>,
    "0 0 24 24",
    color
  );

const HeartHand = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M3 14l4-4c1-1 2.5-1 3.5 0L12 11l1.5-1c1-1 2.5-1 3.5 0l4 4" />
      <path d="M12 11c1-2 4-2 5 0s-1 4-5 6c-4-2-6-4-5-6s4-2 5 0z" />
    </>,
    "0 0 24 24",
    color
  );

const Sprout = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 2-5 5-5 0 3-2 5-5 5z" />
      <path d="M12 14c0-4-3-6-6-6 0 4 3 6 6 6z" />
    </>,
    "0 0 24 24",
    color
  );

const Briefcase = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5c0-1 1-2 2-2h2c1 0 2 1 2 2v2" />
      <path d="M3 13h18" />
    </>,
    "0 0 24 24",
    color
  );

const Coin = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v10M9.5 9.5h4M9.5 14.5h5" />
    </>,
    "0 0 24 24",
    color
  );

/* ===== ナビゲーション ===== */
const Trophy = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M8 4h8v4a4 4 0 11-8 0V4z" />
      <path d="M16 6h2c1 0 2 1 2 2 0 2-2 3-4 3M8 6H6c-1 0-2 1-2 2 0 2 2 3 4 3" />
      <path d="M10 14h4l-1 4h-2l-1-4zM8 20h8" />
    </>,
    "0 0 24 24",
    color
  );

const Pin = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M12 21s-7-6-7-12a7 7 0 1114 0c0 6-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>,
    "0 0 24 24",
    color
  );

const Home = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1v-9z" />
    </>,
    "0 0 24 24",
    color
  );

const Question = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 1-.5 1.5-1.5 2-1 .5-1.5 1-1.5 2" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" />
    </>,
    "0 0 24 24",
    color
  );

const Chat = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-7l-4 4v-4H6a2 2 0 01-2-2V6z" />
      <circle cx="9" cy="10" r="0.7" fill="currentColor" />
      <circle cx="12" cy="10" r="0.7" fill="currentColor" />
      <circle cx="15" cy="10" r="0.7" fill="currentColor" />
    </>,
    "0 0 24 24",
    color
  );

/* ===== サポート系 ===== */
const Search = ({ size = 18, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l4 4" />
    </>,
    "0 0 24 24",
    color
  );

const Menu = ({ size = 18, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>,
    "0 0 24 24",
    color
  );

const Arrow = ({ size = 14, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 12h14M13 6l6 6-6 6" />
    </>,
    "0 0 24 24",
    color
  );

const Check = ({ size = 16, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 12l5 5L20 6" />
    </>,
    "0 0 24 24",
    color
  );

const Crown = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M3 8l3 4 3-5 3 5 3-5 3 5 3-4-2 11H5L3 8z" />
      <circle cx="3" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="21" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
    </>,
    "0 0 24 24",
    color
  );

const Pencil = ({ size = 18, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M14 4l4 4-10 10H4v-4L14 4z" />
      <path d="M13 5l4 4" />
    </>,
    "0 0 24 24",
    color
  );

const Mail = ({ size = 18, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </>,
    "0 0 24 24",
    color
  );

/* ===== fill 系（線アイコンとは別ロジック） ===== */
const Star = ({ size = 14, fill = "currentColor" }: StarProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>
);

const Quote = ({ size = 30, color = "currentColor" }: QuoteProps) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill={color} aria-hidden="true">
    <path d="M2 18c0-6 3-10 8-12l1 2c-3 2-5 5-5 9h4v9H2v-8zM17 18c0-6 3-10 8-12l1 2c-3 2-5 5-5 9h4v9h-8v-8z" />
  </svg>
);

/* ===== 装飾系（オプション） ===== */
const Leaf = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 20c0-9 6-15 15-15 0 9-6 15-15 15z" />
      <path d="M4 20l8-8" />
    </>,
    "0 0 24 24",
    color
  );

const Cafe = ({ size = 22, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <path d="M4 8h14v6a4 4 0 01-4 4H8a4 4 0 01-4-4V8z" />
      <path d="M18 10h2a2 2 0 110 4h-2" />
      <path d="M9 4c0 1 1 1 1 2s-1 1-1 2M13 4c0 1 1 1 1 2s-1 1-1 2" />
    </>,
    "0 0 24 24",
    color
  );

const Clock = ({ size = 18, color }: IconProps) =>
  baseSvg(
    size,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
    "0 0 24 24",
    color
  );

/* ===== Icon オブジェクトとしてまとめてエクスポート ===== */
export const Icon = {
  // 5評価軸
  Shield,
  HeartHand,
  Sprout,
  Briefcase,
  Coin,
  // ナビ
  Trophy,
  Pin,
  Home,
  Question,
  Chat,
  // サポート
  Search,
  Menu,
  Arrow,
  Check,
  Crown,
  Pencil,
  Mail,
  // fill系
  Star,
  Quote,
  // 装飾
  Leaf,
  Cafe,
  Clock,
};

export default Icon;
