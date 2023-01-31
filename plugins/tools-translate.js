import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else throw `Ex: ${usedPrefix + command} id hello i am robot`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error : Bahasa"${lang}" Tidak Support`
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
	let Detect = regionNamesInEnglish.of(res.from.language.iso.toUpperCase() ? res.from.language.iso.toUpperCase() : 'US')
	let ToLang = regionNamesInEnglish.of(lang.toUpperCase())
	let caption = `*[ Terdeteksi ]*
- ${Detect}

*[ Ke Bahasa ]*
- ${ToLang}

*[ Terjemahan ]*
- ${res.text}
`
m.reply(caption)
}
handler.help = ['translate'].map(v => v + ' <bahasa> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler
