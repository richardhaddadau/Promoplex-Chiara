# Changelog

## Draft

## 2.0.3 (12-10-2021)
- Fix Google Structured Data schema for product reviews - Invalid object type for field "author".
- Fix cart items not show on thank you page
- Add js option "disableSearchInput"
- Fix ESLint

## 2.0.2 (10-22-2021)
- Fix MPN not change when not show properties tab
- Fix currency dropdown display incorrect when logo position = top
- Add try/catch for setProductVariant()

## 2.0.1 (09-09-2021)
- End discount program.

## 2.0.0 (08-26-2021)
- Fix dropdown color in themed checkout page
- Add theme option "Enable widget regions in mega menus" to allow adding widgets to the mega menu.
- Fix sweetalert button focus color
- Fix credit card form on checkout page when checkout_theme is enabled
- Fix star, sash badge position
- Discount 25%

## 1.12.0 (07-01-2021)
- Fix dimensions titles displayed on mobile not follow theme settings
- Fix sale badge on product carousel not change color on hover
- Fix reCaptcha position not show correct on the checkout page
- Fix spacing at the bottom of page if enable PhotoSwipe
- Fix herocarousel boxed style
- Add option to disable remote banner
- Fix MPN not update when selecting product options
- Fix "# block" typo
- Optimize PDP: only load zoom image on active slide

