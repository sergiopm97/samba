![Logo](https://raw.githubusercontent.com/sergiopm97/samba/main/samba_logo.png)

# Samba

Samba is a small dashboard that shows the results of Brazilian online stores in the form of KPIs and charts 📊💵\
If you want to visit the deployed version of the application, click [here](https://sergiopm97.github.io/samba/) 😉

## Features

- Show main performance KPIs of Brazilian online stores
- Display more detailed metrics using bar and area charts
- Responsive design that allows the application to be viewed on both desktop and mobile devices

## App setup

Clone the project

```bash
  git clone https://github.com/sergiopm97/samba
```

Go to the project directory

```bash
  cd samba
```

Install project packages

```bash
  npm install
```

Create virtual environment

```bash
  python -m venv env
```

Activate the virtual environment

```bash
  & env/Scripts/Activate.ps1
```

Install the requirements in the virtual environment

```bash
  pip install -r requirements.txt
```

## Usage

If you want to view the dashboard locally run the following script:

```bash
npm run dev
```

If you want to explore the pipelines that have been developed to generate the dashboard data, run the following scripts:

```bash
python pipeline/orders.py
```

```bash
python pipeline/payments.py
```

```bash
python pipeline/products.py
```

## Tech Stack

**Node version** -> 16.14.0

**Python version** -> 3.10.2

**Packages** -> Explore requirements.txt and package.json

## Authors

- [@sergiopm97](https://github.com/sergiopm97)
