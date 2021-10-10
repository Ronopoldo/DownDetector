//DownDetector для Роносервера
const Discord = require("discord.js")
const client = new Discord.Client()


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  const alertChannel = client.channels.cache.get('786707920326885436') //АЙДИ КАНАЛА ОПОВЕЩЕНИЙ

  const guild = client.guilds.cache.get('544902879534907392')
// let user = client.users.cache.get("54490218007813652");

// console.log(user.username)
    const statusMessage = new Discord.MessageEmbed()
.setTitle("КРИТИЧЕСКАЯ ОШИБКА!!!!! ЭТОТ БОТ БЫЛ В ОТКЛЮЧКЕ!!!!")
.setColor("#ffff00")
.setDescription("ВНИМАНИЕ! Этот бот был отключён!!! Если Вы считаете, что этого не должно было быть, то СРОЧНО сообщите в ЛС <@544902183007813652>")

.setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896895090121924638/d9e8efab4c698503.png?width=779&height=670")

    alertChannel.send(statusMessage)
let RonobotLastStatus = true
let ZelenskyLastStatus = true
let CyalmLastStatus = true
let DJLastStatus = true

console.log('123')

  var interval = setInterval (function () {

      guild.members.fetch('664263594002612263').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);
      if ((member.user.presence.status == 'offline') && RonobotLastStatus == true)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Сбой в работе Ронобота!")
              .setColor("#ff0000")
              .setDescription("Сервер <@664263594002612263> перестал отвечать и его необхоимо перезапустить! <@544902183007813652> сделает это как можно скорее!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884943299416085/181b7f3638aa25d7.png?width=277&height=669")

            alertChannel.send(statusMessage)
            RonobotLastStatus = false
      }

      if ((member.user.presence.status !== 'offline') && RonobotLastStatus == false)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Работа Ронобота восстановлена!")
              .setColor("#00ff00")
              .setDescription("<@664263594002612263> вернулся в штатный режим работы!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884865822261308/e3c03ddae2f4d506.png?width=667&height=669")

            alertChannel.send(statusMessage)
            RonobotLastStatus = true
      }
    })

/////////////////////////


    guild.members.fetch('852202671443804160').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);
      if ((member.user.presence.status == 'offline') && ZelenskyLastStatus == true)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Сбой в работе Зеленского!")
              .setColor("#ff0000")
              .setDescription("Сервер <@852202671443804160> перестал отвечать и его необхоимо перезапустить! <@544902183007813652> сделает это как можно скорее!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884943299416085/181b7f3638aa25d7.png?width=277&height=669")

            alertChannel.send(statusMessage)
            ZelenskyLastStatus = false
      }

      if ((member.user.presence.status !== 'offline') && ZelenskyLastStatus == false)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Работа Зеленского восстановлена!")
              .setColor("#00ff00")
              .setDescription("<@852202671443804160> вернулся в штатный режим работы!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884865822261308/e3c03ddae2f4d506.png?width=667&height=669")

            alertChannel.send(statusMessage)
            ZelenskyLastStatus = true
      }
    })


////////////////////////

    guild.members.fetch('775337700428742707').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);
      if ((member.user.presence.status == 'offline') && CyalmLastStatus == true)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Сбой в работе Циалма!")
              .setColor("#ff0000")
              .setDescription("Сервер <@775337700428742707> перестал отвечать и его необхоимо перезапустить! <@544902183007813652> сделает это как можно скорее!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884943299416085/181b7f3638aa25d7.png?width=277&height=669")

            alertChannel.send(statusMessage)
            CyalmLastStatus = false
      }

      if ((member.user.presence.status !== 'offline') && CyalmLastStatus == false)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Работа Циалма восстановлена!")
              .setColor("#00ff00")
              .setDescription("<@775337700428742707> вернулся в штатный режим работы!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884865822261308/e3c03ddae2f4d506.png?width=667&height=669")

            alertChannel.send(statusMessage)
            CyalmLastStatus = true
      }
    })



/////////////////

    guild.members.fetch('887823801298088006').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);
      if ((member.user.presence.status == 'offline') && DJLastStatus == true)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Сбой в работе ДиДжея!")
              .setColor("#ff0000")
              .setDescription("Сервер <@887823801298088006> перестал отвечать и его необхоимо перезапустить! <@544902183007813652> сделает это как можно скорее!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884943299416085/181b7f3638aa25d7.png?width=277&height=669")

            alertChannel.send(statusMessage)
            DJLastStatus = false
      }

      if ((member.user.presence.status !== 'offline') && DJLastStatus == false)
      {
            const statusMessage = new Discord.MessageEmbed()
              .setTitle("Работа ДиДжея восстановлена!")
              .setColor("#00ff00")
              .setDescription("<@887823801298088006> вернулся в штатный режим работы!")

              .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
              .setThumbnail("https://media.discordapp.net/attachments/698853696817070164/896884865822261308/e3c03ddae2f4d506.png?width=667&height=669")

            alertChannel.send(statusMessage)
            DJLastStatus = true
      }
    })
    }, 30000);





});client.login(process.env.TOKEN) // НЕ ТРОГАТЬ,Ондрей: мне то зачем это трогать?