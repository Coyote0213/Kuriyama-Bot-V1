const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    aliases: ["online", "tempoon"],
    description: "Exibe o tempo que o Bot esta on!",
    run: async(client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `๐๏ธ ${days.toFixed()} dias\n๐๏ธ ${hours.toFixed()} horas\n๐๏ธ ${minutes.toFixed()} minutos\n๐๏ธ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
  .setTitle(`Tempo de ativiade ๐ฐ๏ธ`)
   .setThumbnail("https://imgur.com/WZMylbw.gif")
  .setColor([255,182,193])
  .setDescription(`**Estou online hรก:**\n${uptime}`)
  .setFooter(`Comando solicitado por: ${message.author.tag}`)

  message.channel.send(embed);
    }
};