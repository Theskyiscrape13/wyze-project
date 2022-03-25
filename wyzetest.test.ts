import {WYZE} from "./pageObjects"


const wyze = new WYZE

test("Add earbuds to Cart then Remove.", async () => {
    await wyze.navigate();
    await wyze.driver.manage().window().maximize(); 
    await wyze.click(wyze.shopNow);
    await wyze.click(wyze.headPhones);
    await wyze.driver.sleep(3000);
    await wyze.click(wyze.addToCart);
    await wyze.driver.sleep(3000);
    await wyze.click(wyze.checkOut);
    await wyze.driver.sleep(3000);
    await wyze.click(wyze.returnToCart);
    await wyze.click(wyze.removeFromCart);
    await wyze.driver.sleep(10000);
})


test("Check Youtube icon.", async () => {
    await wyze.click(wyze.aboutFooter);
    //await wyze.find(wyze.thumbnailfromYouTube);
   //await wyze.getElement(wyze.thumbnailfromYouTube)
    await wyze.click(wyze.iconYouTube);
    await wyze.driver.sleep(3000);
    // Navigates to YouTube 404 channel
    await wyze.driver.quit();
})


