📧 Smart Email Assistant 🤖
An AI-powered web application that helps users generate professional, friendly, and formal emails based on their input using advanced language models.
Built with React (frontend) and Spring Boot (backend).

📁 Project Structure
Copy
Edit
Smart-Email-Assistant/
├── smart-email-assistant-react/   ← React Frontend
└── smart-email-assistant-backend/ ← Spring Boot Backend

🚀 Features:

✍️ AI-generated email drafts in multiple tones (Formal, Informal, Friendly, etc.)
🧠 Gemini / OpenAI integration (for email content generation)
⚙️ Clean, dark-blue themed UI with Material UI
📋 Copy-to-clipboard functionality
🧪 Responsive layout for all devices

🛠️ Tech Stack
Frontend:
React
Material UI
Axios

Backend:
Spring Boot
Java
REST API

AI Integration:
Gemini API / OpenAI (adjust depending on which you used)

💻 Local Setup
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/Smart-Email-Assistant.git
cd Smart-Email-Assistant
2. Start Frontend
bash
Copy
Edit
cd smart-email-assistant-react
npm install
npm run dev
3. Start Backend
bash
Copy
Edit
cd smart-email-assistant-backend
./mvnw spring-boot:run
🔑 Environment Variables
Frontend (.env):

bash
Copy
Edit
VITE_API_BASE_URL=http://localhost:8080/api/email
Backend (application.properties):

properties
Copy
Edit
server.port=8080
