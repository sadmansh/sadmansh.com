# sadmansh.github.io

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

For Github user or organization pages, you will only be able to deploy from the master branch, not from gh-pages and not even from any subfolder in the master branch (master -> docs). This is why I created a branch called source which has all my source code, and deleted everything in master branch and put the content from the dist folder in the root of the master branch. Push that and your user/organization page will show up.
