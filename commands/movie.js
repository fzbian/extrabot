const fetch = require('node-fetch');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let name = args.join(' ')
  if(!name) { return message.channel.send('Please specify the name of movie or serie') }
  let msg = await message.channel.send(`Getting information about ${name}...`)          
  try {
      let movie = `https://www.omdbapi.com/?apikey=5e36f0db&t=${name}`;
      let data = await fetch(movie).then(url => url.json());
      if(data.Response === 'False') {
          msg.edit('We have no information about that movie')
      } else {
          const embed = new Discord.MessageEmbed()
          embed.setTitle(`${data.Title} - ${data.Year}`)
          embed.setDescription(`**Director: **${data.Director}\n**Actors: **${data.Actors}\n**Plot:** ${data.Plot}\n**Language: **${data.Language}\n**Country: **${data.Country}\n**Runtime: **${data.Runtime}\n`)
          embed.setThumbnail(data.Poster)
          msg.edit(embed)
      }
  } catch (err) {
      console.log(err)
      message.channel.send('We have no information about that movie')
  }
}