import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `π Developer Bot `, `π« Don't call me π₯Ί`, `β¨https://bΔ«t.ly/lynnxzy1@gmail.com`, `πΌπ Malaysia`, `π https://youtube.com/channel/UC3Y7rHuI_OmbvFdL88JF7AQ`, `nothing`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `π₯ Bot WhatsApp π£`, `π΅ Don't spam/call me π’`, `Nothing`, `πΌπ Malaysia`, `π https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD`, `π€ Dont Forget To Donate!`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor owner ku, jangan call/spam yah kakπ`, wm, 'Menu', '.menu', 'Donasi', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
