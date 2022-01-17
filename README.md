# Details
Engine - Gatsby
CMS - DatoCMS (https://www.datocms.com/)
Form handler - GetForm (https://app.getform.io/)

## Repo usage

First, install the dependencies of this project:

```
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
npm run develop
```

To build the final, production ready static website:

```
npm run build
```

The final result will be saved in the `public` directory.
