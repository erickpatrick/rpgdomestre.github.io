export function handler (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Olá, essa API pertence ao RPG do Mestre. Parabéns por encontrá-la. Quer nos ajudar a criar uma API ainda melhor? Envie email para rpgdomestre@erickpatrick.net"
  })
}