module.exports = {
    apps: [
        {
            name: 'mentoreng-slack-bot',
            script: './index.js',
            watch: true,
            interpreter: './node_modules/.bin/babel-node',
            env: {
                PORT: 3001,
                NODE_ENV: 'development'
            },
            env_production: {
                PORT: 4001,
                NODE_ENV: 'production'
            }
        }
    ]
};