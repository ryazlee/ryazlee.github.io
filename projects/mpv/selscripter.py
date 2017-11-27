from selenium import webdriver 
from selenium.webdriver.common.keys import Keys
import getpass

user = input("Please enter your CalNet id: ");
pwd = getpass.getpass("Please enter your CalNet password: ");

driver = webdriver.Chrome(executable_path=r"chromedriver")
driver.get("https://auth.berkeley.edu/cas/login?service=https%3A%2F%2Fcalcentral.berkeley.edu%2Fauth%2Fcas%2Fcallback%3Furl%3Dhttps%253A%252F%252Fcalcentral.berkeley.edu%252F/finances")

#driver.get("https://calcentral.berkeley.edu/finances");

try:
    assert "CAS" in driver.title
    elem = driver.find_element_by_id("username")
    elem.send_keys(user)
    elem = driver.find_element_by_id("password")
    elem.send_keys(pwd)
    elem.send_keys(Keys.RETURN)
         
    driver.implicitly_wait(3)

    driver.find_element_by_xpath('//*[@id="cc-navigation"]/div/div/ul/li[3]')

    html = driver.execute_script("return document.body;");
    data = driver.page_source;

    start = data.find("mealpoints | number") + 21;
    end = data.find("cc-cal1card-points") - 21;

    #print(data);
    #print(str(start) + "    "  + str(end));
    print("You have " + data[start:end] + " meal points");

except:
    print("Something went wrong with login, please try again");

driver.close()

