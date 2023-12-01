const client = require('./client');

// drop tables for video games and board games
async function dropTables() {
    try {
        console.log('Dropping All Tables...');
        await client.query(`
      DROP TABLE IF EXISTS videoGames;
      DROP TABLE IF EXISTS boardGames;
    `);
    } catch (error) {
        throw error;
    }
}

// build tables for video games and board games
async function createTables() {
    try {
        console.log('Building All Tables...');
        await client.query(`
      CREATE TABLE videoGames (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        "inStock" BOOLEAN DEFAULT false,
        "isPopular" BOOLEAN DEFAULT false,
        "imgUrl" VARCHAR(255) DEFAULT 'https://imgur.com/gallery/0pGyHjv'
        );
        CREATE TABLE boardGames (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        "inStock" BOOLEAN DEFAULT false,
        "isPopular" BOOLEAN DEFAULT false,
        "imgUrl" VARCHAR(255) DEFAULT 'https://imgur.com/gallery/0pGyHjv'
        );
        `);
    } catch (error) {
        throw error;
    }
}

// create initial data for video games and board games
async function createInitialData() {
    try {
        console.log('Creating Initial Data...');
        await client.query(`
      INSERT INTO videoGames (name, description, price, "inStock", "isPopular", "imgUrl")
      VALUES
        ('Final Fantasy VII', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy VIII', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy IX', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy X', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy X-2', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy XII', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy XIII', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy XIV', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy XV', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy Tactics', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy Tactics: The War of the Lions', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy Tactics Advance', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy Tactics A2: Grimoire of the Rift', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT'),
        ('Final Fantasy Crystal Chronicles', 'The best game ever!', 100, true, true, 'https://imgur.com/t/final_fantasy/8OotqRT')`
        );
        await client.query(`
        INSERT INTO boardGames (name, description, price, "inStock", "isPopular", "imgUrl")
        VALUES
            ('Catan', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Ticket to Ride', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Pandemic', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Codenames', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Scrabble', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Monopoly', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Clue', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Risk', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Battleship', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Sorry!', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Chess', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Checkers', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Backgammon', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg'),
            ('Go', 'The best game ever!', 100, true, true, 'https://i.imgur.com/zp6NhK0.jpeg')`
        );
    } catch (error) {
        throw error;
    }
}

// build all tables and create initial data
async function rebuildDB() {
    try {
        client.connect();
        await dropTables();
        await createTables();
        await createInitialData();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    rebuildDB,
};