export class LikeArticle {
    constructor(page) {
        this.link = page.getByRole('button', { name: 'Global Feed' });
        this.like = page.getByRole('button', { name: '0' }).first();
    }

    async gotoLike() {   
        await this.link.click();
        await this.like.click();
    }
}