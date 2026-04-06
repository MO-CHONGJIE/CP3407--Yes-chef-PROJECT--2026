# CP3407--Yes-chef-PROJECT--2026

Project Background
====================

With the popularization of food delivery and online ordering platforms, users often encounter problems such as difficulty in making choices, overload of menu information, and insufficient personalization during the ordering process. Traditional food ordering systems usually only provide basic menu browsing and ordering functions, lacking intelligent analysis of users' preferences, eating habits and historical behaviors.

Yes-chef-PROJECT is a modern ordering system that integrates artificial intelligence recommendation technology, proposed under this background, aiming to provide users with a smarter, more personalized and more efficient ordering experience.


Our group member
================
1.Chongjie Mo (Leader)

2.Jiahai Xiong

3.Bowei Wang


 

Project objective
=================

The core objective of Yes-chef-PROJECT
------------------------------------------

  1.Provide a fully functional and user-friendly online food ordering platform

  2.Through AI recommendation algorithms, it helps users quickly find the most suitable dishes for themselves

  3.Improve the efficiency and satisfaction of users' ordering, and at the same time help merchants increase their conversion rate


AI Smart Dish Recommendations (Core Features)
=============================================

The system introduces an AI recommendation mechanism to provide personalized recommendations for users based on the following information
-----------------

   User's historical order records

   User preferences (such as spiciness, price range, cuisine)

   Popular dishes and rating data

   The ordering behavior of similar users (collaborative filtering idea)

AI will dynamically generate things such as
-------------

   "Recommended for you
    You might like it
 The same dishes as last time I ordered.
This effectively alleviates users' choice pressure.

Technology stack
=================
- **Front-end**: React + Vite + React Router
- **Back end**: Python + FastAPI + SQLAlchemy
- **AI**: Local keyword matching algorithm
- **Database**: SQLite
- **Containerization**: Docker

Run with Docker (recommended)
========================
```bash
 docker-compose up
```
- The front end will run at http://localhost:198
- The back end will run at http://localhost:964

Local development
=================
Front-end
   ```bash
    cd frontend
    npm install
    npm run dev
   ```
The front end will run at http://localhost:198    

Back end
1. **Configure environment variables**
 Create the.env file in the backend/ directory:
       ```bash
       cd backend
       echo "API_KEY=your_siliconflow_api_key_here" > .env
       ```

Obtain the API Key:

- Visit Silicon-based Flow
- Register an account and create an API Key
- Fill in the API Key in the.env file
    
2.**Install the dependencies and start**
      ```bash
      pip install -r requirements.txt
      uvicorn app.main:app --reload --host 0.0.0.0 --port 964
      ```
      
  The back end will run at http://localhost:964.

Project structure
==================

```
smart-order-system/
├── backend/           # Back-end code (Python FastAPI)
│   ├── app/           # Application code
│   │   ├── __init__.py      # Package initialization
│   │   ├── main.py          # Main application file
│   │   ├── database.py      # Database model and connection
│   │   ├── schemas.py       # Pydantic data model
│   │   └── auth.py          # Certification related
│   ├── data/          # Data Directory (SQLite database)
│   ├── requirements.txt   # Python dependency
│   └── Dockerfile     # Docker build file
├── frontend/          # Front-end code (React)
│   ├── src/           # Source code
│   │   ├── components/      # Component
│   │   ├── context/         # Context
│   │   ├── pages/           # Page
│   │   ├── main.jsx         # Entry file
│   │   └── index.css        # Style file
│   ├── index.html     # HTML template
│   ├── package.json   # Dependency configuration
│   └── Dockerfile     # Docker build file
├── .gitignore         # Git ignores files
├── Dockerfile         # The project root directory is Dockerfile
├── docker-compose.yml # Docker Compose configuration
├── README.md          # Project Description
└── LICENSE            # License
```
# Database Table Structure
## users table
| Field name| Data type | Constraint| 描述 |
|--------|----------|------|------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | User ID |
| phone | TEXT | UNIQUE NOT NULL | Mobile phone number |
| password_hash | TEXT | NOT NULL | Password hash |
| nickname | TEXT | | Nickname |
| role | TEXT | DEFAULT 'user' | Role |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation time |

