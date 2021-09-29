const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` *<[ WHATSAPP-BOT./W4D3R ]>*

Assalamu'alaikum Brothers !!!
Good ${salam} ${pushname}, Have a nice day :)

╭─────「 *🔰SELAMAT MENCOBA🔰* 」────꧂
├───────────────────꧂
│ *📚 Total Commands : 137*
│ *🪀 Owner* : @${configs.ownerList[0].split('@')[0]}
│ *🖊️ Prefix* : Multi
│ *💸Donasi* : _IDR 0 Rupiah_
│ *⏰ Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
│ *🌏Lokasi : Indonesian City*
│ *🐤Follow* : https://instagram.com/akku_santuy
│ *💌 Rest API's* : https://zeks.me
│ *📝Note : Gunakan BOT Dengan Baik√*
├─────────────────────​​​​
╰─────[ *http://ẉa.me/W̏4̏D̏3̏Ȑ➣* ]——
╭──────────────╮
│⟴  𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐌𝐄𝐍𝐂𝐎𝐁𝐀 𝐁𝐎𝐓
╰──────────────╮
        >>>────────────>>>
╭──────────────╯  
│⟴  𝐃𝐀𝐍 𝐉𝐀𝐍𝐆𝐀𝐍 𝐒𝐄𝐏𝐀𝐌 𝐁𝐎𝐓 
╰──────────────╯
╭─────「 *🔰GROUP ONLY🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}group _open|close_
│➸ *${p+=1}.* ${prefix}antilink _on|off_
│➸ *${p+=1}.* ${prefix}antitagall _on|off_
│➸ *${p+=1}.* ${prefix}antiviewonce _on|off_
│➸ *${p+=1}.* ${prefix}welcome _on|off_
│➸ *${p+=1}.* ${prefix}leave _on|off_
│➸ *${p+=1}.* ${prefix}setgroupicon _replyImage_
│➸ *${p+=1}.* ${prefix}setgroupname _text_
│➸ *${p+=1}.* ${prefix}setgroupdesc _text_
│➸ *${p+=1}.* ${prefix}hidetag _text_
│➸ *${p+=1}.* ${prefix}promote _@tag_
│➸ *${p+=1}.* ${prefix}demote _@tag_
│➸ *${p+=1}.* ${prefix}kick _@tag_
│➸ *${p+=1}.* ${prefix}add _number_
│➸ *${p+=1}.* ${prefix}getpp _@tag_
│➸ *${p+=1}.* ${prefix}tagall
│➸ *${p+=1}.* ${prefix}linkgroup
│➸ *${p+=1}.* ${prefix}revoke
│➸ *${p+=1}.* ${prefix}leave
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰DOWNLOADER🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}play _query_
│➸ *${p+=1}.* ${prefix}playvid _query_
│➸ *${p+=1}.* ${prefix}youtubedl _query_
│➸ *${p+=1}.* ${prefix}ytmp3 _link_
│➸ *${p+=1}.* ${prefix}ytmp4 _link_
│➸ *${p+=1}.* ${prefix}igstory _username_
│➸ *${p+=1}.* ${prefix}ig _link_
│➸ *${p+=1}.* ${prefix}joox _song_
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰STICKER🔰*」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}stickerwm _pack|author_
│➸ *${p+=1}.* ${prefix}takestick _pack|author_
│➸ *${p+=1}.* ${prefix}toimg _replySticker_
│➸ *${p+=1}.* ${prefix}togif _replySticker_
│➸ *${p+=1}.* ${prefix}semoji _emoji_
│➸ *${p+=1}.* ${prefix}stickerfire
│➸ *${p+=1}.* ${prefix}stickernobg
│➸ *${p+=1}.* ${prefix}stickergif
│➸ *${p+=1}.* ${prefix}sticker
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰ANIME🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}anime _query_
│➸ *${p+=1}.* ${prefix}manga _query_
│➸ *${p+=1}.* ${prefix}chara _query_
│➸ *${p+=1}.* ${prefix}waifu
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰EDUCATION🔰*」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}nulis _text_
│➸ *${p+=1}.* ${prefix}brainly _query_
│➸ *${p+=1}.* ${prefix}kbbi _query_
│➸ *${p+=1}.* ${prefix}wiki _query_
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰SEARCHING🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}playstore _apk_
│➸ *${p+=1}.* ${prefix}happymod _apk_
│➸ *${p+=1}.* ${prefix}iguser _username_
│➸ *${p+=1}.* ${prefix}igstalk _username_
│➸ *${p+=1}.* ${prefix}ytsearch _query_
│➸ *${p+=1}.* ${prefix}ytplaylist _query_
│➸ *${p+=1}.* ${prefix}ytchannel _channel_
│➸ *${p+=1}.* ${prefix}shoope _product_
│➸ *${p+=1}.* ${prefix}spotify _song_
│➸ *${p+=1}.* ${prefix}gsmarena _hp_
│➸ *${p+=1}.* ${prefix}searchmusic _replyAudio_
│➸ *${p+=1}.* ${prefix}wallpaper _query_
│➸ *${p+=1}.* ${prefix}pinterest _query_
│➸ *${p+=1}.* ${prefix}googleimage _query_
│➸ *${p+=1}.* ${prefix}jagokata _kata_
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰PRIMBON🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}jodoh _kamu|dia_
│➸ *${p+=1}.* ${prefix}artinama _nama_
│➸ *${p+=1}.* ${prefix}artimimpi _mimpi_
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰RANDOM🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}fml
│➸ *${p+=1}.* ${prefix}randomquran
│➸ *${p+=1}.* ${prefix}meme
│➸ *${p+=1}.* ${prefix}darkjoke
│➸ *${p+=1}.* ${prefix}pantun
│➸ *${p+=1}.* ${prefix}nickepep
│➸ *${p+=1}.* ${prefix}quotes
│➸ *${p+=1}.* ${prefix}estetikpic
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰TEXTMAKER🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}wolflogo _text1|text2_
│➸ *${p+=1}.* ${prefix}logoaveng _text1|text2_
│➸ *${p+=1}.* ${prefix}phlogo _text1|text2_
│➸ *${p+=1}.* ${prefix}marvellogo _text1|text2_
│➸ *${p+=1}.* ${prefix}gtext _text1|text2_
│➸ *${p+=1}.* ${prefix}pubglogo _text1|text2_
│➸ *${p+=1}.* ${prefix}snowwrite _text1|text2_
│➸ *${p+=1}.* ${prefix}watercolour _text1|text2_
│➸ *${p+=1}.* ${prefix}harta _text_
│➸ *${p+=1}.* ${prefix}thundertext _text_
│➸ *${p+=1}.* ${prefix}flametext _text_
│➸ *${p+=1}.* ${prefix}glowtext _text_
│➸ *${p+=1}.* ${prefix}smoketext _text_
│➸ *${p+=1}.* ${prefix}lithgtext _text_
│➸ *${p+=1}.* ${prefix}flowertext _text_
│➸ *${p+=1}.* ${prefix}bneon _text_
│➸ *${p+=1}.* ${prefix}matrix _text_
│➸ *${p+=1}.* ${prefix}breakwall _text_
│➸ *${p+=1}.* ${prefix}gneon _text_
│➸ *${p+=1}.* ${prefix}dropwater _text_
│➸ *${p+=1}.* ${prefix}tfire _text_
│➸ *${p+=1}.* ${prefix}sandw _text_
│➸ *${p+=1}.* ${prefix}epep _text_
│➸ *${p+=1}.* ${prefix}gplaybutton _text_
│➸ *${p+=1}.* ${prefix}splaybutton _text_
│➸ *${p+=1}.* ${prefix}text3dbox _text_
│➸ *${p+=1}.* ${prefix}text3d _text_
│➸ *${p+=1}.* ${prefix}logobp _text_
│➸ *${p+=1}.* ${prefix}leavest _text_
│➸ *${p+=1}.* ${prefix}tlight _text_
│➸ *${p+=1}.* ${prefix}naruto _text_
│➸ *${p+=1}.* ${prefix}crosslogo _text_
│➸ *${p+=1}.* ${prefix}cslogo _text_
│➸ *${p+=1}.* ${prefix}crismes _text_
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰IMAGEMAKER🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
│➸ *${p+=1}.* ${prefix}calender _replyImage / @tag_
│➸ *${p+=1}.* ${prefix}drawing _replyImage / @tag_
│➸ *${p+=1}.* ${prefix}sketch _replyImage / @tag_
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰OTHERS🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}tomp3 _replyVideo_
│➸ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
│➸ *${p+=1}.* ${prefix}tts _code|text_
│➸ *${p+=1}.* ${prefix}qrencode _text_
│➸ *${p+=1}.* ${prefix}barcode _text_
│➸ *${p+=1}.* ${prefix}jadwalsholat _daerah_
│➸ *${p+=1}.* ${prefix}jadwaltv _channel_
│➸ *${p+=1}.* ${prefix}tebakgambar
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——

╭─────「 *🔰INFO🔰*」──── ꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}stickermenu
│➸ *${p+=1}.* ${prefix}owner
│➸ *${p+=1}.* ${prefix}limit
│➸ *${p+=1}.* ${prefix}info
│➸ *${p+=1}.* ${prefix}listvn
├─────────────────────​​​​
╰─────[ *🤖W4D3R-BOT🤖* ]——

╭─────「 *🔰OWNER🔰* 」────꧂
├───────────────────꧂
│➸ *${p+=1}.* ${prefix}setpp _replyImage_
│➸ *${p+=1}.* ${prefix}eval _text_
│➸ *${p+=1}.* ${prefix}term _code_
│➸ *${p+=1}.* ${prefix}block _@tag_
│➸ *${p+=1}.* ${prefix}unblock _@tag_
│➸ *${p+=1}.* ${prefix}join _link_
│➸ *${p+=1}.* ${prefix}bc _text_
│➸ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
│➸ *${p+=1}.* ${prefix}delvn _name_
│➸ *${p+=1}.* ${prefix}premium add _@tag_
│➸ *${p+=1}.* ${prefix}premium del _@tag_
│➸ *${p+=1}.* ${prefix}premium list
│➸ *${p+=1}.* ${prefix}clearall
│➸ *${p+=1}.* ${prefix}resetlimit
│➸ *${p+=1}.* ${prefix}self
│➸ *${p+=1}.* ${prefix}public
├─────────────────────​​​​
╰─────[ *🐤FOLLOW IG-KU🐤* ]——
╭──────────────╮
│⟴  𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐈𝐒𝐓𝐈𝐆𝐇𝐅𝐀𝐑
╰──────────────╮
        >>>────────────>>>
╭──────────────╯  
│⟴  𝐊𝐈𝐓𝐀 𝐒𝐄𝐌𝐔𝐀 𝐏𝐄𝐍𝐃𝐎𝐒𝐀
╰──────────────╯


*⚠POWERED BY ./W4D3R WAS HERE⚠*
`
}

