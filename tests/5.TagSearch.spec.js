import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage, RegisterPage, TagSearch} from '../../src/pages/0.index';
const URL = 'https://realworld.qa.guru/';

test.describe('', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(URL);
	});

	test.only('Пользователь ищет статьи по тегу', async ({
		page,
	}) => {
		const user = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const tagsearch = new TagSearch(page);
        await mainPage.gotoRegister();
        await registerPage.register(user);
        await tagsearch.gotoSearch();
		
		await expect(page.locator("li.tag-default.tag-pill.tag-outline:has-text('реклама')").first()).toBeVisible();
	});
});