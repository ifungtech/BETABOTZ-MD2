global.owner = ['6285931969956']  
global.mods = ['6285931969956'] 
global.prems = ['6285931969956']
global.nameowner = 'IFTXH'
global.numberowner = '6285931969956'
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/G4f1fTpz9zL4EH3FyIcaPR'
global.instagram = 'https://instagram.com/erlanrahmat_14'
global.wm = '© Tio'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'WKywFbId' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'WKywFbId'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'WKywFbId', 
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
