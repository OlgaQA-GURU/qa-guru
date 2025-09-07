export class LogOut {
    constructor(page) {
        this.logOutLink = page.locator(
            '//div[@class="nav-link dropdown-toggle cursor-pointer"]');
        this.logOut = page.getByRole('link', { name: 'Logout' });
    }

    async gotoLogOut() {
        await this.logOutLink.click();
        await this.logOut.click();
    }
}