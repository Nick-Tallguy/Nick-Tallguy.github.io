var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = []

var language = process.argv[2]
var language_used = 'none'
process.stderr.write(language)
switch (language) {
  case 'de':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.de.js')(lunr)
    language_used = lunr.de
    break
  case 'es':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.es.js')(lunr)
    language_used = lunr.es
    break
  case 'fr':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.fr.js')(lunr)
    language_used = lunr.fr
    break
  case 'hu':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.hu.js')(lunr)
    language_used = lunr.hu
    break
  case 'it':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.it.js')(lunr)
    language_used = lunr.it
    break
  case 'ja':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.ja.js')(lunr)
    language_used = lunr.ja
    break
  case 'nl_NL':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.nl.js')(lunr)
    language_used = lunr.nl
    break
  case 'nb':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.no.js')(lunr)
    language_used = lunr.no
    break
  case 'pt':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.pt.js')(lunr)
    language_used = lunr.pt
    break
  case 'pt_BR':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.pt.js')(lunr)
    language_used = lunr.pt
    break
  case 'ru':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.ru.js')(lunr)
    language_used = lunr.ru
    break
  case 'vi':
    require('lunr.stemmer.support')(lunr)
    require('./lunr.vi.js')(lunr)
    language_used = lunr.vi
    break
}

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
  buffer.push(data)
})

stdin.on('end', function () {
  var documents = JSON.parse(buffer.join(''))

  var idx = lunr(function () {
    if (language_used != 'none') {
      this.use(language_used)
    }
    this.ref('link')
    this.field('link')

    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  stdout.write(JSON.stringify(idx))
})
