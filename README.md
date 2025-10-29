# UP! a SaaS Platform
A fictitious company “UP!” offers three SaaS product types on their website:

### Acceptance Criteria
1. [x] Users can select/input any number of Basic Checks, Advanced Checks, and Status Pages.
2. Users see:
  * [x] The total price
  * [x] The total number of each product, including automatically rebated bonus products
  * [x] Any bonuses they are receiving from rebates (your choice of presentation)

### How to run
I used Vite to create this project. The cmds are unchanged from the default.\
DEV - To spin up a developer instance on your local, run `npm i && npm run dev` [http://localhost:5173/](http://localhost:5173/)\
PROD - To create a production build and spin that up, run `npm i` (if you haven't already) then `npm run build && npm run preview` [http://localhost:4173/](http://localhost:4173/)\

I also deployed the app to Netlify if you don't want to install and run it locally
[https://keen-flan-90e35b.netlify.app/](https://keen-flan-90e35b.netlify.app/)


## Time Breakdown
This time breakdown is cummlative. 
I've found I work best using a Pomodoro timing around 30 minutes upto 1hr then break. In this case my break was working through my Full Stack Python course on Coursera :) (probably not the best break)

### 1hr 
* reviewed doc and created simple wireframe
* setup github project (main & feature/product-type) pushed to remote. 
* installed Vite and Redux Toolkit
* create redux store and product slice
* create product feature and productTile component
* created shells for cart & header features
* some house keeping items

### 2hr
* created cart slice
* created cartItem component
* created rebates
* built out cart feature

### 45 mins
* added styling using MUI
* realized I misunderstood an AC

The terms rebate and bonus confused me a little in the doc. I had it in my head that bonus products were given if you reached a threshold for a product.\
I believe now that the AC explains to give a rebate to the customer IF they reached a threshold for a product AND they have those rebatable items in their cart.

EXAMPLE.
A user has the following in their cart:
1x Status Page
3x Basic Check

They would receive a Basic Check for free because they have added a Status Page product to their cart.\
They would then pay for the Status Page product and only 2 of the Basic Check products with the third Basic Check give as a rebate bonus. 


