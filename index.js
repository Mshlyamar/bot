var TelegramBot = require('node-telegram-bot-api');
var needle = require('needle');
var cheerio = require('cheerio');
url = ''
var token = '864358521:AAELczSPFZgNh-Pedim72M_mkzcwwlpnS_M';

var bot = new TelegramBot(token, {polling: true});


bot.onText(/./, function (msg) {
    var chatId = msg.chat.id;
    switch(msg.text){
    	case "IP-72":
    		url = 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=bb920257-c159-4dba-b630-48485f153785';
    		needle.get(url, function(err, res){
			if(err) throw(err);
			var $ = cheerio.load(res.body);
			bot.sendMessage(chatId, $(".plainLink").text());
			});
    		break;
    	case "IP-71":
    		url = 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=26d47cdd-5e07-4c1a-9ae1-0ff5f5ceced9';
    		needle.get(url, function(err, res){
			if(err) throw(err);
			var $ = cheerio.load(res.body);
			bot.sendMessage(chatId, $(".plainLink").text());
			});
    		break;
    	};
});
