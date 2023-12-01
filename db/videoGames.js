const client = require('./client');
const util = require('util');


// GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query(`
        SELECT * FROM videogames;`);
        return videoGames;
    } catch (error) {
        console.log(error)
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/video-games - create a new video game
async function createVideoGame(body) {
    try {
        const { rows: [videoGame] } = await client.query(`
            INSERT INTO videogames(name, description, price, "inStock", "isPopular", "imgUrl")
            VALUES('${body.name}', '${body.description}', '${body.price}', '${body.inStock}', '${body.isPopular}', '${body.imgUrl}')
            RETURNING *;
        `);
        return videoGame;
    } catch (error) {
    }
}

//did not want to copy/paste the code from boardGames without understanding how it works
// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    //const videoGame = await updateVideoGame(req.params.id, req.body)

}

//did not want to copy/paste the code from boardGames without understanding how it works
// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    // LOGIC GOES HERE
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}