export class EditArticle {
    constructor(page) {
        this.buttonEditArticle = page.getByRole(
            'button', { name: 'Edit Article' }).nth(1);
        this.articleTitleInput = page.getByRole(
            'textbox', { name: 'Article Title' });
        this.nameOfArticleInput = page.getByRole(
            'textbox', { name: "What's this article about?"});
        this.articleInput = page.getByRole(
            'textbox', { name: 'Write your article (in markdown)' });
        this.tagsInput = page.getByRole(
            'textbox', { name: 'Enter tags' });
        this.publishButton = page.getByRole(
            'button', { name: 'Update Article'});
    }

    async edit(articleEdit) {    
        const {name, shortDescription, description, tags } = articleEdit;
        await this.buttonEditArticle.click();
        await this.articleTitleInput.click();
        await this.articleTitleInput.fill('');
        await this.articleTitleInput.fill(name);
        await this.nameOfArticleInput.click();
        await this.nameOfArticleInput.fill('');
        await this.nameOfArticleInput.fill(shortDescription);
        await this.articleInput.click();
        await this.articleInput.fill('');
        await this.articleInput.fill(description);
        await this.tagsInput.click();
        await this.tagsInput.fill('');
        await this.tagsInput.fill(tags);
        await this.publishButton.click();
    }
}