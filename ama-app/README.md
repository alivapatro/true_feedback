
# True Feedback - Anonymous Messaging Platform

**True Feedback** is a full-stack anonymous messaging application built with modern web technologies. It allows users to create a public profile and receive anonymous messages and feedback from anyone with their unique link, fostering open and honest communication.

## ✨ Key Features

-   **User Authentication**: Secure sign-up and sign-in functionality using NextAuth.js with credential providers.
-   **Anonymous Messaging**: Anyone can send a message to a registered user without revealing their identity.
-   **Unique User Profiles**: Every user gets a unique, shareable link (e.g., `yourapp.com/u/username`).
-   **Message Dashboard**: Users can view, manage, and delete the anonymous messages they receive on their personal dashboard.
-   **Accept/Reject Messages**: Users can toggle a switch on their dashboard to control whether they are currently accepting new messages.
-   **Real-time Updates**: The dashboard provides a near real-time experience for managing messages.
-   **Responsive Design**: A clean, modern, and fully responsive UI built with Tailwind CSS and Shadcn UI.
-   **Type-Safe Form Validation**: Robust and type-safe form handling and validation using Zod and React Hook Form.

## 🛠️ Tech Stack

-   **Framework**: Next.js (with App Router)
-   **Language**: TypeScript
-   **Database**: MongoDB with Mongoose ODM
-   **Authentication**: NextAuth.js
-   **Styling**: Tailwind CSS
-   **UI Components**: Shadcn UI
-   **Form Management**: React Hook Form
-   **Schema Validation**: Zod
-   **API Client**: Axios

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

-   Node.js (version 18.x or later is recommended)
-   MongoDB instance (either running locally or on MongoDB Atlas)
-   A code editor like Visual Studio Code

### Installation & Setup

1.  **Clone the repository to your local machine:**
    ```bash
    git clone https://github.com/your-username/true-feedback.git
    cd true-feedback
    ```

2.  **Install the necessary dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a new file named `.env.local` in the root directory of your project. Copy the contents of `.env.example` (if available) or add the following variables:

    ```env
    # MongoDB Connection String
    MONGODB_URI=your_mongodb_connection_string_here

    # NextAuth Configuration
    NEXTAUTH_SECRET=a_very_long_and_secure_random_string_here
    NEXTAUTH_URL=http://localhost:3000

    # Optional for sending emails (e.g., for verification)
    RESEND_API_KEY=your_resend_api_key

    # Optional for AI-powered message suggestions
    OPENAI_API_KEY=your_openai_api_key
    ```
    > Note: Your `NEXTAUTH_SECRET` can be generated using `openssl rand -base64 32` in your terminal.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open http://localhost:3000 in your browser to see the application in action.

