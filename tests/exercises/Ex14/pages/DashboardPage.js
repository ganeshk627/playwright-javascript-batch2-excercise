//@ts-check
exports.DashboardPage = class DashboardPage {

    constructor(page) {
      this.page = page;
      this.welcome_message = '#user_information_account span';
      this.product_type_dropdown = '#productType';
      this.product_types = '#productType option';
      this.product_list_dropdown = '#productsList';
      this.product_lists = '#productsList option';
      this.view_button = 'input#viewButton';
      this.product_quantity = '.product_quantity';
      this.order_button = 'input[name="Order"]';
    }

    async selectProductType(productType) {
      await this.page.locator(this.product_type_dropdown).selectOption({'label': productType})
    }

    async selectProduct(productName) {
      await this.page.locator(this.product_list_dropdown).selectOption({'label': productName})
    }

    async clickViewDetails() {
      await this.page.locator(this.view_button).click();
    }

    async selectProductQuantity(quantity){
      await this.page.locator(this.product_quantity).selectOption({'label': quantity})
    }

    async clickOrder() {
      await this.page.locator(this.order_button).click();
    }


  
    
  };
  