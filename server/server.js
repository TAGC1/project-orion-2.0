
    const express = require('express')
    const bodyParser = require('body-parser')
    const Pusher = require('pusher');

    // create a express application
    const app = express();

    // initialize pusher
    const pusher = new Pusher({
        appId: "1166655",
        key: "88d0654f5aef67a2c715",
        secret: "3efc19a1c0800992e6b0",
        cluster: "us3",
        useTLS: true
      });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // to Allow CORS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });

    app.post('/pusher/auth', (req, res) => {
        let socketId = req.body.socket_id;
        let channel = req.body.channel_name;
        random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        let presenceData = {
            user_id: random_string,
            user_info: {
                username: '@' + random_string,
            }
        };
        let auth = pusher.authenticate(socketId, channel, presenceData);
        res.send(auth);
    });

    app.post('/create-post', (req, res) => {
        // trigger a new post event via pusher
        pusher.trigger('presence-channel', 'new-post', {
            'username': req.body.username,
            'content': req.body.content
        })
        res.json({ 'status': 200 });
    });

    let port = 3128;
    app.listen(port);
    console.log('listening');