import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';
import {MainPage, RegisterPage, CreateArticle,  EditArticle} from '../src/pages/0.index';
const URL = 'https://realworld.qa.guru/';

test.describe('', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(URL);
	});

	test.only('Пользователь редактирует статью', async ({
		page,
	}) => {
		const user = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};
		const article = {
			name: nanoid(10),
			shortDescription: nanoid(15),
			description: nanoid(30),
			tags: nanoid(3),
		};
		const articleEdit = {
			name: nanoid(10),
			shortDescription: nanoid(15),
			description: nanoid(30),
			tags: nanoid(3),
		};
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
		const createArticle = new CreateArticle(page);
		const editArticle = new EditArticle(page);
	    await mainPage.gotoRegister();
        await registerPage.register(user);
		await createArticle.create(article);
		await editArticle.edit(articleEdit);
		
		await expect(page.getByText("Delete Article").nth(1)).toBeVisible();
	});
});