const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Etu7v7fVZSb3Pv3tyvSFgo";
global.website=process.env.GURL || "https://chat.whatsapp.com/Etu7v7fVZSb3Pv3tyvSFgo" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZIDDI❤️KING❤️BALOCH❤️" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066671786";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "922066671786,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_41_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtd3Z6blZ6aUYzcUdhVkt1anNQcFd1dUcxZyt5TmZ1UmhjanBXeHF0SGZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMTjRtbG1JUVNpMjZpOXl6dndYWDdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2YmYxNTMxLWZiZmEtNDk3ZC04YTJiLWZjN2M3ZjVhOTI3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICA1MyxcbiAgICAgIDE1NyxcbiAgICAgIDE3OCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMixcbiAgICAgIDM3LFxuICAgICAgNixcbiAgICAgIDE5OSxcbiAgICAgIDIzNSxcbiAgICAgIDU2LFxuICAgICAgNTUsXG4gICAgICA5OCxcbiAgICAgIDUsXG4gICAgICAxMzEsXG4gICAgICAyMDUsXG4gICAgICA1MyxcbiAgICAgIDEyMSxcbiAgICAgIDc0LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNzgsXG4gICAgICAxNyxcbiAgICAgIDIwNSxcbiAgICAgIDE2MixcbiAgICAgIDEzOCxcbiAgICAgIDE1MixcbiAgICAgIDExOCxcbiAgICAgIDY5LFxuICAgICAgMjU0LFxuICAgICAgMjksXG4gICAgICA1MyxcbiAgICAgIDEwMSxcbiAgICAgIDIwNyxcbiAgICAgIDgsXG4gICAgICAxNTgsXG4gICAgICAxMDYsXG4gICAgICAyMyxcbiAgICAgIDExNCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxINTRETUdRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjY2NzE3ODY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCZ8J2QiPCdkIPwnZCD8J2QiCDwnZCK8J2QiPCdkI3wnZCGIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh1xcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICAgIOKLhlxcbiAgICDii4ZcXG4gICAg4ouGXFxuICDwk4ap4oG34oG44oG28JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNTczNDI1Mjc4MTU3OTI6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FFcGRNQ0VJZklyYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXWUZlbHZuZlBoNVc0Q214UDNVQk9TMlhkcXdjQlNDaGpTNk9Iak5WRjFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVERkw4OUhMOHE5c3R4NGZxMjVvLzJuWGt2ZnlRMTkvTlBlWVl0U2Z5VHNvQ3ltZitMM1h0YXBvUEZDUGlPcS9zRmVVNUJZdWtwbGs2NmxuZDV4YkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpBaGZvb1ZnMlB0ZkJ1TE1YUGRCby83Vkt2TlFMd09WV1pVZ3hXZXFiaXFjNFZLeTlkWUp1VndEYTgxQXMwK3hBbUY0UlQ4WWJnYkdVOVZOL0hUR2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NjY3MTc4NjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY2NjcxNzg2OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODk2OTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0tBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPS0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmeFNpVjZXbHdGeHRaMXJjMWVwNmpvQ24vQjJUTXpBTW1nbEtxK2o5KzJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMTU0MTI4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZIDDI KING BALOCH 』```", //*『sᴜʙsᴄʀɪʙᴇ • ZIDDI KING BALOCH』*\n youtube.com/@Ziddiking"),
 
  author : process.env.PACK_AUTHER|| "وفـﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖـــا کـﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖـی تـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ـلاش گـﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ـینگ ۲۰۱۲",
  packname: process.env.PACK_NAME || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  botname : process.env.BOT_NAME  || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  ownername:process.env.OWNER_NAME|| "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",

 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
