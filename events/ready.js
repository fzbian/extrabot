module.exports = (client) => {
  console.log(`Ready in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users whit the user ${client.user.tag}`);
}