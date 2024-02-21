"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[6887],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"Energy System",sidebar_position:30,tags:["solana-cook-book","game","energy-system"]},i="Energy System",l={unversionedId:"references/gaming/energy-system",id:"references/gaming/energy-system",title:"Energy System",description:"Casual games commonly use energy systems, meaning that actions in the game cost energy which refills over time. In this guide we will walk through how to build one on Solana.",source:"@site/docs/cookbook-zh/references/gaming/energy-system.md",sourceDirName:"references/gaming",slug:"/references/gaming/energy-system",permalink:"/solana-co-learn/cookbook-zh/references/gaming/energy-system",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/gaming/energy-system.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"game",permalink:"/solana-co-learn/cookbook-zh/tags/game"},{label:"energy-system",permalink:"/solana-co-learn/cookbook-zh/tags/energy-system"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1708494134,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:30,frontMatter:{title:"Energy System",sidebar_position:30,tags:["solana-cook-book","game","energy-system"]},sidebar:"tutorialSidebar",previous:{title:"save game state",permalink:"/solana-co-learn/cookbook-zh/references/gaming/saving-game-state"},next:{title:"How interact with tokens in program",permalink:"/solana-co-learn/cookbook-zh/references/gaming/interact-with-tokens"}},c={},s=[{value:"Anchor program",id:"anchor-program",level:2},{value:"Creating the player account",id:"creating-the-player-account",level:3},{value:"Choping trees",id:"choping-trees",level:3},{value:"Calculating the energy",id:"calculating-the-energy",level:3},{value:"Js client",id:"js-client",level:2},{value:"Create connection",id:"create-connection",level:3},{value:"Initialize player data",id:"initialize-player-data",level:3},{value:"Subscribe to account updates",id:"subscribe-to-account-updates",level:3},{value:"Calculate energy and show count down",id:"calculate-energy-and-show-count-down",level:3}],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"energy-system"},"Energy System"),(0,r.kt)("p",null,"Casual games commonly use energy systems, meaning that actions in the game cost energy which refills over time. In this guide we will walk through how to build one on Solana.\nIt is recommended to start with the ",(0,r.kt)("a",{parentName:"p",href:"../gaming/hello-world"},"Hello World Example")," if you do not have any prior Solana knowledge."),(0,r.kt)("p",null,"Here is a complete example source code based on the Solana dapp scaffold with a react client:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-developers/solana-game-starter-kits/tree/main/lumberjack"},"Source")),(0,r.kt)("h2",{id:"anchor-program"},"Anchor program"),(0,r.kt)("p",null,"In this tutorial, we will guide you through the process of creating a program that gradually replenishes the player's energy reserves over time. This, in turn, will enable them to execute various actions within the game.\nIn our example, a lumber jack will chops trees with every tree rewarding one wood and cost one energy."),(0,r.kt)("h3",{id:"creating-the-player-account"},"Creating the player account"),(0,r.kt)("p",null,"First the player needs to create an account which saves the state of our player. Notice the last_login time saves the current unix time stamp of the player he interacts with the program.\nWith this state, we will be able to calculate how much energy the player has at a certain point in time.\nWe also have a value for how much wood the lumber jack chucks in the game."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\npub fn init_player(ctx: Context<InitPlayer>) -> Result<()> {\n    ctx.accounts.player.energy = MAX_ENERGY;\n    ctx.accounts.player.last_login = Clock::get()?.unix_timestamp;\n    Ok(())\n}\n\n...\n\n#[derive(Accounts)]\npub struct InitPlayer <'info> {\n    #[account(\n        init,\n        payer = signer,\n        space = 1000,\n        seeds = [b\"player\".as_ref(), signer.key().as_ref()],\n        bump,\n    )]\n    pub player: Account<'info, PlayerData>,\n    #[account(mut)]\n    pub signer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n#[account]\npub struct PlayerData {\n    pub name: String,\n    pub level: u8,\n    pub xp: u64,\n    pub wood: u64,\n    pub energy: u64,\n    pub last_login: i64\n}\n")),(0,r.kt)("h3",{id:"choping-trees"},"Choping trees"),(0,r.kt)("p",null,"Then whenever the player calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"chop_tree")," instruction we will check if the player has enough energy and reward him with one wood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    #[error_code]\n    pub enum ErrorCode {\n        #[msg("Not enough energy")]\n        NotEnoughEnergy,\n    }\n\n    pub fn chop_tree(mut ctx: Context<ChopTree>) -> Result<()> {\n        let account = &mut ctx.accounts;\n        update_energy(account)?;\n\n        if ctx.accounts.player.energy == 0 {\n            return err!(ErrorCode::NotEnoughEnergy);\n        }\n\n        ctx.accounts.player.wood = ctx.accounts.player.wood + 1;\n        ctx.accounts.player.energy = ctx.accounts.player.energy - 1;\n        msg!("You chopped a tree and got 1 wood. You have {} wood and {} energy left.", ctx.accounts.player.wood, ctx.accounts.player.energy);\n        Ok(())\n    }\n')),(0,r.kt)("h3",{id:"calculating-the-energy"},"Calculating the energy"),(0,r.kt)("p",null,"The interesting part happens in the ",(0,r.kt)("inlineCode",{parentName:"p"},"update_energy")," function. We check how much time has passed and calculate the energy that the player will have at the given time.\nWe will do the same in the client. We lazily update the energy instead of polling it all the time.\nThe is a common technique in game development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\nconst TIME_TO_REFILL_ENERGY: i64 = 60;\nconst MAX_ENERGY: u64 = 10;\n\npub fn update_energy(ctx: &mut ChopTree) -> Result<()> {\n    let mut time_passed: i64 = &Clock::get()?.unix_timestamp - &ctx.player.last_login;\n    let mut time_spent: i64 = 0;\n    while time_passed > TIME_TO_REFILL_ENERGY {\n        ctx.player.energy = ctx.player.energy + 1;\n        time_passed -= TIME_TO_REFILL_ENERGY;\n        time_spent += TIME_TO_REFILL_ENERGY;\n        if ctx.player.energy == MAX_ENERGY {\n            break;\n        }\n    }\n\n    if ctx.player.energy >= MAX_ENERGY {\n        ctx.player.last_login = Clock::get()?.unix_timestamp;\n    } else {\n        ctx.player.last_login += time_spent;\n    }\n\n    Ok(())\n}\n")),(0,r.kt)("h2",{id:"js-client"},"Js client"),(0,r.kt)("p",null,"Here is a complete example based on the Solana dapp scaffold with a react client:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-developers/solana-game-starter-kits/tree/main/lumberjack"},"Source")),(0,r.kt)("h3",{id:"create-connection"},"Create connection"),(0,r.kt)("p",null,"In the Anchor.ts file we create a connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export const connection = new Connection(\n    "https://api.devnet.solana.com",\n    "confirmed"\n);\n')),(0,r.kt)("p",null,"Notice that the confirmation parameter is set to 'confirmed'. This means that we wait until the transactions are confirmed instead of finalized. This means that we wait until the super majority of the network said that the transaction is valid. This takes around 400ms and there was never a confirmed transaction which did not get finalized. So for games this is the perfect confirmation flag."),(0,r.kt)("h3",{id:"initialize-player-data"},"Initialize player data"),(0,r.kt)("p",null,"First thing we do is find the program address for the player account using the seed string ",(0,r.kt)("inlineCode",{parentName:"p"},"player"),"and the player's public key. Then we call ",(0,r.kt)("inlineCode",{parentName:"p"},"initPlayer")," to create the account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const [pda] = PublicKey.findProgramAddressSync(\n  [Buffer.from("player", "utf8"), publicKey.toBuffer()],\n  new PublicKey(LUMBERJACK_PROGRAM_ID)\n);\n\nconst transaction = program.methods\n  .initPlayer()\n  .accounts({\n    player: pda,\n    signer: publicKey,\n    systemProgram: SystemProgram.programId,\n  })\n  .transaction();\n\nconst tx = await transaction;\nconst txSig = await sendTransaction(tx, connection, {\n  skipPreflight: true,\n});\n\nawait connection.confirmTransaction(txSig, "confirmed");\n\n')),(0,r.kt)("h3",{id:"subscribe-to-account-updates"},"Subscribe to account updates"),(0,r.kt)("p",null,"Here you can see how to get account data in the js client and how to subscribe to an account. ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.onAccountChange")," creates a socket connection to the RPC node which will push any changes that happen to the account to the client.\nThis is faster than fetching new account data after every change.\nWe can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"program.coder")," to decode the account data into the TS types and directly use it in the game."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'useEffect(() => {\n    if (!publicKey) {return;}\n    const [pda] = PublicKey.findProgramAddressSync(\n        [Buffer.from("player", "utf8"), publicKey.toBuffer()],\n        new PublicKey(LUMBERJACK_PROGRAM_ID)\n      );\n    try {\n      program.account.playerData.fetch(pda).then((data) => {\n        setGameState(data);\n      });\n    } catch (e) {\n      window.alert("No player data found, please init!");\n    }\n\n    connection.onAccountChange(pda, (account) => {\n        setGameState(program.coder.accounts.decode("playerData", account.data));\n    });\n\n  }, [publicKey]);\n')),(0,r.kt)("h3",{id:"calculate-energy-and-show-count-down"},"Calculate energy and show count down"),(0,r.kt)("p",null,"In the javascript client we can then perform the same logic as in the program to precalculate how much energy the player would have at this point in time and show a countdown timer for the player so that he knows when the next energy will be available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'useEffect(() => {\n    const interval = setInterval(async () => {\n        if (gameState == null || gameState.lastLogin == undefined || gameState.energy >= 10) {return;}\n        const lastLoginTime = gameState.lastLogin * 1000;\n        let timePassed = ((Date.now() - lastLoginTime) / 1000);\n        while (timePassed > TIME_TO_REFILL_ENERGY && gameState.energy < MAX_ENERGY) {\n            gameState.energy = (parseInt(gameState.energy) + 1);\n            gameState.lastLogin = parseInt(gameState.lastLogin) + TIME_TO_REFILL_ENERGY;\n            timePassed -= TIME_TO_REFILL_ENERGY;\n        }\n        setTimePassed(timePassed);\n        let nextEnergyIn = Math.floor(TIME_TO_REFILL_ENERGY - timePassed);\n        if (nextEnergyIn < TIME_TO_REFILL_ENERGY && nextEnergyIn > 0) {\n            setEnergyNextIn(nextEnergyIn);\n        } else {\n            setEnergyNextIn(0);\n        }\n\n    }, 1000);\n\n    return () => clearInterval(interval);\n}, [gameState, timePassed]);\n\n...\n\n{(gameState && <div className="flex flex-col items-center">\n    {("Wood: " + gameState.wood + " Energy: " + gameState.energy + " Next energy in: " + nextEnergyIn )}\n</div>)}\n\n')),(0,r.kt)("p",null,"With this you can now build any energy based game and even if someone builds a bot for the game the most he can do is play optimally, which maybe even easier to achieve when playing normally depending on the logic of your game."),(0,r.kt)("p",null,"This game becomes even better when combined with the ",(0,r.kt)("a",{parentName:"p",href:"../gaming/interact-with-tokens"},"Token example")," and you actually drop some spl token to the players."))}g.isMDXComponent=!0}}]);