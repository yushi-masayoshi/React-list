import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yushi's React Application
        </p>
        <div className='App-content'>
          <a
          className="App-link"
          href="https://note-app-green-gamma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <button className='App-content-btn'>
            ノート作成アプリ
            </button>
        </a>
        <p className='App-content-text'>useReducerとuseContextによるState管理を実装しています。useReducerでは、追加や削除、アップデート（ノートの内容変更）の実装を行えるようにしています。</p>
        </div>
        <div className='App-content'>
          <a
          className="App-link"
          href="https://pokemon-app-gamma-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <button className='App-content-btn'>
            ポケモン図鑑
            </button>
          </a>
          <p className='App-content-text'>外部APIに接続して情報を表示しています。また、キーワードでポケモンを検索する機能を実装しています。</p>
        </div>
        <div className='App-content'>
          <a
          className="App-link"
          href="https://blog-app-chi-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <button className='App-content-btn'>
            ブログ投稿アプリ
            </button>
          </a>
          <p className='App-content-text'>FireBaseのローカルストレージ、google認証の機能を実装しています。</p>
        </div>
      </header>
    </div>
  );
}

export default App;
