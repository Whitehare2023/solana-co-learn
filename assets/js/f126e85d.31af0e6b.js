"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),_=r,d=c["".concat(s,".").concat(_)]||c[_]||m[_]||i;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=_;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},96450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:75,sidebar_label:"\ud83d\ude33 \u4f7f\u7528Rust\u7f16\u5199\u6d4b\u8bd5",sidebar_class_name:"green"},l="\ud83d\ude33 \u4f7f\u7528Rust\u7f16\u5199\u6d4b\u8bd5",o={unversionedId:"module4/testing/writing-tests-in-rust/README",id:"module4/testing/writing-tests-in-rust/README",title:"\ud83d\ude33 \u4f7f\u7528Rust\u7f16\u5199\u6d4b\u8bd5",description:"\u4e0a\u4e00\u8282\u8bfe\u6211\u4eec\u5df2\u7ecf\u4e3aMINT\u8d26\u6237\u505a\u597d\u4e86\u51c6\u5907\u3002\u9884\u70ed\u9636\u6bb5\u5df2\u7ecf\u7ed3\u675f\uff0c\u73b0\u5728\u662f\u6b63\u5f0f\u5f00\u59cb\u7684\u65f6\u5019\u4e86\u3002\u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u5fc3\u7231\u7684\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f\u7f16\u5199\u6d4b\u8bd5\u5427\u3002",source:"@site/docs/Solana-Co-Learn/module4/testing/writing-tests-in-rust/README.md",sourceDirName:"module4/testing/writing-tests-in-rust",slug:"/module4/testing/writing-tests-in-rust/",permalink:"/solana-co-learn/Solana-Co-Learn/module4/testing/writing-tests-in-rust/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module4/testing/writing-tests-in-rust/README.md",tags:[],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1708494134,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:75,frontMatter:{sidebar_position:75,sidebar_label:"\ud83d\ude33 \u4f7f\u7528Rust\u7f16\u5199\u6d4b\u8bd5",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddea \u6d4b\u8bd5 Solana \u7a0b\u5e8f",permalink:"/solana-co-learn/Solana-Co-Learn/module4/testing/testing-solana-programs/"},next:{title:"\u53d1\u884c\u4e00\u4e2a\u8d28\u62bc\u5e94\u7528\u7a0b\u5e8f",permalink:"/solana-co-learn/Solana-Co-Learn/module4/ship-a-staking-app/"}},s={},u=[{value:"\u521d\u59cb\u5316\u6d4b\u8bd5\u6846\u67b6",id:"\u521d\u59cb\u5316\u6d4b\u8bd5\u6846\u67b6",level:2},{value:"\u8f85\u52a9\u51fd\u6570",id:"\u8f85\u52a9\u51fd\u6570",level:2},{value:"\u521d\u59cb\u5316\u94f8\u5e01\u6d4b\u8bd5",id:"\u521d\u59cb\u5316\u94f8\u5e01\u6d4b\u8bd5",level:2},{value:"\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba\u6d4b\u8bd5",id:"\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba\u6d4b\u8bd5",level:2},{value:"\ud83d\udea2 \u6311\u6218",id:"-\u6311\u6218",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u4f7f\u7528rust\u7f16\u5199\u6d4b\u8bd5"},"\ud83d\ude33 \u4f7f\u7528Rust\u7f16\u5199\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u4e0a\u4e00\u8282\u8bfe\u6211\u4eec\u5df2\u7ecf\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"MINT"),"\u8d26\u6237\u505a\u597d\u4e86\u51c6\u5907\u3002\u9884\u70ed\u9636\u6bb5\u5df2\u7ecf\u7ed3\u675f\uff0c\u73b0\u5728\u662f\u6b63\u5f0f\u5f00\u59cb\u7684\u65f6\u5019\u4e86\u3002\u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u5fc3\u7231\u7684\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f\u7f16\u5199\u6d4b\u8bd5\u5427\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e - \u5165\u95e8\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildspace/solana-movie-program/tree/solution-add-tokens"},"https://github.com/buildspace/solana-movie-program/tree/solution-add-tokens")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dev-dependencies]\nassert_matches = "1.4.0"\nsolana-program-test = "~1.10.29"\nsolana-sdk = "~1.10.29"\n')),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316\u6d4b\u8bd5\u6846\u67b6"},"\u521d\u59cb\u5316\u6d4b\u8bd5\u6846\u67b6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"processor.rs")," \u6587\u4ef6\u5e95\u90e8\u6dfb\u52a0\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Inside processor.rs\n#[cfg(test)]\nmod tests {\n  use {\n    super::*,\n    assert_matches::*,\n    solana_program::{\n        instruction::{AccountMeta, Instruction},\n        system_program::ID as SYSTEM_PROGRAM_ID,\n    },\n    solana_program_test::*,\n    solana_sdk::{\n        signature::Signer,\n        transaction::Transaction,\n        sysvar::rent::ID as SYSVAR_RENT_ID\n    },\n    spl_associated_token_account::{\n        get_associated_token_address,\n        instruction::create_associated_token_account,\n    },\n    spl_token:: ID as TOKEN_PROGRAM_ID,\n  };\n}\n")),(0,r.kt)("h2",{id:"\u8f85\u52a9\u51fd\u6570"},"\u8f85\u52a9\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7528\u4e8e\u521d\u59cb\u5316\u94f8\u5e01\u7684\u8f85\u52a9\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6d4b\u8bd5\u6a21\u5757\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u8c03\u7528\u5b83\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u5728\u6d4b\u8bd5\u6a21\u5757\u5185\u90e8\nfn create_init_mint_ix(payer: Pubkey, program_id: Pubkey) -> (Pubkey, Pubkey, Instruction) {\n  // \u5bfc\u51fa\u7528\u4e8etoken mint\u6388\u6743\u7684PDA\n  let (mint, _bump_seed) = Pubkey::find_program_address(&[b"token_mint"], &program_id);\n  let (mint_auth, _bump_seed) = Pubkey::find_program_address(&[b"token_auth"], &program_id);\n\n  let init_mint_ix = Instruction {\n      program_id: program_id,\n      accounts: vec![\n          AccountMeta::new_readonly(payer, true),\n          AccountMeta::new(mint, false),\n          AccountMeta::new(mint_auth, false),\n          AccountMeta::new_readonly(SYSTEM_PROGRAM_ID, false),\n          AccountMeta::new_readonly(TOKEN_PROGRAM_ID, false),\n          AccountMeta::new_readonly(SYSVAR_RENT_ID, false)\n      ],\n      data: vec![3]\n  };\n\n  (mint, mint_auth, init_mint_ix)\n}\n')),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316\u94f8\u5e01\u6d4b\u8bd5"},"\u521d\u59cb\u5316\u94f8\u5e01\u6d4b\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"initialize_token_mint")," \u6307\u4ee4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u7684\u8f85\u52a9\u51fd\u6570\u5c06\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u89e3\u6784\u6765\u83b7\u53d6\u6211\u4eec\u6240\u9700\u7684\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mint pubkey"),"\uff0c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mint_auth pubkey"),"\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"Instruction"),"\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u6307\u4ee4\u7ec4\u88c5\u5b8c\u6210\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"Transaction")," \u4e2d\uff0c\u5e76\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"ProgramTest")," \u6784\u9020\u51fd\u6570\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"banks_client")," \u6765\u5904\u7406\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"assert_matches!")," \u5b8f\u6765\u786e\u8ba4\u6d4b\u8bd5\u662f\u5426\u901a\u8fc7\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u7b2c\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\n#[tokio::test]\nasync fn test_initialize_mint_instruction() {\n    let program_id = Pubkey::new_unique();\n    let (mut banks_client, payer, recent_blockhash) = ProgramTest::new(\n        "pda_local",\n        program_id,\n        processor!(process_instruction),\n    )\n    .start()\n    .await;\n\n    // \u8c03\u7528\u8f85\u52a9\u51fd\u6570\n    let (_mint, _mint_auth, init_mint_ix) = create_init_mint_ix(payer.pubkey(), program_id);\n\n    // \u521b\u5efa\u5177\u6709\u6307\u4ee4\u3001\u5e10\u6237\u548c\u8f93\u5165\u6570\u636e\u7684\u4ea4\u6613\u5bf9\u8c61\n    let mut transaction = Transaction::new_with_payer(\n        &[init_mint_ix,],\n        Some(&payer.pubkey()),\n    );\n    transaction.sign(&[&payer], recent_blockhash);\n\n    // \u5904\u7406\u4ea4\u6613\u5e76\u6bd4\u8f83\u7ed3\u679c\n    assert_matches!(banks_client.process_transaction(transaction).await, Ok(_));\n}\n')),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba\u6d4b\u8bd5"},"\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba\u6d4b\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"add_movie_review")," \u6307\u4ee4\u8bbe\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u7b2c\u4e8c\u4e2a\u5355\u5143\u6d4b\u8bd5\n#[tokio::test]\nasync fn test_add_movie_review_instruction() {\n  let program_id = Pubkey::new_unique();\n  let (mut banks_client, payer, recent_blockhash) = ProgramTest::new(\n      "pda_local",\n      program_id,\n      processor!(process_instruction),\n  )\n  .start()\n  .await;\n\n  // \u8c03\u7528\u8f85\u52a9\u51fd\u6570\n  let (mint, mint_auth, init_mint_ix) = create_init_mint_ix(payer.pubkey(), program_id);\n\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e8c\u4e2a\u6d4b\u8bd5\u4e2d\u63a8\u5bfc\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"PDA"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u8bc4\u8bba\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u8bc4\u8bba\u8ba1\u6570\u5668\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u5173\u8054\u7684\u4ee4\u724c\u8d26\u6237\u5730\u5740\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// \u521b\u5efa\u8bc4\u8bbaPDA\nlet title: String = "Captain America".to_owned();\nconst RATING: u8 = 3;\nlet review: String = "Liked the movie".to_owned();\nlet (review_pda, _bump_seed) =\n   Pubkey::find_program_address(&[payer.pubkey().as_ref(), title.as_bytes()], &program_id);\n\n// \u521b\u5efa\u8bc4\u8bba\u8ba1\u6570\u5668PDA\nlet (comment_pda, _bump_seed) =\n   Pubkey::find_program_address(&[review_pda.as_ref(), b"comment"], &program_id);\n\n// \u521b\u5efa\u4e0etoken mint\u5173\u8054\u7684\u7528\u6237\u4ee4\u724c\u8d26\u6237\nlet init_ata_ix: Instruction = create_associated_token_account(\n   &payer.pubkey(),\n   &payer.pubkey(),\n   &mint,\n);\n\nlet user_ata: Pubkey =\n   get_associated_token_address(&payer.pubkey(), &mint);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u4ea4\u6613\uff08\u4ecd\u5728\u7b2c\u4e8c\u6b21\u6d4b\u8bd5\u4e2d\uff09\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// \u5c06\u6570\u636e\u8fde\u63a5\u5230\u5355\u4e2a\u7f13\u51b2\u533a\nlet mut data_vec = vec![0];\ndata_vec.append(&mut (title.len().try_into().unwrap().to_le_bytes().try_into().unwrap()));\ndata_vec.append(&mut title.into_bytes());\ndata_vec.push(RATING);\ndata_vec.append(&mut (review.len().try_into().unwrap().to_le_bytes().try_into().unwrap()));\ndata_vec.append(&mut review.into_bytes());\n\n// \u521b\u5efa\u5177\u6709\u6307\u4ee4\u3001\u5e10\u6237\u548c\u8f93\u5165\u6570\u636e\u7684\u4ea4\u6613\u5bf9\u8c61\nlet mut transaction = Transaction::new_with_payer(\n    &[\n    init_mint_ix,\n    init_ata_ix,\n    Instruction {\n        program_id: program_id,\n        accounts: vec![\n            AccountMeta::new_readonly(payer.pubkey(), true),\n            AccountMeta::new(review_pda, false),\n            AccountMeta::new(comment_pda, false),\n            AccountMeta::new(mint, false),\n            AccountMeta::new_readonly(mint_auth, false),\n            AccountMeta::new(user_ata, false),\n            AccountMeta::new_readonly(SYSTEM_PROGRAM_ID, false),\n            AccountMeta::new_readonly(TOKEN_PROGRAM_ID, false),\n        ],\n        data: data_vec,\n    },\n    ],\n    Some(&payer.pubkey()),\n);\ntransaction.sign(&[&payer], recent_blockhash);\n\n// \u5904\u7406\u4ea4\u6613\u5e76\u6bd4\u8f83\u7ed3\u679c\nassert_matches!(banks_client.process_transaction(transaction).await, Ok(_));\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo test-sbf")," \u547d\u4ee4\u8fd0\u884c\u8fd9\u4e9b\u6d4b\u8bd5")),(0,r.kt)("h2",{id:"-\u6311\u6218"},"\ud83d\udea2 \u6311\u6218"),(0,r.kt)("p",null,"\u65e2\u7136\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86\u5982\u4f55\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Rust"),"\u4e2d\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\uff0c\u90a3\u5c31\u4e0d\u59a8\u7ee7\u7eed\u6dfb\u52a0\u4e00\u4e9b\u4f60\u8ba4\u4e3a\u5bf9\u7535\u5f71\u8bc4\u8bba\u6216\u5b66\u751f\u4ecb\u7ecd\u7a0b\u5e8f\u529f\u80fd\u81f3\u5173\u91cd\u8981\u7684\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8fdb\u4e00\u6b65\u6311\u6218\u81ea\u5df1\uff0c\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u6dfb\u52a0\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u7684\u96c6\u6210\u6d4b\u8bd5\u3002\u867d\u7136\u6211\u4eec\u6ca1\u6709\u4e00\u8d77\u8d70\u8fc7\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u4f46\u5c1d\u8bd5\u4e00\u4e0b\u80af\u5b9a\u4e0d\u4f1a\u9519\uff01"),(0,r.kt)("p",null,"\u968f\u7740\u4f60\u5728\u9879\u76ee\u4e2d\u7684\u8fdb\u5c55\uff0c\u4e00\u4e9b\u6311\u6218\u53ef\u80fd\u4f1a\u53d8\u5f97\u66f4\u52a0\u5f00\u653e\uff0c\u4ece\u800c\u8ba9\u4f60\u80fd\u591f\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u63a8\u52a8\u81ea\u5df1\u524d\u8fdb\u3002\u4e0d\u8981\u6ee5\u7528\u8fd9\u4e2a\u673a\u4f1a\uff0c\u800c\u662f\u628a\u5b83\u770b\u4f5c\u63d0\u5347\u5b66\u4e60\u6548\u679c\u7684\u673a\u4f1a\u3002"))}m.isMDXComponent=!0}}]);