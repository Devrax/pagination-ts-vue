const { Router } = require('express'),
        faker = require('faker'),
        router = Router(),
        Article = require('../models/articles.model');

router.get('/create', async (req, res) => {
    
        for(let i = 0; i < 100; i++){
            await Article.create({
                id: faker.random.uuid(),
                title: faker.name.title(),
                description: faker.lorem.paragraph(),
                imgURL: faker.image.imageUrl()
            })
        }

        res.send('100 records were created');
    })

    .get('/articles', async (req, res) => {
        const articles = await Article.find();

        res.json(articles);
    })

module.exports = router;
