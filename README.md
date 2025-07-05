# 🔍 RxJS Live Search App

A fun and functional Angular application that demonstrates real-time search with RxJS operators, using a live API. Built with clean UI, modular components, and advanced RxJS concepts.

🔗 **Live Demo**: [https://yazhcreations.github.io/rxjs-search-app/](https://yazhcreations.github.io/rxjs-search-app/)

---

## 🧠 Features

| Feature                         | RxJS / Angular Concept Used          |
|-------------------------------|-------------------------------------|
| ✅ Live API search             | `debounceTime`, `switchMap`, `distinctUntilChanged` |
| 🔁 Retry on error              | `retry`, `catchError`, `finalize`   |
| ⚠️ Error message fallback      | `catchError`                         |
| ⛔ Cancel previous request     | `switchMap`                          |
| 🔄 Skeleton loading            | No spinner, UX-friendly loaders     |
| 🧍 Avatar support              | Using user profile or fallback      |
| 🧱 3-column responsive layout  | Grid layout with fixed scroll area  |
| 🪟 Modal popup for details     | `*ngIf` + CSS modal animation       |
| 🧼 Clears search restores all  | Local backup of initial data        |

---

## 📸 Screenshots

| Live Search | User Detail Modal |
|-------------|-------------------|
| ![Search](./screenshots/search.png) | ![Modal](./screenshots/modal.png) |

> _Add these screenshots to `/screenshots/` folder in the repo._

---

## ⚙️ Tech Stack

- [Angular](https://angular.io/) 11
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [DummyJSON API](https://dummyjson.com/)

---

## 🏗️ How to Run Locally

```bash
git clone https://github.com/yazhcreations/rxjs-search-app.git
cd rxjs-search-app
npm install
ng serve
🚀 Deployment
To deploy to GitHub Pages:

ng build --base-href "https://yazhcreations.github.io/rxjs-search-app/"
npx angular-cli-ghpages --dir=dist/rxjs-search-app

❤️ Credits
API: DummyJSON
Avatars: UI Avatars

📌 TODO (Future Enhancements)
🔽 Sort by Name, Age, Gender

🔍 Filter dropdowns (Gender, Country)

📱 Better mobile UX

🧪 Unit tests with RxJS marble testing
📄 License
MIT License © 2025 yazhcreations
