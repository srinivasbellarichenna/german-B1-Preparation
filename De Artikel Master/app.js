// German Article Trainer - Interactive Learning App
// Data and Game Logic

// Complete telc B1 vocabulary dataset - All 14 categories (488 nouns total)
const nounsData = [
  // 1. Reisen und Tourismus (45 nouns)
  { article: 'die', noun: 'Wandertour', plural: 'Wandertouren', translation: 'hiking tour', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Strandurlaub', plural: 'Strandurlaube', translation: 'beach vacation', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Städtereise', plural: 'Städtereisen', translation: 'city trip', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Dienstreise', plural: 'Dienstreisen', translation: 'business trip', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Skiurlaub', plural: 'Skiurlaube', translation: 'ski vacation', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Wellnessurlaub', plural: 'Wellnessurlaube', translation: 'wellness vacation', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Hauptsaison', plural: 'Hauptsaisons', translation: 'high season', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Nebensaison', plural: 'Nebensaisons', translation: 'off-season', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Einzelzimmer', plural: 'Einzelzimmer', translation: 'single room', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Doppelzimmer', plural: 'Doppelzimmer', translation: 'double room', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Übernachtung', plural: 'Übernachtungen', translation: 'overnight stay', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Jugendherberge', plural: 'Jugendherbergen', translation: 'youth hostel', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Hostel', plural: 'Hostels', translation: 'hostel', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Campingplatz', plural: 'Campingplätze', translation: 'campsite', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Unterkunft', plural: 'Unterkünfte', translation: 'accommodation', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Pension', plural: 'Pensionen', translation: 'guesthouse', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Halbpension', plural: 'Halbpensionen', translation: 'half-board', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Vollpension', plural: 'Vollpensionen', translation: 'full-board', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Anreise', plural: 'Anreisen', translation: 'arrival', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Abreise', plural: 'Abreisen', translation: 'departure', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Reiseführer', plural: 'Reiseführer', translation: 'travel guide', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Reisebüro', plural: 'Reisebüros', translation: 'travel agency', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Kreuzfahrt', plural: 'Kreuzfahrten', translation: 'cruise', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Ausflug', plural: 'Ausflüge', translation: 'excursion', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Sehenswürdigkeit', plural: 'Sehenswürdigkeiten', translation: 'tourist attraction', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Museum', plural: 'Museen', translation: 'museum', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Strand', plural: 'Strände', translation: 'beach', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Gepäck', plural: 'Gepäckstücke', translation: 'luggage', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Koffer', plural: 'Koffer', translation: 'suitcase', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Tasche', plural: 'Taschen', translation: 'bag', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Rucksack', plural: 'Rucksäcke', translation: 'backpack', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Ticket', plural: 'Tickets', translation: 'ticket', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Fahrkarte', plural: 'Fahrkarten', translation: 'train ticket', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Flug', plural: 'Flüge', translation: 'flight', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Flugzeug', plural: 'Flugzeuge', translation: 'airplane', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Zug', plural: 'Züge', translation: 'train', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Bus', plural: 'Busse', translation: 'bus', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Auto', plural: 'Autos', translation: 'car', category: '1. Reisen und Tourismus' },
  { article: 'das', noun: 'Taxi', plural: 'Taxis', translation: 'taxi', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'U-Bahn', plural: 'U-Bahnen', translation: 'subway', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Straßenbahn', plural: 'Straßenbahnen', translation: 'tram', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Bahnhof', plural: 'Bahnhöfe', translation: 'train station', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Flughafen', plural: 'Flughäfen', translation: 'airport', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Haltestelle', plural: 'Haltestellen', translation: 'bus stop', category: '1. Reisen und Tourismus' },
  { article: 'die', noun: 'Landkarte', plural: 'Landkarten', translation: 'map', category: '1. Reisen und Tourismus' },
  { article: 'der', noun: 'Stadtplan', plural: 'Stadtpläne', translation: 'city map', category: '1. Reisen und Tourismus' },

  // 2. Wohnen und Leben (22 nouns)
  { article: 'die', noun: 'Wohnung', plural: 'Wohnungen', translation: 'apartment', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Haus', plural: 'Häuser', translation: 'house', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Zimmer', plural: 'Zimmer', translation: 'room', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Küche', plural: 'Küchen', translation: 'kitchen', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Badezimmer', plural: 'Badezimmer', translation: 'bathroom', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Schlafzimmer', plural: 'Schlafzimmer', translation: 'bedroom', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Wohnzimmer', plural: 'Wohnzimmer', translation: 'living room', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Balkon', plural: 'Balkone', translation: 'balcony', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Garten', plural: 'Gärten', translation: 'garden', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Terrasse', plural: 'Terrassen', translation: 'terrace', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Keller', plural: 'Keller', translation: 'basement', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Dachboden', plural: 'Dachböden', translation: 'attic', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Garage', plural: 'Garagen', translation: 'garage', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Miete', plural: 'Mieten', translation: 'rent', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Vermieter', plural: 'Vermieter', translation: 'landlord', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Mieter', plural: 'Mieter', translation: 'tenant', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Mietvertrag', plural: 'Mietverträge', translation: 'lease contract', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Kaution', plural: 'Kautionen', translation: 'security deposit', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Nebenkosten', plural: 'Nebenkosten', translation: 'utilities', category: '2. Wohnen und Leben' },
  { article: 'die', noun: 'Heizung', plural: 'Heizungen', translation: 'heating', category: '2. Wohnen und Leben' },
  { article: 'der', noun: 'Strom', plural: 'Ströme', translation: 'electricity', category: '2. Wohnen und Leben' },
  { article: 'das', noun: 'Gas', plural: 'Gase', translation: 'gas', category: '2. Wohnen und Leben' },

  // 3. Umwelt und Klima (29 nouns)
  { article: 'die', noun: 'Umwelt', plural: 'Umwelten', translation: 'environment', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Klima', plural: 'Klimata', translation: 'climate', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Natur', plural: 'Naturen', translation: 'nature', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Wald', plural: 'Wälder', translation: 'forest', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Baum', plural: 'Bäume', translation: 'tree', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Pflanze', plural: 'Pflanzen', translation: 'plant', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Blume', plural: 'Blumen', translation: 'flower', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Tier', plural: 'Tiere', translation: 'animal', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Vogel', plural: 'Vögel', translation: 'bird', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Hund', plural: 'Hunde', translation: 'dog', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Katze', plural: 'Katzen', translation: 'cat', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Wetter', plural: 'Wetter', translation: 'weather', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Sonne', plural: 'Sonnen', translation: 'sun', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Regen', plural: 'Regen', translation: 'rain', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Schnee', plural: 'Schnee', translation: 'snow', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Wind', plural: 'Winde', translation: 'wind', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Wolke', plural: 'Wolken', translation: 'cloud', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Sturm', plural: 'Stürme', translation: 'storm', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Gewitter', plural: 'Gewitter', translation: 'thunderstorm', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Nebel', plural: 'Nebel', translation: 'fog', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Eis', plural: 'Eise', translation: 'ice', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Temperatur', plural: 'Temperaturen', translation: 'temperature', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Müll', plural: 'Müll', translation: 'garbage', category: '3. Umwelt und Klima' },
  { article: 'das', noun: 'Recycling', plural: 'Recyclings', translation: 'recycling', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Verschmutzung', plural: 'Verschmutzungen', translation: 'pollution', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Energie', plural: 'Energien', translation: 'energy', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Klimawandel', plural: 'Klimawandel', translation: 'climate change', category: '3. Umwelt und Klima' },
  { article: 'der', noun: 'Umweltschutz', plural: 'Umweltschutz', translation: 'environmental protection', category: '3. Umwelt und Klima' },
  { article: 'die', noun: 'Nachhaltigkeit', plural: 'Nachhaltigkeiten', translation: 'sustainability', category: '3. Umwelt und Klima' },

  // 4. Einkaufen und Verbraucher (24 nouns)
  { article: 'der', noun: 'Einkauf', plural: 'Einkäufe', translation: 'shopping', category: '4. Einkaufen und Verbraucher' },
  { article: 'das', noun: 'Geschäft', plural: 'Geschäfte', translation: 'store', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Supermarkt', plural: 'Supermärkte', translation: 'supermarket', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Laden', plural: 'Läden', translation: 'shop', category: '4. Einkaufen und Verbraucher' },
  { article: 'das', noun: 'Kaufhaus', plural: 'Kaufhäuser', translation: 'department store', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Markt', plural: 'Märkte', translation: 'market', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Bäckerei', plural: 'Bäckereien', translation: 'bakery', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Metzgerei', plural: 'Metzgereien', translation: 'butcher shop', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Apotheke', plural: 'Apotheken', translation: 'pharmacy', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Preis', plural: 'Preise', translation: 'price', category: '4. Einkaufen und Verbraucher' },
  { article: 'das', noun: 'Geld', plural: 'Gelder', translation: 'money', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Rechnung', plural: 'Rechnungen', translation: 'bill', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Quittung', plural: 'Quittungen', translation: 'receipt', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Kasse', plural: 'Kassen', translation: 'cash register', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Kreditkarte', plural: 'Kreditkarten', translation: 'credit card', category: '4. Einkaufen und Verbraucher' },
  { article: 'das', noun: 'Bargeld', plural: 'Bargeld', translation: 'cash', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Rabatt', plural: 'Rabatte', translation: 'discount', category: '4. Einkaufen und Verbraucher' },
  { article: 'das', noun: 'Sonderangebot', plural: 'Sonderangebote', translation: 'special offer', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Garantie', plural: 'Garantien', translation: 'warranty', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Kunde', plural: 'Kunden', translation: 'customer', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Verkäufer', plural: 'Verkäufer', translation: 'salesperson', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Verkäuferin', plural: 'Verkäuferinnen', translation: 'saleswoman', category: '4. Einkaufen und Verbraucher' },
  { article: 'die', noun: 'Beratung', plural: 'Beratungen', translation: 'consultation', category: '4. Einkaufen und Verbraucher' },
  { article: 'der', noun: 'Service', plural: 'Services', translation: 'service', category: '4. Einkaufen und Verbraucher' },

  // 5. Medien und Unterhaltung (26 nouns)
  { article: 'das', noun: 'Fernsehen', plural: 'Fernsehen', translation: 'television', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Radio', plural: 'Radios', translation: 'radio', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Zeitung', plural: 'Zeitungen', translation: 'newspaper', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Zeitschrift', plural: 'Zeitschriften', translation: 'magazine', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Buch', plural: 'Bücher', translation: 'book', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Internet', plural: 'Internet', translation: 'internet', category: '5. Medien und Unterhaltung' },
  { article: 'der', noun: 'Computer', plural: 'Computer', translation: 'computer', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Handy', plural: 'Handys', translation: 'mobile phone', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Smartphone', plural: 'Smartphones', translation: 'smartphone', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'E-Mail', plural: 'E-Mails', translation: 'email', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Nachricht', plural: 'Nachrichten', translation: 'message/news', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Programm', plural: 'Programme', translation: 'program', category: '5. Medien und Unterhaltung' },
  { article: 'der', noun: 'Film', plural: 'Filme', translation: 'movie', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Sendung', plural: 'Sendungen', translation: 'broadcast', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Serie', plural: 'Serien', translation: 'series', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Musik', plural: 'Musik', translation: 'music', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Lied', plural: 'Lieder', translation: 'song', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Konzert', plural: 'Konzerte', translation: 'concert', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Theater', plural: 'Theater', translation: 'theater', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Kino', plural: 'Kinos', translation: 'cinema', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Bibliothek', plural: 'Bibliotheken', translation: 'library', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Spiel', plural: 'Spiele', translation: 'game', category: '5. Medien und Unterhaltung' },
  { article: 'das', noun: 'Videospiel', plural: 'Videospiele', translation: 'video game', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Unterhaltung', plural: 'Unterhaltungen', translation: 'entertainment', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Werbung', plural: 'Werbungen', translation: 'advertising', category: '5. Medien und Unterhaltung' },
  { article: 'die', noun: 'Information', plural: 'Informationen', translation: 'information', category: '5. Medien und Unterhaltung' },

  // 6. Sport und Freizeit (27 nouns)
  { article: 'der', noun: 'Sport', plural: 'Sportarten', translation: 'sport', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Fußball', plural: 'Fußbälle', translation: 'football/soccer', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Tennis', plural: 'Tennis', translation: 'tennis', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Schwimmen', plural: 'Schwimmen', translation: 'swimming', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Laufen', plural: 'Laufen', translation: 'running', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Radfahren', plural: 'Radfahren', translation: 'cycling', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Skifahren', plural: 'Skifahren', translation: 'skiing', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Wandern', plural: 'Wandern', translation: 'hiking', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Fitnessstudio', plural: 'Fitnessstudios', translation: 'gym', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Verein', plural: 'Vereine', translation: 'club/association', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Mannschaft', plural: 'Mannschaften', translation: 'team', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Spiel', plural: 'Spiele', translation: 'game/match', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Training', plural: 'Trainings', translation: 'training', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Trainer', plural: 'Trainer', translation: 'coach', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Spieler', plural: 'Spieler', translation: 'player', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Stadion', plural: 'Stadien', translation: 'stadium', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Platz', plural: 'Plätze', translation: 'court/field', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Freizeit', plural: 'Freizeiten', translation: 'leisure time', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Hobby', plural: 'Hobbys', translation: 'hobby', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Aktivität', plural: 'Aktivitäten', translation: 'activity', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Park', plural: 'Parks', translation: 'park', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Spielplatz', plural: 'Spielplätze', translation: 'playground', category: '6. Sport und Freizeit' },
  { article: 'das', noun: 'Schwimmbad', plural: 'Schwimmbäder', translation: 'swimming pool', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Sauna', plural: 'Saunen', translation: 'sauna', category: '6. Sport und Freizeit' },
  { article: 'der', noun: 'Wellness', plural: 'Wellness', translation: 'wellness', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Entspannung', plural: 'Entspannungen', translation: 'relaxation', category: '6. Sport und Freizeit' },
  { article: 'die', noun: 'Erholung', plural: 'Erholungen', translation: 'recreation', category: '6. Sport und Freizeit' },

  // 7. Geschichte und Erinnerung (28 nouns) 
  { article: 'die', noun: 'Geschichte', plural: 'Geschichten', translation: 'history/story', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Vergangenheit', plural: 'Vergangenheiten', translation: 'past', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Gegenwart', plural: 'Gegenwartszeiten', translation: 'present', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Zukunft', plural: 'Zukünfte', translation: 'future', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Erinnerung', plural: 'Erinnerungen', translation: 'memory', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Gedächtnis', plural: 'Gedächtnisse', translation: 'memory (faculty)', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Tradition', plural: 'Traditionen', translation: 'tradition', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Kultur', plural: 'Kulturen', translation: 'culture', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Erbe', plural: 'Erbe', translation: 'heritage', category: '7. Geschichte und Erinnerung' },
  { article: 'der', noun: 'Krieg', plural: 'Kriege', translation: 'war', category: '7. Geschichte und Erinnerung' },
  { article: 'der', noun: 'Frieden', plural: 'Frieden', translation: 'peace', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Revolution', plural: 'Revolutionen', translation: 'revolution', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Politik', plural: 'Politiken', translation: 'politics', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Regierung', plural: 'Regierungen', translation: 'government', category: '7. Geschichte und Erinnerung' },
  { article: 'der', noun: 'Präsident', plural: 'Präsidenten', translation: 'president', category: '7. Geschichte und Erinnerung' },
  { article: 'der', noun: 'Kanzler', plural: 'Kanzler', translation: 'chancellor', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Parlament', plural: 'Parlamente', translation: 'parliament', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Wahl', plural: 'Wahlen', translation: 'election', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Demokratie', plural: 'Demokratien', translation: 'democracy', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Gesetz', plural: 'Gesetze', translation: 'law', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Recht', plural: 'Rechte', translation: 'right/law', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Verfassung', plural: 'Verfassungen', translation: 'constitution', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Freiheit', plural: 'Freiheiten', translation: 'freedom', category: '7. Geschichte und Erinnerung' },
  { article: 'die', noun: 'Gleichberechtigung', plural: 'Gleichberechtigungen', translation: 'equal rights', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Jahrhundert', plural: 'Jahrhunderte', translation: 'century', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Jahrzehnt', plural: 'Jahrzehnte', translation: 'decade', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Ereignis', plural: 'Ereignisse', translation: 'event', category: '7. Geschichte und Erinnerung' },
  { article: 'das', noun: 'Denkmal', plural: 'Denkmäler', translation: 'monument', category: '7. Geschichte und Erinnerung' },

  // 8. Migration und Heimat (21 nouns)
  { article: 'die', noun: 'Migration', plural: 'Migrationen', translation: 'migration', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Einwanderung', plural: 'Einwanderungen', translation: 'immigration', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Auswanderung', plural: 'Auswanderungen', translation: 'emigration', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Einwanderer', plural: 'Einwanderer', translation: 'immigrant', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Auswanderer', plural: 'Auswanderer', translation: 'emigrant', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Flüchtling', plural: 'Flüchtlinge', translation: 'refugee', category: '8. Migration und Heimat' },
  { article: 'das', noun: 'Asyl', plural: 'Asyle', translation: 'asylum', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Heimat', plural: 'Heimaten', translation: 'homeland', category: '8. Migration und Heimat' },
  { article: 'das', noun: 'Herkunftsland', plural: 'Herkunftsländer', translation: 'country of origin', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Staatsangehörigkeit', plural: 'Staatsangehörigkeiten', translation: 'nationality', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Pass', plural: 'Pässe', translation: 'passport', category: '8. Migration und Heimat' },
  { article: 'das', noun: 'Visum', plural: 'Visa', translation: 'visa', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Aufenthaltserlaubnis', plural: 'Aufenthaltserlaubnisse', translation: 'residence permit', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Integration', plural: 'Integrationen', translation: 'integration', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Sprache', plural: 'Sprachen', translation: 'language', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Sprachkurs', plural: 'Sprachkurse', translation: 'language course', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Übersetzung', plural: 'Übersetzungen', translation: 'translation', category: '8. Migration und Heimat' },
  { article: 'der', noun: 'Dolmetscher', plural: 'Dolmetscher', translation: 'interpreter', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Verständigung', plural: 'Verständigungen', translation: 'communication', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Toleranz', plural: 'Toleranzen', translation: 'tolerance', category: '8. Migration und Heimat' },
  { article: 'die', noun: 'Vielfalt', plural: 'Vielfalten', translation: 'diversity', category: '8. Migration und Heimat' },

  // 9. Arbeit und Beruf (45 nouns)
  { article: 'die', noun: 'Arbeit', plural: 'Arbeiten', translation: 'work', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Beruf', plural: 'Berufe', translation: 'profession', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Job', plural: 'Jobs', translation: 'job', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Stelle', plural: 'Stellen', translation: 'position', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Karriere', plural: 'Karrieren', translation: 'career', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Arbeitsplatz', plural: 'Arbeitsplätze', translation: 'workplace', category: '9. Arbeit und Beruf' },
  { article: 'das', noun: 'Büro', plural: 'Büros', translation: 'office', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Firma', plural: 'Firmen', translation: 'company', category: '9. Arbeit und Beruf' },
  { article: 'das', noun: 'Unternehmen', plural: 'Unternehmen', translation: 'enterprise', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Chef', plural: 'Chefs', translation: 'boss', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Chefin', plural: 'Chefinnen', translation: 'female boss', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Kollege', plural: 'Kollegen', translation: 'colleague (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Kollegin', plural: 'Kolleginnen', translation: 'colleague (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Mitarbeiter', plural: 'Mitarbeiter', translation: 'employee (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Mitarbeiterin', plural: 'Mitarbeiterinnen', translation: 'employee (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Angestellte', plural: 'Angestellten', translation: 'employee', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Arbeiter', plural: 'Arbeiter', translation: 'worker', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Beamte', plural: 'Beamten', translation: 'civil servant', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Manager', plural: 'Manager', translation: 'manager', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Direktor', plural: 'Direktoren', translation: 'director', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Sekretär', plural: 'Sekretäre', translation: 'secretary (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Sekretärin', plural: 'Sekretärinnen', translation: 'secretary (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Ingenieur', plural: 'Ingenieure', translation: 'engineer', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Arzt', plural: 'Ärzte', translation: 'doctor (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Ärztin', plural: 'Ärztinnen', translation: 'doctor (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Lehrer', plural: 'Lehrer', translation: 'teacher (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Lehrerin', plural: 'Lehrerinnen', translation: 'teacher (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Polizist', plural: 'Polizisten', translation: 'police officer (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Polizistin', plural: 'Polizistinnen', translation: 'police officer (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Feuerwehrmann', plural: 'Feuerwehrmänner', translation: 'firefighter', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Koch', plural: 'Köche', translation: 'cook (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Köchin', plural: 'Köchinnen', translation: 'cook (female)', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Friseur', plural: 'Friseure', translation: 'hairdresser (male)', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Friseurin', plural: 'Friseurinnen', translation: 'hairdresser (female)', category: '9. Arbeit und Beruf' },
  { article: 'das', noun: 'Gehalt', plural: 'Gehälter', translation: 'salary', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Lohn', plural: 'Löhne', translation: 'wage', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Bezahlung', plural: 'Bezahlungen', translation: 'payment', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Urlaub', plural: 'Urlaube', translation: 'vacation', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Pause', plural: 'Pausen', translation: 'break', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Arbeitszeit', plural: 'Arbeitszeiten', translation: 'working hours', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Überstunde', plural: 'Überstunden', translation: 'overtime', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Teilzeit', plural: 'Teilzeiten', translation: 'part-time', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Vollzeit', plural: 'Vollzeiten', translation: 'full-time', category: '9. Arbeit und Beruf' },
  { article: 'die', noun: 'Bewerbung', plural: 'Bewerbungen', translation: 'application', category: '9. Arbeit und Beruf' },
  { article: 'das', noun: 'Vorstellungsgespräch', plural: 'Vorstellungsgespräche', translation: 'job interview', category: '9. Arbeit und Beruf' },
  { article: 'der', noun: 'Lebenslauf', plural: 'Lebensläufe', translation: 'resume/CV', category: '9. Arbeit und Beruf' },

  // 10. Büro und Energie (20 nouns)
  { article: 'das', noun: 'Büro', plural: 'Büros', translation: 'office', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Schreibtisch', plural: 'Schreibtische', translation: 'desk', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Stuhl', plural: 'Stühle', translation: 'chair', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Computer', plural: 'Computer', translation: 'computer', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Drucker', plural: 'Drucker', translation: 'printer', category: '10. Büro und Energie' },
  { article: 'das', noun: 'Papier', plural: 'Papiere', translation: 'paper', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Stift', plural: 'Stifte', translation: 'pen', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Kugelschreiber', plural: 'Kugelschreiber', translation: 'ballpoint pen', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Bleistift', plural: 'Bleistifte', translation: 'pencil', category: '10. Büro und Energie' },
  { article: 'das', noun: 'Telefon', plural: 'Telefone', translation: 'telephone', category: '10. Büro und Energie' },
  { article: 'das', noun: 'Fax', plural: 'Faxe', translation: 'fax', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Kopierer', plural: 'Kopierer', translation: 'copier', category: '10. Büro und Energie' },
  { article: 'die', noun: 'Energie', plural: 'Energien', translation: 'energy', category: '10. Büro und Energie' },
  { article: 'der', noun: 'Strom', plural: 'Ströme', translation: 'electricity', category: '10. Büro und Energie' },
  { article: 'das', noun: 'Gas', plural: 'Gase', translation: 'gas', category: '10. Büro und Energie' },
  { article: 'das', noun: 'Öl', plural: 'Öle', translation: 'oil', category: '10. Büro und Energie' },
  { article: 'die', noun: 'Kohle', plural: 'Kohlen', translation: 'coal', category: '10. Büro und Energie' },
  { article: 'die', noun: 'Solarenergie', plural: 'Solarenergien', translation: 'solar energy', category: '10. Büro und Energie' },
  { article: 'die', noun: 'Windenergie', plural: 'Windenergien', translation: 'wind energy', category: '10. Büro und Energie' },
  { article: 'die', noun: 'Atomenergie', plural: 'Atomenergien', translation: 'nuclear energy', category: '10. Büro und Energie' },

  // 11. Gesundheit und Ernährung (29 nouns)
  { article: 'die', noun: 'Gesundheit', plural: 'Gesundheiten', translation: 'health', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Krankheit', plural: 'Krankheiten', translation: 'illness', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Arzt', plural: 'Ärzte', translation: 'doctor', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Krankenhaus', plural: 'Krankenhäuser', translation: 'hospital', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Apotheke', plural: 'Apotheken', translation: 'pharmacy', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Medikament', plural: 'Medikamente', translation: 'medicine', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Tablette', plural: 'Tabletten', translation: 'tablet', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Schmerz', plural: 'Schmerzen', translation: 'pain', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Fieber', plural: 'Fieber', translation: 'fever', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Husten', plural: 'Husten', translation: 'cough', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Schnupfen', plural: 'Schnupfen', translation: 'cold', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Grippe', plural: 'Grippen', translation: 'flu', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Kopfschmerzen', plural: 'Kopfschmerzen', translation: 'headache', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Bauchschmerzen', plural: 'Bauchschmerzen', translation: 'stomach ache', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Zahnarzt', plural: 'Zahnärzte', translation: 'dentist', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Zahn', plural: 'Zähne', translation: 'tooth', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Ernährung', plural: 'Ernährungen', translation: 'nutrition', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Essen', plural: 'Essen', translation: 'food', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Getränk', plural: 'Getränke', translation: 'drink', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Wasser', plural: 'Wasser', translation: 'water', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Milch', plural: 'Milch', translation: 'milk', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Brot', plural: 'Brote', translation: 'bread', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Fleisch', plural: 'Fleisch', translation: 'meat', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Fisch', plural: 'Fische', translation: 'fish', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Gemüse', plural: 'Gemüse', translation: 'vegetables', category: '11. Gesundheit und Ernährung' },
  { article: 'das', noun: 'Obst', plural: 'Obst', translation: 'fruit', category: '11. Gesundheit und Ernährung' },
  { article: 'der', noun: 'Apfel', plural: 'Äpfel', translation: 'apple', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Banane', plural: 'Bananen', translation: 'banana', category: '11. Gesundheit und Ernährung' },
  { article: 'die', noun: 'Orange', plural: 'Orangen', translation: 'orange', category: '11. Gesundheit und Ernährung' },

  // 12. Versicherungen und Autos (41 nouns)
  { article: 'die', noun: 'Versicherung', plural: 'Versicherungen', translation: 'insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Krankenversicherung', plural: 'Krankenversicherungen', translation: 'health insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Lebensversicherung', plural: 'Lebensversicherungen', translation: 'life insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Haftpflichtversicherung', plural: 'Haftpflichtversicherungen', translation: 'liability insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Hausratversicherung', plural: 'Hausratversicherungen', translation: 'household insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Unfallversicherung', plural: 'Unfallversicherungen', translation: 'accident insurance', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Reiseversicherung', plural: 'Reiseversicherungen', translation: 'travel insurance', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Vertrag', plural: 'Verträge', translation: 'contract', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Prämie', plural: 'Prämien', translation: 'premium', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Schaden', plural: 'Schäden', translation: 'damage', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Schadensregulierung', plural: 'Schadensregulierungen', translation: 'claims settlement', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Auto', plural: 'Autos', translation: 'car', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Wagen', plural: 'Wagen', translation: 'vehicle', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Fahrzeug', plural: 'Fahrzeuge', translation: 'vehicle', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'PKW', plural: 'PKWs', translation: 'passenger car', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'LKW', plural: 'LKWs', translation: 'truck', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Motorrad', plural: 'Motorräder', translation: 'motorcycle', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Fahrrad', plural: 'Fahrräder', translation: 'bicycle', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Führerschein', plural: 'Führerscheine', translation: 'driver\'s license', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Fahrschule', plural: 'Fahrschulen', translation: 'driving school', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Fahrprüfung', plural: 'Fahrprüfungen', translation: 'driving test', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Tankstelle', plural: 'Tankstellen', translation: 'gas station', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Benzin', plural: 'Benzine', translation: 'gasoline', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Diesel', plural: 'Diesel', translation: 'diesel', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Öl', plural: 'Öle', translation: 'oil', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Reparatur', plural: 'Reparaturen', translation: 'repair', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Werkstatt', plural: 'Werkstätten', translation: 'workshop/garage', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Mechaniker', plural: 'Mechaniker', translation: 'mechanic', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Panne', plural: 'Pannen', translation: 'breakdown', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Unfall', plural: 'Unfälle', translation: 'accident', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Polizei', plural: 'Polizeien', translation: 'police', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Strafzettel', plural: 'Strafzettel', translation: 'parking ticket', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Strafe', plural: 'Strafen', translation: 'fine', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Geschwindigkeit', plural: 'Geschwindigkeiten', translation: 'speed', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Tempolimit', plural: 'Tempolimits', translation: 'speed limit', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Straße', plural: 'Straßen', translation: 'street', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Autobahn', plural: 'Autobahnen', translation: 'highway', category: '12. Versicherungen und Autos' },
  { article: 'der', noun: 'Parkplatz', plural: 'Parkplätze', translation: 'parking space', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Parkhaus', plural: 'Parkhäuser', translation: 'parking garage', category: '12. Versicherungen und Autos' },
  { article: 'die', noun: 'Ampel', plural: 'Ampeln', translation: 'traffic light', category: '12. Versicherungen und Autos' },
  { article: 'das', noun: 'Verkehrsschild', plural: 'Verkehrsschilder', translation: 'traffic sign', category: '12. Versicherungen und Autos' },

  // 13. Prüfungen und Ehrenamt (16 nouns)
  { article: 'die', noun: 'Prüfung', plural: 'Prüfungen', translation: 'exam', category: '13. Prüfungen und Ehrenamt' },
  { article: 'der', noun: 'Test', plural: 'Tests', translation: 'test', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Klausur', plural: 'Klausuren', translation: 'written exam', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Note', plural: 'Noten', translation: 'grade', category: '13. Prüfungen und Ehrenamt' },
  { article: 'das', noun: 'Zeugnis', plural: 'Zeugnisse', translation: 'certificate', category: '13. Prüfungen und Ehrenamt' },
  { article: 'das', noun: 'Diplom', plural: 'Diplome', translation: 'diploma', category: '13. Prüfungen und Ehrenamt' },
  { article: 'der', noun: 'Abschluss', plural: 'Abschlüsse', translation: 'degree', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Schule', plural: 'Schulen', translation: 'school', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Universität', plural: 'Universitäten', translation: 'university', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Hochschule', plural: 'Hochschulen', translation: 'college', category: '13. Prüfungen und Ehrenamt' },
  { article: 'der', noun: 'Student', plural: 'Studenten', translation: 'student (male)', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Studentin', plural: 'Studentinnen', translation: 'student (female)', category: '13. Prüfungen und Ehrenamt' },
  { article: 'das', noun: 'Ehrenamt', plural: 'Ehrenämter', translation: 'volunteer work', category: '13. Prüfungen und Ehrenamt' },
  { article: 'der', noun: 'Freiwillige', plural: 'Freiwilligen', translation: 'volunteer', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Hilfe', plural: 'Hilfen', translation: 'help', category: '13. Prüfungen und Ehrenamt' },
  { article: 'die', noun: 'Unterstützung', plural: 'Unterstützungen', translation: 'support', category: '13. Prüfungen und Ehrenamt' },

  // 14. Grundwortschatz (115 nouns) - Essential basic vocabulary
  { article: 'der', noun: 'Mann', plural: 'Männer', translation: 'man', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Frau', plural: 'Frauen', translation: 'woman', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Kind', plural: 'Kinder', translation: 'child', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Junge', plural: 'Jungen', translation: 'boy', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Mädchen', plural: 'Mädchen', translation: 'girl', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Familie', plural: 'Familien', translation: 'family', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Mutter', plural: 'Mütter', translation: 'mother', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Vater', plural: 'Väter', translation: 'father', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Sohn', plural: 'Söhne', translation: 'son', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Tochter', plural: 'Töchter', translation: 'daughter', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Bruder', plural: 'Brüder', translation: 'brother', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Schwester', plural: 'Schwestern', translation: 'sister', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Großmutter', plural: 'Großmütter', translation: 'grandmother', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Großvater', plural: 'Großväter', translation: 'grandfather', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Freund', plural: 'Freunde', translation: 'friend (male)', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Freundin', plural: 'Freundinnen', translation: 'friend (female)', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Name', plural: 'Namen', translation: 'name', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Alter', plural: 'Alter', translation: 'age', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Tag', plural: 'Tage', translation: 'day', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Woche', plural: 'Wochen', translation: 'week', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Monat', plural: 'Monate', translation: 'month', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Jahr', plural: 'Jahre', translation: 'year', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Zeit', plural: 'Zeiten', translation: 'time', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Stunde', plural: 'Stunden', translation: 'hour', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Minute', plural: 'Minuten', translation: 'minute', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Sekunde', plural: 'Sekunden', translation: 'second', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Morgen', plural: 'Morgen', translation: 'morning', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Mittag', plural: 'Mittage', translation: 'noon', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Abend', plural: 'Abende', translation: 'evening', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Nacht', plural: 'Nächte', translation: 'night', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Montag', plural: 'Montage', translation: 'Monday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Dienstag', plural: 'Dienstage', translation: 'Tuesday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Mittwoch', plural: 'Mittwoche', translation: 'Wednesday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Donnerstag', plural: 'Donnerstage', translation: 'Thursday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Freitag', plural: 'Freitage', translation: 'Friday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Samstag', plural: 'Samstage', translation: 'Saturday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Sonntag', plural: 'Sonntage', translation: 'Sunday', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Januar', plural: 'Januare', translation: 'January', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Februar', plural: 'Februare', translation: 'February', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'März', plural: 'Märze', translation: 'March', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'April', plural: 'Aprile', translation: 'April', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Mai', plural: 'Maie', translation: 'May', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Juni', plural: 'Junis', translation: 'June', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Juli', plural: 'Julis', translation: 'July', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'August', plural: 'Auguste', translation: 'August', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'September', plural: 'September', translation: 'September', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Oktober', plural: 'Oktober', translation: 'October', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'November', plural: 'November', translation: 'November', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Dezember', plural: 'Dezember', translation: 'December', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Farbe', plural: 'Farben', translation: 'color', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Rot', plural: 'Rot', translation: 'red', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Blau', plural: 'Blau', translation: 'blue', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Grün', plural: 'Grün', translation: 'green', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Gelb', plural: 'Gelb', translation: 'yellow', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Schwarz', plural: 'Schwarz', translation: 'black', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Weiß', plural: 'Weiß', translation: 'white', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Zahl', plural: 'Zahlen', translation: 'number', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Null', plural: 'Nullen', translation: 'zero', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Eins', plural: 'Einsen', translation: 'one', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Zwei', plural: 'Zweien', translation: 'two', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Drei', plural: 'Dreien', translation: 'three', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Vier', plural: 'Vieren', translation: 'four', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Fünf', plural: 'Fünfen', translation: 'five', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Sechs', plural: 'Sechsen', translation: 'six', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Sieben', plural: 'Siebenen', translation: 'seven', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Acht', plural: 'Achten', translation: 'eight', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Neun', plural: 'Neunen', translation: 'nine', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Zehn', plural: 'Zehnen', translation: 'ten', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Land', plural: 'Länder', translation: 'country', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Stadt', plural: 'Städte', translation: 'city', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Dorf', plural: 'Dörfer', translation: 'village', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Straße', plural: 'Straßen', translation: 'street', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Weg', plural: 'Wege', translation: 'way/path', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Platz', plural: 'Plätze', translation: 'square/place', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Geschäft', plural: 'Geschäfte', translation: 'business/shop', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Bank', plural: 'Banken', translation: 'bank', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Post', plural: 'Posten', translation: 'post office', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Schule', plural: 'Schulen', translation: 'school', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Kirche', plural: 'Kirchen', translation: 'church', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Restaurant', plural: 'Restaurants', translation: 'restaurant', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Café', plural: 'Cafés', translation: 'cafe', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Hotel', plural: 'Hotels', translation: 'hotel', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Bahnhof', plural: 'Bahnhöfe', translation: 'train station', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Flughafen', plural: 'Flughäfen', translation: 'airport', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Krankenhaus', plural: 'Krankenhäuser', translation: 'hospital', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Körper', plural: 'Körper', translation: 'body', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Kopf', plural: 'Köpfe', translation: 'head', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Gesicht', plural: 'Gesichter', translation: 'face', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Auge', plural: 'Augen', translation: 'eye', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Nase', plural: 'Nasen', translation: 'nose', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Mund', plural: 'Münder', translation: 'mouth', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Ohr', plural: 'Ohren', translation: 'ear', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Haar', plural: 'Haare', translation: 'hair', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Hals', plural: 'Hälse', translation: 'neck', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Hand', plural: 'Hände', translation: 'hand', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Finger', plural: 'Finger', translation: 'finger', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Arm', plural: 'Arme', translation: 'arm', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Bein', plural: 'Beine', translation: 'leg', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Fuß', plural: 'Füße', translation: 'foot', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Rücken', plural: 'Rücken', translation: 'back', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Bauch', plural: 'Bäuche', translation: 'stomach/belly', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Herz', plural: 'Herzen', translation: 'heart', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Kleidung', plural: 'Kleidungen', translation: 'clothing', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Hemd', plural: 'Hemden', translation: 'shirt', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Hose', plural: 'Hosen', translation: 'pants', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Kleid', plural: 'Kleider', translation: 'dress', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Rock', plural: 'Röcke', translation: 'skirt', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Jacke', plural: 'Jacken', translation: 'jacket', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Mantel', plural: 'Mäntel', translation: 'coat', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Schuh', plural: 'Schuhe', translation: 'shoe', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Socke', plural: 'Socken', translation: 'sock', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Hut', plural: 'Hüte', translation: 'hat', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Brille', plural: 'Brillen', translation: 'glasses', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Uhr', plural: 'Uhren', translation: 'watch/clock', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Ring', plural: 'Ringe', translation: 'ring', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Kette', plural: 'Ketten', translation: 'necklace/chain', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Tasche', plural: 'Taschen', translation: 'bag/pocket', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Schlüssel', plural: 'Schlüssel', translation: 'key', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Portemonnaie', plural: 'Portemonnaies', translation: 'wallet', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Handy', plural: 'Handys', translation: 'mobile phone', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Kamera', plural: 'Kameras', translation: 'camera', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Foto', plural: 'Fotos', translation: 'photo', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Bild', plural: 'Bilder', translation: 'picture', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Frage', plural: 'Fragen', translation: 'question', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Antwort', plural: 'Antworten', translation: 'answer', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Problem', plural: 'Probleme', translation: 'problem', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Lösung', plural: 'Lösungen', translation: 'solution', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Fehler', plural: 'Fehler', translation: 'mistake', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Idee', plural: 'Ideen', translation: 'idea', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Plan', plural: 'Pläne', translation: 'plan', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Ziel', plural: 'Ziele', translation: 'goal', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Erfolg', plural: 'Erfolge', translation: 'success', category: '14. Grundwortschatz' },
  { article: 'das', noun: 'Glück', plural: 'Glück', translation: 'luck/happiness', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Freude', plural: 'Freuden', translation: 'joy', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Liebe', plural: 'Lieben', translation: 'love', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Angst', plural: 'Ängste', translation: 'fear', category: '14. Grundwortschatz' },
  { article: 'die', noun: 'Sorge', plural: 'Sorgen', translation: 'worry', category: '14. Grundwortschatz' },
  { article: 'der', noun: 'Ärger', plural: 'Ärger', translation: 'anger/trouble', category: '14. Grundwortschatz' }
];

// Get all categories for selection
const categories = [
  { name: 'Alle Themen | All Topics', id: 'random', count: nounsData.length },
  { name: '🧳 Reisen und Tourismus | Travel & Tourism', id: '1. Reisen und Tourismus', count: nounsData.filter(n => n.category === '1. Reisen und Tourismus').length },
  { name: '🏠 Wohnen und Leben | Housing & Living', id: '2. Wohnen und Leben', count: nounsData.filter(n => n.category === '2. Wohnen und Leben').length },
  { name: '🌍 Umwelt und Klima | Environment & Climate', id: '3. Umwelt und Klima', count: nounsData.filter(n => n.category === '3. Umwelt und Klima').length },
  { name: '🛒 Einkaufen und Verbraucher | Shopping & Consumer', id: '4. Einkaufen und Verbraucher', count: nounsData.filter(n => n.category === '4. Einkaufen und Verbraucher').length },
  { name: '📺 Medien und Unterhaltung | Media & Entertainment', id: '5. Medien und Unterhaltung', count: nounsData.filter(n => n.category === '5. Medien und Unterhaltung').length },
  { name: '⚽ Sport und Freizeit | Sports & Leisure', id: '6. Sport und Freizeit', count: nounsData.filter(n => n.category === '6. Sport und Freizeit').length },
  { name: '📚 Geschichte und Erinnerung | History & Memory', id: '7. Geschichte und Erinnerung', count: nounsData.filter(n => n.category === '7. Geschichte und Erinnerung').length },
  { name: '✈️ Migration und Heimat | Migration & Home', id: '8. Migration und Heimat', count: nounsData.filter(n => n.category === '8. Migration und Heimat').length },
  { name: '💼 Arbeit und Beruf | Work & Career', id: '9. Arbeit und Beruf', count: nounsData.filter(n => n.category === '9. Arbeit und Beruf').length },
  { name: '🏢 Büro und Energie | Office & Energy', id: '10. Büro und Energie', count: nounsData.filter(n => n.category === '10. Büro und Energie').length },
  { name: '🍎 Gesundheit und Ernährung | Health & Nutrition', id: '11. Gesundheit und Ernährung', count: nounsData.filter(n => n.category === '11. Gesundheit und Ernährung').length },
  { name: '🚗 Versicherungen und Autos | Insurance & Cars', id: '12. Versicherungen und Autos', count: nounsData.filter(n => n.category === '12. Versicherungen und Autos').length },
  { name: '📝 Prüfungen und Ehrenamt | Exams & Volunteering', id: '13. Prüfungen und Ehrenamt', count: nounsData.filter(n => n.category === '13. Prüfungen und Ehrenamt').length },
  { name: '📖 Grundwortschatz | Basic Nouns', id: '14. Grundwortschatz', count: nounsData.filter(n => n.category === '14. Grundwortschatz').length }
];

// Mnemonics and hints for each article
const mnemonics = {
  'der': [
    '🚹 Masculine words often end in -er, -el, -en (der Strandurlaub)',
    '🚹 Many male professions and agents use "der"',
    '🚹 Days, months, seasons are usually "der"'
  ],
  'die': [
    '🚺 Feminine words often end in -e, -ung, -heit, -keit (die Wandertour)',
    '🚺 Most nouns ending in -reise use "die" (die Städtereise)',
    '🚺 Abstract concepts often use "die"'
  ],
  'das': [
    '⚪ Neuter words often end in -chen, -lein, -er (das Einzelzimmer)',
    '⚪ Many rooms and spaces use "das" (das Doppelzimmer)',
    '⚪ Foreign words often use "das" (das Hostel)'
  ]
};

// Game state variables
let gameState = {
  currentNoun: null,
  currentIndex: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  totalAnswered: 0,
  correctAnswers: 0,
  currentCategory: null,
  gameNouns: [],
  showHints: false,
  gameCompleted: false
};

// DOM elements
const screens = {
  intro: document.getElementById('intro-screen'),
  practice: document.getElementById('practice-screen'),
  results: document.getElementById('results-screen')
};

const elements = {
  score: document.getElementById('score'),
  streak: document.getElementById('streak'),
  progress: document.getElementById('progress'),
  accuracy: document.getElementById('accuracy'),
  categoryBadge: document.getElementById('category-badge'),
  nounMain: document.getElementById('noun-main'),
  nounTranslation: document.getElementById('noun-translation'),
  nounPlural: document.getElementById('noun-plural'),
  feedbackArea: document.getElementById('feedback-area'),
  hintBtn: document.getElementById('hint-btn')
};

// Initialize the app
function init() {
  setupKeyboardShortcuts();
  populateCategories();
  showIntro();
}

// Populate category buttons dynamically
function populateCategories() {
  const categoryContainer = document.getElementById('category-buttons');
  let categoriesHTML = '';
  
  categories.forEach(category => {
    const buttonClass = category.id === 'random' ? 'btn--primary' : 'btn--secondary';
    const iconClass = category.id === 'random' ? '🎲' : '';
    
    categoriesHTML += `
      <button class="btn category-btn ${buttonClass}" onclick="startPractice('${category.id}')">
        <div class="category-name">${category.name}</div>
        <div class="category-count">${category.count} Wörter | ${category.count} nouns</div>
      </button>
    `;
  });
  
  categoryContainer.innerHTML = categoriesHTML;
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (!screens.practice.classList.contains('active')) return;
    
    switch(e.key) {
      case '1':
        selectArticle('der');
        break;
      case '2':
        selectArticle('die');
        break;
      case '3':
        selectArticle('das');
        break;
      case ' ':
        e.preventDefault();
        skipNoun();
        break;
      case 'Enter':
        if (gameState.currentNoun && gameState.totalAnswered > 0) {
          nextNoun();
        }
        break;
    }
  });
}

// Show introduction screen
function showIntro() {
  hideAllScreens();
  screens.intro.classList.add('active');
  resetGameState();
}

// Start practice session
function startPractice(category) {
  gameState.currentCategory = category;
  
  if (category === 'random') {
    gameState.gameNouns = [...nounsData].sort(() => Math.random() - 0.5);
  } else {
    gameState.gameNouns = nounsData.filter(noun => noun.category === category)
                                   .sort(() => Math.random() - 0.5);
  }
  
  if (gameState.gameNouns.length === 0) {
    alert('No nouns found for this category!');
    return;
  }
  
  hideAllScreens();
  screens.practice.classList.add('active');
  
  gameState.currentIndex = 0;
  displayNoun();
  updateStats();
}

// Display current noun
function displayNoun() {
  if (gameState.currentIndex >= gameState.gameNouns.length) {
    endGame();
    return;
  }
  
  gameState.currentNoun = gameState.gameNouns[gameState.currentIndex];
  
  // Update display
  elements.categoryBadge.textContent = gameState.currentNoun.category;
  elements.nounMain.textContent = gameState.currentNoun.noun;
  elements.nounTranslation.textContent = gameState.currentNoun.translation;
  elements.nounPlural.textContent = `Plural: ${gameState.currentNoun.plural}`;
  
  // Reset buttons
  document.querySelectorAll('.btn--article').forEach(btn => {
    btn.classList.remove('correct', 'incorrect', 'disabled');
  });
  
  // Clear feedback
  elements.feedbackArea.innerHTML = '';
  elements.hintBtn.style.display = 'block';
  
  // Reset hint state
  gameState.showHints = false;
}

// Handle article selection
function selectArticle(selectedArticle) {
  if (!gameState.currentNoun) return;
  
  const correctArticle = gameState.currentNoun.article;
  const isCorrect = selectedArticle === correctArticle;
  
  gameState.totalAnswered++;
  
  if (isCorrect) {
    gameState.score += 10;
    gameState.streak++;
    gameState.correctAnswers++;
    gameState.maxStreak = Math.max(gameState.maxStreak, gameState.streak);
    
    showFeedback(true, selectedArticle);
    playSuccessAnimation();
  } else {
    gameState.streak = 0;
    showFeedback(false, selectedArticle, correctArticle);
    playErrorAnimation();
  }
  
  // Disable buttons
  document.querySelectorAll('.btn--article').forEach(btn => {
    btn.classList.add('disabled');
    if (btn.dataset.article === correctArticle) {
      btn.classList.add('correct');
    } else if (btn.dataset.article === selectedArticle && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  updateStats();
  
  // Auto-advance after 2 seconds
  setTimeout(() => {
    nextNoun();
  }, 2500);
}

// Show feedback
function showFeedback(isCorrect, selectedArticle, correctArticle = null) {
  let feedbackHTML = '';
  
  if (isCorrect) {
    const examples = getExampleSentence(gameState.currentNoun);
    feedbackHTML = `
      <div class="feedback success">
        <h4>🎉 Richtig! | Correct!</h4>
        <p><strong>${gameState.currentNoun.article} ${gameState.currentNoun.noun}</strong> = ${gameState.currentNoun.translation}</p>
        <p><em>${examples}</em></p>
      </div>
    `;
  } else {
    const mnemonic = getRandomMnemonic(correctArticle);
    feedbackHTML = `
      <div class="feedback error">
        <h4>❌ Falsch! | Wrong!</h4>
        <p>Du hast gewählt: <strong>${selectedArticle}</strong></p>
        <p>Richtig ist: <strong>${correctArticle} ${gameState.currentNoun.noun}</strong></p>
        <div class="mnemonic">
          <strong>💡 Tipp:</strong> ${mnemonic}
        </div>
      </div>
    `;
  }
  
  elements.feedbackArea.innerHTML = feedbackHTML;
  elements.hintBtn.style.display = 'none';
}

// Get example sentence
function getExampleSentence(noun) {
  const examples = {
    'Wandertour': 'Ich plane eine Wandertour in den Alpen. | I\'m planning a hiking tour in the Alps.',
    'Strandurlaub': 'Der Strandurlaub war sehr entspannend. | The beach vacation was very relaxing.',
    'Städtereise': 'Unsere Städtereise nach Berlin war fantastisch. | Our city trip to Berlin was fantastic.',
    'Einzelzimmer': 'Das Einzelzimmer ist gemütlich. | The single room is cozy.',
    'Doppelzimmer': 'Wir haben das Doppelzimmer reserviert. | We reserved the double room.'
  };
  
  return examples[noun.noun] || `${noun.article} ${noun.noun} ist sehr wichtig. | ${noun.article} ${noun.noun} is very important.`;
}

// Get random mnemonic
function getRandomMnemonic(article) {
  const articleMnemonics = mnemonics[article];
  return articleMnemonics[Math.floor(Math.random() * articleMnemonics.length)];
}

// Show hint
function showHint() {
  if (!gameState.currentNoun) return;
  
  const hint = getRandomMnemonic(gameState.currentNoun.article);
  elements.feedbackArea.innerHTML = `
    <div class="feedback">
      <h4>💡 Tipp | Hint</h4>
      <p>${hint}</p>
      <p><em>Versuche es nochmal! | Try again!</em></p>
    </div>
  `;
  
  gameState.showHints = true;
  elements.hintBtn.style.display = 'none';
}

// Skip current noun
function skipNoun() {
  if (!gameState.currentNoun) return;
  
  elements.feedbackArea.innerHTML = `
    <div class="feedback">
      <h4>⏭️ Übersprungen | Skipped</h4>
      <p>Richtige Antwort: <strong>${gameState.currentNoun.article} ${gameState.currentNoun.noun}</strong></p>
    </div>
  `;
  
  gameState.streak = 0;
  setTimeout(() => {
    nextNoun();
  }, 1500);
}

// Move to next noun
function nextNoun() {
  gameState.currentIndex++;
  displayNoun();
}

// Update statistics display
function updateStats() {
  elements.score.textContent = gameState.score;
  elements.streak.textContent = gameState.streak;
  elements.progress.textContent = `${gameState.currentIndex + 1}/${gameState.gameNouns.length}`;
  
  const accuracy = gameState.totalAnswered > 0 
    ? Math.round((gameState.correctAnswers / gameState.totalAnswered) * 100)
    : 0;
  elements.accuracy.textContent = `${accuracy}%`;
}

// Play success animation
function playSuccessAnimation() {
  document.querySelector('.noun-display').classList.add('flash-success');
  setTimeout(() => {
    document.querySelector('.noun-display').classList.remove('flash-success');
  }, 600);
}

// Play error animation
function playErrorAnimation() {
  document.querySelector('.noun-display').classList.add('flash-error');
  setTimeout(() => {
    document.querySelector('.noun-display').classList.remove('flash-error');
  }, 600);
}

// End game and show results
function endGame() {
  gameState.gameCompleted = true;
  hideAllScreens();
  screens.results.classList.add('active');
  
  // Update final statistics
  document.getElementById('final-score').textContent = gameState.score;
  document.getElementById('final-accuracy').textContent = 
    gameState.totalAnswered > 0 
      ? Math.round((gameState.correctAnswers / gameState.totalAnswered) * 100) + '%'
      : '0%';
  document.getElementById('final-streak').textContent = gameState.maxStreak;
  
  // Show encouragement based on performance
  const accuracy = gameState.totalAnswered > 0 
    ? (gameState.correctAnswers / gameState.totalAnswered) * 100
    : 0;
  
  let encouragement = '';
  if (accuracy >= 90) {
    encouragement = '🏆 Exzellent! Du beherrschst die deutschen Artikel perfekt! | Excellent! You\'ve mastered German articles perfectly!';
  } else if (accuracy >= 75) {
    encouragement = '🎯 Sehr gut! Du bist auf dem richtigen Weg! | Very good! You\'re on the right track!';
  } else if (accuracy >= 60) {
    encouragement = '💪 Gut gemacht! Mit etwas Übung wirst du noch besser! | Well done! With some practice you\'ll get even better!';
  } else {
    encouragement = '🌟 Bleib dran! Jeder Meister fing einmal als Anfänger an! | Keep going! Every master was once a beginner!';
  }
  
  document.getElementById('encouragement-text').innerHTML = `<p>${encouragement}</p>`;
}

// Restart with same category
function restartSameCategory() {
  if (gameState.currentCategory) {
    startPractice(gameState.currentCategory);
  } else {
    showIntro();
  }
}

// Reset game state
function resetGameState() {
  gameState = {
    currentNoun: null,
    currentIndex: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    totalAnswered: 0,
    correctAnswers: 0,
    currentCategory: null,
    gameNouns: [],
    showHints: false,
    gameCompleted: false
  };
}

// Hide all screens
function hideAllScreens() {
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);