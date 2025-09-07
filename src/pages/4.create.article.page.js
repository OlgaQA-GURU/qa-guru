export class CreateArticle {
    constructor(page) {
        this.newArticle = page.getByRole('link', { name: 'New Article' });
        this.articleTitleInput = page.getByRole(
            'textbox', { name: 'Article Title' });
        this.nameOfArticleInput = page.getByRole(
            'textbox', { name: "What's this article about?"});
        this.articleInput = page.getByRole(
            'textbox', { name: 'Write your article (in markdown)' });
        this.tagsInput = page.getByRole(
            'textbox', { name: 'Enter tags' });
        this.publishButton = page.getByRole(
            'button', { name: 'Publish Article'});
    }

    async create(article) {    
        const {name, shortDescription, description,} = article;
        await this.newArticle.click();
        await this.articleTitleInput.click();
        await this.articleTitleInput.fill(name);
        await this.nameOfArticleInput.click();
        await this.nameOfArticleInput.fill(shortDescription);
        await this.articleInput.click();
        await this.articleInput.fill(description);
        await this.tagsInput.click();
        await this.tagsInput.fill('auto');
        await this.publishButton.click();
    }
}