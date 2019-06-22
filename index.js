var TelegramBot = require('node-telegram-bot-api');
var needle = require('needle');
var cheerio = require('cheerio');
url = 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=bb920257-c159-4dba-b630-48485f153785'

var token = '864358521:AAELczSPFZgNh-Pedim72M_mkzcwwlpnS_M';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    
 	needle.get(url, function(err, res){
		if(err) throw(err);
		var $ = cheerio.load(res.body);
		bot.sendMessage(chatId, $(".plainLink").text());
	});
});