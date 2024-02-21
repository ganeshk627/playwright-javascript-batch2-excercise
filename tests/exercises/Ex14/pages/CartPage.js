//@ts-check
exports.CartPage = class CartPage {

  constructor(page) {
    this.page = page;
    this.product_quantity = '.product_quantity';
    this.order_button = 'input[name="Order"]';
    this.edit_your_cart_button = 'input[value="Edit Your Cart"]';
    this.cart_icon = 'img[alt="Cart"]';
    this.next_button_to_fill_address = '#next1_button';
    this.next_button_to_make_payment = '#next2_button'

    this.billing_firstname = '#bfirst_name';
    this.billing_lastname = '#blast_name';
    this.billing_companyname = '#bcompany_name';
    this.billing_streetaddress = '#bstreet_address';
    this.billing_zipcode = '#bzip_code';
    this.billing_areacode = '#barea_code';
    this.billing_primaryphone = '#bprimary_phone';

    this.ship_to_billing_address = '#ship_to_bill';
    this.billme_radio = '#bill_me';
    this.purchase_number = '#purchase_order_number';
    this.submit_button = 'input[name="submit"]';
    this.order_id = '//b[contains(text(), "Order")]';
    this.order_confirmation_message = 'div.content div p:nth-child(2)';
    this.profile_menu = '#profile_menu';
    this.signout_option = '//a[text()="Sign Out"]';

  }


  async selectProductQuantity(quantity) {
    await this.page.locator(this.product_quantity).selectOption({ 'label': quantity.toString() })
  }

  async clickOrder() {
    await this.page.locator(this.order_button).click();
  }

  async clickEditYourCart() {
    await this.page.locator(this.edit_your_cart_button).click();
  }

  async openCart() {
    // await this.page.locator(this.cart_icon).click();
    // await this.page.locator(this.cart_icon).hover();
    // await this.page.mouse.click({delay: 1000});
    // await this.page.locator(this.cart_icon).click({ force: true });
    await this.page.locator(this.cart_icon).dispatchEvent('click');
  }

  async clickNextToFillAddress() {
    await this.page.locator(this.next_button_to_fill_address).click();
  }

  
  async clickNextToMakePayment() {
    await this.page.locator(this.next_button_to_make_payment).click();
  }

  async fillBillingAndShippingAddress(firstName, lastName, streetAddress, zipCode, areaCode, primaryPhone, companyName, email) {
    await this.page.locator(this.billing_firstname).fill(firstName);
    await this.page.locator(this.billing_lastname).fill(lastName);
    await this.page.locator(this.billing_companyname).fill(companyName? companyName : "NIL");
    await this.page.locator(this.billing_streetaddress).fill(streetAddress);
    await this.page.locator(this.billing_zipcode).fill(zipCode);
    await this.page.locator(this.billing_areacode).fill(areaCode);
    await this.page.locator(this.billing_primaryphone).fill(primaryPhone);
  
    await this.page.locator(this.ship_to_billing_address).click();
  }

  async clickBillMe() {
    await this.page.locator(this.billme_radio).check();
  }
  
  async fillPurchaseNumber(purchaseNumber) {
    await this.page.locator(this.purchase_number).fill(purchaseNumber);
  }

  async clickSubmit() {
    await this.page.locator(this.submit_button).click()
  }

  async logOrderId() {
    const orderId = await this.page.locator(this.order_id).textContent();
    console.log("The Order ID is: ", orderId);
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Settings' }).click();
    await this.page.getByRole('link', { name: 'Sign Out' }).click();
    // await this.page.locator(this.profile_menu).click();
    // await this.page.locator(this.signout_option).hover();
    // await this.page.locator(this.signout_option).click();
  }



};
