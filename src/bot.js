require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
})

client.on('ready', () => {
  console.log('Logged in')
})

client.on('messageCreate', (message) => {
  switch (message.author.id) {
    // case '232494956261015552':
    //   message.channel.send('Bot Initialized')
    //   break
    case '267998796544344064': //Hitesh
      message.channel.send('RIFT > ARAM > TFT')
      break
    case '325921614514618368': //Kishan
      message.channel.send('Please stop inting in ranked bro...')
      break
    case '772739060077953036': // Hemanth
      message.channel.send('Kinguu')
  }
})

client.on('guildMemberAdd', (member) => {
  console.log(member)
})

client.login(process.env.DISCORD_BOT_TOKEN)
