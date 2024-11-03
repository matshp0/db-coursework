### Встановлення mdBook

1. Встановіть Rust-тулчейн на свій комп'ютер за допомогою [rustup](https://rustup.rs). Уважно слідуйте інструкціям указаним на сайті
2. Встановіть mdBook та допоміжну бібліотеку mdbook-plantuml за допомогою cargo:
    ```sh
   $ cargo install mdbook
   $ cargo install mdbook-plantuml
   ```

Щоб опублікувати проект у Github Pages:
  - на сторінці github вашого репозиторію переходите в ```Settings```-->```Pages```, в ```Sourse``` обираєте варіант ```Deploy from branch```, в ```Branch``` обираєте ```gh-pages``` та папку ```/root``` та натискаєте ```Save``` та повертаєтесь до головної сторінки репозиторію.
  - робите коміт у вітку main(master) та пушите його на віддалений репозиторій github, автоматично спрацьовує  workflow та починається процес деплою
  - Почекайте поки на боковій панелі зʼявиться ```Deployments``` та в ньому ```github-pages```(може зайняти і більше хвилинни) та переходите по ньому, там ви побачите url до сторінки вашої документації.


Для відлагодження документації в локальному режимі запускаємо

```sh
   $ mdbook serve
```

Доступ до локально опублікованої версії [http://localhost:3000](http://localhost:8080)

## Додаткова інформація

- [Теми проєктів](./guidelines/themes.md)
- [Методичні вказівки](./guidelines/guidelines.md)
- [Гайд користувача mdBook](https://rust-lang.github.io/mdBook/)
- [Документація Markdown](https://theme-hope.vuejs.press/cookbook/markdown/)

***Happy learning! Happy coding!*** 

## Authors
- [ukrustacean](https://github.com/ukrustacean)