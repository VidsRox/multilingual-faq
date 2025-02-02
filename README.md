# Multilingual FAQ System

A multilingual FAQ system that supports automatic translation of questions and answers with caching for optimized performance. This system integrates MongoDB for storing FAQ data, Redis for caching translations, and uses Google Translate API for language translation.

## Table of Contents
1. [Installation](#installation)
2. [API Usage](#api-usage)
3. [Contribution Guidelines](#contribution-guidelines)
4. [Git & Version Control](#git--version-control)
5. [License](#license)

## Installation

### Prerequisites
Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or using a cloud-based service like MongoDB Atlas)
- [Redis](https://redis.io/) (for caching)

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VidsRox/multilingual-faq.git
   cd multilingual-faq
   ```

2. **Install dependencies**:
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and configure the following environment variables:
   ```bash
   MONGODB_URI=mongodb://your_mongo_connection_string
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

4. **Run the Application**:
   Start the server with the following command:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:5000`.

## API Usage

### Endpoints

1. **Create FAQ**
   - **Endpoint**: `POST /faq`
   - **Description**: Creates a new FAQ entry.
   - **Request Body**:
     ```json
     {
       "question": "What is your name?",
       "answer": "My name is John."
     }
     ```
   - **Response**:
     ```json
     {
       "message": "FAQ created successfully",
       "faq": {
         "question": "What is your name?",
         "answer": "My name is John."
       }
     }
     ```

2. **Translate FAQ**
   - **Endpoint**: `POST /faq/:faqId/translate`
   - **Description**: Translates the FAQ question and answer to the specified language.
   - **Request Body**:
     ```json
     {
       "lang": "es"
     }
     ```
   - **Response**:
     ```json
     {
       "question": "¿Cuál es tu nombre?",
       "answer": "Mi nombre es John.",
       "language": "es"
     }
     ```

3. **Get Translated FAQ**
   - **Endpoint**: `GET /faq/:faqId/translate/:lang`
   - **Description**: Retrieves the translated FAQ question and answer from the cache or database.
   - **Response**:
     ```json
     {
       "question": "¿Cuál es tu nombre?",
       "answer": "Mi nombre es John.",
       "language": "es"
     }
     ```

## Contribution Guidelines

We welcome contributions! Here’s how you can help:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes.
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them.
   - For new features, use `feat:` for the commit message.
   - For bug fixes, use `fix:`.
   - For documentation updates, use `docs:`.
4. Push your changes to your fork.
   ```bash
   git push origin feature-name
   ```
5. Create a pull request from your fork's branch to the `main` branch of the original repository.

### Commit Message Convention
- **feat**: Add new features or functionality
- **fix**: Correct bugs or issues
- **docs**: Update documentation
- **chore**: Other tasks such as refactoring or dependency updates

## Git & Version Control

1. **Set up the Git repository**:
   - Add the remote repository:
     ```bash
     git remote add origin https://github.com/VidsRox/multilingual-faq.git
     ```

2. **Create the initial commit**:
   - Add all the files:
     ```bash
     git add .
     ```
   - Commit your changes:
     ```bash
     git commit -m "Initial commit"
     ```

3. **Push to GitHub**:
   - Push your changes to the main branch:
     ```bash
     git push -u origin main
     ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

You can copy and paste this into your `README.md` file. Adjust the instructions or add more details as needed, especially if your project evolves or new features are added.
