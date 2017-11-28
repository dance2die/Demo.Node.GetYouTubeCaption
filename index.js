const scraper = require('youtube-captions-scraper');
const striptags = require('striptags');
const getSentiment = require('sentiment');

const videoID = '8Yj3zw13QLI';

scraper.getSubtitles({
    videoID,
    lang: 'en' // default: `en`
}).then(captions => {
    const result = captions.map(caption => {
        const text = striptags(caption.text);
        const sentiment = getSentiment(text).score;
        return {
            start: caption.start,
            duration: caption.dur,
            text: text,
            sentiment
        }
    });
    console.log(result);
});


