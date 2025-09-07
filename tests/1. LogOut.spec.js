import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage, RegisterPage, LogOut} from '../src/pages/0.index';
const URL = 'https://realworld.qa.guru/';

test.describe('', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(URL);
	});

	test.only('Пользователь выходит из аккаунта', async ({
		page,
	}) => {
		const user = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const logout = new LogOut(page);
        await mainPage.gotoRegister();
        await registerPage.register(user);
        await logout.gotoLogOut();
		
		await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
	});
});