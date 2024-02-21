"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[5519],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,p=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,o(o({ref:e},s),{},{components:t})):a.createElement(k,o({ref:e},s))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[d]="string"==typeof n?n:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62658:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:88,sidebar_label:"\ud83d\udc39 Anchor\u5230Typescript",sidebar_class_name:"green"},o="\ud83d\udc39 Anchor \u5230 Typescript",l={unversionedId:"module5/anchor-on-the-front-end/anchor-into-typescript/README",id:"module5/anchor-on-the-front-end/anchor-into-typescript/README",title:"\ud83d\udc39 Anchor \u5230 Typescript",description:"\u8981\u4f7f\u7528\u524d\u7aef\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a Anchor Program \u5bf9\u8c61\u3002",source:"@site/docs/Solana-Co-Learn/module5/anchor-on-the-front-end/anchor-into-typescript/README.md",sourceDirName:"module5/anchor-on-the-front-end/anchor-into-typescript",slug:"/module5/anchor-on-the-front-end/anchor-into-typescript/",permalink:"/solana-co-learn/Solana-Co-Learn/module5/anchor-on-the-front-end/anchor-into-typescript/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module5/anchor-on-the-front-end/anchor-into-typescript/README.md",tags:[],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1708494134,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:88,frontMatter:{sidebar_position:88,sidebar_label:"\ud83d\udc39 Anchor\u5230Typescript",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Anchor on the front-end",permalink:"/solana-co-learn/Solana-Co-Learn/module5/anchor-on-the-front-end/"},next:{title:"\ud83c\udfa5 \u6253\u9020\u4e00\u4e2a\u66f4\u597d\u7684\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f",permalink:"/solana-co-learn/Solana-Co-Learn/module5/anchor-on-the-front-end/build-a-better-movie-review-program/"}},p={},c=[{value:"IDL\uff08\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\uff09",id:"idl\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00",level:2},{value:"Provider \u4f9b\u5e94\u5546",id:"provider-\u4f9b\u5e94\u5546",level:2},{value:"\u7a0b\u5e8f",id:"\u7a0b\u5e8f",level:2},{value:"\u6458\u8981",id:"\u6458\u8981",level:2},{value:"<code>Anchor MethodsBuilder</code> \u4f7f\u7528",id:"anchor-methodsbuilder-\u4f7f\u7528",level:2},{value:"\u53d1\u9001\u4ea4\u6613",id:"\u53d1\u9001\u4ea4\u6613",level:2},{value:"\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237",id:"\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237",level:2},{value:"\u793a\u4f8b\u6458\u8981",id:"\u793a\u4f8b\u6458\u8981",level:3}],s={toc:c},d="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(d,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-anchor-\u5230-typescript"},"\ud83d\udc39 Anchor \u5230 Typescript"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u524d\u7aef\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\uff0c\u901a\u8fc7\u7ed3\u5408\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u6765\u4e0e\u7279\u5b9a\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\uff0c\u6211\u4eec\u9700\u8981\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Connection")," - \u96c6\u7fa4\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," - \u7528\u4e8e\u652f\u4ed8\u548c\u7b7e\u7f72\u4ea4\u6613\u7684\u9ed8\u8ba4\u5bc6\u94a5\u5bf9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Provider")," - \u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"Connection")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," \u5c01\u88c5\u5230\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Solana")," \u96c6\u7fa4\u4e2d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDL")," - \u8868\u793a\u7a0b\u5e8f\u7ed3\u6784\u7684\u6587\u4ef6")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u9010\u9879\u5ba1\u89c6\uff0c\u4ee5\u66f4\u597d\u5730\u7406\u89e3\u6240\u6709\u4e8b\u7269\u4e4b\u95f4\u7684\u8054\u7cfb\u3002"),(0,r.kt)("h2",{id:"idl\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00"},"IDL\uff08\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\uff09"),(0,r.kt)("p",null,"\u5f53\u6784\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor")," \u7a0b\u5e8f\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor")," \u4f1a\u751f\u6210\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL")," \u7684 JSON \u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IDL")," \u6587\u4ef6\u5305\u542b\u7a0b\u5e8f\u7684\u7ed3\u6784\uff0c\u5e76\u7531\u5ba2\u6237\u7aef\u7528\u4e8e\u4e86\u89e3\u5982\u4f55\u4e0e\u7279\u5b9a\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL")," \u7f16\u5199\u8ba1\u6570\u5668\u7a0b\u5e8f\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "version": "0.1.0",\n   "name": "counter",\n   "instructions": [\n     {\n       "name": "initialize",\n       "accounts": [\n         { "name": "counter", "isMut": true, "isSigner": true },\n         { "name": "user", "isMut": true, "isSigner": true },\n         { "name": "systemProgram", "isMut": false, "isSigner": false }\n       ],\n       "args": []\n     },\n     {\n       "name": "increment",\n       "accounts": [\n         { "name": "counter", "isMut": true, "isSigner": false },\n         { "name": "user", "isMut": false, "isSigner": true }\n       ],\n       "args": []\n     }\n   ],\n   "accounts": [\n     {\n       "name": "Counter",\n       "type": {\n         "kind": "struct",\n         "fields": [{ "name": "count", "type": "u64" }]\n       }\n     }\n   ]\n}\n')),(0,r.kt)("h2",{id:"provider-\u4f9b\u5e94\u5546"},"Provider \u4f9b\u5e94\u5546"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL")," \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\u4e4b\u524d\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u5bf9\u8c61\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u5bf9\u8c61\u4ee3\u8868\u4e86\u4e24\u4e2a\u4e3b\u8981\u90e8\u5206\u7684\u7ed3\u5408\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Connection")," - \u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Solana")," \u96c6\u7fa4\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"devnet"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," - \u7528\u4e8e\u652f\u4ed8\u548c\u7b7e\u7f72\u4ea4\u6613\u7684\u6307\u5b9a\u5730\u5740")),(0,r.kt)("p",null,"\u63a5\u7740\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u5c31\u80fd\u591f\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"Solana")," \u533a\u5757\u94fe\u53d1\u9001\u4ea4\u6613\uff0c\u5e76\u5728\u53d1\u9001\u7684\u4ea4\u6613\u4e2d\u52a0\u5165\u94b1\u5305\u7684\u7b7e\u540d\u3002"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Solana")," \u94b1\u5305\u63d0\u4f9b\u5546\u7684\u524d\u7aef\u65f6\uff0c\u6240\u6709\u7684\u5916\u90e8\u4ea4\u6613\u4ecd\u7136\u9700\u8981\u901a\u8fc7\u63d0\u793a\u7528\u6237\u8fdb\u884c\u6279\u51c6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AnchorProvider")," \u6784\u9020\u51fd\u6570\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection")," - \u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Solana")," \u96c6\u7fa4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Connection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," \u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opts")," - \u53ef\u9009\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u786e\u8ba4\u9009\u9879\uff0c\u5982\u679c\u672a\u63d0\u4f9b\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * \u7528\u4e8e\u53d1\u9001\u7531\u4f9b\u5e94\u5546\u652f\u4ed8\u548c\u7b7e\u7f72\u7684\u4ea4\u6613\u7684\u7f51\u7edc\u548c\u94b1\u5305\u4e0a\u4e0b\u6587\u3002\n */\nexport class AnchorProvider implements Provider {\n  readonly publicKey: PublicKey;\n\n  /**\n   * @param connection \u7a0b\u5e8f\u90e8\u7f72\u7684\u96c6\u7fa4\u8fde\u63a5\u3002\n   * @param wallet \u7528\u4e8e\u652f\u4ed8\u548c\u7b7e\u7f72\u6240\u6709\u4ea4\u6613\u7684\u94b1\u5305\u3002\n   * @param opts \u9ed8\u8ba4\u4f7f\u7528\u7684\u4ea4\u6613\u786e\u8ba4\u9009\u9879\u3002\n   */\n  constructor(\n    readonly connection: Connection,\n    readonly wallet: Wallet,\n    readonly opts: ConfirmOptions\n  ) {\n    this.publicKey = wallet.publicKey;\n  }\n  ...\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"@solana/wallet-adapter-react")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useWallet")," \u94a9\u5b50\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \u5bf9\u8c61\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor Provider")," \u671f\u671b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \u5bf9\u8c61\u4e0d\u517c\u5bb9\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u8ba9\u6211\u4eec\u6765\u6bd4\u8f83\u4e00\u4e0b\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnchorWallet")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"AnchorWallet")," \u548c\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"useWallet")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WalletContextState"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WalletContextState")," \u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\uff0c\u4f46\u662f\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AnchorWallet")," \u6765\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AnchorWallet {\n    publicKey: PublicKey;\n    signTransaction(transaction: Transaction): Promise<Transaction>;\n    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface WalletContextState {\n    autoConnect: boolean;\n    wallets: Wallet[];\n    wallet: Wallet | null;\n    publicKey: PublicKey | null;\n    connecting: boolean;\n    connected: boolean;\n    disconnecting: boolean;\n    select(walletName: WalletName): void;\n    connect(): Promise<void>;\n    disconnect(): Promise<void>;\n    sendTransaction(transaction: Transaction, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;\n    signTransaction: SignerWalletAdapterProps['signTransaction'] | undefined;\n    signAllTransactions: SignerWalletAdapterProps['signAllTransactions'] | undefined;\n    signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;\n}\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"useAnchorWallet")," \u94a9\u5b50\u6765\u83b7\u53d6\u517c\u5bb9\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"AnchorWallet")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"useConnection")," \u94a9\u5b50\u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Solana")," \u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"AnchorProvider")," \u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"Provider")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvider")," \u6765\u8bbe\u7f6e\u5ba2\u6237\u7aef\u7684\u9ed8\u8ba4\u63d0\u4f9b\u7a0b\u5e8f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react"\nimport { AnchorProvider, setProvider } from "@project-serum/anchor"\n\nconst { connection } = useConnection()\nconst wallet = useAnchorWallet()\n\nconst provider = new AnchorProvider(connection, wallet, {})\nsetProvider(provider)\n')),(0,r.kt)("h2",{id:"\u7a0b\u5e8f"},"\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u6700\u540e\u4e00\u6b65\u662f\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\uff0c\u4ee3\u8868\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u4e8b\u7269\u7684\u7ec4\u5408\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"IDL")),"\uff1a\u5c55\u793a\u4e86\u7a0b\u5e8f\u7684\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Provider")),"\uff1a\u8d1f\u8d23\u4e0e\u96c6\u7fa4\u5efa\u7acb\u8fde\u63a5\u5e76\u7b7e\u7f72 ",(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Connection"),"\u3002")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5bfc\u5165\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL"),"\uff0c\u5e76\u660e\u786e\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"programId"),"\uff0c\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"programId"),"\u901a\u5e38\u4f1a\u5305\u542b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"IDL"),"\u4e2d\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5355\u72ec\u58f0\u660e\u3002"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u7a0b\u5e8f\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u7279\u5b9a\u5730\u6307\u5b9a\u63d0\u4f9b\u7a0b\u5e8f\uff0c\u7cfb\u7edf\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u7684\u6700\u7ec8\u8bbe\u7f6e\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import idl from "./idl.json";\nimport { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";\nimport { Program, Idl, AnchorProvider, setProvider } from "@project-serum/anchor";\n\nconst { connection } = useConnection();\nconst wallet = useAnchorWallet();\n\nconst provider = new AnchorProvider(connection, wallet, {});\nsetProvider(provider);\n\nconst programId = new PublicKey(idl.metadata.address);\nconst program = new Program(idl as Idl, programId);\n')),(0,r.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u7b80\u8981\u603b\u7ed3\u4e00\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"IDL"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"useConnection")," \u94a9\u5b50\u4e0e\u96c6\u7fa4\u5efa\u7acb\u8fde\u63a5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"useAnchorWallet")," \u94a9\u5b50\u83b7\u53d6\u517c\u5bb9\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"AnchorWallet"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"AnchorProvider")," \u6784\u9020\u51fd\u6570\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"Provider")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"setProvider")," \u8bbe\u7f6e\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Provider"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"programId"),"\uff0c\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"IDL")," \u4e2d\u9009\u62e9\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Program")," \u6784\u9020\u51fd\u6570\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"Program")," \u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"anchor-methodsbuilder-\u4f7f\u7528"},(0,r.kt)("inlineCode",{parentName:"h2"},"Anchor MethodsBuilder")," \u4f7f\u7528"),(0,r.kt)("p",null,"\u4e00\u65e6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," \u5bf9\u8c61\u8bbe\u7f6e\u5b8c\u6210\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MethodsBuilder")," \u6765\u6839\u636e\u7a0b\u5e8f\u4e2d\u7684\u6307\u4ee4\u6784\u5efa\u4ea4\u6613\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MethodsBuilder")," \u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDL"),"\uff0c\u4e3a\u8c03\u7528\u7a0b\u5e8f\u6307\u4ee4\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5316\u683c\u5f0f\uff0c\u57fa\u672c\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"program")),"\uff1a\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"programId")," \u6307\u5b9a\u7684\u88ab\u8c03\u7528\u7a0b\u5e8f\uff0c\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"li"},"Program")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"methods")),"\uff1a\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"li"},"IDL")," \u7684\u6240\u6709\u6307\u4ee4\uff0c\u7528\u4e8e\u6784\u5efa\u7a0b\u5e8f\u4e2d\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"API"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"instructionName")),"\uff1a\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"IDL")," \u4e2d\u8c03\u7528\u7684\u7279\u5b9a\u6307\u4ee4\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"args")),"\uff1a\u4f20\u9012\u7ed9\u6307\u4ee4\u7684\u53c2\u6570\uff0c\u5305\u62ec\u5728\u6307\u4ee4\u540d\u79f0\u540e\u7684\u62ec\u53f7\u4e2d\u6240\u9700\u7684\u4efb\u4f55\u6307\u4ee4\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"accounts")),"\uff1a\u9700\u8981\u4f5c\u4e3a\u8f93\u5165\u63d0\u4f9b\u7684\u4e00\u4efd\u6307\u4ee4\u6240\u9700\u7684\u8d26\u6237\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"signers")),"\uff1a\u4efb\u4f55\u9700\u8981\u8f93\u5165\u7684\u989d\u5916\u7b7e\u7f72\u4eba\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"rpc")),"\uff1a\u521b\u5efa\u5e76\u53d1\u9001\u5e26\u6709\u6307\u5b9a\u6307\u4ee4\u7684\u5df2\u7b7e\u540d\u4ea4\u6613\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"TransactionSignature"),"\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u6307\u793a\u4e2d\u6ca1\u6709\u9664\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," \u6307\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u4e4b\u5916\u7684\u5176\u4ed6\u7b7e\u7f72\u4eba\uff0c\u4f60\u53ef\u4ee5\u7701\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},".signers([])")," \u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u53d1\u9001\u4ea4\u6613\nconst transactionSignature = await program.methods\n  .instructionName(instructionDataInputs)\n  .accounts({})\n  .signers([])\n  .rpc();\n")),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},".rpc()")," \u66f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".transaction()")," \u6765\u76f4\u63a5\u6784\u5efa\u4ea4\u6613\uff0c\u4ee5\u53ca\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction")," \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u521b\u5efa\u4ea4\u6613\nconst transaction = await program.methods\n  .instructionName(instructionDataInputs)\n  .accounts({})\n  .transaction();\n\n// \u53d1\u9001\u4ea4\u6613\nawait sendTransaction(transaction, connection);\n")),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u683c\u5f0f\u6765\u6784\u5efa\u4e00\u4e2a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".instruction")," \u7684\u6307\u4ee4\uff0c\u7136\u540e\u624b\u52a8\u5c06\u6307\u4ee4\u6dfb\u52a0\u5230\u65b0\u7684\u4ea4\u6613\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u521b\u5efa\u7b2c\u4e00\u6761\u6307\u4ee4\nconst instructionOne = await program.methods\n  .instructionOneName(instructionOneDataInputs)\n  .accounts({})\n  .instruction();\n\n// \u521b\u5efa\u7b2c\u4e8c\u6761\u6307\u4ee4\nconst instructionTwo = await program.methods\n  .instructionTwoName(instructionTwoDataInputs)\n  .accounts({})\n  .instruction();\n\n// \u5c06\u4e24\u4e2a\u6307\u4ee4\u6dfb\u52a0\u5230\u4e00\u4e2a\u4ea4\u6613\u4e2d\nconst transaction = new Transaction().add(instructionOne, instructionTwo);\n\n// \u53d1\u9001\u4ea4\u6613\nawait sendTransaction(transaction, connection);\n")),(0,r.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Anchor MethodsBuilder")," \u4e3a\u4e0e\u94fe\u4e0a\u7a0b\u5e8f\u4ea4\u4e92\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u7b80\u6d01\u4e14\u7075\u6d3b\u7684\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u6784\u5efa\u6307\u4ee4\u3001\u4ea4\u6613\uff0c\u6216\u8005\u4f7f\u7528\u76f8\u540c\u7684\u683c\u5f0f\u6784\u5efa\u548c\u53d1\u9001\u4ea4\u6613\uff0c\u65e0\u9700\u624b\u52a8\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316\u8d26\u6237\u6216\u6307\u4ee4\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u53d1\u9001\u4ea4\u6613"},"\u53d1\u9001\u4ea4\u6613"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"@solana/wallet-adapter-react")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"useWallet()")," \u94a9\u5b50\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction")," \u65b9\u6cd5\uff0c\u901a\u8fc7\u94b1\u5305\u9002\u914d\u5668\u53d1\u9001\u4ea4\u6613\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction")," \u65b9\u6cd5\u4f1a\u5728\u53d1\u9001\u4e4b\u524d\u63d0\u793a\u8fde\u63a5\u7684\u94b1\u5305\u6279\u51c6\u548c\u7b7e\u7f72\u4ea4\u6613\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"{ signers: [] }")," \u6765\u6dfb\u52a0\u989d\u5916\u7684\u7b7e\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useWallet } from "@solana/wallet-adapter-react";\n\nconst { sendTransaction } = useWallet();\n\n...\n\nsendTransaction(transaction, connection);\n')),(0,r.kt)("p",null,"\u6216\u8005\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sendTransaction(transaction, connection, { signers: [] });\n")),(0,r.kt)("h2",{id:"\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237"},"\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237"),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"program")," \u5bf9\u8c61\u6765\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237\u7c7b\u578b\u3002\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," \u6765\u83b7\u53d6\u5355\u4e2a\u8d26\u6237\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"all()")," \u6765\u83b7\u53d6\u6307\u5b9a\u7c7b\u578b\u7684\u6240\u6709\u8d26\u6237\uff0c\u6216\u8005\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"memcmp")," \u6765\u7b5b\u9009\u8981\u83b7\u53d6\u7684\u8d26\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const account = await program.account.accountType.fetch(publickey);\n\nconst accounts = (await program.account.accountType.all());\n\nconst accounts =\n    (await program.account.accountType.all([\n      {\n        memcmp: {\n          offset: 8,\n          bytes: publicKey.toBase58(),\n        },\n      },\n    ]));\n")),(0,r.kt)("h3",{id:"\u793a\u4f8b\u6458\u8981"},"\u793a\u4f8b\u6458\u8981"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8ba1\u6570\u5668\u8d26\u6237\uff0c\u5e76\u5728\u5355\u4e2a\u4e8b\u52a1\u4e2d\u9012\u589e\u5b83\u3002\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u83b7\u53d6\u8ba1\u6570\u5668\u8d26\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const counter = Keypair.generate();\nconst transaction = new anchor.web3.Transaction();\n\nconst initializeInstruction = await program.methods\n  .initialize()\n  .accounts({\n    counter: counter.publicKey,\n  })\n  .instruction();\n\nconst incrementInstruction = await program.methods\n  .increment()\n  .accounts({\n    counter: counter.publicKey\n  })\n  .instruction();\n\ntransaction.add(initializeInstruction, incrementInstruction);\n\nconst transactionSignature = await sendTransaction(\n  transaction,\n  connection,\n  {\n    signers: [counter],\n  }\n).then((transactionSignature) => {\n  return transactionSignature\n})\n\nconst latestBlockHash = await connection.getLatestBlockhash()\nawait connection.confirmTransaction({\n  blockhash: latestBlockHash.blockhash,\n  lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,\n  signature: transactionSignature,\n})\n\nconst counterAccount = await program.account.counter.fetch(counter.publicKey)\n")))}m.isMDXComponent=!0}}]);