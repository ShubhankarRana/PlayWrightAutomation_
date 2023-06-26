class HomePage
{
constructor(page)
{
    this.page=page;
    this.signin=page.locator("//span[normalize-space()='Sign in or register']");
    this.user=page.locator("//input[@id='username']");
    this.submit=page.locator("//button[@type='submit']");
    this.pass=page.locator("//input[@id='password']");
//    this.press=page.locator("")
}

async navigateTo()
{
    await this.page.goto("https://www.booking.com/");
    await this.page.waitForLoadState('networkidle');
}

async signIn(username,password)
{
    await this.signin.click();
    await this.user.type("shubhankarvdi@gmail.com");
    await this.submit.click();
    await this.pass.type("Programmer#1");
    await this.submit.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.pause();
    //*[@id="mFZXXphAaYXhJKV"]
}

async confirm()
{
    await console.log("Successful SignIn!");
}
}
module.exports = {HomePage};