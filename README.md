# Custom e-business web-app with customer sign-in funtionality 

#### Public Pages

- Landing Page [`/`]
- Product Pages
- Blog [`/blog`]
- Contacts: [`/contacts`]

#### Authenticated-User Pages

- Home: [`/home`] - Summary: my(products,notifications)
- Products: installed products, personal recommendations
- Notifications: messages, alerts, etc
- Forum: Insider blogposts, info

#### Backend routes

- Authentication: [`/api/auth`] - POST,GET
- Products: [`/api/products`] - POST,GET,PUT,DELETE
- Blog: [`/api/library`] - POST,GET,PUT,DELETE
- Notifications [`/api/notifications`] - POST,GET,PUT,DELETE
- Mailer: [`/api/mailer`] 

## Toolchain

- Next js 13: bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- css: [`Tailwind`](https://tailwindcss.com/) v3.
- Hosting: [`Vercel`](https://vercel.com/).
- Mail: [`nodemailer`](https://nodemailer.com/).
- Authentication: [`Next.js Auth`](https://next-auth.js.org). 

### Running App

Clone this repo in your local directory:

```bash
git clone https://github.com/goweki/defi-web
```

Navigate into the local repo and install dependencies:

```bash
npm i
```

To run the development server, within the cloned repo:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To build the production-ready optimized build.

```bash
npm run build
```

- The output of the build process is stored in the .next directory by default.

To start the server in production mode

 ```bash
npm run start
```

- serves the previously built and optimized version of your application.
- Next js runs the server on port 3000 by default

