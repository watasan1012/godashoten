# godashoten.github.io

htmlや、Cascading Style Sheets(以降css)にはルールがあります。ルールに沿ったコーディングを心がける必要があります。

では、htmlや、cssを制定(作っているグループ)について解説します。

htmlや、cssのルールを策定グループに w3c の html5。 WHATWG が制定する、Living Standardがありました。

制定するグループは、w3c と、WHATWG があり、話し合いの結果、w3cのhtml5は2021年1月28日に廃止されました。

結果、もう一つのグループのWHATWGが制定するLiving Standardが標準仕様になりました。

今後は、新しいタグなどができたり、廃止されり、変更されるので[Living Standard](https://momdo.github.io/html/)を勉強していくといいでしょう。

w3c や、WHATWG　のhtml5にはルールに沿ったコーディングができてるかチェックする機能が公開されています。

チェックすることを、バリデーションまたは、バリデーターといいます。

htmlでは、w3c[Markup Validation Service](https://validator.w3.org/) とWHATWG[HTML Conformance Checkers](https://whatwg.org/validator/)です。

WHATWGのHTML Conformance Checkersは、Address of page to check:にリンクを貼り付けてCheckボタンを押します。
yahoo などのURLを貼り付けてcheckして見ましょう。

すると[https://validator.w3.org/nu](https://validator.w3.org/nu) 遷移して、チェックが走ります。

なので、localで開発したソースは、[https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea)でチェックするといいでしょう。

css にチェックを入れるとcssも確認できます。

Google は、Style Guide を出しています。

[https://google.github.io/styleguide/htmlcssguide.html](https://google.github.io/styleguide/htmlcssguide.html)

2.1.1 Protocol

埋め込みリソースには、可能な限りHTTPSを使用する。

script タグのCDNには、発行元に、`href="https:`があれば利用します。

2.2 一般的な書式ルール

2.2.1 インデント

インデントは、2つのスペースを利用する。

```html
<ul>
  <li>Fantastic
  <li>Great
</ul>
```

```css
.example {
  color: blue;
}
```

2.2.2 Capitalization

小文字のみを使用する。

すべてのコードは小文字でなければなりません。HTMLの要素名、属性、属性値（text/CDATAを除く）、CSSのセレクタ、プロパティ、プロパティ値（文字列を除く）に適用されます。

2.2.3 末尾の空白文字

末尾のホワイトスペースを削除します。

末尾の空白は不要であり、差分を複雑にする可能性があります。

2.3 metaタグのルール

2.3.1 Encoding

UTF-8 no BOM

`<meta charset="utf-8">`

2.3.2 コメント
必要に応じて、可能な限りコードを説明する。

3 HTML

3.1 HTML Style Rules

html5 を使う

`<!DOCTYPE html>`

`<br>`タグの 閉じたぐは `<br />`不要

3.1.2 有効な HTML を作る

W3C HTML Validatorなどのツールを使ってテストして、適切なHTMLの使用を保証してください。

[https://validator.w3.org/nu/](https://validator.w3.org/nu/)

3.1.3 Semantics(セマンティック )

セマンティックウェブとは、htmlのタグに目的を与えてコンピュータが理解できるようにする
htmlのタグを目的に応じて使い分けることが、アクセシビリティや再利用、コードの効率化のために重要です。

3.1.4 Multimedia Fallback

img タグなどにalt属性を追加します。

代替コンテンツ(alt属性)を提供することは、アクセシビリティの観点から重要です。

3.1.5 Separation of Concerns

構造（マークアップ）、表現（スタイリング）、動作（スクリプト）を厳密に分離し、3つの相互作用を最小限にとどめるようにします。

```html
<!-- Not recommended -->
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
```

```html
<!-- Recommended -->
<link rel="stylesheet" href="default.css">
```

3.1.6 Entity References

特殊文字は使用する必要はないです。

3,1.7 Optional Tags

タグのオプションは省略した方がいい。

3.1.8 type Attributes

スタイルシートやスクリプトのtype属性は省略する。

`type="text/css"` `type="text/javascript"` は不要です。

3.1.9 id Attributes

不要なid属性は避ける。

class属性はスタイリングに、data属性はスクリプティングに用いることを推奨します。

id属性が厳密に必要な場合は、JavaScriptの識別子構文と一致しないように、値に必ずハイフンを入れてください（例：profileやuserProfileではなく、user-profileを使用）。

要素に id 属性がある場合、ブラウザはその id 属性をグローバルウィンドウプロトタイプの名前付きプロパティとして利用できるようにしますが、これは予期せぬ振る舞いを引き起こす可能性があります。ハイフンを含む id 属性値はプロパティ名として利用可能ですが、これらはグローバルな JavaScript 変数として参照することはできません。

3.2 HTML Formatting Rules

3.2.1 General Formatting

ブロック、リスト、テーブルの各要素は改行し、その子要素はすべてインデントする。

要素のスタイルとは無関係に（CSSでは表示特性ごとに要素の役割を決めることができるため）、ブロック、リスト、テーブルの要素はすべて改行してください。

また、ブロック、リスト、テーブル要素の子要素である場合は、インデントする。

(リスト項目間の空白に問題がある場合は、すべての li 要素を1行にまとめてもかまいません。リンターはエラーではなく、警告を出すことが推奨されます)。

3.2.2 HTML Line-Wrapping

長い行を改行する（オプション）。

HTMLには列数制限の推奨はありませんが、可読性が著しく向上する場合は、長い行を折り返すことを考慮してもよいでしょう。

折り返す場合は、折り返した属性と子要素を区別するために、元の行から少なくとも4つのスペースを追加してインデントする必要があります。

3.2.3 HTML Quotation Marks

属性値を引用する場合は、ダブルクォーテーションを使用します。

属性値を囲むには、シングルクォーテーション（''）ではなく、ダブルクォーテーション（""）を使用します。

<!-- Recommended -->
`<a class="maia-button maia-button-secondary">Sign in</a>`

4 CSS

4.1 CSS Style Rules

4.1.1 CSS Validity

ルールに沿ったCSSを使用する。

CSS バリデーターを利用する　[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

ルールに沿ったCSSを利用することで、無効なCSSコードを発見し、取り除くことができます。

4.1.2 Class Naming

意味のあるクラス名や一般的なクラス名を使用する。

体裁を整えた名前や不可解な名前ではなく、常に当該要素の目的を反映したクラス名、あるいは一般的な名前を使用する。

要素の目的を反映した具体的な名前は、最も理解しやすく、変更の可能性が低いため、優先的に使用する必要があります。

一般的な名前は、兄弟要素とは異なり、特に意味がない要素のための予備的な名前に過ぎません。これらは通常、"ヘルパー "として必要とされます。

機能名や一般名を使用することで、不必要な文書やテンプレートの変更の可能性を減らすことができます。

4.1.3 Class Name Style

クラス名は、できるだけ短く、必要な長さのものを使用する。

できるだけ短くしながら、そのクラスが何であるかを伝えるようにします。

このようなクラス名を使用することで、理解しやすく、コードの効率化に貢献します。

4.1.4 Class Name Delimiters

クラス名の単語はハイフンで区切る。

セレクタの単語や略語をハイフン以外の文字で連結しない（全く連結しないことも含む）ことで、理解やスキャナビリティを向上させることができます。

4.1.5 Prefixes

セレクタにアプリケーション固有の接頭辞を付ける（オプション）。

大規模なプロジェクトや、他のプロジェクトや外部サイトに埋め込まれるコードでは、 クラス名にプレフィックス (名前空間) を使用します。短い一意な識別子と、その後に続くダッシュを使用します。

名前空間を使用すると、名前の衝突を防ぐことができ、検索や置換などのメンテナンスが容易になります。

4.1.6 Type Selectors

クラス名をタイプセレクタで修飾することは避けてください。

必要な場合（ヘルパークラスなど）以外は、クラスと一緒に要素名を使用しないでください。

不必要な祖先セレクタを避けることは、パフォーマンス上の理由から有用です。

4.1.7 ID Selectors

idセレクタは避けてください。

id属性はページ全体で一意であることが期待されますが、多くのエンジニアが作業した多くのコンポーネントを含むページではその保証が困難です。どのような場合でも、クラス・セレクタを使用することをお勧めします。

4.1.8 Shorthand Properties

可能な限りショートハンドプロパティを使用する。

CSSには様々な省略記法のプロパティ（fontなど）があり、明示的に1つの値しか設定されていない場合でも、可能な限り使用すべきです。

省略記法を利用することで、コードの効率性と理解しやすさを高めることができます。

4.1.9 0 and Units

0 "の値の後は、必要な場合を除き、単位指定を省略する。

必要な場合を除き、"0 "の値の後に単位を使用しないでください。

4.1.10 Leading 0s

値には必ず先頭の "0 "を入れる。

1から1までの値または長さの前に0を置く。

```
font-size: 0.8em;
```

4.1.11 Hexadecimal Notation

可能であれば3文字の16進数表記を使用する。

可能な限り3文字の16進数で表記することで、より短く、より簡潔な表現が可能になります。

```
/* Recommended */
color: #ebc;
```

4.1.12 Important Declarations

important宣言の使用は避けてください。

これらの宣言は、CSS の自然なカスケードを壊し、スタイルを推論したり構成したりすることを困難にします。代わりに、セレクタを使用してプロパティを上書きしてください。

4.1.13 Hacks

ユーザーエージェントの検出やCSSハックは避けて、まずは別の方法を試してみましょう。

ユーザーエージェントの検出や、特殊なCSSフィルター、回避策、ハックによって、スタイリングの違いに対処したくなるものです。どちらのアプローチも、効率的で管理しやすいコードベースを実現・維持するための最後の手段であると考えるべきでしょう。別の言い方をすれば、プロジェクトは最も抵抗の少ない方法を取る傾向があるため、検出やハッキングを自由に行うことは、長い目で見ればプロジェクトに損害を与えます。つまり、検知とハッキングの使用を許可し、簡単にすることは、検知とハッキングをより頻繁に使用することを意味します-より頻繁とは、あまりにも頻繁です。

4.2 CSS Formatting Rules

4.2.1 宣言の順序

宣言はアルファベット順に並べ、覚えやすく保守しやすい方法で一貫したコードを実現します。

ベンダープレフィックス固有の接頭辞は無視する。ただし、ある CSS 特性に対して複数のベンダー固有の接頭辞がある場合は、ソートを維持する必要があります（例：-moz 接頭辞が -webkit よりも前に来るなど）。

```css
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

プロパティの順番を指定するこ

Cascading Style Sheetsのプロパティの順番はバラバラでもいい？

4.2.2 Block Content Indentation

ブロックの内容をすべてインデントする。

ブロックの内容、つまりルールの中のルールや宣言はすべてインデントすることで、階層構造を反映させ、理解を深めることができます。

4.2.3 Declaration Stops

すべての宣言の後にセミコロンを使用します。

一貫性と拡張性の理由から、すべての宣言をセミコロンで終わらせてください。

```css
/* Not recommended */
.test {
  display: block;
  height: 100px
}
```

height: 100px; セミコロンを入れます。

4.2.4 Property Name Stops

プロパティ名のコロンの後にスペースを入れてください。

一貫性を保つため、propertyとvalueの間には常に半角スペースを入れる（propertyとコロンの間にはスペースを入れない）。

```css
/* Recommended */
h3 {
  font-weight: bold;
}
```

4.2.5 Declaration Block Separation

最後のセレクタと宣言ブロックの間にはスペースを入れてください。

最後のセレクタと宣言ブロックの開始波括弧の間には、常に半角のスペースを入れてください。

開始波括弧は、ルール内の最後のセレクタと同じ行になければなりません。

```css
/* Not recommended: missing space */
.video{
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
.video
{
  margin-top: 1em;
}
/* Recommended */
.video {
  margin-top: 1em;
}
```

4.2.6　Selector and Declaration Separation

セレクタと宣言は改行で区切る。

セレクタと宣言は必ず改行してください。

```css
/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

4.2.7 Rule Separation

ルールは改行で区切ってください。

ルールとルールの間には必ず空白行（2行の改行）を入れてください。

4.2.8 CSS Quotation Marks

属性セレクタやプロパティ値には、二重引用符（""）ではなく一重引用符（''）を使用します。

URI の値 (url()) には引用符を使用しないでください。

例外 例外：@charsetルールを使用する必要がある場合、二重引用符を使用します。

4.3 CSS Meta Rules

4.3.1 Section Comments

セクションコメント（オプション）でセクションをグループ化します。

可能であれば、コメントを使用してスタイルシートのセクションをグループ化します。セクションは改行で区切る。

```css
/* Header */

.adw-header {}

/* Footer */

.adw-footer {}

/* Gallery */

.adw-gallery {}

```

以上Google HTML/CSS Style Guide[https://google.github.io/styleguide/htmlcssguide.html](https://google.github.io/styleguide/htmlcssguide.html)から私の理解を深めるための解説でした。

4.2.1 宣言の順序　宣言はアルファベット順に並べると覚えやすく保守しやすい方法で一貫したコードを実現します。とあります。これを自動でやってみたいと思います。

## stylelint導入

Node.jsが既にインストールされている必要があります。

```shell
$ node -v
```

vXX.XX.X などバージョンが表示されなかったら、Node.jsをインストールする。

```shell
$ npm -v
```

.git ファイルがあるディレクトリに移動する。(githubのローカルリポジトリ)

### package.json の作成　　

```shell
$ npm init -y
```

### npm パッケージのインストール

```shell
$ npm install --save-dev stylelint stylelint-config-standard
```

### vscode のPrettieと同時に実行したいので以下のコマンドを実行する

```shell
npm install --save-dev stylelint-config-prettier
```

### stylelintの設定ファイルを作成する

```shell
$ touch .stylelintrc.json
```

### .stylelintrc.json の中身は

```shell
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```

### stylelintの実行方法

```shell
% npx stylelint css/*.css 
```

## .gitignore の作成

.gitignoreファイルは、git対象からファイル、ディレクトリを外します。

```shell
% touch .gitignore
```

.gitignoreファイルには以下を記載する

```.gitignore
# ファイルを指定する
.DS_Store
.stylelintrc.json
package.json
package-lock.json

# ディレクトリを指定する
node_modules/
```

stylelint公式ドキュメント
[https://stylelint.io/user-guide/get-started](https://stylelint.io/user-guide/get-started)