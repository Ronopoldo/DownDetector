
const express = require('express');
const app = express();
const port = 3000;
 
 
app.get('/', function(request, response){ response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());


//DownDetector для Роносервера
const Discord = require("discord.js")
const client = new Discord.Client()

try{
    client.on('message', msg => {
      if (msg.content == '/тест')
      {
        msg.channel.send('Ы')

      }
    })


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  const alertChannel = client.channels.cache.get('841694881688322138') //АЙДИ КАНАЛА ОПОВЕЩЕНИЙ
  const guild = client.guilds.cache.get('544902879534907392')

    //alertChannel.send(statusMessage)
let RonobotLastStatus = true
let ZelenskyLastStatus = true
let CyalmLastStatus = true
let DJLastStatus = true
let RSLastStatus = true

let RonobotLastStatus1 = false
let ZelenskyLastStatus1 = false
let CyalmLastStatus1 = false
let DJLastStatus1 = false
let RSLastStatus1 = false


let RonobotAnswer = '✅Активен✅'
let ZelenskyAnswer = '✅Активен✅'
let CyalmAnswer = '✅Активен✅'
let RonoRatingAnswer = '🏗Бета версия🏗'
let DJAnswer = '✅Активен✅'
let RSManagerAnswer = '✅Активен✅'
let DownDetectorAnswer = '✅Активен✅'
let SanitarAnswer = '📡Больше не работает📡'

let StatusCountMSG = '✅На данный момент сбоев не наблюдается✅'
let StatusColor = '#22fa05'

let RonobotCounter = 0
let DownCount = 0

  var interval = setInterval (function () {

      guild.members.fetch('664263594002612263').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);


    RonobotLastStatus1 = RonobotLastStatus
    ZelenskyLastStatus1 = ZelenskyLastStatus
    CyalmLastStatus1 = CyalmLastStatus
    DJLastStatus1 = DJLastStatus
    RSLastStatus1 = RSLastStatus
            


      if ((member.user.presence.status == 'offline') && RonobotLastStatus == true)
      {
            RonobotAnswer = '❌Сбой❌'
            RonobotLastStatus = false
            RonobotCounter = 0
            DownCount = DownCount + 1
      }

      if ((member.user.presence.status !== 'offline') && RonobotLastStatus == false)
      {
            RonobotLastStatus = true
            RonobotCounter = 0
            DownCount = DownCount - 1
      }
    })

/////////////////////////


    guild.members.fetch('852202671443804160').then((member) => {
      console.log(member.user.username);
      console.log(member.user.presence.status);
      if ((member.user.presence.status == 'offline') && ZelenskyLastStatus == true)
      {
            ZelenskyAnswer = '❌Сбой❌'
            ZelenskyLastStatus = false
            DownCount = DownCount + 1
      }

      if ((member.user.presence.status !== 'offline') && ZelenskyLastStatus == false)
      {
            ZelenskyAnswer = '✅Активен✅'
            ZelenskyLastStatus = true
            DownCount = DownCount - 1
      }
    })


////////////////////////

    guild.members.fetch('775337700428742707').then((member) => {
                      if ((member.user.presence.status == 'offline') && CyalmLastStatus == true)
                      {

            CyalmAnswer = '❌Сбой❌'
            CyalmLastStatus = false
            DownCount = DownCount + 1
                      }
      if ((member.user.presence.status !== 'offline') && CyalmLastStatus == false)
      {
            CyalmAnswer = '✅Активен✅'
            CyalmLastStatus = true
            DownCount = DownCount - 1
      }
    })



/////////////////

    guild.members.fetch('887823801298088006').then((member) => {
                if ((member.user.presence.status == 'offline') && DJLastStatus == true)
                {
            DJAnswer = '❌Сбой❌'
            DJLastStatus = false
            DownCount = DownCount + 1
                }
      if ((member.user.presence.status !== 'offline') && DJLastStatus == false)
      {
            DJAnswer = '✅Активен✅'
            DJLastStatus = true
            DownCount = DownCount - 1
      }
    })

///////////////
        guild.members.fetch('711014269180706827').then((member) => {
                if ((member.user.presence.status == 'offline') && RSLastStatus == true)
                {
            RSManagerAnswer = '❌Сбой❌'
            RSLastStatus = false
            DownCount = DownCount + 1

            console.log('ЫГГЫЫГЫ')
                }
      if ((member.user.presence.status != 'offline') && DJLastStatus == false)
      {

            RSManagerAnswer = '✅Активен✅'
            RSLastStatus = true
            DownCount = DownCount - 1
      }
    })

    if ((RSLastStatus1 != RSLastStatus) || (DJLastStatus1 !=DJLastStatus) || (ZelenskyLastStatus1 != ZelenskyLastStatus) || (RonobotLastStatus1 != RonobotLastStatus) || (CyalmLastStatus1 != CyalmLastStatus))
    {

          if (DownCount == 0) {StatusCountMSG = '✅На данный момент сбоев не наблюдается✅'
          StatusColor = '#22fa05'}
          if (DownCount == 1) {StatusCountMSG = '⚡Обнаружен сбой в работе одного сервиса⚡'
          StatusColor = '#a8fe00'}
          if (DownCount == 2) {StatusCountMSG = '⚠Обнаружен сбой в работе двух сервисов⚠'
          StatusColor = '#f5fd00'}
          if (DownCount == 3) {StatusCountMSG = '⛔Обнаружен сбой в работе трёх сервисов⛔'
          StatusColor = '#fe0d01'}
          if (DownCount == 4) {StatusCountMSG = '🔥Обнаружен сбой в работе четырёх сервисов🔥'
          StatusColor = '#b902fd'}
          if (DownCount == 5) {StatusCountMSG = '🪦Обнаружен сбой в работе всех сервисов (гг)🪦'
          StatusColor = '#000000'}


          const status = new Discord.MessageEmbed()
          .setTitle("Статусы Ботов")
          .setColor(StatusColor)
          .setDescription("Здесь Вы найдёте полный список ботов сервера, сделанных для него и статус каждого из них!\nИнформация обновляется каждые 30 секунд.\n\n" + StatusCountMSG + '\n\n\n**RB ' + RonobotAnswer + ' - __<@664263594002612263>__**\n' + '**ZL  ' + ZelenskyAnswer + ' - __<@852202671443804160>__**\n' + '**CY ' + CyalmAnswer + ' - __<@775337700428742707>__**\n' + '**RT ' + RonoRatingAnswer + ' - __<@899380887282675743>__**\n' + '**DJ  ' + DJAnswer + ' - __<@887823801298088006>__**\n' + '**RS  ' + RSManagerAnswer + ' - __<@711014269180706827>__**\n' + '**DT ' + DownDetectorAnswer + ' - __<@896799577053749258>__**\n' + '**ST ' + SanitarAnswer + ' - __<@692507306986045460>__**\n')

          .setFooter("Ronoserver Services - звено Дебага", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
          // .setThumbnail("https://media.discordapp.net/attachments/768414683019345931/841705746857197628/hourglass-clipart-hour-18.png?width=669&height=669")


// let RonobotAnswer = '✅Активен✅'
// let ZelenskyAnswer = '✅Активен✅'
// let CyalmAnswer = '✅Активен✅'
// let RonoRatingAnswer = '🏗Бета версия🏗'
// let DJAnswer = '✅Активен✅'
// let RSManagerAnswer = '✅Активен✅'
// let DownDetectorAnswer = '✅Активен✅'
// let SanitarAnswer = '📡Больше не работает📡'

alertChannel.messages.fetch('906286753583882302').then(msg => {msg.edit('Монитор активен.') //
msg.edit(status)})
    }
    console.log(DownCount)
              console.log('RS' + RSLastStatus1 + RSLastStatus)

          console.log('DJ' + DJLastStatus1 + DJLastStatus)
          console.log('ZL' + ZelenskyLastStatus1 + ZelenskyLastStatus)
          console.log('RB' + RonobotLastStatus1 + RonobotLastStatus)
          console.log('CA' + CyalmLastStatus1 + CyalmLastStatus)

    }, 30000);
})



}catch(err){console.log(err)}


client.login(process.env.TOKEN) // НЕ ТРОГАТЬ,Ондрей: мне то зачем это трогать?