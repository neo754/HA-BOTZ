import { createSticker } from 'wa-sticker-formatter'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
    if (!text) throw `Example : ${usedPrefix + command} Lagi Ruwet`
    const res = `https://api.lolhuman.xyz/api/${command}?apikey=${global.lolkey}&text=${encodeURIComponent(text.substring(0, 151))}`
    const res2 = `https://xteam.xyz/attp?file&text=${encodeURIComponent(text.substring(0, 151))}`
    try {
        if (command == 'attp' || command == 'attp2') {
            let stiker = await createSticker(res, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else if (command == 'attp3') {
            let stiker = await createSticker(res2, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        } else {
            let stiker = await createSticker(res, { pack: packname, author: author })
            await conn.sendFile(m.chat, stiker, 'atet.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}

handler.help = ['ttp','ttp2 -> ttp6','attp','attp2','attp3']
handler.tags = ['creator']
handler.command = /^((ttp(2|3|4|5|6)?)|(attp(2|3)?))$/i

handler.limit = true

export default handler