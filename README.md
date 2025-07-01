

# Nepal CDC Textbooks API

This is a simple backend API built with **Node.js**, **Express**, and **TypeScript** to serve official Nepal CDC (Curriculum Development Centre) textbook PDF links for Classes 1 to 10.  
It provides endpoints to get textbook URLs and redirect directly to the PDFs.

---

## 📚 Features

- Serve Nepal CDC textbook PDF URLs for Classes 1 through 10.
- Support multiple PDFs for some subjects.
- JSON API endpoints for easy integration.
- Redirect endpoints for quick access to PDF files.
- Simple codebase with no database dependency.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- npm (comes with Node.js)

---

### Installation

1. Clone the repo

```bash
git clone https://github.com/your-username/nepal-cdc-textbooks-api-ts.git
cd nepal-cdc-textbooks-api-ts

npm install

npm run dev
npm run build
npm start
```

## 🛠 API Endpoints Documentation

### Base URL

---

### 1. Get Book Link


**Description:**  
Returns the URL(s) of the requested textbook PDF for the given class and subject.

**Parameters:**

| Parameter | Type   | Description                            |
|-----------|--------|------------------------------------|
| class     | string | Class number (e.g., `1`, `9`, `10`) |
| subject   | string | Subject key (e.g., `nepali`, `math_nepali`, `science_english`) |

**Response:**

- **200 OK**

```json
{
  "link": "https://moecdc.gov.np/storage/gallery/1681370216.pdf"
} 
```
or if multiple PDFs exist:
```json{
  "link": [
    "https://moecdc.gov.np/storage/gallery/1682668847.pdf",
    "https://moecdc.gov.np/storage/gallery/1682668904.pdf"
  ]
}
```

### 2. Redirect to Book
#### Endpoint:

```
GET /api/books/redirect/:class/:subject
```
#### Description:
Redirects the client directly to the PDF URL.
If multiple PDFs exist, redirects to the first one.

#### Response:

302 Redirect to the PDF URL

404 Not Found if no book exists

### 🔧 Example Usage with curl

Get Class 10 English textbook URL:

```
curl http://localhost:5000/api/books/10/english
```
Redirect to Class 9 Science Nepali PDF:

```
curl -L http://localhost:5000/api/books/redirect/9/science_nepali
```


### To get API documentation, click [Here]("https://documenter.getpostman.com/view/33322053/2sB34Zrjrf")







## Feedback
  If you have any feedback, please reach out to me at yogendrabaskota18@gmail.com  


