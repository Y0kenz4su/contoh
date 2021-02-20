let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: BOT
Script: @Nurotomo
Github: 
GA ADA
*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @yokenza_
➥ YouTube:
GA ADA

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-2144-9680
╠➥ Dana: 0882-2144-9680
╠➥ Ovo: 0882-2144-9680
║>Request? Wa.me/6288221449680
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

