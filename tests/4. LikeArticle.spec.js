import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage, LikeArticle } from '../../src/pages/0.index';

const URL = 'https://realworld.qa.guru/';

test.describe('', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test.only('Пользователь лайкает статью', async ({ page }) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const likeArticle = new LikeArticle(page);
        await mainPage.gotoRegister();
        await registerPage.register(user);
        await likeArticle.gotoLike();


		await expect(page.locator('button:has-text("( 1 )")')).toBeVisible();
    });
});