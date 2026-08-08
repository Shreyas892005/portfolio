import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/');
  
  let attempts = 0;
  let mainActive = false;
  
  while (attempts < 20) {
    await new Promise(r => setTimeout(r, 1000));
    mainActive = await page.evaluate(() => {
      const main = document.getElementsByTagName("main")[0];
      return main ? main.classList.contains("main-active") : false;
    });
    
    if (mainActive) {
      break;
    }
    attempts++;
  }
  
  const opacity = await page.evaluate(() => {
    const main = document.getElementsByTagName("main")[0];
    return main ? window.getComputedStyle(main).opacity : null;
  });

  const loadingVisible = await page.evaluate(() => {
    const el = document.querySelector('.loading-screen');
    return el ? window.getComputedStyle(el).display : null;
  });
  
  const loadingText = await page.evaluate(() => {
    const el = document.querySelector('.loading-content-in');
    return el ? el.innerText : null;
  });
  
  console.log("main-active:", mainActive);
  console.log("main-opacity:", opacity);
  console.log("loading-screen display:", loadingVisible);
  console.log("loading-text:", loadingText);
  
  await page.screenshot({ path: 'public/screenshot2.png' });
  
  await browser.close();
})();
