const { Client, LocalAuth } = require('whatsapp-web.js');
const qr = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body.toLocaleLowerCase() == 'Bom dia') {
        msg.reply('Olá, bom dia! Como posso te ajudar? Cite a opção desejada:');
        msg.reply('1. Fazer pedido.');
        msg.reply('2. Consultar pedido.');
        msg.reply('3. Modificar pedido (Disponivel até 5 min. depois de ser feito o pedido');
    }
});

client.on('message', msg => {
    if (msg.body.toLocaleLowerCase() == 'Boa tarde') {
        msg.reply('Olá, boa tarde! Como posso te ajudar? Cite a opção desejada:');
        msg.reply('1. Fazer pedido.');
        msg.reply('2. Consultar pedido.');
        msg.reply('3. Modificar pedido (Disponivel até 5 min. depois de ser feito o pedido');
    }
});

client.on('message', msg => {
    if (msg.body.toLocaleLowerCase() == 'Boa noite') {
        msg.reply('Olá, boa noite! Como posso te ajudar? Cite a opção desejada:');
        msg.reply('1. Fazer pedido.');
        msg.reply('2. Consultar pedido.');
        msg.reply('3. Modificar pedido (Disponivel até 5 min. depois de ser feito o pedido');
    }
});

client.initialize();