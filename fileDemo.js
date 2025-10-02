import url from 'url'
const urlString = 'https://www.google.com?q=hello+world';
const urlObj = new URL(urlString);
urlObj.searchParams.set('q','youtube');
console.log(urlObj.searchParams);

const params = new URLSearchParams(urlObj.search);
params.set('q', 'twitter');
console.log(params);
