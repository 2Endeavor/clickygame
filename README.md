This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used https://bitly.com/ to shorten the address length of the images
for example, 
"https://www.bing.com/images/search?view=detailV2&id=0BCCDDA7FB20BEFF1F1A12893515DAFE1282B44D&thid=OIP.YFMC0808PGhZS4vi4rUGVAHaFj&mediaurl=http%3A%2F%2Fstatic4.businessinsider.com%2Fimage%2F59a9bcde24884960325b76f0-1003%2Fobi-wan-kenobi.jpg&exph=752&expw=1003&q=Obi-Wan+Kenobi+Character&selectedindex=9&ajaxhist=0&vt=0&eim=1,2,6
https://bitly.com/"

was shortened to "https://bit.ly/2OPdrFyg"

Things to correct:
Photos need to fill the space within each card

Shuffle code:
// original gist
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

// fully random by @BetonMAN
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

shuffleArray([1, 2, 3]) //[3, 1, 2]

## Available Scripts

