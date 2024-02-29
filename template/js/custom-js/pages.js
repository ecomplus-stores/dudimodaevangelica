// Add your custom JavaScript for storefront pages here.
import { isMobile } from '@ecomplus/storefront-twbs'
if (isMobile) {
    ecomCart.on('addItem', () => { 
        window.location = '/app/#/cart/' 
    })
}