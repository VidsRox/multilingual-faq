# Multilingual FAQ System

A multilingual FAQ system that supports automatic translation of questions and answers with caching for optimized performance. This system integrates MongoDB for storing FAQ data, Redis for caching translations, and uses Google Translate API for language translation.

## Table of Contents
1. [Installation](#installation)
2. [API Usage](#api-usage)
3. [License](#license)

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
