/* Recode Wudysoft */
let handler = async(m, { conn, groupMetadata, usedPrefix, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          }})
          let cap = `👋 *Selamat datang di dashboard bot kami!*

- Kami berharap Anda akan menikmati pengalaman berinteraksi dengan bot kami yang ramah dan intuitif.

- Kami telah menyertakan berbagai fitur yang dapat membantu Anda mengelola dan meningkatkan kinerja bot Anda.

- Kami berharap Anda akan menikmati menggunakan dashboard bot kami dan semoga Anda mendapatkan manfaat dari fitur-fitur yang kami tawarkan.
`
    let pp = "https://cerdasin.netlify.app/img/thumbnail1.jpg"
	await conn.send2ButtonLoc(m.chat, pp, cap, wm, emojis + " All Menu", usedPrefix + "allmenu", emojis + " List Menu", usedPrefix + "menulist", m, adReply)
}
handler.help = ["menu", "help", "?"]
handler.tags = ["main"]
handler.command = /^(menu|help|\?)$/i

export default handler
