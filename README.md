# News Reader App

A simple React Native news reader application that fetches articles from NewsAPI and displays them in a paginated list with caching and pull-to-refresh functionality.

## Features

- Display a paginated list of news articles
- Pull-to-refresh to fetch the latest news
- Cache articles locally using MMKV or AsyncStorage
- Optimized API calls to avoid unnecessary re-fetching
- Loading indicators and error handling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-reader-app.git
cd news-reader-app
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

3. Install pods (for iOS):
```bash
cd ios && pod install && cd ..
```

4. Add your NewsAPI API key in api/newsApi.js:
```javascript
const API_KEY = "YOUR_NEWSAPI_KEY";
```

## Usage

Run the app on Android or iOS:
```bash
npx react-native run-android
npx react-native run-ios
```

## Folder Structure

```
NewsReaderApp/
├─ api/
│  └─ newsApi.js
├─ components/
│  └─ NewsItem.js
├─ screens/
│  └─ HomeScreen.js
├─ storage/
│  └─ storage.js
├─ App.js
└─ package.json
```

## Dependencies

- react-native
- axios
- react-native-mmkv-storage (or @react-native-async-storage/async-storage)

## Contributing

1. Fork the repository
2. Create a new branch: git checkout -b feature-name
3. Make your changes and commit: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature-name
5. Submit a pull request

## License

MIT License © 2025

## References

- [NewsAPI Documentation](https://newsapi.org/docs)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [MMKV Storage](https://github.com/ammarahm-ed/react-native-mmkv-storage)