## 1.11.1 (05-06-2021)
- [CORNERSTONE] BCTHEME-445 replace page builder ssl settings with new global region for html widget
- [CORNERSTONE] fixed email address validation in forms. [#2029](https://github.com/bigcommerce/cornerstone/pull/2029)
- [CORNERSTONE] fix(search): ES-2071 removed adding selected filters for price filter since not needed
- [CORNERSTONE] Remove AddThis for social sharing, replace with provider sharing links https://github.com/bigcommerce/cornerstone/pull/1997
- Fix missing data-event-type in infinite product loading
- Fix extractMoney function not working correct

## 1.11.0 (04-09-2021)
- Fix layout shifts CLS issue, page speed improvement.
- [PERFORMANCE] Optimize polyfills
- Load lazyload script async
- [CORNERSTONE] Reset cart quantity to 0 if we get a 404 for the cart
- Fix swatch image change display blank when card slider is enabled
- Fix JS error in function setProductVariant() on IE 11

## 1.10.1 (03-23-2021)
- Fix SweetAlert cancel button wrong color
- Fix [THEME-2074] When Default Option is Out of Stock, Add to Cart Button is Missing from other Option

## 1.10.0 (03-09-2021)
- Fix Faceted Search show more selects not scroll on iOS/Safari
- Fix redeem code text box on the checkout page - theme checkout enabled
- Fix Burst sale badge smaller
- Disable Buy Now button if product is not available
- Show swatch full image on product cards
- Fix PAYMENTS-4228 include currency_code field in the Account > Payment Methods
- Update Klarna logo
- Change image when select card swatch
- Add option Buy Together - Auto select all items

## 1.9.1 (02-18-2021)
- Fix [THEME-2054] Refactor Frequently Bought Together using GraphQL for better performance

## 1.9.0 (02-05-2021)
- Add GooglePay + Klarna payment icon
- Add Color Swatches Dropdown display type on PDP

## 1.8.3 (12-30-2020)
- New feature display custom fields on product cards
- Fix address info not display when newsletter is disabled
- Fix schema file error
- Fix Log in for Pricing not working
- Fix registerValidation function to validate on writeReview-form email field [#1585](https://github.com/bigcommerce/cornerstone/pull/1585)
- Fix [THEME-2029] products.php calls in color swatches display on product cards

## 1.8.2 (10-22-2020)
- Fix Login link not work when turn off side panel in Fashion style

## 1.8.1 (10-20-2020)
- Revert Also Bought default off
- Add global regions

## 1.8.0 (10-06-2020)
- Add hook "product-productdetails-init" for MQPO addon
- Remove click event on the card images if enable slider
- [CORNERSTONE] CHECKOUT-4828 Special characters to render properly on the cart modal pop up
- Fix special characters in product reviews on mobile
- Fix search close icon on the checkout page on mobile
- Add more widget regions on home page and blog page
- Add new features: Popup Banner + Products by Category
- Add more widget regions to sidebar
- Update static web page 100% width
- Fix Also Bought currency symbol position display wrong in some case
- [CORNERSTONE] MCU-427 Display modal before switching currencies
- [THEME-2000] Fix Faceted Filter option title wrong encoded character %

## 1.7.0 (07-29-2020)
- Support PhotoSwipe product image popup
- Fix Buy Now button should not show for pre-order
- Show View Cart button on added to cart popup
- Fix Categories Menu scroll issue occasionally on mobile
- Auto play video on iframe open
- Update stencil-cli v1.12.1
- Fix variant SKU, UPC not display if the product has no SKU, UPC
- Fix Share button not working in Quick-View
- Fix wishlist dropdown show wrong position in quickview on PDP
- Add option blog_posts_per_page
- Fix wishlist icon not working on product card
- Fix missing alt attribute in writeReview-productImage
- Show rating on related products
- Fix cannot add to wishlist on the product cards
- Correct label of container-fill-base
- Disable image zoom on iOS
- [CORNERSTONE] CATALOG-5557 Special characters are not rendered for product review
- [CORNERSTONE] STRF-3591 add return instructions in return-saved.html
- Move header_bottom region outside the sticky header
- Fix infinite products loading suddenly stop working
- Remove duplicate scripts in order-confirmation page
- Fix payment icons not show when social icons = bottom_none
- Fix stencil-cli@2 bundle validation
- Update Frequently Bought Together version 2

## 1.6.1 (2020-03-30)
- Add regions like Cornersone
- Add option to show store addres & phone in the footer
- Remove title/desc "created with sketch" in svg icons
- Add region 'page_builder_content' to page.html

## 1.6.0 (2020-02-26)
- Fix color of flyout menu sub items when hover.
- Fix Mobile Not Friendly when Card Image Slider is enabled.
- Fix the close button color.
- Fix categories and pages panel color when header color is dark.
- Fix custom fields start with __ still show on mobile.
- Add new option allow to turn off Login panel.
- Fix product variant image not change when click on product swatches on product card items if "Show Image Slider" is enabled.
- Fix mega menu dropdown not work on iPad iOS 13+
- Add new feature support Youtube video on Home Carousel
- Add option to disable thumbnails carousel on PDP
- Fix Call for Price should have same style as Price
- Fix Facebook box not reload on the next page when faceted search enabled
- Fix click on the search icon scroll the page to top
- Fix remove wishlist buttons not align properly on wishlist page
- [CORNERSTONE] feat(search): ES-721 fixed the issue for price filter collapse CP settings
- Fix product columns display 5 on tablet
- Fix logo center not center properly
- Fix register link show twice if top header enabled
- [CORNERSTONE] ES-97 fixed the html special chars issue in facet names
- [CORNERSTONE] ES-98 Product filters configured to not display product count show a count when you use the "More" modal
- Add translation key for "read more" blog post link
- Update @bigcommerce/stencil-utils 5.0.3
- Fix main navigation underline position
- Fix quick search box z-index overlap header
- Move Cookie Consent message to bottom of page
- Fix the main carousel dots overflow mobile screen width


## 1.5.6 (2019-11-11)
- Fix flyout menu cannot click 3rd level menu item
- Fix [THEME-1892] Add new option: Heading color when having background

## 1.5.5 (2019-11-06)
- Fix subcategories not appear on the sidebar when reach to menu max depth.
- Fix Out of Stock badge not show on PDP
- Fix currency selector should hide when no additional currencies in Fashion style
- Fix the coupon form mess up on the checkout page on mobile
- Fix alert modal cannot close on mobile
- Show shipping method on order details page
- Improve payment buttons style
- Fix styling of the checkout page embed in theme
- Fix styling of newsletter form when showing first name
- Adjust the icons position on the header

## 1.5.4 (2019-09-06)
- Update jQuery to 3.4.1 [#1502](https://github.com/bigcommerce/cornerstone/pull/1502)

## 1.5.3 (2019-08-01)
- Fix [THEME-1833] Chiara v1.5.2 - Multi-line text field will not allow creation of new line.
- Show inline product options by default on PDP.
- Add new feature to support Buy Now button.

## 1.5.2 (2019-07-19)
- Fix categories menu error on mobile when not using mega menu.
- Fix product image not center on product card.
- Add custom CSS class to the top header links.
- Fix Price schema for Google structured data.
- Fix Add to Cart button overlap the mega menu.

## 1.5.1 (2019-06-25)
- Hide the parent menu in dropdown list on hover mode
- Fix missing desktop more panel when enabling hamburger menu

## 1.5.0 (2019-06-24)
- Fix mobile layout issue when show header/footer on checkout page.
- Add banner position for brand page.
- Fix blurry modal.
- Fix footer column break on Safari.
- Add support of the brand carousel speed.
- Enlarge logo on sticky header.
- Fix GeoTrust logo alignment.
- Optimize theme options schema.json.
- Show My Account & Logout link when customer logged in.
- Add the optimized checkout translation to en.json
- Show release date on product page.
- Fix data tags.
- Fix blog break on Edge.
- Fix mega menu issue on Safari.
- Fix Google structured data error.
- Fix unavailable option strike-through style.
- Fix brand logo size.
- Add support displaying sub pages on the navigation.
- Add class 'productView-info-bulkPricing'.
- Update carousel font size on mobile.
- Fix share url and FB like button.
- Hide Filter button when not available.
- Fix Sort button on search page.
- Add option to show category image as thumbnail.
- Add option top/bottom/hamburger for the mobile menu bar.
- Optimize performance and Google Page Speed.
- Add Lazyload for instagram photos.
- Improve lazyload of category list section's images
- Fix extra space of form field on also bought products.
- Fix review link align & increase width of user panel
- Fix footer newsletter form space
- Add support window.chiaraSettings
- Add support logo position top

## 1.4.2 (2019-05-04)
- Fix bug cannot change the quantity on the cart page
- Fix issue server error when requesting 11th banner of category list on homepage.
- Align center images when customers upload a small image
- Add setting to show different image on hover product card
- Add schema markup for MPN, GTIN
- Fix Google schema for product page.
- Add option to show properties below price or in tab.
- Lazy load image for category list on homepage.
- Declare window.chiarajQuery globally.
- Allow to show more than 10 images of the category list on homepage.
- Update footer columns.
- Show 6 thumbnails on product page.
- Allow to restore default image after select product option.
- Fix product card buttons overlapped by product image.
- Fix compare issue when change page or filter.
- Hide a custom field has special character "__" on compare table.

## 1.4.1 (2019-04-22)
- Hide card swatches if request error
- Fix related product price changed when no Also Bought
- Load async for Instagram script
- Fix duplicate price on product page when no option

## 1.4.0 (2019-03-25)
- Add extra CSS class to productView-tab
- Fix top banner text color setting
- Fix Also Bought Together product price changed
- Fix the main navigation overlapped on iPad 1024
- Fix product option value tooltip didn't show
- Fix product details wrong order on mobile after add Also Bought
- Add banner placement before product rating
- Fix price update on product card when color swatch is selected
- Fix setting of Footer Hover Link
- Fix reviews link didn't work when reviews are in tab
- Fix description tab didn't work after add Also Bought
- Add block chiara-productpage-rating
- Add option "Show Add to Cart on mobile" to show inline / popup panel
- Fix option show address on top header didn't work
- Fix z-index of add to cart button on mobile
- Fix footer newsletter box not full width on mobile
- Fix footer SSL seal CSS
- Fix a gitch of "Payment Methods" link on the right user panel
- Fix duplicate header footer scripts on checkout page if show header & footer
- Customer Also Bought get product from
- Optimize theme settings
- Fix AJAX conflicting with BigCommerce Data Tags
- Add banner position before full width description

## 1.3.0 (2019-02-15)
- Fix header sticky menu dropdown glitch on ipad 1024.
- Fix category menu (+) icon on category page.
- Update BUY button to use icon cart-add.
- Fix BUY button glitch when product description is overflow.
- Hide Specifications tabs when there is no product custom fields.
- Fix banner CSS break when BC banner content being wrapped by a div
- Show SKU on the dropdown cart & cart page.
- Auto show vertical scrollbar on the dropdown cart.
- Update Cornerstone 3.2.1.

## 1.2.0 (2019-01-09)
- Add new feature: show image sliders on product card item.
- Add new feature: Show full header & footer on the checkout pages.
- Add Also Bought (Buy Together) feature
- Improve:
  - Add more products count on homepage
  - Change loading remote banner from search page
  - Use products_per_page for all listing pages


## 1.1.1 (2018-12-27)
- Update showing qty box from theme settings.

## 1.1.0 (2018-12-27)
- Update Cornerstone 3.0.0:
  - Added defer tag to addThis and defered execution of related script [#1406](https://github.com/bigcommerce/cornerstone/pull/1406)
  - Fixed compare buttons for product list display [#1384](https://github.com/bigcommerce/cornerstone/pull/1384)
  - Remove unnecessary API call to get cookie notification status [#1380](https://github.com/bigcommerce/cornerstone/pull/1380)
  - Cart switch from quote item hash to id which is immutable [#1387](https://github.com/bigcommerce/cornerstone/pull/1387)
  - Remove extra font only used for textual store logo. [#1375](https://github.com/bigcommerce/cornerstone/pull/1375)
  - shotaK's Add context to the menu collapsible factory target elements [#1382](https://github.com/bigcommerce/cornerstone/pull/1382)
  - Added default rule for product carousel card title to break words on overflow. [#1389](https://github.com/bigcommerce/cornerstone/pull/1389)
  - Only show cookie privacy notice for EU IP addresses [#1381](https://github.com/bigcommerce/cornerstone/pull/1381)
  - Move Cart Quantity header value to a FE API call [#1379](https://github.com/bigcommerce/cornerstone/pull/1379)
  - Make display of quantity selection box on PDP configurable. [#1398](https://github.com/bigcommerce/cornerstone/pull/1398)
  - Don't load Cart resource on non-Cart pages [#1401](https://github.com/bigcommerce/cornerstone/pull/1401)
  - Remove deprecated fields - delivery and event date, and configurable fields. [#1407](https://github.com/bigcommerce/cornerstone/pull/1407)
- Update Cornerstone 2.6.0:
  - Add support for Card Management: List, Delete, Edit, Add and Default Payment Method [#1376](https://github.com/bigcommerce/cornerstone/pull/1376)
  - Add support for declarative data tag analytics. [#1377](https://github.com/bigcommerce/cornerstone/pull/1377)
- Update Cornerstone 2.5.

## 1.0.1 (2018-12-19)


## Cornerstone Changelog
- Added package-lock.json. [#1441](https://github.com/bigcommerce/cornerstone/pull/1441)
- Product description in Compare no longer shows escaped HTML. [#1439](https://github.com/bigcommerce/cornerstone/pull/1439)
- Removed href="#" from quick view button. [#1445](https://github.com/bigcommerce/cornerstone/pull/1445)
- Removed href="#" from quick view list item. [#1446](https://github.com/bigcommerce/cornerstone/pull/1446)

## 3.2.0 (2019-02-05)
- Align product thumbnail image slider arrows. [#1399](https://github.com/bigcommerce/cornerstone/pull/1399)
- Don't fire Cart API request if there is no cart [#1402](https://github.com/bigcommerce/cornerstone/pull/1402)
- Ensure SKU and UPC display correctly for Variants on PDP. [#1431](https://github.com/bigcommerce/cornerstone/pull/1431)
- Corrected IDs in date.html form fields. [#1433](https://github.com/bigcommerce/cornerstone/pull/1433)
- Cleanup and XSS fix on Cart page. [#1434](https://github.com/bigcommerce/cornerstone/pull/1434)
- Fix for product without image on Compare page. [#1438](https://github.com/bigcommerce/cornerstone/pull/1438)
- Resolve settings scope passed to components. [#1435](https://github.com/bigcommerce/cornerstone/pull/1435)

## 3.1.1 (2019-01-23)

- Downgrade Webpack to last known good version during development. [#1428](https://github.com/bigcommerce/cornerstone/pull/1428)

## 3.1.0 (2019-01-21)

- Fix for ESLint "func-names" warnings. [#1420](https://github.com/bigcommerce/cornerstone/pull/1420)
- Major performance improvements. Reduce Javascript bundle size from 376kb to 286kb. [#1390](https://github.com/bigcommerce/cornerstone/pull/1390)
- Fixed breadcrumbs for product and category pages [#1403](https://github.com/bigcommerce/cornerstone/pull/1403)
- Send GA tracking event whenever the last product is removed from the CART[#1409](https://github.com/bigcommerce/cornerstone/pull/1409)
- Fix cart item quantity change rollback [#1418](https://github.com/bigcommerce/cornerstone/pull/1418)
- Changed z-index to higher for header [#1422](https://github.com/bigcommerce/cornerstone/pull/1422)
- Removed customer (not address) phone number requirement from Edit Account [#1417](https://github.com/bigcommerce/cornerstone/pull/1417)

## 3.0.0 (2018-12-21)
### Breaking Changes
- Don't load Cart resource on non-cart pages [#1401](https://github.com/bigcommerce/cornerstone/pull/1401). While the theme itself doesn't depend on
  this resource on non-cart pages, this can potentially affect any scripts added by the Script Manager or the legacy footer scripts that depend on cart.
  If this applies to you, you'll want to add the cart resource back on the page types that need it (via front matter).

### Other Changes
- Added defer tag to addThis and defered execution of related script [#1406](https://github.com/bigcommerce/cornerstone/pull/1406)
- Fixed compare buttons for product list display [#1384](https://github.com/bigcommerce/cornerstone/pull/1384)
- Remove unnecessary API call to get cookie notification status [#1380](https://github.com/bigcommerce/cornerstone/pull/1380)
- Cart switch from quote item hash to id which is immutable [#1387](https://github.com/bigcommerce/cornerstone/pull/1387)
- Remove extra font only used for textual store logo. [#1375](https://github.com/bigcommerce/cornerstone/pull/1375)
- shotaK's Add context to the menu collapsible factory target elements [#1382](https://github.com/bigcommerce/cornerstone/pull/1382)
- Added default rule for product carousel card title to break words on overflow. [#1389](https://github.com/bigcommerce/cornerstone/pull/1389)
- Only show cookie privacy notice for EU IP addresses [#1381](https://github.com/bigcommerce/cornerstone/pull/1381)
- Move Cart Quantity header value to a FE API call [#1379](https://github.com/bigcommerce/cornerstone/pull/1379)
- Make display of quantity selection box on PDP configurable. [#1398](https://github.com/bigcommerce/cornerstone/pull/1398)
- Remove deprecated fields - delivery and event date, and configurable fields. [#1407](https://github.com/bigcommerce/cornerstone/pull/1407)

## 2.6.0 (2018-11-05)
- Add support for Card Management: List, Delete, Edit, Add and Default Payment Method [#1376](https://github.com/bigcommerce/cornerstone/pull/1376)
- Add support for declarative data tag analytics. [#1377](https://github.com/bigcommerce/cornerstone/pull/1377)

## 2.5.2 (2018-10-24)
- Product review modal error message is now accurate. [#1370](https://github.com/bigcommerce/cornerstone/pull/1370)
- Fixes issue with Slick slider for mobile safari in iframe [#1371](https://github.com/bigcommerce/cornerstone/pull/1371)

## 2.5.1 (2018-10-10)
- Fix broken breadcrumb schema markup [#1362](https://github.com/bigcommerce/cornerstone/pull/1362)
- Add option to disable arrows on the homepage carousel [#1293](https://github.com/bigcommerce/cornerstone/pull/1293)
- Fix spacing with SweetAlert cancel button on mobile [#1363](https://github.com/bigcommerce/cornerstone/pull/1363)
- Copy changes for Payment Buttons section. [#1365](https://github.com/bigcommerce/cornerstone/pull/1365)

## 2.5.0 (2018-09-26)
- Blueprint for Mapping Custom Templates to JavaScript Modules [#1346](https://github.com/bigcommerce/cornerstone/pull/1346)
- Fix carousel dots overlapping thumbnails on Product page. [#1351](https://github.com/bigcommerce/cornerstone/pull/1351)
- Cornerstone schema updates and organization [#1350](https://github.com/bigcommerce/cornerstone/pull/1350)
- Add div and id attributes so that contact form steps can be tracked [#1317](https://github.com/bigcommerce/cornerstone/pull/1317)
- Added "activePage" as a active class in navigation menus and web pages. [#1354](https://github.com/bigcommerce/cornerstone/pull/1354)
- Added hidden field for checkboxes with a "No" value. [#1355](https://github.com/bigcommerce/cornerstone/pull/1355)
- Stop lazyloading store logo [#1357](https://github.com/bigcommerce/cornerstone/pull/1357)
- Update lazysizes plugin to 4.1.2 [#1358](https://github.com/bigcommerce/cornerstone/pull/1358)
- Improve performance of first carousel slide [#1356](https://github.com/bigcommerce/cornerstone/pull/1356)
- Add support for Paypal smart buttons settings [#1359](https://github.com/bigcommerce/cornerstone/pull/1359)

## 2.4.0 (2018-09-14)
- Fix encoding issues on Account Signup Form ("&#039;" characters showing in country name)[#1341] (https://github.com/bigcommerce/cornerstone/pull/1341)
- Require Webpack config only when used (reduce time to be ready for receiving messages from stencil-cli). [#1334](https://github.com/bigcommerce/cornerstone/pull/1334)
- Fixed amp page error related to store logo [#1323](https://github.com/bigcommerce/cornerstone/pull/1323)
- Add link to order status in account menu when viewing order [#1343](https://github.com/bigcommerce/cornerstone/pull/1343)
- Update cart when quantity changed manually (without using the increase and decrease arrows). [#1338](https://github.com/bigcommerce/cornerstone/pull/1338)
- Fix option set. Selection from option set that containes multiple similar options. [1347] (https://github.com/bigcommerce/cornerstone/pull/1347)

## 2.3.2 (2018-08-17)
- Fix zoom behavior for small images in gallery (turn off zoom if image is too small). [#1325](https://github.com/bigcommerce/cornerstone/pull/1325)
- Undo New Products left align from 2.3.0. [#1328](https://github.com/bigcommerce/cornerstone/pull/1328)
- Fix invoice store logo. [#1326](https://github.com/bigcommerce/cornerstone/pull/1326)

## 2.3.1 (2018-08-03)
- Fix for review tabs not appearing. [#1322](https://github.com/bigcommerce/cornerstone/pull/1322)

## 2.3.0 (2018-08-02)
- Open correct product page tabs when URL contains a fragment identifier referring to that content [#1304](https://github.com/bigcommerce/cornerstone/pull/1304)
- Display product reviews in tabbed content region of product page. [#1302](https://github.com/bigcommerce/cornerstone/pull/1302)
- Show bulk discounts only if enabled through store settings. [#1310](https://github.com/bigcommerce/cornerstone/pull/1310)
- Corrects mini cart display issues [#1298](https://github.com/bigcommerce/cornerstone/pull/1298)
- Style active section in search results. [#1316](https://github.com/bigcommerce/cornerstone/pull/1316)
- Fix blog_post import statement in app.js [#1301](https://github.com/bigcommerce/cornerstone/pull/1301)
- Show carousel dots only when carousel has more than one slide. [#1319](https://github.com/bigcommerce/cornerstone/pull/1319)
- New products left align. [1321](https://github.com/bigcommerce/cornerstone/pull/1321)
- Fix initial aria attributes for 'Customers Also Viewed' products tab [#1290](https://github.com/bigcommerce/cornerstone/pull/1290)

## 2.2.1 (2018-07-10)
- Fix wishlist dropdown background color bleeding out of container [#1283](https://github.com/bigcommerce/cornerstone/pull/1283)
- Fix indefinite load spinner for products without an image in order history. [#1284](https://github.com/bigcommerce/cornerstone/pull/1284)
- Fix Webpack DefinePlugin configuration. [#1286](https://github.com/bigcommerce/cornerstone/pull/1286)
- Disable zoom and link for default "No Image" image. [#1291](https://github.com/bigcommerce/cornerstone/pull/1291)
- Fix for ESLint "quotes" and "quote-props" errors. [#1280](https://github.com/bigcommerce/cornerstone/pull/1280)
- Fix cart link not being clickable on mobile when white space reduced around store logo [#1296](https://github.com/bigcommerce/cornerstone/pull/1296)

## 2.2.0 (2018-06-22)
- Fix quantity edit on Simple Product AMP pages. [#1257](https://github.com/bigcommerce/cornerstone/pull/1257)
- Fix empty image on carousel wrap. [#1263](https://github.com/bigcommerce/cornerstone/pull/1263)
- Fix duplicate IDs occurrence in product options in certain situations & syntax fix in bulk-discount-rates component [#1223](https://github.com/bigcommerce/cornerstone/pull/1223)
- Fix use case that prevented retail/sale prices from displaying on product details page [#1262](https://github.com/bigcommerce/cornerstone/pull/1262)
- Fix svg arrows missing on AMP product pages. [#1258](https://github.com/bigcommerce/cornerstone/pull/1258)
- Fix for Changing Menu Colors In Theme Editor Not Respected In Mobile View [#1266](https://github.com/bigcommerce/cornerstone/pull/1266)
- Fix arrow placement on currency dropdown menu [#1267](https://github.com/bigcommerce/cornerstone/pull/1267)
- Add alias for lazysizes module to bundle minified library [#1275](https://github.com/bigcommerce/cornerstone/pull/1275)
- Fix prices not showing in quick search while logged in when "Restrict to Login" for price display is true [#1272](https://github.com/bigcommerce/cornerstone/pull/1272)
- Fix duplicate input ID's in product review form [#1276](https://github.com/bigcommerce/cornerstone/pull/1276)

## 2.1.0 (2018-06-01)
- Add Newsletter summary section to subscription form. [#1248](https://github.com/bigcommerce/cornerstone/pull/1248)
- Show retail price range with strikethrough. [#1199](https://github.com/bigcommerce/cornerstone/pull/1199)
- Fix for individual low inventory count for SKUs. [#1234](https://github.com/bigcommerce/cornerstone/pull/1234)
- Avoid undefined context in WishList instance. [#1247](https://github.com/bigcommerce/cornerstone/pull/1247)

## 2.0.0 (2018-05-23)
- Performance improvements. [#1229](https://github.com/bigcommerce/cornerstone/pull/1229)
- Fix for sort disappearing on range update with product filtering [#1232](https://github.com/bigcommerce/cornerstone/pull/1232)
- No longer escaping HTML content in blog summaries. [#1238](https://github.com/bigcommerce/cornerstone/pull/1238)
- Fix logo image dimensions on AMP pages. [#1239](https://github.com/bigcommerce/cornerstone/pull/1239)
- Fix product pricing schema.org microdata. [#1233](https://github.com/bigcommerce/cornerstone/pull/1233)
- Removed unused browserlist. [#1241](https://github.com/bigcommerce/cornerstone/pull/1241)
- Fix for ESLint "no-console" warning. [#1237](https://github.com/bigcommerce/cornerstone/pull/1237)

## 1.18.0 (2018-05-09)
- Add the +/- icons for the category filtering [#1211](https://github.com/bigcommerce/cornerstone/pull/1211)
- Add lazyloading to main product video and fix video thumbnail bug [#1217](https://github.com/bigcommerce/cornerstone/pull/1217)
- Hide blank review stars when there are no reviews on a product [#1209](https://github.com/bigcommerce/cornerstone/pull/1209)
- Fix overlapping logo when using "original" sizing and large logos [#1213](https://github.com/bigcommerce/cornerstone/pull/1213)
- Fix Product Options hiding Add to Cart on a Google AMP page [#1214](https://github.com/bigcommerce/cornerstone/pull/1214)
- Fix styling of subpage links in Contact Us page [#1216](https://github.com/bigcommerce/cornerstone/pull/1216)
- Fix for excess whitespace in multiline text field product option [#1222](https://github.com/bigcommerce/cornerstone/pull/1222)
- Fix for faceted search display. [#1225](https://github.com/bigcommerce/cornerstone/pull/1225)
- Fix for calls with empty files in Safari. [#1210](https://github.com/bigcommerce/cornerstone/pull/1210)

## 1.17.0 (2018-04-26)
- Fix empty object issue in app.js [#1204](https://github.com/bigcommerce/cornerstone/pull/1204)
- Fix product layout when shop by price disabled [#1205](https://github.com/bigcommerce/cornerstone/pull/1205)
- Fix brands import statement in app.js [#1202](https://github.com/bigcommerce/cornerstone/pull/1202)
- Fix broken 403/404 page search box in mobile [#1203](https://github.com/bigcommerce/cornerstone/pull/1203)

## 1.16.0 (2018-04-12)
- Add representation for products and variants with retail price that has sale price. [#1195](https://github.com/bigcommerce/cornerstone/pull/1195)
- Fix but in quickview related to grabbing default prices for products with no default selection. [#1197](https://github.com/bigcommerce/cornerstone/pull/1197)

## 1.15.0 (2018-04-04)
- Fix image dimensions on AMP pages. [#1192](https://github.com/bigcommerce/cornerstone/pull/1192)
- Remove AMP quick-search. [#1191](https://github.com/bigcommerce/cornerstone/pull/1191)
- Add head.scripts reference to checkout & order_confirmation pages [#1158](https://github.com/bigcommerce/cornerstone/pull/1158)

## 1.14.0 (2018-03-12)
- Fix product options unhiding indexing issue. [#1176](https://github.com/bigcommerce/cornerstone/pull/1176)
- Add schema microdata for breadcrumbs. [#1175](https://github.com/bigcommerce/cornerstone/pull/1175)
- Fix ItemAvailability microdata schema for product pages. [#1174](https://github.com/bigcommerce/cornerstone/pull/1174)
- Fix invoice.css styles. [#1171](https://github.com/bigcommerce/cornerstone/pull/1171)

## 1.13.2 (2018-02-28)
- Fix updateView firing when there are no default options. [#1172](https://github.com/bigcommerce/cornerstone/pull/1172)
- Don't clear bulk pricing rules when feature is disabled. [#1173](https://github.com/bigcommerce/cornerstone/pull/1173)

## 1.13.1 (2018-02-26)
- Fix "Shop by Price" toggle in theme editor to hide Shop by Price when faceted search is not enabled. [#1161](https://github.com/bigcommerce/cornerstone/pull/1161)
- Migrate jQuery from 2->3. [#1162](https://github.com/bigcommerce/cornerstone/pull/1162)
- Fix slick-next and slick-prev so that they are centered across all screen sizes. [#1166](https://github.com/bigcommerce/cornerstone/pull/1166)
- Add support for per-variant bulk pricing tier display on PDP [#1167](https://github.com/bigcommerce/cornerstone/pull/1167)

## 1.13.0 (2018-02-05)
- Fix logo not loading on order confirmation page [#1159](https://github.com/bigcommerce/cornerstone/pull/1159)
- Add support in Cornerstone to consume AMP ID [#1155](https://github.com/bigcommerce/cornerstone/pull/1155)
- Fix option selection reset bug when a variation is out of stock [#1160](https://github.com/bigcommerce/cornerstone/pull/1160)
- Fix easyzoom preventing page scrolling on mobile [#1164](https://github.com/bigcommerce/cornerstone/pull/1164)

## 1.12.1 (2018-01-23)
- Fix event delegation error [#1151](https://github.com/bigcommerce/cornerstone/pull/1151)

## 1.12.0 (2018-01-16)
- Removes duplicate amp-iframe attributes for Google Amp product-view temaplate [#1148](https://github.com/bigcommerce/cornerstone/pull/1148)
- Remove "as low as" feature and add support for price ranges instead[#1143](https://github.com/bigcommerce/cornerstone/pull/1143)
- Implements Add to any Wish Lists capability. [#1134](https://github.com/bigcommerce/cornerstone/pull/1134)

## 1.11.0 (2018-01-08)
- Fixes functionality of carousel links in IE and Edge. [#1093](https://github.com/bigcommerce/cornerstone/pull/1093)
- Add image width & height for carousel images. [#1126](https://github.com/bigcommerce/cornerstone/pull/1126)
- Fix Bold featured products clickability. [#1130](https://github.com/bigcommerce/cornerstone/pull/1130)
- Fixes mobile swatch selectability styling. [#1131](https://github.com/bigcommerce/cornerstone/pull/1131)
- Fix Logo not loading on UCO page [#1132](https://github.com/bigcommerce/cornerstone/pull/1132)
- Fixes functionality of date picker option on product pages. [#1125](https://github.com/bigcommerce/cornerstone/pull/1125)
- Fix image-overlap on Orders page [#1137](https://github.com/bigcommerce/cornerstone/pull/1137)
- Fixes issue with image zoom causing scrolling issues on mobile. [#1141](https://github.com/bigcommerce/cornerstone/pull/1141)
- Fix mis-sized product images. [#1145](https://github.com/bigcommerce/cornerstone/pull/1145)

## 1.10.0 (2017-11-15)
- Fix spaces in faceted search option names [#1113](https://github.com/bigcommerce/cornerstone/pull/1113)
- Use appropriately-sized (50x50) images for product thumbnails on product details page [#1097](https://github.com/bigcommerce/cornerstone/pull/1097)
- Add spacing between checkout buttons [#1105](https://github.com/bigcommerce/cornerstone/pull/1105)
- Load visible images before images below the fold, and save space for lazy loading images prior to loading them [#1104](https://github.com/bigcommerce/cornerstone/pull/1104)
- Shows price ranges instead of prices when they are present in the context on product list pages [#1111](https://github.com/bigcommerce/cornerstone/pull/1111)
- Bumps stencil-utils version [#1120](https://github.com/bigcommerce/cornerstone/pull/1120)

## 1.9.4 (2017-10-17)
- Style optimized checkout new checklist radio buttons [#1088](https://github.com/bigcommerce/cornerstone/pull/1088)
- Update product UPC when options with different UPC are selected [#1089](https://github.com/bigcommerce/cornerstone/pull/1089)
- Do not scale product thumbnail images [#1094](https://github.com/bigcommerce/cornerstone/pull/1094)
- Lazy load carousel images [#1090](https://github.com/bigcommerce/cornerstone/pull/1090)
- Theme Editor menu item updates for ease of use [#1091](https://github.com/bigcommerce/cornerstone/pull/1091)
- Upgrades all dependencies except for Foundation and jQuery [#1069](https://github.com/bigcommerce/cornerstone/pull/1069)
- Adds a theme editor display toggle for weight and dimensions on product pages [#1092](https://github.com/bigcommerce/cornerstone/pull/1092)
- Lazy load zoomed product image on product details page [#1096](https://github.com/bigcommerce/cornerstone/pull/1096)

## 1.9.3 (2017-09-19)
- Fixes image overlapping details on product page and Quick View on small viewports [#1067](https://github.com/bigcommerce/cornerstone/pull/1067)
- Allow 'none' to be a default selection on product option pick lists [#1068](https://github.com/bigcommerce/cornerstone/pull/1068)
- Fixes a bug where product options and add to cart do not work when opened in Quick View modals [#1070](https://github.com/bigcommerce/cornerstone/pull/1070)
- Fixes a bug where the Apple Pay button is displayed in incompatible browsers in the Preview Cart modal [#1084](https://github.com/bigcommerce/cornerstone/pull/1084)
- Make 3 variations WCAG color contrast compliant [#1061](https://github.com/bigcommerce/cornerstone/pull/1061)
- Add footer script to optimized checkout / order confirmation [#1085](https://github.com/bigcommerce/cornerstone/pull/1085)

## 1.9.2 (2017-08-16)
- Hide Info in footer if no address is provided in Store Profile. Hide Brands in footer if Merchant has no brands [#1053](https://github.com/bigcommerce/cornerstone/pull/1053)
- Product illustrations in the storefront when the product catalog is empty [#1054](https://github.com/bigcommerce/cornerstone/pull/1054)
- Add pointer-event for color and pattern swatches so title tags appear upon hover [#1055](https://github.com/bigcommerce/cornerstone/pull/1055)
- Change the 403 page message to be more friendly [#1057](https://github.com/bigcommerce/cornerstone/pull/1057) & [#1059](https://github.com/bigcommerce/cornerstone/pull/1059)
- Add bulk discount rates to product cards [#1058](https://github.com/bigcommerce/cornerstone/pull/1058)
- Add higher z-index to display text over burst image [#1066](https://github.com/bigcommerce/cornerstone/pull/1066)
- Do not show add to cart on disabled products, add pre-order button, update pre-order url to add product to cart & fix login for pricing on product cards. [#1063](https://github.com/bigcommerce/cornerstone/pull/1063)
- Add auto height to the alternative navigation menu and its submenus. [#1056](https://github.com/bigcommerce/cornerstone/pull/1056)

## 1.9.1 (2017-07-25)
- Move some hard-coded validation messages to language file [#1040](https://github.com/bigcommerce/cornerstone/pull/1040)
- Use different id for gift cert in cart page [#1044](https://github.com/bigcommerce/cornerstone/pull/1044)
- Restore product image carousel [#1024](https://github.com/bigcommerce/cornerstone/pull/1024)
- Reduce theme bundle size by using minified libraries where applicable [#1039](https://github.com/bigcommerce/cornerstone/pull/1039)
- Replace JavaScript alert/confirmations with sweetalert2 library [#1035](https://github.com/bigcommerce/cornerstone/pull/1035)
- Add global Sass variables to easily toggle exposure of Foundation styles from Citadel [#1047](https://github.com/bigcommerce/cornerstone/pull/1047)
- Fix google plus social icon position [#1048](https://github.com/bigcommerce/cornerstone/pull/1048)
- Use `page_type` instead of `template` for routing. Fix an issue with javascript not running in custom templates [#1050](https://github.com/bigcommerce/cornerstone/pull/1050)

## 1.9.0 (2017-07-18)
- Product Images were obscuring product details on smaller viewports [#1019](https://github.com/bigcommerce/cornerstone/pull/1019)
- Add region tags to two template files to support payments team banner integration with content service [#1023](https://github.com/bigcommerce/cornerstone/pull/1023)
- Add on/off toggle to the theme editor for the "Shop by Price" panel located on category pages [#1036](https://github.com/bigcommerce/cornerstone/pull/1036)
- Fix H1-H6 font-sizing [#1034](https://github.com/bigcommerce/cornerstone/pull/1034)
- Reduce theme bundle size by using specific minified libraries [#1037](https://github.com/bigcommerce/cornerstone/pull/1037)
- Fix google plus spacing issue [#1041](https://github.com/bigcommerce/cornerstone/pull/1041)

## 1.8.2 (2017-06-23)
- Swaps `writeReview` for `write_review` to fix email link issue [#1017](https://github.com/bigcommerce/cornerstone/pull/1017)
- Maintenance page stylesheet fix [#1016](https://github.com/bigcommerce/cornerstone/pull/1016)
- Restore four products per row on category pages when sidebar is empty. [#1018](https://github.com/bigcommerce/cornerstone/pull/1018)
- Remove gift certificate format validation [#1026](https://github.com/bigcommerce/cornerstone/pull/1026)
- Remove usage of deprecated {{template_file}} property [#1032](https://github.com/bigcommerce/cornerstone/pull/1032)
- Toggle displaying product description in tabs [#1030](https://github.com/bigcommerce/cornerstone/pull/1030)
- Reinstate Quick View on product list mode when set to list view [#1033](https://github.com/bigcommerce/cornerstone/pull/1033)

## 1.8.1 (2017-05-05)
- Bug fix for category sidebar [#1006](https://github.com/bigcommerce/cornerstone/pull/1006)

## 1.8.0 (2017-05-04)
- Add storefront admin bar to replace store not launched preview panel [#997](https://github.com/bigcommerce/cornerstone/pull/997)

## 1.7.0 (2017-04-26)
- Upgrade to Webpack 2 with code splitting and tree shaking [964](https://github.com/bigcommerce/cornerstone/pull/964)
- Reflect the actual default value for `autoprefixer-browsers` [#998](https://github.com/bigcommerce/cornerstone/pull/998)
- Fix latest node-sass issues with Citadel upgrade and conditional import swap with mixin [#999](https://github.com/bigcommerce/cornerstone/pull/999)
- Repopulate review form fields after error [#996](https://github.com/bigcommerce/cornerstone/pull/996)
- Fix product quick view 'Write a Review' link [#995](https://github.com/bigcommerce/cornerstone/pull/995)
- Update bigcommerce.com footer link [#990](https://github.com/bigcommerce/cornerstone/pull/990)
- Fix invalid icon HTML in AMP templates [#989](https://github.com/bigcommerce/cornerstone/pull/989)
- Add new theme editor setting for SSL common name to enable GeoTrust badge to work properly [#994](https://github.com/bigcommerce/cornerstone/pull/994)

## 1.6.3 (2017-03-28)
- `stencil.conf.js` was refactored to support webpack2 builds [961](https://github.com/bigcommerce/cornerstone/pull/961)
- Load amp social share JS only when we have share icons enabled. [#968](https://github.com/bigcommerce/cornerstone/pull/968)
- Escape html for product summaries in product list view [#980](https://github.com/bigcommerce/cornerstone/pull/980)
- Add `customized_checkout` feature to features list [#974](https://github.com/bigcommerce/stencil/pull/974)
- Fixed AMP Carousel alignment on product view [#982](https://github.com/bigcommerce/cornerstone/pull/982)
- Remove footer scripts from the amp-iframe used to render product options for stores using AMP [#983](https://github.com/bigcommerce/cornerstone/pull/983)

## 1.6.2 (2017-03-15)
- Fix a bug that was not updating price and weight when an option is selected [#963](https://github.com/bigcommerce/cornerstone/pull/963)

## 1.6.1 (2017-03-14)
- Fix a bug that was preventing opening the cart preview modal [#960](https://github.com/bigcommerce/cornerstone/pull/960)

## 1.6.0 (2017-03-13)
- Google AMP support for product and category pages [#946](https://github.com/bigcommerce/cornerstone/pull/946)
- Expose `language` object on the checkout page [#910](https://github.com/bigcommerce/cornerstone/pull/910)
- Update package.json to disambiguate Stencil and Cornerstone [#943](https://github.com/bigcommerce/cornerstone/pull/943)
- Added support up to 8 levels for category menu depth [#939](https://github.com/bigcommerce/cornerstone/pull/939)
- Implement lazyloading for product card images to improve above-the-fold rendering [#944](https://github.com/bigcommerce/cornerstone/pull/944)
- Print a readable error instead of dumping the whole error object to the console [#950](https://github.com/bigcommerce/cornerstone/pull/950)
- Fixed homepage featured products floating left and unecessarily wrapping to next row [#948](https://github.com/bigcommerce/cornerstone/pull/948)
- Add google recaptcha v2 support to cornerstone. [#951](https://github.com/bigcommerce/cornerstone/pull/951)
- Added order confirmation template page [#949](https://github.com/bigcommerce/cornerstone/pull/949)
- Added theme editor setting for product display mode (grid vs list view) [#941](https://github.com/bigcommerce/cornerstone/pull/941)

## 1.5.3 (2017-02-23)
- Show 'Write a Review' link for mobile [#922](https://github.com/bigcommerce/cornerstone/pull/922)
- Update text input for product review comment to be multiline so it's not too small to be usable [#921](https://github.com/bigcommerce/cornerstone/pull/921)
- Add a larger view of a swatch image when option is hovered over on the product page [#923](https://github.com/bigcommerce/cornerstone/pull/923)
- Fixes an issue with file upload button not properly displaying in IE [#925](https://github.com/bigcommerce/cornerstone/pull/925)
- Make sure product review email links automatically pop the review form [#928](https://github.com/bigcommerce/cornerstone/pull/928)
- Fixes an issue where search results would incorrectly state there were no results when there were results visible [#934](https://github.com/bigcommerce/cornerstone/pull/934)
- Update BC logo sprite to use current BC logo [#931](https://github.com/bigcommerce/cornerstone/pull/931)
- Fix z-index for product sale badges so they aren't above the menu [#926](https://github.com/bigcommerce/cornerstone/pull/926)
- Auto-expand product videos on the product page if the product has at least one video [#935](https://github.com/bigcommerce/cornerstone/pull/935)
- Fix an issue with special characters in search results for content pages [#933](https://github.com/bigcommerce/cornerstone/pull/933)
- Fix an issue with special characters in carousel text [#932](https://github.com/bigcommerce/cornerstone/pull/932)
- Remove an unnecessary and confusing option in theme editor [#927](https://github.com/bigcommerce/cornerstone/pull/927)
- Fix an issue where required product list options would display an invalid "none" choice [#929](https://github.com/bigcommerce/cornerstone/pull/929)
- Remove unused variable causing js error with search in the nav [#938](https://github.com/bigcommerce/cornerstone/pull/938)
- Add settings to theme editor schema to customize Optimized Checkout discount banners [#924](https://github.com/bigcommerce/cornerstone/pull/924)
- Update Optimized Checkout discount banners default values per theme variation [#942](https://github.com/bigcommerce/cornerstone/pull/942)

## 1.5.2 (2017-02-14)
- Added a setting to theme editor schema to show/hide the homepage carousel [#909](https://github.com/bigcommerce/cornerstone/pull/909)
- Prevent carousel images from being cut off on large screens by adding a new setting to theme editor schema [#909](https://github.com/bigcommerce/cornerstone/pull/909)
- Add schema description specifying that social media icons must be set up to see them [#920](https://github.com/bigcommerce/cornerstone/pull/920)
- Show account creation links only if it is enabled in store settings [#917](https://github.com/bigcommerce/cornerstone/pull/917)
- Add GeoTrust SSL Seal Toggle [#903](https://github.com/bigcommerce/cornerstone/pull/903)

## 1.5.1 (2017-02-07)
- Fix an issue with a horizontal scroll bar showing in theme editor [#915](https://github.com/bigcommerce/cornerstone/pull/915)
- Hide Gift Certificates when the setting is disabled in the control panel [#914](https://github.com/bigcommerce/cornerstone/pull/914) & [#916](https://github.com/bigcommerce/cornerstone/pull/916)
- Fix an issue with a close button on the quick search modal on mobile [#918](https://github.com/bigcommerce/cornerstone/pull/918)
- Adding CHANGELOG.md [#919](https://github.com/bigcommerce/cornerstone/pull/919)
