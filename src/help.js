🦈🐳COMANDOS DO PEIXOTO BOT🐳🦈
const help = (prefix) => {
	return `> *Sticker Comandos* <
🦈comando : *${prefix}sticker* or *${prefix }stiker*
desc : converter imagem / gif / vídeo em adesivo🐳

>>uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*

descrição : converter adesivo em imagem
usage : adesivo de resposta\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n
> *Memes do Peixotin Comandos😱* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : apenas envie o comando\n

> *Outros Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n

comando : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n

command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage: basta enviar o comando\n
command : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n

command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n

command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : responder imagem ou enviar imagem com legendan\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Group Comands* <
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : just send the command\
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* para desativar o modo simi
note : Este comando pode ser usado se você for um admin\n`
}

exports.help = help