## menu_items table

| Field name | Data type | Constraint | 描述 |
|--------|----------|------|------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | Dish ID |
| name | TEXT | NOT NULL | Dish name |
| category | TEXT | NOT NULL | Classification of dishes |
| price | REAL | NOT NULL | Dish prices |
| desc | TEXT | | Dish description |
| image | TEXT | | Pictures of dishes |
| label | TEXT | | Dish labels (separated by commas) |
| sales | INTEGER | DEFAULT 0 | Sales volume|
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation time |


## orders table

| Field name | Data type | Constraint |描述|
|--------|----------|------|------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | Order ID |
| order_no | VARCHAR(32) | UNIQUE NOT NULL | Order Number |
| user_id | INTEGER | REFERENCES users(id) | User ID |
| total_price | REAL | NOT NULL | Total price |
| status | VARCHAR(20) | NOT NULL DEFAULT 'pending' | Order status |
| restaurant | TEXT | DEFAULT 'Maison Lumière' | Restaurant name |
| rating | INTEGER | DEFAULT 0 | Score |
| review | TEXT | DEFAULT '' | Evaluation |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Creation time |

## order_items table

| Field name | Data type | Constraint |描述|
|--------|----------|------|------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | Order item ID |
| order_id | INTEGER | REFERENCES orders(id) ON DELETE CASCADE | Order item ID |
| menu_item_id | INTEGER | | dish ID |
| name | VARCHAR(100) | NOT NULL | dish name |
| price | REAL | NOT NULL | dish price |
| quantity | INTEGER | NOT NULL | Quantity |


## Administrator account

- **Username** : Xlbnas
- **password**: Xlbnas

## API Interface Description

### Authentication API

#### Register at

- **Endpoint**: `POST /api/auth/register`
- **Parameters** : `phone`, `password`, `nickname` (Option)
- **Return**: token and user information

#### Log in
- **Endpoint**: `POST /api/auth/login`
- **Parameters**: `phone`, `password`
- **Return**: token and user information

#### get the current user
- **Endpoint**: `POST /api/auth/login`
- **Parameters**: `phone`, `password`
- **Return**: token and user information

### Menu API

#### get all dishes
- **Endpoint**: `GET /api/menu`
- **Return**: List of dishes

#### add dishes
- **Endpoint**: `POST /api/menu`
- **parameters**: `name`, `price`, `category`, `desc`, `image`, `tag`
- **Return**: Newly created dish

#### update dishes
- **Endpoint**: `PUT /api/menu/{id}`
- **parameters**:`name`, `price`, `category`, `desc`, `image`, `tag`
- **Return**: Updated dishes

#### delete dishes
- **Endpoint**: `DELETE /api/menu/{id}`
- **Return**: Delete the success message

### Order API

#### Create an order

- **Endpoint**: `POST /api/orders`
- **Parameter**: `items` (array)
- **Header**: `Authorization: Bearer<token> `
- **Return**: Order information

#### get the order list

- **Endpoint**: `GET /api/orders`
- **Parameter**: `status' (optional)`
- **Header**: `Authorization: Bearer<token>`
- **Return**: Order list

#### update order status

- **Endpoint**: `PATCH /api/orders/{order_no}/status`
- **Parameter**: `status`
- **Header**: `Authorization: Bearer<token>`
- **Return**: Updated order status

#### order evaluation

- **Endpoint**：`POST /api/orders/{order_no}/review`
- **Parameter**：`rating`, `comment`
- **Header**：`Authorization: Bearer <token>`
- **Return**：Evaluation result

### Recommended API

#### Get recommendations

