import { Text, Image } from "react-native";

export const notifs = [
  {
    author: {
      name: "Chus Naharro",
      screenName: "chusnarrolo",
      avatar:
        "https://images.unsplash.com/photo-1649217707439-eb9ca4e9c62f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAxNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480872099141103616",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@venomspood</Text>
        {"\n\n"}
        LMAO THAT'S SICK DUDE 🔥
      </Text>
    ),
    retweetCount: 8,
    replyCount: 0,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Justin Moore",
      screenName: "justinmooretfam",
      avatar:
        "https://images.unsplash.com/photo-1650213986462-1804543441c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk3OA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480800006412009472",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Recently posted</Text>
        {"\n\n"}
        never really understood it smh
      </Text>
    ),
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "Directo al paladar",
      screenName: "directopaladar",
      avatar:
        "https://images.unsplash.com/photo-1651006450895-2b8509422212?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyMg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480829354150092801",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@elonmusk</Text>
        {"\n\n"}
        Free tesla when 👀🤣
      </Text>
    ),
    retweetCount: 0,
    replyCount: 7,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Farhan",
      screenName: "fnthawar",
      avatar:
        "https://images.unsplash.com/photo-1651522003733-647782d87365?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAxNw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480867384751763457",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@venomspood</Text>
        {"\n\n"}
        🔥🔥🔥🔥🔥🔥
      </Text>
    ),
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 4,
  },
  {
    author: {
      name: "Pranshu Bahadur",
      screenName: "PranshuBahadur",
      avatar:
        "https://images.unsplash.com/photo-1649896867298-3f991eeb6ca2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA3Mw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480807117325889536",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Recently Posted</Text>
        {"\n\n"}I saw a pretty big spider 🕷🕸 today, yoooo it was
        terrifyingg!!😵😱
      </Text>
    ),
    retweetCount: 2,
    replyCount: 2,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Antonio Ortiz",
      screenName: "antonello",
      avatar:
        "https://images.unsplash.com/photo-1649437637540-2b9f980399db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAxOQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480849157287989249",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@zuck</Text>
        {"\n\n"}
        this is why this app is better than facebook
      </Text>
    ),
    retweetCount: 15,
    replyCount: 3,
    favoriteCount: 26,
  },
  {
    author: {
      name: "EL PAÍS",
      screenName: "el_pais",
      avatar:
        "https://images.unsplash.com/photo-1649600748105-871cb9b4631e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA3Mg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480846818481221632",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Recently posted</Text>
        {"\n\n"}
        MIGUEL O'HARA WAS CRAZZZYY BRROOO
        {"\n"}
        <Image source={require("../assets/miguel.jpg")}/>
      </Text>
    ),
    retweetCount: 636,
    replyCount: 117,
    favoriteCount: 949,
  },
  {
    author: {
      name: "Glenn McComb",
      screenName: "lenymo",
      avatar:
        "https://images.unsplash.com/photo-1649482409426-f0813f293610?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyMA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480812010774294529",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Recently posted </Text>
        {"\n\n"}
        Watching stop-motion wood works right now, its very satisfying actually
      </Text>
    ),
    retweetCount: 1,
    replyCount: 2,
    favoriteCount: 3,
  },
  {
    author: {
      name: "Cris Busquets 🦊",
      screenName: "cbusquets",
      avatar:
        "https://images.unsplash.com/photo-1649827159600-237a092f95b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480857415721660419",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@jonbernthal</Text>
        {"\n\n"}
        broo u better come back for season 3 as the punisher againn!! I cant wait to see what youre going to bring to the table! 😎😋
      </Text>
    ),
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Oriol Capdevila",
      screenName: "urikpd",
      avatar:
        "https://images.unsplash.com/photo-1649001241772-a0dfc60aa1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA3MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480843919659257857",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Recently posted </Text>
        {"\n\n"}
        ksi ROBBED! ksi ROBBED! ksi ROBBED! ksi ROBBED! ksi ROBBED! ksi ROBBED! ksi ROBBED! ksi ROBBED! 🙄
      </Text>
    ),
    retweetCount: '5.4k',
    replyCount: '1.5k',
    favoriteCount: '24k',
  },
  {
    author: {
      name: "Tyler Hedrick",
      screenName: "tyler_hedrick",
      avatar:
        "https://images.unsplash.com/photo-1650871604168-2e8b22829db8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwMg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1479133518189924352",
    fullText:
      "Alright I’m gonna be one of those people now that shares his Wordle each day \n\nWordle 201 4/6\n\n⬛⬛⬛🟨⬛\n⬛🟨⬛🟩⬛\n🟩🟨⬛🟨⬛\n🟩🟩🟩🟩🟩",
    retweetCount: 0,
    replyCount: 3,
    favoriteCount: 9,
  },
  {
    author: {
      name: "Jordi Sellas Ferrés",
      screenName: "jordisellas",
      avatar:
        "https://images.unsplash.com/photo-1649320099555-9e436f69db29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480820257937936390",
    fullText: (
      <Text>
        <Text style={{ fontSize: 13, color: "#808080" }}>Replying to </Text>
        <Text style={{ fontSize: 13, color: "#1DA1F2" }}>@venomspood</Text>
        {"\n\n"}
        LMAO THAT'S SICK DUDE
      </Text>
    ),
    retweetCount: 0,
    replyCount: 2,
    favoriteCount: 5,
  },
  {
    author: {
      name: "Aeon+Psyche",
      screenName: "aeonmag",
      avatar:
        "https://images.unsplash.com/photo-1650099667209-d0e0cc6bd27f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480879690801987585",
    fullText:
      "Tension, bureaucracy and deep humanity define life aboard a refugee rescue ship. @guardian on Aeon Video: https://t.co/qrtEf27Omh",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "puntCAT",
      screenName: "puntCAT",
      avatar:
        "https://images.unsplash.com/photo-1649510998230-fda6188271fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480857176117809159",
    fullText:
      "RT @youngitgirls: 🚀 Arranquem l'any amb noves aventures i moltes ganes de continuar treballant \n\n@CanodromBCN",
    retweetCount: 3,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Smashing Magazine",
      screenName: "smashingmag",
      avatar:
        "https://images.unsplash.com/photo-1649562231804-f1bfadc450d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA5Mw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480824523247296514",
    fullText:
      "RT @jmeickle: Me in 2005: computers aren't magic, they're just machines that do exactly what you tell them\n\nMe in 2022 exhaling an enormous…",
    retweetCount: 2431,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Applesfera",
      screenName: "applesfera",
      avatar:
        "https://images.unsplash.com/photo-1593114970899-95c26e8d8841?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480810888932306948",
    fullText:
      "Private Relay qué es y cómo podemos utilizarlo para navegar de forma más segura y privada https://t.co/NEpltAYwyA https://t.co/r193iBDOar",
    retweetCount: 5,
    replyCount: 0,
    favoriteCount: 5,
  },
  {
    author: {
      name: "Directo al paladar",
      screenName: "directopaladar",
      avatar:
        "https://images.unsplash.com/photo-1651006450895-2b8509422212?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyMg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480799151659044866",
    fullText:
      "Así es el banco italiano donde el queso parmesano sirve como aval bancario desde la II Guerra Mundial https://t.co/6niGp8CfiM https://t.co/lqWyYN0ugb",
    retweetCount: 2,
    replyCount: 0,
    favoriteCount: 14,
  },
  {
    author: {
      name: "Aitor Goyenechea 💭",
      screenName: "AitorGoy",
      avatar:
        "https://images.unsplash.com/photo-1650269717251-d3e5249a8bc8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480834634091008007",
    fullText: "Esto",
    retweetCount: 1,
    replyCount: 1,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Dean Jackson 🦕",
      screenName: "grorg",
      avatar:
        "https://images.unsplash.com/photo-1589049216803-a40738dfef85?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2OA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1478178339747602432",
    fullText:
      "@twolivesleft retrogram is telling me that “yeet” is not a word! the youth will be disappointed.",
    retweetCount: 0,
    replyCount: 3,
    favoriteCount: 1,
  },
  {
    author: {
      name: "Simon Nickel",
      screenName: "simonnickel",
      avatar:
        "https://images.unsplash.com/photo-1649869140207-53a4722ce7d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2Ng&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480823771200110592",
    fullText:
      "Anyone ever had the App Store Connect app actually open the review when you get a notification? Never worked for me.\n\nAlso: Layout is hard 🙄 https://t.co/m1PBl71iOH",
    retweetCount: 0,
    replyCount: 5,
    favoriteCount: 5,
  },
  {
    author: {
      name: "Santiago Alonso 💬",
      screenName: "salonsoweb",
      avatar:
        "https://images.unsplash.com/photo-1649423515812-5d7f4adb170c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyMw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480793786225676289",
    fullText: "Primera charleta del año! 🥳🤸‍♂️🥳🤸‍♂️🥳🤸‍♂️🥳🤸‍♂️ 👇🏻👇🏻",
    retweetCount: 3,
    replyCount: 0,
    favoriteCount: 6,
  },
  {
    author: {
      name: "Arts in Health International Foundation",
      screenName: "artsinhealthfdn",
      avatar:
        "https://images.unsplash.com/photo-1650633904515-af9f8caa8582?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480497586595414019",
    fullText:
      '#ArtsAgainstCovid TALKS 🎥\n\n"Després de 200 anys parlant d\'objectes, potser toca parlar de subjectes, i això obliga als museus a fer un canvi copernicà"\n\nPepe Serra, director de @MuseuNac_Cat, reflexiona sobre el paper actual dels museus. \nMira-ho aquí 👉 https://t.co/3prlEnWExp',
    retweetCount: 3,
    replyCount: 0,
    favoriteCount: 8,
  },
  {
    author: {
      name: "Cris Busquets 🦊",
      screenName: "cbusquets",
      avatar:
        "https://images.unsplash.com/photo-1649827159600-237a092f95b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480493695560568834",
    fullText:
      "Sinceramente, cada vez me preocupa más la brecha tecnológica que estamos creando.\n\nUsar aplicaciones y webs es fácil para mí, pero constantemente veo personas a quienes les cuesta entender el flujo / iconos / botones.\n\nMe da la impresión de que es porque hacemos user tests...",
    retweetCount: 6,
    replyCount: 8,
    favoriteCount: 57,
  },
  {
    author: {
      name: "📸 𝙼𝚊𝚞𝚛𝚘 𝙵𝚞𝚎𝚗𝚝𝚎𝚜 🤳 fotomaf ⭐️",
      screenName: "Fotomaf",
      avatar:
        "https://images.unsplash.com/photo-1649003175381-2df7e82ef6f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyNA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480850406892838917",
    fullText:
      "RT @antonello: Me reafirmo en cómo creo que podemos afrontar esta variante: asumir que casi todos la vamos a pillar, protegiendo sólo a los…",
    retweetCount: 15,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Ben Scheirman",
      screenName: "subdigital",
      avatar:
        "https://images.unsplash.com/photo-1651419935061-c7f954d37446?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2NA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480882339005747204",
    fullText:
      "RT @VictorBlackwell: Poet Maya Angelou becomes the first Black woman to appear on a US quarter https://t.co/6MI768E6kV",
    retweetCount: 10321,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "El Món d'Ahir",
      screenName: "elmondahir",
      avatar:
        "https://images.unsplash.com/photo-1649005200470-3ac8cc79a7bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480869573796798464",
    fullText:
      "👶🏻 Ja és aquí el número 21!\n\nDedicat a la INFÀNCIA, hi trobareu articles d'@emparmoliner @MiquiOtero @AlexGutierrezM @atrillas @Guillemmartnez @_mrspremise @RaquelRicart1 i @XavierAntich, entre d'altres. \n\nJA A LA VENDA a https://t.co/uRF4jx4mpa i molt aviat a llibreries! https://t.co/vxdylJJGaq",
    retweetCount: 8,
    replyCount: 1,
    favoriteCount: 7,
  },
  {
    author: {
      name: "Elvira",
      screenName: "ElviraBurchik",
      avatar:
        "https://images.unsplash.com/photo-1649171170932-c2dfd27321b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2Mg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480822722838077441",
    fullText:
      "RT @Sommer: I love working with people who are friendly. Who say “thank you” or cheer you on or say “good job.” These things may seem small…",
    retweetCount: 94,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Webificando Podcast",
      screenName: "Webificandop",
      avatar:
        "https://images.unsplash.com/photo-1650790362837-a450407ceb1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyNw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480792377065365511",
    fullText:
      "Holis! 👋\n\nHoy tendremos al gran @salonsoweb para hablar de sus proyectos, automatizaciones y más cosas 🍿🍿\n\n¿Integromat o Zapier? ¿Hay alguna alternativa a la altura? 🤔\n\n🕕 18:00 CET\n\nEn Twitch 👇\nhttps://t.co/tVO9irSqpj",
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 3,
  },
  {
    author: {
      name: "Applesfera",
      screenName: "applesfera",
      avatar:
        "https://images.unsplash.com/photo-1593114970899-95c26e8d8841?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480804355263631360",
    fullText:
      "Por qué Apple no adopta RCS en iMessage a pesar de las polémicas declaraciones de un responsable de Android https://t.co/OWVa6gle5k https://t.co/Wrvmi0S3wh",
    retweetCount: 5,
    replyCount: 1,
    favoriteCount: 8,
  },
  {
    author: {
      name: "DAZN España",
      screenName: "DAZN_ES",
      avatar:
        "https://images.unsplash.com/photo-1650400759211-2d8ae616b006?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA2MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480872115276496904",
    fullText:
      "El recital de adelantamientos que Hamilton nos regaló en Brasil 🔥\n\n📽️: @F1\nhttps://t.co/d2lSNmz1Qq",
    retweetCount: 17,
    replyCount: 3,
    favoriteCount: 151,
  },
  {
    author: {
      name: "Envato Tuts+",
      screenName: "tutsplus",
      avatar:
        "https://images.unsplash.com/photo-1650542914594-033761afbd86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyOQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480885466668974083",
    fullText:
      "Losing data from an external hard drive can send you into a panic. But before losing hope, READ THIS: ➡️  \n\nThose lost files can be recovered. Head to @tutsplus to learn four ways to restore data from an external hard drive for #Mac. Let’s begin: https://t.co/xIeOtrGwXL https://t.co/F3R1fA2u85",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Connor Shorten",
      screenName: "CShorten30",
      avatar:
        "https://images.unsplash.com/photo-1649711992982-092a8e53e39c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480880267816546307",
    fullText:
      'RT @PranshuBahadur: Hey everyone! Ever wanted to "find the needle in the haystack"?\n\nCheck out @CShorten30\'s new video about the haystack v…',
    retweetCount: 2,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Changelog",
      screenName: "changelog",
      avatar:
        "https://images.unsplash.com/photo-1649219026888-aca032914261?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzMA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480858641959956483",
    fullText:
      "RT @porlando: I was on the @changelog podcast talking about complex systems, Goodhart's Law, autonomous vehicles, A Pattern Language, and m…",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Applesfera",
      screenName: "applesfera",
      avatar:
        "https://images.unsplash.com/photo-1593114970899-95c26e8d8841?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480881128617791488",
    fullText:
      "El adiós a Lightning y la teoría del Smart Connector en el iPhone del futuro https://t.co/1sQWRVR9z6 https://t.co/3qEcGvi5ha",
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 11,
  },
  {
    author: {
      name: "Aeon+Psyche",
      screenName: "aeonmag",
      avatar:
        "https://images.unsplash.com/photo-1650099667209-d0e0cc6bd27f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480857084883345408",
    fullText:
      "When logic fails to make sense of a world noisy with inconsistency, paraconsistent logics hold out (im)possible solutions https://t.co/aAmusRlUzt",
    retweetCount: 2,
    replyCount: 0,
    favoriteCount: 5,
  },
  {
    author: {
      name: "˗ˏˋrogieˎˊ",
      screenName: "rogie",
      avatar:
        "https://images.unsplash.com/photo-1648198835787-9f1b46dd261b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1OA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480802209474351105",
    fullText:
      "I just applied for a FREE Citizenship NFT for Satoshi Island 🏝️ @satoshiisland \n\nA real private island being turned into the crypto capital of the world!\n\nTo apply for yours, go to https://t.co/IASuZO959O and click on the Citizenship tab in the menu.\n#satoshiisland #NFT #Airdrop",
    retweetCount: 0,
    replyCount: 3,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Álvaro Bernal 🥑",
      screenName: "abn",
      avatar:
        "https://images.unsplash.com/photo-1650754294117-f648f300545f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzMQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480872313792962568",
    fullText:
      "RT @DAZN_ES: El recital de adelantamientos que Hamilton nos regaló en Brasil 🔥\n\n📽️: @F1\nhttps://t.co/d2lSNmz1Qq",
    retweetCount: 17,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Michael Andersson",
      screenName: "Kjell_Kod",
      avatar:
        "https://images.unsplash.com/photo-1650719782577-d16dddc61ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1Nw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480631817472466946",
    fullText:
      "The worst thing about Rust is that it raises the bar for every other programming language.",
    retweetCount: 3,
    replyCount: 4,
    favoriteCount: 18,
  },
  {
    author: {
      name: "I Am Devloper",
      screenName: "iamdevloper",
      avatar:
        "https://images.unsplash.com/photo-1651354239553-0998040fa5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480861999953289216",
    fullText:
      "although arguably, the 19th time you ran the automated solution, you'll have recouped your initial investment\n\nso, by all means, shave that yak",
    retweetCount: 7,
    replyCount: 5,
    favoriteCount: 164,
  },
  {
    author: {
      name: "Tyler Hedrick",
      screenName: "tyler_hedrick",
      avatar:
        "https://images.unsplash.com/photo-1650871604168-2e8b22829db8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwMg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480887659379654657",
    fullText:
      "My first time in 3!\n\nWordle 206 3/6*\n\n🟨⬛⬛🟨⬛\n🟩🟩🟩⬛⬛\n🟩🟩🟩🟩🟩",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "The Spectator Index",
      screenName: "spectatorindex",
      avatar:
        "https://images.unsplash.com/photo-1651245571998-b3a505f2fa96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzMw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480876650514448385",
    fullText:
      "JUST IN: World Health Organization regional director says over half Europe's population could be infected with omicron variant within a few weeks",
    retweetCount: 416,
    replyCount: 57,
    favoriteCount: 1147,
  },
  {
    author: {
      name: "sadface",
      screenName: "Sadface_RL",
      avatar:
        "https://images.unsplash.com/photo-1650304003871-2bdb8aa62dfc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480602754435407876",
    fullText:
      "A beginners guide to health bars.\n\n#pixelart #art #animation #gamedev #indiedev #indiegamedev #indiegame https://t.co/Fhb4mQITRc",
    retweetCount: 177,
    replyCount: 2,
    favoriteCount: 1056,
  },
  {
    author: {
      name: "SunnePod 🎙️",
      screenName: "sunne",
      avatar:
        "https://images.unsplash.com/photo-1650743768349-94043ebae1e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzNA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480676869720657920",
    fullText:
      "Necesito una lista de podcast grabados por mujeres , de la zona de Barcelona. Me da igual el idioma.\n\nMe ayudáis? Yo conozco algunos pero necesito conocer más ' pa una cosa'",
    retweetCount: 8,
    replyCount: 8,
    favoriteCount: 9,
  },
  {
    author: {
      name: "MoonCat2878",
      screenName: "mooncat2878",
      avatar:
        "https://images.unsplash.com/photo-1650797073595-0a415bb3764a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1NA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480601483141959688",
    fullText:
      "1/20\n\nI invested 55 $ETH into @LooksRareNFT for 85,636 $LOOKS tokens + I got 12,000 tokens from Airdrops.\n\nI paid an average of $ 1,90 per $LOOKS.\n\nI own a total of 97,935 $LOOKS and am staking all of them.\n\nSo why did I invest in @LooksRareNFT let's dig in! https://t.co/MFTMJc0gpp",
    retweetCount: 583,
    replyCount: 131,
    favoriteCount: 1896,
  },
  {
    author: {
      name: "Pedro",
      screenName: "pepicrft",
      avatar:
        "https://images.unsplash.com/photo-1649542053026-6b59f8723c1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwOA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480879632840859648",
    fullText: "https://t.co/J0KnQjvwfA",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Chus Naharro",
      screenName: "chusnarrolo",
      avatar:
        "https://images.unsplash.com/photo-1649217707439-eb9ca4e9c62f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAxNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480859223038865408",
    fullText:
      "Revisar y proyectar. @tonicolom me invitó a su podcast para hablar de cómo nos fue en 2021 y qué esperamos del 2022 (y damos detalles de lo que nos hemos marcado 🤓)",
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "Directo al paladar",
      screenName: "directopaladar",
      avatar:
        "https://images.unsplash.com/photo-1651006450895-2b8509422212?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyMg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480843457946128388",
    fullText:
      "Qué es la dieta keto, quién puede seguirla y 43 recetas que se adaptan a ella https://t.co/ElB0N2HTG9 https://t.co/Q8xwC9EDyY",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 4,
  },
  {
    author: {
      name: "Chus Naharro",
      screenName: "chusnarrolo",
      avatar:
        "https://images.unsplash.com/photo-1649217707439-eb9ca4e9c62f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAxNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480811903400255489",
    fullText: "RT @salonsoweb: Primera charleta del año! 🥳🤸‍♂️🥳🤸‍♂️🥳🤸‍♂️🥳🤸‍♂️ 👇🏻👇🏻",
    retweetCount: 3,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Dru Riley 📈",
      screenName: "DruRly",
      avatar:
        "https://images.unsplash.com/photo-1650502445841-162208d37a79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480570135878451205",
    fullText: "Who should I talk to about DAOs?",
    retweetCount: 11,
    replyCount: 100,
    favoriteCount: 144,
  },
  {
    author: {
      name: "Philip Young",
      screenName: "philipyoungg",
      avatar:
        "https://images.unsplash.com/photo-1651437074099-fa632f2e708f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480835233796657152",
    fullText:
      "Re reading it today and it still blew my mind. You really have to read this. \n\nIt's all meat.",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 3,
  },
  {
    author: {
      name: "Buffer",
      screenName: "buffer",
      avatar:
        "https://images.unsplash.com/photo-1651067046747-39410fa2d173?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzNw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480842677738516481",
    fullText:
      "“The amount of transparency that we have with our customers definitely generates a lot of trust, because they understand that we are doing things that are new and that we're trying things to improve the impact of our products.”\n\n✨ Phantila Phataraprasit, founder of @Sabai_Design",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 4,
  },
  {
    author: {
      name: "James Saeed 🤼‍♂️",
      screenName: "j_t_saeed",
      avatar:
        "https://images.unsplash.com/photo-1650022935614-e215270b77de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1Mg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480839929664098307",
    fullText:
      "RT @aram_miquel: Apple should pay more attention. It’s unfair to users, but even more to the small developers that play by the rules!",
    retweetCount: 2,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "DUNNA",
      screenName: "dunnadidit",
      avatar:
        "https://images.unsplash.com/photo-1650471506791-adff557fd92b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAzOA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480883792260775938",
    fullText:
      "RT @captureonepro: Want to know what @dunnadidit thinks about Capture One 22?\n\nWatch the video in the link below, where he tries out our ne…",
    retweetCount: 3,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Cris Busquets 🦊",
      screenName: "cbusquets",
      avatar:
        "https://images.unsplash.com/photo-1649827159600-237a092f95b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1374083317935570947",
    fullText:
      "Creo que cada día se genera más contenido sobre diseño en español y esto me hace feliz.\n\nConfío en que algo habrá contribuido mi aventura marciana 😁",
    retweetCount: 1,
    replyCount: 2,
    favoriteCount: 76,
  },
  {
    author: {
      name: "Pedro",
      screenName: "pepicrft",
      avatar:
        "https://images.unsplash.com/photo-1649542053026-6b59f8723c1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwOA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480880317737152517",
    fullText: "🤯 Around 300 people",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 2,
  },
  {
    author: {
      name: "Imanol Zuaznabar",
      screenName: "Imanolzuaznabar",
      avatar:
        "https://images.unsplash.com/photo-1650502446427-0307c61635be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwOQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480837773800181765",
    fullText:
      "@Javi_Rosano La primera vez que disparé desde ahí me quedé alucinado viendo el JPEG de cámara, aquello es otra liga 😄",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "Cris Busquets 🦊",
      screenName: "cbusquets",
      avatar:
        "https://images.unsplash.com/photo-1649827159600-237a092f95b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480861803496280065",
    fullText:
      "Si estás construyendo tu #portfolio y no puedes publicar algunos de los proyectos porque están bajo un NDA, quizás esto te interesa 🤘\n\nhttps://t.co/6kvzwCQs1H",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 6,
  },
  {
    author: {
      name: "Gergely Orosz",
      screenName: "GergelyOrosz",
      avatar:
        "https://images.unsplash.com/photo-1650122597661-ceccf6d50692?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk4NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480830543382122499",
    fullText:
      "If you work in tech, you probably have strong opinions on how hiring is broken.\n\nWrite this down. The pain points you see and what you'd solve if you were the hiring manager.\n\nThere's a good chance you'll be a hiring manager in a few years. Get this list out and make the changes.",
    retweetCount: 11,
    replyCount: 8,
    favoriteCount: 85,
  },
  {
    author: {
      name: "Ludo the great",
      screenName: "granludo",
      avatar:
        "https://images.unsplash.com/photo-1651226550740-b30efba028f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA1MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480823014409355266",
    fullText:
      "He decidit no comprar-me aquesta samarreta. #butIshould https://t.co/zkao8s06Tx",
    retweetCount: 1,
    replyCount: 2,
    favoriteCount: 5,
  },
  {
    author: {
      name: "@levelsio",
      screenName: "levelsio",
      avatar:
        "https://images.unsplash.com/photo-1650964858223-f4e7f5279f48?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk4Mg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480808657780543493",
    fullText:
      "1) User clicks on https://t.co/PL9rryfQ7X client dashboard to schedule meeting\n2) Robot checks where user is from, EU, non-EU or US\n3) Robot picks right calendar link\n4) Robot duplicates the link, makes it single-use and personalizes the title with their name in it",
    retweetCount: 0,
    replyCount: 1,
    favoriteCount: 19,
  },
  {
    author: {
      name: "Kosta Eleftheriou",
      screenName: "keleftheriou",
      avatar:
        "https://images.unsplash.com/photo-1651017810072-3043e05ddbcc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0MA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480626605370142724",
    fullText: "💰 How to make $13,000,000 on the App Store:\n\n(thread)",
    retweetCount: 606,
    replyCount: 25,
    favoriteCount: 2201,
  },
  {
    author: {
      name: "Philip Young",
      screenName: "philipyoungg",
      avatar:
        "https://images.unsplash.com/photo-1651437074099-fa632f2e708f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0OQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480876712275496960",
    fullText:
      "Session milestone:\n\nToday's revenue is at $500 😱\n\nAn outlier but worth to celebrate! 🥳\n\nSpend my day cleaning the house, learning AWS + SNS (painful), and reading book to make Session better ⚡️ https://t.co/2Zf7UJStt6",
    retweetCount: 0,
    replyCount: 4,
    favoriteCount: 36,
  },
  {
    author: {
      name: "Easlo",
      screenName: "heyeaslo",
      avatar:
        "https://images.unsplash.com/photo-1650035417643-250fa6ee5895?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwMQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480766432275144706",
    fullText:
      "Notion can literally do everything.\n\nNotion + Super → Website\nNotion + Queue → Schedule Twitter\nNotion + Instapost → Schedule Instagram\nNotion + Zorbi → Flashcards\nNotion + NotionForms → Forms\nNotion + HelpKit → Knowledge Base \nNotion + Float → Course",
    retweetCount: 55,
    replyCount: 15,
    favoriteCount: 532,
  },
  {
    author: {
      name: "SonyAlphaRumors",
      screenName: "SonyAlphaRumors",
      avatar:
        "https://images.unsplash.com/photo-1650170495855-add188d60239?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk4MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480809744881303554",
    fullText: "Sony Tidbits… https://t.co/xOStQJcjO9",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "Aeon+Psyche",
      screenName: "aeonmag",
      avatar:
        "https://images.unsplash.com/photo-1650099667209-d0e0cc6bd27f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480841997997035524",
    fullText:
      "Recognising that waste is central, not peripheral, to everything we design, make and do is key to transforming the future https://t.co/2iIvy0430c",
    retweetCount: 4,
    replyCount: 0,
    favoriteCount: 12,
  },
  {
    author: {
      name: "Dickie Bush 🚢",
      screenName: "dickiebush",
      avatar:
        "https://images.unsplash.com/photo-1649470241643-e601950cc489?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5NA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480713019772518407",
    fullText:
      "The single biggest mistake beginner writers make:\n\nPublishing weekly blog posts into the void.\n\nInstead, you should write daily Atomic Essays.\n\nAnd here are 4 reasons why: https://t.co/FoYUUkA3RV",
    retweetCount: 58,
    replyCount: 16,
    favoriteCount: 439,
  },
  {
    author: {
      name: "B&H Photo Video",
      screenName: "bhphoto",
      avatar:
        "https://images.unsplash.com/photo-1651275001129-e8e4fbba075d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0MQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480876449284472838",
    fullText:
      'The latest Canon Cinema EOS System release is coming and it will be "Ready for Anything." \nClick here for more information on January 19, 2022 at 7 AM EST - https://t.co/1BS8S8uAhm\n\nWhat are you hoping this release will bring? https://t.co/UIFyV8hyqv',
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 7,
  },
  {
    author: {
      name: "Simeon",
      screenName: "twolivesleft",
      avatar:
        "https://images.unsplash.com/photo-1649633720119-ae64fda5fac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0OA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480831252060016640",
    fullText:
      "RT @lenymo: Retrogram is now accepting “yeet”. Great game, thanks @twolivesleft and @alittlecj. https://t.co/5Y7oiqIQua",
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Aeon+Psyche",
      screenName: "aeonmag",
      avatar:
        "https://images.unsplash.com/photo-1650099667209-d0e0cc6bd27f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAwNg&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480864584710103046",
    fullText:
      "Artworks have the capacity to transport us into other worlds. But where exactly do we go when we are immersed in art? https://t.co/F1QXdpujFh",
    retweetCount: 4,
    replyCount: 0,
    favoriteCount: 14,
  },
  {
    author: {
      name: "Zachary Diaz",
      screenName: "ZacharyDiaz",
      avatar:
        "https://images.unsplash.com/photo-1651045433852-1a4dc09fc859?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0Mw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480713396806832132",
    fullText:
      "A week of onboarding later and I can share my new role: I’ve joined @tiktok_us Live and will be leading the Creator Management team. \n\nThere is a massive opportunity to bring more live creators and content categories to the existing ecosystem.\n\nPSA: I’m hiring Creator Managers! https://t.co/VGeTOtVvSq",
    retweetCount: 20,
    replyCount: 242,
    favoriteCount: 721,
  },
  {
    author: {
      name: "David Cortés",
      screenName: "davebcn87",
      avatar:
        "https://images.unsplash.com/photo-1650509354833-d3eeb1d161e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0Nw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480887856184897538",
    fullText:
      "Want to keep track of your achievements? \n\nStart a brag document.\n\n https://t.co/5BivvuxWzO",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Smashing Magazine",
      screenName: "smashingmag",
      avatar:
        "https://images.unsplash.com/photo-1649562231804-f1bfadc450d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA5Mw&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1479108107154255875",
    fullText:
      "📣 New Smashing Workshops in 2022:\n \n😎 Accessible Front-End Patterns — @cariefisher\n👾 Front-End Testing — @bahmutov\n👻 HTML Email — \n@HTeuMeuLeu\n🚚 DevOps — \n@mishunov\n🚂 Designing For Complex UI — @smashingmag\n🚚 Data Visualization — \n@wattenberger\n \n👉 https://t.co/aFVbyZMada https://t.co/1MORKvqwYZ",
    retweetCount: 15,
    replyCount: 1,
    favoriteCount: 52,
  },
  {
    author: {
      name: "Applesfera",
      screenName: "applesfera",
      avatar:
        "https://images.unsplash.com/photo-1593114970899-95c26e8d8841?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1Njk5NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480870016425902081",
    fullText:
      "La App Store deberá permitir pagos de terceros, pero Apple seguirá cobrando una comisión reducida al desarrollador https://t.co/TZboDnFhoc https://t.co/Ci1RRMjMzq",
    retweetCount: 5,
    replyCount: 0,
    favoriteCount: 5,
  },
  {
    author: {
      name: "Franz Jeitz",
      screenName: "fudgegraphics",
      avatar:
        "https://images.unsplash.com/photo-1650039673254-08927baf72ac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0NA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480842566685925377",
    fullText: "Wordle 206 3/6\n\n⬜🟩⬜🟨⬜\n⬜🟩🟩⬜🟩\n🟩🟩🟩🟩🟩",
    retweetCount: 0,
    replyCount: 0,
    favoriteCount: 1,
  },
  {
    author: {
      name: "📸 𝙼𝚊𝚞𝚛𝚘 𝙵𝚞𝚎𝚗𝚝𝚎𝚜 🤳 fotomaf ⭐️",
      screenName: "Fotomaf",
      avatar:
        "https://images.unsplash.com/photo-1649003175381-2df7e82ef6f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzAyNA&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480837515909246977",
    fullText: "RT @AitorGoy: Esto https://t.co/NEIdMjQtzF",
    retweetCount: 1,
    replyCount: 0,
    favoriteCount: 0,
  },
  {
    author: {
      name: "Colin Cornaby",
      screenName: "colincornaby",
      avatar:
        "https://images.unsplash.com/photo-1651170022383-6eaa642ee2fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTY1NzA0NQ&ixlib=rb-1.2.1&q=80&w=48",
    },
    id: "1480800802599956480",
    fullText:
      "If you know what to look for you might be able to write more M1 friendly Vulkan code and shaders.",
    retweetCount: 0,
    replyCount: 1,
    favoriteCount: 0,
  },
];
