var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get("https://auth.berkeley.edu/cas/login?service=https%3A%2F%2Fcalcentral.berkeley.edu%2Fauth%2Fcas%2Fcallback%3Furl%3Dhttps%253A%252F%252Fcalcentral.berkeley.edu%252F/finances")

driver.findElement(By.name('username')).sendKeys('ryanjlee');
driver.findElement(By.name('password')).sendKeys('PepperMaddie1');
driver.findElement(By.name('submit')).click();

var source = driver.findElement(By.className('cc-cal1card-amount')[1]);


//console.log(source);

//document.getElementById('log').innerHTML += '<br>Some new content!';
//var html = driver.page_source;



