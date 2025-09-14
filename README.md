# TfL Tube Status App

A simple, frontend React app to display Tube statuses. Built to be responsive and with accessibility in mind.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Keys

Create a .env file in the project root and add your TfL credentials (take a look at .env.example for further guidance).

The app will work without these credentials.

```bash
VITE_TFL_APP_ID=yourAppIdHere
VITE_TFL_API_KEY=yourApiKeyHere
```

### 3. Run the App

```bash
npm run dev
```

## Running Tests

This app uses React Testing Library and Vitest. Run all tests with:

```bash
npm run test
```

## Assumptions

- Only the first lineStatus is displayed for each line.
- API keys are optional.
- I have assumed the format of appending API keys to the API url.
