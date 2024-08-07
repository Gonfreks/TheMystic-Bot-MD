import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://telegra.ph/file/b9b4ff9c328cfe440f91f.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'Elakreb' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> 𝐄𝐋𝐙𝟑𝐄𝐌𝐆𝐎𝐍↳🐢↲𝐁𝐎𝐓
> 〔 الاشتراك المجاني┊ ˼‏ 🦂˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *بـيـ🦈ــبـو بــ🤖ــوت*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹💬˼┊- رقم وهمي
> •┊˹💬˼┊- روبل بوت ارقام
> •┊˹💬˼┊- 250 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹💬˼┊- اشتراك سرفر عام
> •┊˹💬˼┊- شغال 7/24
> •┊˹💬˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹💬˼┊- Payeer
> •┊˹💬˼┊- VodafoneCash
╝───────────────¤
*ملحوظة : الاشتراك المجاني اسبوع واحد فقط وبمقابل 🚀*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠𝐄𝐋𝐙𝟑𝐄𝐌𝐆𝐎𝐍↳🐢↲𝐁𝐎𝐓⌡
*⋅ ───━ •﹝👑﹞• ━─── ⋅*`,
                        subtitle: "Elakreb"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201146121794","merchant_url":"https://api.whatsapp.com/send?phone=+201146121794"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://youtube.com/@7ussein_ali1","merchant_url":"https://youtube.com/@7ussein_ali1"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['مجاني', 'ش1', 'اشتراك_مجاني', 'بلالمجان'];

export default handler;
