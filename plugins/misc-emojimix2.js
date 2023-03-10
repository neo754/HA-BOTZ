import fetch from 'node-fetch'
import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let [emoji1, emoji2] = text.split(/[xzXZ/i!#\$%\+£¢€¥\^°=¶∆×÷π√✓©®:;\?&\.\\\-]+/)
	if (emoji1 && emoji2) {
		let url = API('violetics', '/api/media/emojimix', { emoji1, emoji2 }, 'apikey')
		let res = await fetch(url)
		if (res.status !== 200) throw res.statusText
		let stiker = await (new Sticker(url)).toMessage()
		conn.sendMessage(m.chat, stiker, { quoted: m })
	} else throw `Ex: ${usedPrefix+command} ${decodeURI('%F0%9F%92%80')}+${decodeURI('%F0%9F%92%80')}`
}
handler.help = ['emojimix2']
handler.tags = ['misc']
handler.command = /^(emojimix2)$/i

export default handler
