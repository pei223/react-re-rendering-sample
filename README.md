# react-re-rendering-sample
Reactの再レンダリングのタイミングを見るサンプル

## Setup
```
npm i
npm run dev
```

各コンポーネントのレンダリングときにconsole出力しています。

表示するcommitを切り替えることで挙動の変化を見れます。



## コンポーネント構成
TODO

## 各Commit
### ca75b9e デフォルト状態
React.memoやPropの渡し方などの最適化を一歳していない状態。

`ParentComponent`の`message` stateを変更すると本来stateを持っている`ParentComponent`と`message`を参照する`ChildComponentWithStringProp`のみ再レンダリングすればいいのに、`ChildComponent`, `ChildComponentWithObjectProp`も再レンダリングされてしまう。


### ae77112 ChildComponent*にReact.memoを指定
ChildComponent*に全てReact.memoを指定。

PropsがないPure Componentである`ChildComponent`や、単純比較が可能なpremetiveな値のみのPropの`ChildComponentWithStringProp`は、`ParentComponent`の`name`や`age`といった参照していない値の変更時に再レンダリングがかからないようになる。

しかし、Object型のPropを持つ`ChildComponentWithObjectProp`は、本来関係のない`message`が更新された場合でも再レンダリングされてしまう。

`ParentComponent`で以下のように指定すると、毎回同じ値であっても毎回オブジェクトが再生成されるので、`ParentComponent`のstateが変更されて再レンダリングされると、`ChildComponentWithObjectProp`も再レンダリングされてしまう。

```
<ChildComponentWithObjectProp data={
    {
        age, name
    }
} />
```

### 2e160c7 ChildComponentWithObjectPropに変更前後のPropが同一かの判定処理追加
React.memoの第二引数に変更前後のPropが同一かの判定をする処理を追加。

`data`Propの`name`, `age`が両方とも同じなら同一のPropであると判定することで、以下の箇所のように`ParentComponent`で毎回同じ値でオブジェクトが再生成されても、参照していないstateである`message`が変更されても再レンダリングされなくなる。


```
<ChildComponentWithObjectProp data={
    {
        age, name
    }
} />
```

### 5230f32 ChildComponentWithObjectPropの変更前後のPropが同一かの判定処理を削除・Propのobjectをstateにする
`ChildComponentWithObjectProp`の変更前後のPropが同一かの判定処理を削除。
また、`ParentComponent`の`name`, `age`をまとめたObjectをstateにすることで、`ChildComponentWithObjectProp`にPropを渡すときに毎回Objectを生成しないようにした。

```
const [userData, setUserData] = useState({
    name: "",
    age: 1
})

...

<ChildComponentWithObjectProp data={
    userData
} />
```
