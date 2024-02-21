"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[4688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={sidebar_position:15,sidebar_label:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4ea4\u4e92\u811a\u672c",sidebar_class_name:"green",tags:["client-side-development","solana","rpc"]},i="\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c",o={unversionedId:"module1/client-side-development/build-an-interaction-script/README",id:"module1/client-side-development/build-an-interaction-script/README",title:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c",description:"\u4f60\u51c6\u5907\u597d\u4e0eSolana\u7f51\u7edc\u4ea4\u4e92\u4e86\u5417\uff1f",source:"@site/docs/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README.md",sourceDirName:"module1/client-side-development/build-an-interaction-script",slug:"/module1/client-side-development/build-an-interaction-script/",permalink:"/solana-co-learn/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README.md",tags:[{label:"client-side-development",permalink:"/solana-co-learn/Solana-Co-Learn/tags/client-side-development"},{label:"solana",permalink:"/solana-co-learn/Solana-Co-Learn/tags/solana"},{label:"rpc",permalink:"/solana-co-learn/Solana-Co-Learn/tags/rpc"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1708494134,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:15,frontMatter:{sidebar_position:15,sidebar_label:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4ea4\u4e92\u811a\u672c",sidebar_class_name:"green",tags:["client-side-development","solana","rpc"]},sidebar:"tutorialSidebar",previous:{title:"\u270d\u5c06\u6570\u636e\u5199\u5165\u533a\u5757\u94fe",permalink:"/solana-co-learn/Solana-Co-Learn/module1/client-side-development/write-data-to-the-blockchain/"},next:{title:"\u94b1\u5305\u548c\u524d\u7aef",permalink:"/solana-co-learn/Solana-Co-Learn/module1/wallets-and-frontends/"}},p={},s=[{value:"\ud83d\udea7 \u5728\u672c\u5730\u8bbe\u7f6e Solana \u5ba2\u6237\u7aef",id:"-\u5728\u672c\u5730\u8bbe\u7f6e-solana-\u5ba2\u6237\u7aef",level:2},{value:"\u2699 \u5ba2\u6237\u7aef\u811a\u672c\u7684\u8bbe\u7f6e",id:"-\u5ba2\u6237\u7aef\u811a\u672c\u7684\u8bbe\u7f6e",level:2},{value:"\ud83d\uddb1 \u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f",id:"-\u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f",level:2},{value:"\ud83d\udea2 \u6311\u6218 - SOL \u8f6c\u8d26\u811a\u672c",id:"-\u6311\u6218---sol-\u8f6c\u8d26\u811a\u672c",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...r}=e;return(0,l.kt)(d,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c"},"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c"),(0,l.kt)("p",null,"\u4f60\u51c6\u5907\u597d\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u4ea4\u4e92\u4e86\u5417\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u7f16\u5199\u4e00\u4e2a\u811a\u672c\uff0c\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\u5bf9\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"devnet")," ",(0,l.kt)("inlineCode",{parentName:"p"},"SOL"),"\u8fdb\u884c\u5145\u503c\uff0c\u5e76\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u4e0a\u7684\u73b0\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7a0b\u5e8f\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"ping"),"\u201d\u8ba1\u6570\u5668\uff1a\u6bcf\u6b21\u6211\u4eec\u89e6\u53d1\u5b83\uff0c\u5b83\u5c31\u4f1a\u8bb0\u5f55\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ping"),"\u884c\u4e3a\uff0c\u5e76\u589e\u52a0\u4e00\u4e2a\u8ba1\u6570\u5668\u3002\u7a0d\u540e\u6211\u4eec\u4f1a\u6df1\u5165\u4e86\u89e3",(0,l.kt)("inlineCode",{parentName:"p"},"Rust"),"\u548c\u81ea\u5df1\u7684\u7a0b\u5e8f\u5f00\u53d1\uff0c\u4f46\u73b0\u5728\u6211\u4eec\u5148\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"JS/TS"),"\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"-\u5728\u672c\u5730\u8bbe\u7f6e-solana-\u5ba2\u6237\u7aef"},"\ud83d\udea7 \u5728\u672c\u5730\u8bbe\u7f6e Solana \u5ba2\u6237\u7aef"),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6362\u4e00\u79cd\u65b9\u5f0f\u6765\u64cd\u4f5c - \u6211\u4eec\u5c06\u4e0d\u518d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"React/Next.js"),"\uff0c\u800c\u662f\u91c7\u7528\u7eaf",(0,l.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u6765\u6784\u5efa\u4e00\u4e2a\u672c\u5730\u5ba2\u6237\u7aef\u3002\u8fd9\u6837\u7684\u65b9\u6cd5\u6bd4\u642d\u5efa\u524d\u7aef\u5e76\u6784\u5efa\u590d\u6742\u7528\u6237\u754c\u9762\u8981\u5feb\u5f97\u591a\u3002\u4f60\u53ef\u4ee5\u5728\u5355\u72ec\u7684 TS \u6587\u4ef6\u4e2d\u8fdb\u884c\u5f00\u53d1\uff0c\u5e76\u901a\u8fc7\u5f02\u6b65\u65b9\u5f0f\u8ba9\u5b83\u4e0e\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5728\u4f60\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5de5\u4f5c\u533a\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u5939\uff0c\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u4fbf\u6377\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u5ba2\u6237\u7aef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-solana-client solana-intro-client\n")),(0,l.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u8be2\u95ee\u4f60\u662f\u5426\u8981\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"create-solana-client"),"\u8f6f\u4ef6\u5305\uff0c\u8bf7\u9009\u62e9\u201c\u662f\u201d\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u53ea\u9700\u5bfc\u822a\u5230\u65b0\u521b\u5efa\u7684\u76ee\u5f55\uff0c\u5e76\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd solana-intro-client\ncode .\n")),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5f00\u59cb\u4f60\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5ba2\u6237\u7aef\u5f00\u53d1\u4e4b\u65c5\u4e86\uff01"),(0,l.kt)("h2",{id:"-\u5ba2\u6237\u7aef\u811a\u672c\u7684\u8bbe\u7f6e"},"\u2699 \u5ba2\u6237\u7aef\u811a\u672c\u7684\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"create-solana-client")," \u7684\u597d\u5904\u5728\u4e8e\uff0c\u6211\u4eec\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u7f16\u5199\u5ba2\u6237\u7aef\u4ee3\u7801\uff01\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.ts"),"\uff0c\u5bfc\u5165\u5fc5\u8981\u7684\u4f9d\u8d56\u9879\uff0c\u5e76\u6dfb\u52a0\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"initializeKeypair")," \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import * as Web3 from '@solana/web3.js';\nimport * as fs from 'fs';\nimport dotenv from 'dotenv';\ndotenv.config();\n\nasync function main() {\n\n}\n\nmain()\n  .then(() => {\n    console.log('\u6267\u884c\u6210\u529f\u5b8c\u6210');\n    process.exit(0);\n  })\n  .catch((error) => {\n    console.log(error);\n    process.exit(1);\n  });\n")),(0,l.kt)("p",null,"\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," \u540e\uff0c\u4f60\u5c06\u770b\u5230\u811a\u672c\u5df2\u7ecf\u5f00\u59cb\u8fd0\u884c\uff01\u53ea\u9700\u4e00\u6761\u547d\u4ee4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Solana")," \u5ba2\u6237\u7aef\u5c31\u5df2\u8bbe\u7f6e\u5b8c\u6bd5\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"initializeKeypair")," \u51fd\u6570\u3002\u5982\u679c\u6211\u4eec\u6ca1\u6709\u5bc6\u94a5\u5bf9\uff0c\u5b83\u5c06\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u3002\u5728\u5bfc\u5165\u4e4b\u540e\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function initializeKeypair(connection: Web3.Connection): Promise<Web3.Keypair> {\n  // \u5982\u679c\u6ca1\u6709\u79c1\u94a5\uff0c\u751f\u6210\u65b0\u5bc6\u94a5\u5bf9\n  if (!process.env.PRIVATE_KEY) {\n    console.log('\u6b63\u5728\u751f\u6210\u65b0\u5bc6\u94a5\u5bf9... \ud83d\udddd\ufe0f');\n    const signer = Web3.Keypair.generate();\n\n    console.log('\u6b63\u5728\u521b\u5efa .env \u6587\u4ef6');\n    fs.writeFileSync('.env', `PRIVATE_KEY=[${signer.secretKey.toString()}]`);\n\n    return signer;\n  }\n\n  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];\n  const secretKey = Uint8Array.from(secret);\n  const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);\n  return keypairFromSecret;\n}\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u975e\u5e38\u806a\u660e - \u5982\u679c\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u6ca1\u6709\u79c1\u94a5\uff0c\u5b83\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\uff01"),(0,l.kt)("p",null,"\u4f60\u5df2\u7ecf\u975e\u5e38\u719f\u6089\u8fd9\u91cc\u7684\u64cd\u4f5c\u4e86 - \u6211\u4eec\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Web3.Keypair.generate()")," \u51fd\u6570\u5e76\u5c06\u7ed3\u679c\u5199\u5165\u672c\u5730\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},(0,l.kt)("inlineCode",{parentName:"a"},"dotenv"))," \u6587\u4ef6\u3002\u521b\u5efa\u540e\uff0c\u6211\u4eec\u8fd4\u56de\u5bc6\u94a5\u5bf9\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u5728\u811a\u672c\u7684\u5176\u4ed6\u90e8\u5206\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," \u8fd0\u884c\u811a\u672c\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function main() {\n  const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));\n  const signer = await initializeKeypair(connection);\n\n  console.log(\"\u516c\u94a5\uff1a\", signer.publicKey.toBase58());\n}\n")),(0,l.kt)("p",null,"\u4f60\u5e94\u8be5\u4f1a\u5728\u7ec8\u7aef\u4e2d\u770b\u5230\u7c7b\u4f3c\u7684\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"> solana-course-client@1.0.0 start\n> ts-node src/index.ts\n\n\u6b63\u5728\u751f\u6210\u65b0\u5bc6\u94a5\u5bf9... \ud83d\udddd\ufe0f\n\u6b63\u5728\u521b\u5efa .env \u6587\u4ef6\n\u516c\u94a5: jTAsqBrjsYp4uEJNmED5R66gHPnFW4wvQrbmFG3c4QS\n\u6267\u884c\u6210\u529f\u5b8c\u6210\n")),(0,l.kt)("p",null,"\u5f88\u597d\uff01\u5982\u679c\u4f60\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e32\u5b57\u8282\u683c\u5f0f\u7684\u79c1\u94a5\uff01\u8bf7\u6ce8\u610f\u4fdd\u5bc6\u6b64\u6587\u4ef6\u3002\u5982\u679c\u4f60\u5c06\u6b64\u6587\u4ef6\u63a8\u9001\u5230\u516c\u5171\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GitHub")," \u5b58\u50a8\u5e93\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5176\u4e2d\u7684\u8d44\u91d1\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u4e0d\u8981\u7528\u5b83\u5904\u7406\u771f\u5b9e\u7684\u8d27\u5e01\u3002"),(0,l.kt)("p",null,"\u518d\u6b21\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," \u4f1a\u4f7f\u7528\u73b0\u6709\u7684\u79c1\u94a5\u800c\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\u3002"),(0,l.kt)("p",null,"\u4fdd\u6301\u6d4b\u8bd5\u8d26\u6237\u7684\u72ec\u7acb\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u4e5f\u662f\u8fd9\u4e2a\u811a\u672c\u7279\u522b\u9177\u7684\u539f\u56e0 - \u5b83\u6d88\u9664\u4e86\u521b\u5efa\u548c\u7ba1\u7406\u6d4b\u8bd5\u94b1\u5305\u7684\u9ebb\u70e6\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u8fd8\u80fd\u81ea\u52a8\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"devnet SOL")," \u5c31\u66f4\u597d\u4e86\u3002\u54e6\u7b49\u7b49\uff0c\u6211\u4eec\u786e\u5b9e\u53ef\u4ee5\uff01"),(0,l.kt)("p",null,"\u770b\u770b\u8fd9\u4e2a\u8d85\u9177\u7684\u7a7a\u6295\u529f\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function airdropSolIfNeeded(\n  signer: Web3.Keypair,\n  connection: Web3.Connection\n) {\n  // \u68c0\u67e5\u4f59\u989d\n  const balance = await connection.getBalance(signer.publicKey);\n  console.log('\u5f53\u524d\u4f59\u989d\u4e3a', balance / Web3.LAMPORTS_PER_SOL, 'SOL');\n\n  // \u5982\u679c\u4f59\u989d\u5c11\u4e8e 1 SOL\uff0c\u6267\u884c\u7a7a\u6295\n  if (balance / Web3.LAMPORTS_PER_SOL < 1) {\n    console.log('\u6b63\u5728\u7a7a\u6295 1 SOL');\n    const airdropSignature = await connection.requestAirdrop(\n      signer.publicKey,\n      Web3.LAMPORTS_PER_SOL\n    );\n\n    const latestBlockhash = await connection.getLatestBlockhash();\n\n    await connection.confirmTransaction({\n      blockhash: latestBlockhash.blockhash,\n      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,\n      signature: airdropSignature,\n    });\n\n    const newBalance = await connection.getBalance(signer.publicKey);\n    console.log('\u65b0\u4f59\u989d\u4e3a', newBalance / Web3.LAMPORTS_PER_SOL, 'SOL');\n  }\n}\n")),(0,l.kt)("p",null,"\u8fd9\u53ef\u80fd\u770b\u5f97\u8ba9\u4eba\u6709\u4e9b\u5934\u5927\uff0c\u4f46\u5176\u5b9e\u4f60\u5bf9\u4e8e\u8fd9\u91cc\u6b63\u5728\u53d1\u751f\u7684\u4e8b\u60c5\u5e94\u8be5\u76f8\u5f53\u4e86\u89e3\uff01\u6211\u4eec\u6b63\u5728\u501f\u52a9\u6211\u4eec\u719f\u6089\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"getBalance"),"\u6765\u67e5\u770b\u6211\u4eec\u7684\u4f59\u989d\u662f\u5426\u4e0d\u8db3\uff0c\u5982\u679c\u4e0d\u8db3\uff0c\u6211\u4eec\u5c31\u4f1a\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"requestAirdrop"),"\u51fd\u6570\u6765\u83b7\u53d6\u4e00\u4e9b\u8d44\u91d1\u3002"),(0,l.kt)("p",null,"\u533a\u5757\u54c8\u5e0c\u548c\u533a\u5757\u9ad8\u5ea6\u662f\u8bc6\u522b\u533a\u5757\u7684\u6807\u8bc6\u7b26\uff0c\u7528\u4ee5\u786e\u4fdd\u6211\u4eec\u662f\u6700\u65b0\u7684\uff0c\u4e5f\u4e0d\u4f1a\u53d1\u9001\u9648\u65e7\u7684\u4ea4\u6613\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\uff0c\u522b\u8bd5\u56fe\u53cd\u590d\u8fd0\u884c\u5b83\uff0c\u56e0\u4e3a\u6c34\u9f99\u5934\u6709\u51b7\u5374\u65f6\u95f4\uff0c\u5982\u679c\u4f60\u4e0d\u505c\u5730\u5411\u5b83\u8bf7\u6c42\uff0c\u8bf7\u6c42\u5c06\u4f1a\u5931\u8d25\u3002"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u6216\u83b7\u53d6\u5bc6\u94a5\u5bf9\u4e4b\u540e\uff0c\u8bf7\u786e\u4fdd\u66f4\u65b0",(0,l.kt)("inlineCode",{parentName:"p"},"initializeKeypair"),"\u51fd\u6570\uff0c\u4ee5\u4fbf\u8c03\u7528\u7a7a\u6295\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5f53\u751f\u6210\u5bc6\u94a5\u5bf9\u65f6\nawait airdropSolIfNeeded(signer, connection);\n\n// \u5f53\u4ece\u5bc6\u94a5\u89e3\u6790\u65f6\nawait airdropSolIfNeeded(keypairFromSecret, connection);\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5f53\u4f60\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"npm run start"),"\u65f6\uff0c\u4f60\u5c06\u770b\u5230\u7a7a\u6295\u7684\u60c5\u51b5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u5f53\u524d\u4f59\u989d\u4e3a 0 SOL\n\u6b63\u5728\u7a7a\u6295 1 SOL\n\u65b0\u7684\u4f59\u989d\u4e3a 1 SOL\n\u516c\u5171\u5bc6\u94a5: 7Fw3bXskk5eonycvET6BSufxAsuNudvuxF7MMnS8KMqX\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u5927\u5c55\u8eab\u624b\u4e86\uff0c\u8ba9\u6211\u4eec\u4e00\u5c55\u62f3\u811a\u5427 \ud83e\udd4a\uff01"),(0,l.kt)("h2",{id:"-\u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f"},"\ud83d\uddb1 \u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u73b0\u5728\u662f\u65f6\u5019\u8ba9\u6211\u4eec\u7684\u5ba2\u6237\u7aef\u663e\u793a\u5b9e\u529b\u4e86\u3002\u6211\u4eec\u5c06\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u4e0a\u7684\u73b0\u6709\u7a0b\u5e8f\u4e2d\u5199\u5165\u6570\u636e\u3002\u6709\u4eba\u53ef\u80fd\u4f1a\u4ee5\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u5f00\u53d1\u53ea\u548c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Rust"),"\u7f16\u5199\u7a0b\u5e8f\u6709\u5173\uff0c\u5176\u5b9e\u4e0d\u7136\uff01\u5927\u90e8\u5206\u533a\u5757\u94fe\u5f00\u53d1\u5b9e\u9645\u4e0a\u4e0e\u73b0\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6784\u5efa\u6570\u767e\u4e2a\u53ea\u4e0e\u73b0\u6709\u7a0b\u5e8f\u4ea4\u4e92\u7684\u5e94\u7528\uff0c\u8fd9\u5c31\u662f\u771f\u6b63\u6709\u8da3\u7684\u5730\u65b9\uff01\u6211\u4eec\u4f1a\u8ba9\u4e8b\u60c5\u4fdd\u6301\u7b80\u5355\u2014\u2014\u6211\u4eec\u7684\u5ba2\u6237\u7aef\u4f1a\u53d1\u9001\u4e00\u4e2a\u8ba1\u6570\u5668\u7a0b\u5e8f\uff0c\u5e76\u9012\u589e\u8ba1\u6570\u5668\u3002\u8fd9\u6837\u4f60\u5c31\u80fd\u5728\u7f51\u7edc\u4e0a\u516c\u544a\u4f60\u662f\u4e00\u540d\u5f00\u53d1\u8005\u4e86\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u7aef\u5b83\u5c06\u4e0e\u54ea\u4e9b\u7a0b\u5e8f\u4ea4\u4e92\u3002\u5728\u5bfc\u5165\u8bed\u53e5\u4e0b\u65b9\u7684\u5f00\u5934\u90e8\u5206\uff0c\u6dfb\u52a0\u8fd9\u4e9b\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const PROGRAM_ID = new Web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")\nconst PROGRAM_DATA_PUBLIC_KEY = new Web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PROGRAM_ID")," \u662f\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"ping"),"\u201d\u7a0b\u5e8f\u672c\u8eab\u7684\u5730\u5740\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"PROGRAM_DATA_PUBLIC_KEY")," \u662f\u5b58\u50a8\u7a0b\u5e8f\u6570\u636e\u7684\u8d26\u6237\u5730\u5740\u3002\u8bb0\u5f97\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u6267\u884c\u4ee3\u7801\u548c\u72b6\u6001\u6570\u636e\u5728",(0,l.kt)("inlineCode",{parentName:"strong"},"Solana"),"\u4e0a\u662f\u5206\u5f00\u5b58\u50a8\u7684\uff01")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u6dfb\u52a0\u4e0b\u5217\u51fd\u6570\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u8c03\u7528\u201c",(0,l.kt)("inlineCode",{parentName:"p"},"ping"),"\u201d\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function pingProgram(connection: Web3.Connection, payer: Web3.Keypair) {\n  const transaction = new Web3.Transaction()\n  const instruction = new Web3.TransactionInstruction({\n    // Instructions need 3 things\n\n    // 1. The public keys of all the accounts the instruction will read/write\n    keys: [\n      {\n        pubkey: PROGRAM_DATA_PUBLIC_KEY,\n        isSigner: false,\n        isWritable: true\n      }\n    ],\n\n    // 2. The ID of the program this instruction will be sent to\n    programId: PROGRAM_ID\n\n    // 3. Data - in this case, there's none!\n  })\n\n  transaction.add(instruction)\n  const transactionSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [payer])\n\n  console.log(\n    `Transaction https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`\n    )\n}\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u5e76\u4e0d\u50cf\u770b\u8d77\u6765\u90a3\u4e48\u590d\u6742\uff01\u4f60\u5df2\u7ecf\u719f\u6089\u8fd9\u90e8\u5206\u4e86\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u4ea4\u6613"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5236\u5b9a\u4e00\u9879\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u6307\u4ee4\u6dfb\u52a0\u5230\u4ea4\u6613\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u4ea4\u6613\u53d1\u9001\u5230\u7f51\u7edc\uff01")),(0,l.kt)("p",null,"\u56de\u987e\u4e00\u4e0b\u4e0a\u9762\u7684\u4ee3\u7801\u6ce8\u91ca\uff0c\u4e86\u89e3\u6307\u4ee4\u7684\u4e09\u4e2a\u4e3b\u8981\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d\u5173\u952e\u7684\u90e8\u5206\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"keys"),"\u503c\u2014\u2014\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6307\u4ee4\u5c06\u8bfb\u53d6\u6216\u5199\u5165\u7684\u6bcf\u4e2a\u8d26\u6237\u7684\u5143\u6570\u636e\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u544a\u8bc9\u4f60\u8be5\u6307\u4ee4\u5c06\u5904\u7406\u54ea\u4e9b\u8d26\u6237\u3002"),(0,l.kt)("p",null,"\u4f60\u5fc5\u987b\u77e5\u9053\u8fd9\u4e2a\u662f\u4ec0\u4e48\u2014\u2014\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u7a0b\u5e8f\u672c\u8eab\u6216\u5176\u6587\u6863\u6765\u4e86\u89e3\u3002\u5982\u679c\u4f60\u4e0d\u4e86\u89e3\u8fd9\u4e00\u70b9\uff0c\u5c31\u65e0\u6cd5\u4e0e\u7a0b\u5e8f\u4e92\u52a8\uff0c\u56e0\u4e3a\u6307\u4ee4\u4f1a\u65e0\u6548\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8fc7\u7a0b\u60f3\u8c61\u6210\u8bd5\u56fe\u5f00\u8f66\u53bb\u4e00\u4e2a\u6ca1\u6709 GPS \u5730\u5740\u7684\u5730\u65b9\u3002\u4f60\u77e5\u9053\u4f60\u60f3\u53bb\u54ea\u91cc\uff0c\u4f46\u4e0d\u77e5\u9053\u5982\u4f55\u5230\u8fbe\u90a3\u91cc\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u6b64\u64cd\u4f5c\u4e0d\u9700\u8981\u6570\u636e\u8d26\u6237\u7684\u7b7e\u540d\uff0c\u6211\u4eec\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"isSigner"),"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"isWritable"),"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u56e0\u4e3a\u8be5\u8d26\u6237\u5c06\u88ab\u5199\u5165\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u544a\u77e5\u7f51\u7edc\u6211\u4eec\u9700\u8981\u4e0e\u54ea\u4e9b\u8d26\u6237\u4ea4\u4e92\uff0c\u4ee5\u53ca\u6211\u4eec\u662f\u5426\u6b63\u5728\u5411\u5b83\u4eec\u5199\u5165\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u8fd0\u884c\u65f6\u5c31\u4f1a\u77e5\u9053\u54ea\u4e9b\u4ea4\u6613\u53ef\u4ee5\u5e76\u884c\u8fd0\u884c\u3002\u8fd9\u90e8\u5206\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u901f\u5ea6\u5982\u6b64\u4e4b\u5feb\u7684\u539f\u56e0\u4e4b\u4e00\uff01"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"main()"),"\u4e2d\u52a0\u5165\u6b64\u51fd\u6570\u7684\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"await pingProgram(connection, signer)"),"\uff0c\u5e76\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"npm start"),"\u8fd0\u884c\u811a\u672c\u3002\u8bbf\u95ee\u6240\u8bb0\u5f55\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u94fe\u63a5\uff0c\u4f60\u5c06\u5728\u9875\u9762\u5e95\u90e8\u770b\u5230\u4f60\u5199\u5165\u7684\u6570\u636e\uff08\u5176\u4ed6\u6240\u6709\u5185\u5bb9\u53ef\u4ee5\u5ffd\u7565\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(94751).Z,width:"2284",height:"402"})),(0,l.kt)("p",null,"\u4f60\u521a\u521a\u5c06\u6570\u636e\u5199\u5165\u4e86\u533a\u5757\u94fe\u3002\u611f\u89c9\u7b80\u5355\u5417\uff1f"),(0,l.kt)("p",null,"\u867d\u7136\u770b\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4f46\u4f60\u786e\u5b9e\u5df2\u7ecf\u6210\u529f\u4e86\u3002\u5f53\u63a8\u7279\u4e0a\u7684\u4eba\u4eec\u90fd\u5728\u70ed\u8877\u4e8e\u7334\u5b50\u56fe\u7247\u65f6\uff0c\u4f60\u6b63\u5728\u6784\u5efa\u771f\u6b63\u6709\u4ef7\u503c\u7684\u4e1c\u897f\u3002\u4f60\u5728\u672c\u8282\u5b66\u5230\u7684\u5185\u5bb9\u2014\u2014\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7f51\u7edc\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\u2014\u2014\u8db3\u4ee5\u5236\u4f5c\u4ef7\u503c 1 \u4e07\u7f8e\u5143\u7684\u4ea7\u54c1\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u5f53\u4f60\u5b8c\u6210\u8fd9\u4e2a\u9879\u76ee\u65f6\uff0c\u4f60\u8fd8\u80fd\u505a\u4e9b\u4ec0\u4e48\ud83e\udd18\uff01"),(0,l.kt)("h2",{id:"-\u6311\u6218---sol-\u8f6c\u8d26\u811a\u672c"},"\ud83d\udea2 \u6311\u6218 - SOL \u8f6c\u8d26\u811a\u672c"),(0,l.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u4e00\u540c\u5b66\u4e60\u4e86\u5982\u4f55\u5c06\u4ea4\u6613\u53d1\u9001\u5230\u7f51\u7edc\uff0c\u73b0\u5728\u662f\u65f6\u5019\u8ba9\u4f60\u72ec\u7acb\u5c1d\u8bd5\u4e86\u3002"),(0,l.kt)("p",null,"\u53c2\u7167\u524d\u4e00\u6b65\u9aa4\u7684\u6d41\u7a0b\uff0c\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u811a\u672c\uff0c\u8ba9\u4f60\u80fd\u591f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u4e0a\u4ece\u4e00\u4e2a\u8d26\u6237\u8f6c\u79fb SOL \u5230\u53e6\u4e00\u4e2a\u8d26\u6237\u3002\u8bf7\u786e\u4fdd\u6253\u5370\u4ea4\u6613\u7b7e\u540d\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana Explorer"),"\u4e0a\u67e5\u770b\u5b83\u3002"),(0,l.kt)("p",null,"\u56de\u987e\u4e00\u4e0b\u5230\u76ee\u524d\u4e3a\u6b62\u4f60\u5b66\u5230\u7684\u4e1c\u897f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u5199\u5165\u7f51\u7edc\u662f\u901a\u8fc7\u4e8b\u52a1\u5b9e\u73b0\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u9700\u8981\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u5411\u7f51\u7edc\u6307\u793a\u6d89\u53ca\u54ea\u4e9b\u7a0b\u5e8f\u53ca\u5176\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SOL"),"\u7684\u8f6c\u79fb\u662f\u901a\u8fc7\u7cfb\u7edf\u7a0b\u5e8f\u5b8c\u6210\u7684\uff08\u55ef\uff0c\u6211\u5728\u60f3\u8fd9\u4e2a\u8fc7\u7a0b\u53eb\u4ec0\u4e48\u540d\u5b57\u3002\ud83e\udd14 \u8f6c\u79fb\u5417\uff1f\uff09")),(0,l.kt)("p",null,"\u4f60\u5728\u8fd9\u91cc\u9700\u8981\u505a\u7684\u5c31\u662f\u627e\u51fa\u51c6\u786e\u7684\u51fd\u6570\u540d\u79f0\uff0c\u4ee5\u53ca\u6307\u4ee4\u5e94\u8be5\u662f\u600e\u6837\u7684\u3002\u4f60\u53ef\u4ee5\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"Google"),"\u5f00\u59cb\u67e5\u627e\uff1aP"),(0,l.kt)("p",null,"\u9644\u6ce8\uff1a\u5982\u679c\u4f60\u786e\u5b9a\u81ea\u5df1\u5df2\u7ecf\u4e86\u89e3\u4e86\u8fd9\u4e9b\u5185\u5bb9\uff0c\u4f46\u8f6c\u8d26\u4ecd\u7136\u5931\u8d25\uff0c\u90a3\u4e48\u95ee\u9898\u53ef\u80fd\u662f\u8f6c\u8d26\u91d1\u989d\u592a\u5c11\u2014\u2014\u5c1d\u8bd5\u81f3\u5c11\u8f6c\u8d26",(0,l.kt)("inlineCode",{parentName:"p"},"0.1 SOL"),"\u3002"),(0,l.kt)("p",null,"\u5c31\u50cf\u4ee5\u5f80\u4e00\u6837\uff0c\u5728\u67e5\u770b\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\u4e4b\u524d\uff0c\u5c3d\u91cf\u81ea\u5df1\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\u3002\u5f53\u4f60\u771f\u6b63\u9700\u8981\u53c2\u8003\u89e3\u51b3\u65b9\u6848\u65f6\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/all-in-one-solana/solana-co-learn-code/blob/main/src/transferSol.ts"},"\u8bf7\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b"),"\u3002\ud83d\udc40"))}u.isMDXComponent=!0},94751:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ping-solana-f389a9d2201cefa02bb91b1abd8d70a4.png"}}]);