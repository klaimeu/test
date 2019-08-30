const Discord = require('discord.js');
exports.run = (client, message, args) => {

    var rand =  Math.floor(Math.random() * NUM_KISS)
    let defineduser = message.mentions.users.first();

    if(!defineduser){
      var KissEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
.setDescription(`**${message.author.tag}** embrasse **${client.user.tag}**`)
.setImage(kiss[rand].link)
.setFooter("( ˘ ³˘)❤ <3").setTimestamp();

message.channel.send(KissEmbed)
    } else {
      var KissEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**${message.author.tag}** embrasse **${defineduser.tag}**`)
      .setImage(kiss[rand].link)
      .setFooter("( ˘ ³˘)❤ <3").setTimestamp();
  
      message.channel.send(KissEmbed)
    }
        
}
const NUM_KISS = 8;
// Kiss Gifs
var kiss = [
  {link:'https://cdn.weeb.sh/images/Skc42pdv-.gif'},
  {link:'https://cdn.weeb.sh/images/Sy6Ai6ODb.gif'},
  {link:'https://cdn.weeb.sh/images/S1E1npuvb.gif'},
  {link:'https://cdn.weeb.sh/images/SJrBZrMBz.gif'},
  {link:'https://cdn.weeb.sh/images/HJ8dQRYK-.gif'},
  {link:'https://cdn.weeb.sh/images/H1a42auvb.gif'},
  {link:'https://cdn.weeb.sh/images/ByoCoT_vW.gif'},
  {link:'https://cdn.weeb.sh/images/SJ8I2Tuv-.gif'}
];
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kiss',
    description: 'Pour embrasser les personnes que vous souhaitez',
    usage: 'kiss [mention ou mot]'
  };