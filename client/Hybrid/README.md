# Hybrid Rendered App

## ▶️ Getting Started

1. Open terminal & clone the repo in your project directory
```
git clone https://github.com/arunabharjun/ssr-vs-csr.git
```

2. Create a .env.local file in the 'client/Hybrid' directory like so -
```
NEXT_PUBLIC_API_DOMAIN_DEV = http://localhost:8000/api
NEXT_PUBLIC_API_DOMAIN_PROD = <Your-Link-to-Production-Backend-APIs>
NEXT_PUBLIC_ENV = DEV
NEXT_PUBLIC_DATASET_1_END_POINT = /dataset1
NEXT_PUBLIC_DATASET_2_END_POINT = /dataset2
```

3. Replace NEXT_PUBLIC_API_DOMAIN_PROD with your respective link where backend is hosted in production.

4. When in production, simply replace the value of NEXT_PUBLIC_ENV with 'PROD'.

5. When in development environment, make sure that the appropriate backend service is active on http://localhost:8000/api
    * Checkout [README file for BACKEND](https://github.com/arunabharjun/ssr-vs-csr/blob/main/backend/README.md) to learn how to get started with the backend

6. Using terminal from 'client/Hybrid' directory, install the dependencies
```
npm install
```

## 🖥 Viewing the app

1. Using terminal in your 'client/Hybrid' directory, start the app
```
npm run dev
```

2. Visit the app in your favourite browser - 
[http://localhost:3000](http://localhost:3000)
