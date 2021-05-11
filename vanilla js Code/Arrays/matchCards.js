const m_arrays_all = [
  [ // Greetings
    [['hallo', 'hello', 1], ['love', 'lieben', 2], ['you', 'du', 3], ['I', 'ich', 4], ['we', 'wir', 5]],
    [['clear', 'klar', 1], ['life', 'leben', 2], ['beer', 'beer', 3], ['chance', 'glück', 4], ['good', 'gut', 5]],
    [['right', 'richtig', 1], ['false', 'falsch', 2], ['take', 'nehmen', 3], ['come', 'kommen', 4], ['night', 'nacht', 5]],
    [['play', 'spiel', 1], ['try', 'versuchen', 2], ['now', 'jetzt', 3], ['cup', 'tasse', 4], ['coffee', 'kaffee', 5]],
    [['tea', 'tee', 1], ['art', 'kunst', 2], ['ball', 'ball', 3], ['left', 'links', 4], ['shelf', 'schrank', 5]],
    [['juice', 'saft', 1], ['eat', 'essen', 2], ['drink', 'trinken', 3], ['number', 'nummer', 4], ['beautiful', 'schön', 5]],
    [['angry', 'wütend', 1], ['happy', 'glücklich', 2], ['glad', 'froh', 3], ['pleasant', 'angenehm', 4], ['cozy', 'gemütlich', 5]],
    [['jealous', 'eifersüchtig', 1], ['sneaky', 'hinterhältig', 2], ['lovely', 'schön', 3], ['kind', 'nett', 4], ['rude', 'unhöflich', 5]],
    [['remember', 'erinniern', 1], ['forget', 'vergessen', 2], ['know', 'weissen', 3], ['they', 'sie', 4], ['since', 'seit', 5]],
    [['sing', 'singen', 1], ['write', 'schreiben', 2], ['glad', 'froh', 3], ['meet', 'treffen', 4], ['day', 'tag', 5]],
    [['weekend', 'wochenende', 1], ['month', 'monat', 2], ['year', 'jahre', 3], ['week', 'woche', 4], ['semester', 'semester', 5]],
    [['think', 'denken', 1], ['thank', 'danken', 2], ['come', 'kommen', 3], ['go', 'gehen', 4], ['cool', 'cool', 5]],
    [['watch', 'sehen', 1], ['hear', 'hören', 2], ['touch', 'berühren', 3], ['play', 'spielen', 4], ['break', 'brechen', 5]],
    [['repair', 'reparieren', 1], ['buy', 'kaufen', 2], ['sell', 'verkaufen', 3], ['look', 'schauen', 4], ['miss', 'vermissen', 5]],
    [['cry', 'weinen', 1], ['yawn', 'gaehnen', 2], ['say', 'sagen', 3], ['tell', 'erzaehlen', 4], ['rage', 'wut', 5]],
    [['dream', 'traum', 1], ['nightmare', 'albtraum', 2], ['note', 'notieren', 3], ['underline', 'unterstreichen', 4], ['erase', 'löschen', 5]],
    [['car', 'auto', 1], ['walk', 'gehen', 2], ['idea', 'idee', 3], ['consider', 'betrachten', 4], ['regret', 'bedauern', 5]],
    [['ugly', 'hasslich', 1], ['drink', 'trinken', 2], ['call', 'anrufen', 3], ['tea', 'tee', 4], ['coffee', 'kaffee', 5]],

  ],
  [ // Clothing
    [['skirt', 'rock', 1], ['trousers', 'hose', 2], ['sock', 'socke', 3], ['sweatpants', 'trainingshose', 4], ['pullover', 'pullover', 5]],
    [['watch', 'uhr', 1], ['bracelet', 'armband', 2], ['necklace', 'halskette', 3], ['shirt', 'hemd', 4], ['hat', 'hut', 5]],
    [['wig', 'perücke', 1], ['hairband', 'haarband', 2], ['jeans', 'jeans', 3], ['shoes', 'schuhe', 4], ['gloves', 'handschuhe', 5]],
    [['boxer', 'boxershorts', 1], ['bra', 'bh', 2], ['underwear', 'unterwasche', 3], ['coat', 'mantel', 4], ['scarf', 'schal', 5]],
    [['sweater', 'sweatshirt', 1], ['ring', 'ring', 2], ['earring', 'ohrring', 3], ['wear', 'tragen', 4], ['take off', 'ausziehen', 5]],
    [['headphones', 'kopfhörer', 1], ['lipstick', 'lippenstift', 2], ['makeup', 'bilden', 3], ['nail', 'nagel', 4], ['shorts', 'shorts', 5]],
    [['button', 'taste', 1], ['shoulder', 'shulter', 2], ['sleeve', 'aermel', 3], ['softener', 'weichspüler', 4], ['sandals', 'sandalen', 5]],
    [['dress', 'kleid', 1], ['tux', 'smoking', 2], ['towel', 'handtuch', 3], ['glasses', 'brille', 4], ['cap', 'deckel', 5]],
    [['zip', 'postleitzahl', 1], ['stain', 'beflecken', 2], ['needle', 'nadel', 3], ['rope', 'seil', 4], ['wool', 'wolle', 5]],
    [['cashmire', 'kaschmir', 1], ['', 'armband', 2], ['polyester', 'polyester', 3], ['pantyhose', 'strumpfhose', 4], ['tight', 'fest', 5]],
    [['loose', 'lose', 1], ['small', 'klein', 2], ['wide', 'breit', 3], ['colour', 'farbe', 4], ['tanktop', 'muskelshirt', 5]]
  ],
  [ // Travel
    [['tickets', 'fahrkarte', 1], ['bus', 'bus', 2], ['ferry', 'faehre', 3], ['ship', 'schiff', 4], ['train', 'zug', 5]],
    [['distance', 'entfernung', 1], ['plane', 'flugzeug', 2], ['buy', 'kaufen', 3], ['travel', 'reise', 4], ['accident', 'unfall', 5]],
    [['delay', 'verzögern', 1], ['route', 'route', 2], ['way', 'weg', 3], ['ride', 'fahren', 4], ['flying', 'fliegen', 5]],
    [['airport', 'flughafen', 1], ['shipyard', 'werft', 2], ['bus station', 'busshaltestelle', 3], ['train station', 'bahnhof', 4], ['walking', 'laufen', 5]],
    [['waiting', 'warten', 1], ['trip', 'ausflug', 2], ['journey', 'reise', 3], ['vacation', 'urlaub', 4], ['beach', 'strand', 5]],
    [['tire', 'reifen', 1], ['accident', 'unfall', 2], ['drive', 'fahrt', 3], ['flight', 'flug', 4], ['cruise', 'kreuzfahrt', 5]],
    [['train', 'zug', 1], ['room', 'zimmer', 2], ['hotel', 'hotel', 3], ['star', 'stern', 4], ['recetion', 'rezeption', 5]],
    [['cleaning', 'reinigung', 1], ['smoking', 'rauchen', 2], ['party', 'party', 3], ['event', 'veranstaltung', 4], ['gathering', 'versammlung', 5]],
    [['crowd', 'menge', 1], ['fun', 'spaß', 2], ['alcohol', 'alkohol', 3], ['disco', 'disko', 4], ['club', 'klub', 5]],
    [['drinking', 'trinken', 1], ['dancing', 'tanzen', 2], ['holiday', 'urlaub', 3], ['trip', 'ausflug', 4], ['lake', 'see', 5]]
    [['checkin', 'checkin', 1], ['land', 'land', 2], ['take off', 'abheben', 3], ['destination', 'ziel', 4], ['excursion', 'ausflug', 5]],
    [['luggage', 'gepaeck', 1], ['passenger', 'passagier', 2], ['suitcase', 'koffer', 3], ['vacation', 'urlaub', 4], ['bike', 'fahrad', 5]],
    [['freeway', 'autobahn', 1], ['traffic', 'verkehr', 2], ['ocean', 'ozean', 3], ['voyage', 'reise', 4], ['rent', 'miete', 5]]
  ],
  [ // Animals
    [['dog', 'hund', 1], ['cat', 'katze', 2], ['mouse', 'maus', 3], ['horse', 'pferd', 4], ['chicken', 'huhn', 5]],
    [['turkey', 'truthahn', 1], ['sheep', 'schaf', 2], ['goat', 'ziege', 3], ['hippopotam', 'nilpferd', 4], ['bear', 'baer', 5]],
    [['giraffe', 'giraffe', 1], ['lion', 'löwe', 2], ['tiger', 'tiger', 3], ['ape', 'affe', 4], ['bird', 'vogel', 5]],
    [['squirrel', 'eichhörnchen', 1], ['turtle', 'schildkröte', 2], ['butterfly', 'schmetterling', 3], ['zebra', 'zebra', 4], ['puma', 'puma', 5]],
    [['elephant', 'elefant', 1], ['feed', 'füttern', 2], ['fish', 'fisch', 3], ['whale', 'wal', 4], ['dolphin', 'delfin', 5]],
    [['feed', 'füttern', 1], ['pet', 'haustier', 2], ['rub', 'reiben', 3], ['play', 'spielen', 4], ['name', 'nennen', 5]],
    [['meerkat', 'erdmaenchen', 1], ['pig', 'schwein', 2], ['deer', 'hirsch', 3], ['stag', 'bock', 4], ['rabbit', 'kaninchen', 5]],
    [['bunny', 'hase', 1], ['boar', 'wildschwein', 2], ['stork', 'storch', 3], ['sparrow', 'spatz', 4], ['pigeon', 'taube', 5]],
    [['training', 'training', 1], ['octopus', 'krake', 2], ['crab', 'krappe', 3], ['lobster', 'hummer', 4], ['donkey', 'esel', 5]],
    [['eel', 'aal', 1], ['cheetah', 'gepard', 2], ['snake', 'schlange', 3], ['rooster', 'hahn', 4], ['duck', 'ente', 5]]
  ],
  [ // Food
    [['milk', 'milch', 1], ['flour', 'mehl', 2], ['sugar', 'zucker', 3], ['honey', 'honig', 4], ['salt', 'salz', 5]],
    [['pepper', 'pfeffer', 1], ['water', 'wasser', 2], ['meat', 'fleisch', 3], ['chicken', 'huhn', 4], ['tomato', 'tomaten', 5]],
    [['banana', 'bananen', 1], ['apple', 'apfel', 2], ['orange', 'orangen', 3], ['juice', 'saft', 4], ['tea', 'tee', 5]],
    [['coffee', 'kaffee', 1], ['cake', 'backe', 2], ['cookie', 'kekse', 3], ['pasta', 'nudel', 4], ['onion', 'zwiebeln', 5]],
    [['garlic', 'knoblauch', 1], ['salad', 'salat', 2], ['pickle', 'gurke', 3], ['peach', 'pfirsch', 4], ['pear', 'birne', 5]],
    [['dairy', 'molkerei', 1], ['fish', 'fisch', 2], ['grains', 'körner', 3], ['cereals', 'getreide', 4], ['pasta', 'nudeln', 5]],
    [['beets', 'beete', 1], ['lettuce', 'grüner salad', 2], ['sauce', 'soße', 3], ['hot', 'scharf', 4], ['cheesy', 'kaesig', 5]],
    [['boiled', 'gekocht', 1], ['fried', 'gebraten', 2], ['grilled', 'gegrillt', 3], ['roasted', 'geröstet', 4], ['steamed', 'gedaempft', 5]],
    [['eggs', 'eier', 1], ['ham', 'schinken', 2], ['bacon', 'speck', 3], ['sausage', 'wurst', 4], ['toast', 'toast', 5]],
    [['beans', 'bohne', 1], ['honey', 'honig', 2], ['salz', 'salt', 3], ['pepper', 'pfeffer', 4], ['oil', 'öl', 5]],
    [['pasta', 'nudeln', 1], ['cauliflower', 'blumenkohl', 2], ['broccoli', 'brokkoli', 3], ['duck', 'ente', 4], ['beef', 'rindfleisch', 5]],
    [['olives', 'oliven', 1], ['tomato', 'tomate', 2], ['pumpkin', 'kürbis', 3], ['dessert', 'nachtisch', 4], ['menu', 'speisekarte', 5]],
    [['chocolate', 'Schokolade', 1], ['cream', 'sahne', 2], ['foam', 'schaum', 3], ['tuna', 'tunfisch', 4], ['scallion', 'lauchzwiebel', 5]]
  ],
  [ // Education
    [['lesson', 'unterricht', 1], ['blackboard', 'tafel', 2], ['pen', 'stift', 3], ['school', 'schule', 4], ['paper', 'papier', 5]],
    [['eraser', 'raidergummi', 1], ['student', 'student', 2], ['class', 'klasse', 3], ['university', 'universitat', 4], ['campus', 'campus', 5]],
    [['teacher', 'lehrer', 1], ['desk', 'schreibtisch', 2], ['uniform', 'uniform', 3], ['course', 'kurs', 4], ['hour', 'stunde', 5]],
    [['writing', 'schreiben', 1], ['reading', 'lesen', 2], ['book', 'buch', 3], ['notebook', 'notizbuch', 4], ['chalk', 'kreide', 5]],
    [['scholarship', 'stipendium', 1], ['geld', 'money', 2], ['morning', 'morgen', 3], ['offer', 'angebot', 4], ['pass', 'bestehen', 5]],
    [['fail', 'versagen', 1], ['grade', 'klasse', 2], ['mark', 'note', 3], ['limit', 'grenze', 4], ['miss', 'verpassen', 5]],
    [['order', 'auftrag', 1], ['classroom', 'klassenzimmer', 2], ['wall', 'wand', 3], ['pencil', 'bleistift', 4], ['marker', 'marker', 5]],
    [['underline', 'unterzeichnen', 1], ['remember', 'erinniern', 2], ['forget', 'vergessen', 3], ['enjoy', 'genießen', 4], ['hate', 'hass', 5]]
  ],
  [ // Relationshpis
    [['going out', 'ausgehen', 1], ['love', 'liebe', 2], ['hate', 'hass', 3], ['interest', 'interessieren', 4], ['heart', 'herz', 5]],
    [['red', 'rot', 1], ['couple', 'paar', 2], ['relationship', 'beziehung', 3], ['lie', 'lügen', 4], ['cry', 'weinen', 5]],
    [['letter', 'brief', 1], ['song', 'lied', 2], ['poem', 'gedicth', 3], ['proposal', 'heiratsantrag', 4], ['marriage', 'ehe', 5]],
    [['marry', 'heiraten', 1], ['kiss', 'küssen', 2], ['sleep', 'schlafen', 3], ['with', 'mit', 4], ['boyfriend', 'freund', 5]],
    [['girlfriend', 'freundin', 1], ['break up', 'beenden', 2], ['divorce', 'scheidung', 3], ['engage', 'engagieren', 4], ['ring', 'ring', 5]],
    [['promise', 'versprechen', 1], ['commitment', 'engagement', 2], ['sincere', 'aufrichtig', 3], ['serious', 'ernst', 4], ['cute', 'süß', 5]],
    [['sexuality', 'sexualitat', 1], ['making out', 'rummachen', 2], ['say', 'sagen', 3], ['ILU', 'ILD', 4], ['happiness', 'glück', 5]],
  ]
]

export { m_arrays_all }



