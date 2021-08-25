# oc-projet-7

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Gitpage example
You can find an example for this project on the [dedicated Gitpage](https://vaaaaalentin.github.io/OC-projet-7/)

## Google map API
For this project you need to use an API key from the [Google Cloud Platform](https://console.cloud.google.com). [More infos](https://developers.google.com/maps/gmp-get-started)

### Key configuration
When configuring your key you have to enable those specifics API: **Maps Javascript API**, **Geocoding API**, **Places ÄPI** and **Street View Static API**

## Key storage
The key is stored as an environment variable in 2 differents files: **.env** and **.env.development.local**
The first one is use for production. In my case, it's used in the Gitpage so it's restricted to the gitpage URL and can't be used on another URL and the second one is used for development.