const ingfo = `Hello 
╭──────────────╮
│⟴ *INFO ./W4D3R-BOT
╰──────────────╮
       ╭──────────────╮
       │ *PREFIX* : Multi
       │ *TOTAL DONASI* : Rp.0 😄
       │ *OWNER* : ./W4D3R
       │ *NAMABOT* : ./W4D3R-BOT
       │ *UMUR* : 12
       │ *LOKASI* : INDONESIA
       │ *PEKERJAAN* : MENCINTAIMU 
       ╰──────────────╯
╭──────────────╯  
│ *https://instagram.com/akku_santuy*
╰──────────────╯
❋─────────────────❋
  *⚠WAH MAU DONASI YA*
⟴ *PULSA* : 6288215393438
⟴ *DANA* : 6288215393438
⟴ *GOPAY* : 6288215393438
❋─────────────────❋
  *⚠MAU SEWA BOT GAK?*
⟴ *1 Minggu : 5k*
⟴ *1 Bulan : 10k*
⟴ *Permanen : 20k*
JIKA MINAT KETIK #owner
❋─────────────────❋
╭──────────────╮
│⟴ *http://ẉa.me/W̏4̏D̏3̏Ȑ➣*
╰──────────────╮
㋛
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Tunggu Sebentar Yaa Sayang',
			 group: 'This Command Can Only Be Used In Groups!',
			 admin: 'oNly Be Used By Admin!',
			 botAdmin: 'This Command Can Only Be Used If The Bot Is An Admin Groups',
			 limit: 'Limit Penggunaan Anda Sudah Habis, \n\nNote: limit Akan Direset Setiap 00.00',
			 ownerOnly: 'This Command Is Only For The Owner!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
