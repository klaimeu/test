const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_PAT)
    let defineduser = message.mentions.users.first();
    if(!defineduser) {
      var PatEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**${message.author.tag}** caresse **${client.user.tag}**`)
      .setImage(pat[rand].link)
      .setFooter("ヘ( ^o^)ノ＼(^_^ )").setTimestamp();
  
      message.channel.send(PatEmbed)
    } else {
    var PatEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**${message.author.tag}** caresse **${defineduser.tag}**`)
    .setImage(pat[rand].link)
    .setFooter("ヘ( ^o^)ノ＼(^_^ )").setTimestamp();

    message.channel.send(PatEmbed)
    }
}
const NUM_PAT = 6;
// pat Gifs
var pat = [
  {link:'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif'},
  {link:'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif'},
  {link:'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif'},
  {link:'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif'},
  {link:'https://media.giphy.com/media/lZnEy2UefUZvq/giphy.gif'},
  {link:'https://media.giphy.com/media/r61gZfqvJZMtO/giphy.gif'},
  {link:'https://media.giphy.com/media/SvQ7tWn8zeY2k/giphy.gif'}
];

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['caresse'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pat',
    description: 'Pour faire des caresses aux personnes que vous souhaitez',
    usage: 'pat [mention]'
  };