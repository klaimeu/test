const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

  let defineduser = message.mentions.users.first();

  fs.readFile('./Link/hug.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var random = data.split('\n');
      var num = getRandomInt(random.length);
      var url = random[num];

      if(!defineduser){
        var HugEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
  .setDescription(`**${message.author.tag}** caline **${client.user.tag}**`)
  .setImage(url)
  .setFooter("(っ◔◡◔)っ ♥").setTimestamp();

  message.channel.send(HugEmbed)
      } else {

      var HugEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
  .setDescription(`**${message.author.tag}** caline **${defineduser.tag}**`)
  .setImage(url)
  .setFooter("(っ◔◡◔)っ ♥").setTimestamp();

  message.channel.send(HugEmbed)
      }
});
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['calin'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'Pour faire des calîns aux personnes que vous souhaitez',
    usage: 'hug [mention ou mot]'
  };
