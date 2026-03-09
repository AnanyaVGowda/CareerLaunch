# CareerLaunch - Professional AI Resume Builder

CareerLaunch is a modern, AI-powered resume builder designed to help job seekers create professional, polished resumes in minutes. By leveraging artificial intelligence, the platform simplifies the resume-writing process, offering smart suggestions and professional formatting to ensure users stand out to recruiters.

## 🚀 Features

- **AI Resume Generation**: Uses Google's Gemini AI to generate or optimize resume content, bullet points, and summaries based on user input.
- **Professional Dashboard**: A centralized area for users to create, view, and manage multiple resume versions.
- **Rich Text Editing**: Integrated rich text editors (React-Quill) for fine-tuning resume sections with full control over formatting.
- **Secure Authentication**: Fully integrated with Firebase Authentication for secure user sign-ups, logins, and profile management.
- **Modern, Responsive UI**: Built with a sleek, premium design using Tailwind CSS and Radix UI components for a seamless experience across all devices.

## 🛠️ Technical Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)
- **AI Engine**: [Google Generative AI (Gemini API)](https://ai.google.dev/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Lucide React Icons](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for robust data validation

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB account
- Firebase account and project
- Gemini API Key

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd CareerLaunch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   MONGODB_URL=your_mongodb_connection_string

   GEMINI_API_KEY=your_gemini_api_key
   ```

### 4. Firebase Setup
To get your Firebase configuration details:
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project and click the **Web icon (`</>`)** to register a web app.
3. Copy the `firebaseConfig` keys into your `.env.local` file.
4. Enable **Email/Password** authentication in the Firebase Console under **Build > Authentication > Sign-in method**.

### 5. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
Created with ❤️ by Ananya

<img width="1869" height="891" alt="Screenshot 2026-03-09 231732" src="https://github.com/user-attachments/assets/26557a55-f4d7-4f0e-a812-0e0298695876" />

<img width="1889" height="771" alt="Screenshot 2026-03-09 231843" src="https://github.com/user-attachments/assets/611725a1-ce39-487f-8e19-2facaddce6de" />


