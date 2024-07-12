const { Telegraf } = require('telegraf')

const bot = new Telegraf("7131834273:AAFunYBtuP7DDykeFCiICPV-mC7MfJ2HUJA")
bot.start((ctx) => ctx.reply('Welcome to solvety mini app', {
    reply_markup: {
        inline_keyboard: [[{text: "Launch", web_app: {
            url: "https://66912f0081fea82038038799--resilient-phoenix-fceac5.netlify.app"
        }}]]
    }
}))

bot.launch().then(()=>{
    console.log("Running");
})