- **Endpoint**：`GET /api/recommendations/recommend`
- **Parameter**：
  - `query` - Search keywords (required)
  - `mode` - Search mode：`ai` or `regular`（Optional, default `ai`）
- **Return**：A list of recommended dishes, including reasons for recommendation
**Sample request**：
```bash
# AI Search (Using silicon-based flow large models)
curl "http://localhost:964/api/recommendations/recommend?query=spicy%20chicken&mode=ai"

# Regular Search (local keyword matching)
curl "http://localhost:964/api/recommendations/recommend?query=chicken&mode=regular"
```

## Detailed Explanation of AI Search Function

### Search mode

#### AI Search (intelligent search)

- **Descrip**：Intelligent recommendation is made using the SiliconFlow large model API
- **Model**：`Pro/deepseek-ai/DeepSeek-V3`
- **Features**：
  - Deeply understand the user's intentions
  - Semantic matching rather than simple keyword matching
  - Support complex queries (such as "Chicken dishes suitable for spicy food lovers")
- **Configuration requirements**：Needed `.env` Configuration in the file `API_KEY`

#### Regular Search (regular search)
- **descrip**：Use the local keyword matching algorithm
- **Features**：
  - Quick response
  - Keyword matching based on dish names, descriptions, and tags
  - No external API required
  - Context-aware recommendation
  - Intelligent keyword extraction
- **Working principle**：
  1. User input query (for example: "spicy chicken dish")
  2. The system extracts key keywords related to food
  3. The system matches these keywords with the names, descriptions and tags of menu items
  4. Display relevant recommendations
 
### Visual elements
- **Search Mode Switching**: A clear visual distinction between AI search and regular search modes
- **Recommendation Card**: Displays relevant menu items, including prices and reasons for recommendations

## Safety considerations

- Use bcrypt to hash passwords
- Use JWT tokens for authentication
- Implement input validation for all user inputs
- The CORS configuration allows cross-domain access

### Frequently Asked Questions

1. **The backend cannot be started** :
- Check the Python version (3.11+ is required)
- Make sure all dependencies are installed: 'pip install -r requirements.txt'
- Check if port 964 is occupied

2. **Image not loaded** :
The app uses placeholder images from Unsplash
- Ensure an Internet connection
- Check if there are any CORS errors in the browser console

3. **Login Failed**
- Check whether the database file has been created correctly
- Confirm that the administrator account has been initialized
- Check the backend logs to obtain detailed error information



Iteration 1 The project has been initially completed
=====================================================
1.The complete homepage
-----------------------
   <img width="1434" height="815" alt="截屏2026-03-13 16 25 21" src="https://github.com/user-attachments/assets/d222288b-4100-4d75-839d-40d937168514" />

    
Our group completed a homepage based on user requirements, which included basic dish introductions as well as previous user evaluations. There are also the sales volume of dishes and recommended combinations

2.Ordering section
-----------------

<img width="1434" height="810" alt="截屏2026-03-13 16 25 48" src="https://github.com/user-attachments/assets/807c1f7e-0964-4ba5-9cc9-70ba82547282" />

We have incorporated basic ai (which has not yet been connected to the interface) to provide users with basic dish recommendations. In the future, by integrating the ai interface, we will offer users even more diverse dish recommendations.

<img width="1431" height="813" alt="截屏2026-03-13 16 26 05" src="https://github.com/user-attachments/assets/7cc4fd60-4513-470f-af35-a1ec093156d8" />

Users can place orders more independently. They can add dishes to the shopping cart according to their own tastes. In the future, after integrating an ai interface, more delicious dish combinations will be added based on ai recommendations

3.Merchant management
----------------------
<img width="1427" height="811" alt="截屏2026-03-13 16 26 20" src="https://github.com/user-attachments/assets/ef2b0ebb-cddb-4f7b-83b4-98453e33ef2b" />

Merchants can promptly receive user feedback, adjust the listing and delisting of dishes in a timely manner, and help them better manage their online food ordering systems.
