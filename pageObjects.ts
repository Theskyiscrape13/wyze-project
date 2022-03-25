import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class WYZE extends BasePage {

    //Wyze selectors
    shopNow: By = By.xpath(`(//a[@href="/collections/spring-sale"])[3]`)

    headPhones: By = By.xpath(`(//a[@href="/products/wyze-buds"])[3]`)
    
    //cartIcon: By = By.xpath

    addToCart: By = By.xpath('(//button[@class="btn-gr-solid-l button--full-width"])[1]')

    //yourCart: By = By.xpath(`//h1[@class="title title--primary"]`)
     
    //quantityButton: By = By.xpath(`//button[@class="quantity__button no-js-hidden"]`)
    
    checkOut: By = By.xpath(`(//button[@class="btn-gr-solid-l button--full-width"])[2]`)
      
    //showOrderSummary: By = By.xpath(`//span[@class="order-summary-toggle__text order-summary-toggle__text--show"]`)
    
    returnToCart: By = By.xpath(`//span[@class="step__footer__previous-link-content"]`)
    
    removeFromCart: By = By.xpath(`//a[@class="button button--tertiary"]`)

    aboutFooter: By = By.xpath(`//a[@href="/pages/our-story"]`)

    thumbnailfromYouTube: By = By.xpath(`//div[@class="ytp-cued-thumbnail-overlay-image"]`)
    
    iconYouTube: By = By.xpath(`//a[@href="https://www.youtube.com/wyzelabs"]`)



constructor() {
        super({url: "https://www.wyze.com/"});
    }
}