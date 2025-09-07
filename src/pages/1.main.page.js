export class MainPage {
    constructor(page) {
        //страничка-драйвер
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
    }

    //бизнесовые действия со страницей
    async gotoRegister() {
        await this.signupLink.click();
    }
    
    // методы
}

//const SIGNUP_LINK_TEXT = 'Sign up';
//await page.getByRole('link', { name: SIGNUP_LINK_TEXT }).click();