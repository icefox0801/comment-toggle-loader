# comment-toggle-loader
Webpack loader for toggling javascript comment, avoiding hard code debug snippets in source code files.

## Installation
`npm i comment-toggle-loader -D`

## Usage
```javascript
{
  test: /\.js$/i,
  loader: 'comment-toggle-loader',
  query: {
    enable: process.env.NODE_ENV === 'development'
  }
}
```
Webpack will replace
```javascript
/* @debug@
console.info('Your debug info here');
*/
```
with
```javascript
console.info('Your debug info here');
```
It will remove comment with `query.match` in `development` environment and do nothing in `production` environment.
Meanwhile, the other comments not contain `query.match` will not be toggled.

## Config
+ `query.match`: Comments with `query.match` will be toggled. Default is `'@[\\w-]+@'`, which is a part of regular expression.
+ `query.enable`: Whether or not to enable comment toggling.
