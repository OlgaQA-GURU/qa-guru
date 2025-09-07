export class TagSearch {
    constructor(page) {
        this.linkGlobal = page.getByRole('button', { name: 'Global Feed' });
        this.link = page.getByRole('button', { name: 'реклама' });
    }

    async gotoSearch() {   
        await this.linkGlobal.click();
        await this.link.click();
    }
}