/* Recode By Wudysoft */
import fetch from "node-fetch"

let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
	let query = usedPrefix + command + " Wibu"
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else throw query
	let urut = text.split`|`
  let res = await(await fetch('https://mfarels.my.id/api/openai?text=' + text)).json()
  if (!res) throw eror
  m.reply('*Result:*\n' + res.result + '\n\n' + '*Made by:* mfarels.my.id')
}
handler.help = ["tai"]
handler.tags = ["info"]
handler.command = ["tai"]
export default handler