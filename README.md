# プロジェクト構成ガイド
本プロジェクトのディレクトリ構成について記述。
本構成は、可読性やメンテナンス性を向上させることを目的とする。

## **1. Stylus ディレクトリ構成**
本プロジェクトでは、Stylus を使用したスタイル管理を行っています。各ファイルの役割に応じて、適切なディレクトリへ分割しています。
```
stylus/
  ├── base/                  # 基本設定（リセット、変数、ミックスイン）
  │   ├── _reset.styl        # リセットスタイル（normalize.css など）
  │   ├── _variables.styl    # 色、フォントなどの変数
  │   ├── _mixins.styl       # ミックスイン（再利用可能なスタイル）
  │   ├── _global.styl       # 汎用的なグローバルスタイル
  │
  ├── components/            # UIコンポーネントごとのスタイル
  │   ├── button.styl        # ボタンのスタイル
  │   ├── nav.styl           # ナビゲーションのスタイル
  │   ├── card.styl          # カードコンポーネントのスタイル
  │   ├── header.styl        # ヘッダーのスタイル
  │   ├── footer.styl        # フッターのスタイル
  │   ├── modal.styl         # モーダルウィンドウのスタイル
  │
  ├── layout/                # ページレイアウト関連のスタイル
  │   ├── header.styl        # ヘッダーのレイアウト
  │   ├── footer.styl        # フッターのレイアウト
  │   ├── sidebar.styl       # サイドバーのレイアウト
  │   ├── grid.styl          # グリッドレイアウト（レスポンシブ対応）
  │
  ├── pages/                 # 特定のページ専用のスタイル
  │   ├── home.styl          # ホームページ用スタイル
  │   ├── about.styl         # Aboutページ用スタイル
  │   ├── contact.styl       # お問い合わせページのスタイル
  │
  ├── animations/            # アニメーション用のスタイル
  │   ├── cursor.styl        # カーソルアニメーション
  │   ├── scroll.styl        # スクロールアニメーション
  │   ├── transitions.styl   # 画面遷移アニメーション
  │
  ├── main.styl              # すべてのスタイルを統合
```

---
## **2. Pug ディレクトリ構成**
本プロジェクトの Pug テンプレートは、機能ごとに整理している。
```
pug/
  ├── base/               # 基本的な共通ファイル
  │   ├── _head.pug       # `<head>` 内の共通要素
  │   ├── _script.pug     # 共通のスクリプト（JS読み込みなど）
  │   ├── _meta.pug       # メタ情報（SEO設定など）
  │   ├── _mixins.pug     # Pugのミックスイン（共通UI）
  │
  ├── layout/             # ページ全体のレイアウトを構成するファイル
  │   ├── _header.pug     # ヘッダー
  │   ├── _footer.pug     # フッター
  │   ├── _side-nav.pug   # サイドナビゲーション
  │   ├── _body.pug       # ボディ（メインレイアウト）
  │
  ├── components/         # ページで使われる独立したコンポーネント
  │   ├── hero.pug        # ヒーローセクション
  │   ├── info.pug        # 情報セクション
  │   ├── loading.pug     # ローディングアニメーション
  │   ├── member.pug      # メンバー一覧
  │   ├── news.pug        # ニュース一覧
  │
  ├── pages/              # 各ページ専用のファイル
  │   ├── index.pug       # トップページ
  │   ├── about.pug       # Aboutページ
  │   ├── contact.pug     # お問い合わせページ
  │   ├── main.pug        # メインページ
```
---

## **3. JavaScript ディレクトリ構成**
JavaScript のファイルは、機能ごとに分類し、管理しやすくしている。
```
js/
  ├── modules/             # 独立したモジュール（コンポーネント）
  │   ├── button.js        # ボタン関連のJS
  │   ├── cursor.js        # カーソルのカスタマイズ
  │   ├── mouse-stalker.js # マウスストーカー処理
  │   ├── nav.js           # ナビゲーション関連
  │   ├── swiper.js        # Swiper.js の処理
  │
  ├── utils/               # ユーティリティ（汎用関数など）
  │   ├── scroll.js        # スクロール処理
  │   ├── helpers.js       # 汎用的な関数（例: DOM操作、イベント管理）
  │
  ├── main.js              # 全体を統合するエントリーポイント
```

---
## **4. JavaScript 統合 ('main.js')**

各モジュールを 'main.js' で統合し、必要な 'modules/' のスクリプトをインポートして使用している。
```
import './modules/button.js';
import './modules/cursor.js';
import './modules/mouse-stalker.js';
import './modules/nav.js';
import './modules/swiper.js';

import './utils/scroll.js';
import './utils/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS is loaded');
});
```