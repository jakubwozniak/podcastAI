<div align="center">
  <h3 align="center">PodcastAI Platform</h3>

   <div align="center">
    Discover a new era of podcasting with our AI-powered platform. Seamlessly create, share, and explore podcasts with robust authentication, intuitive creation tools, and dynamic AI-generated content. Whether you're a creator or a listener, our platform offers a modern, responsive experience tailored to your needs. Welcome to the future of podcasting.
    </div>
    &nbsp;
</div>
&nbsp;
<img width="1280" alt="1" src="https://github.com/jakubwozniak/podcastAI/assets/8446297/8a6fae93-9650-4b43-aff6-970d99a81cfd">

&nbsp;

![2](https://github.com/jakubwozniak/podcastAI/assets/8446297/f2d4b9f9-86d2-4f06-b0e1-a3d47a8dd97f)
&nbsp;

![3](https://github.com/jakubwozniak/podcastAI/assets/8446297/a831e13f-cfff-40e8-8d29-f3c83c025f5e)
&nbsp;

![4](https://github.com/jakubwozniak/podcastAI/assets/8446297/65eee120-5d4e-4b00-97ec-52bd56615989)






## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Convex
- OpenAI
- Clerk
- ShadCN
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Robust Authentication**: Secure and reliable user login and registration system.

👉 **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

👉 **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

👉 **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

👉 **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

👉 **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

👉 **Profile Page**: View all created podcasts with options to delete them.

👉 **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

👉 **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/jakubwozniak/podcastAI.git
cd podcastAI
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


#
