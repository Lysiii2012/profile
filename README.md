# React Profile Management Application

This application is a React-based solution for managing and editing user profile information. It includes features for viewing, editing, and saving profile data such as name, surname, job title, phone number, address, interests, profile visibility, and avatar.

---

## Features

### **Profile Display**
- **Name**: Display the user's first name.
- **Surname**: Display the user's last name.
- **Job Title**: Display the user's position or role.
- **Phone Number**: Display the user's contact number.
- **Address**: Display the user's location.
- **Interests**: Display a list of tags representing user interests.
- **Profile Link**: Show whether the profile is public or private.
- **Avatar**: Display a profile picture.

### **Profile Editing**
- Fields are fully editable, allowing the user to update their:
  - Name
  - Surname
  - Job Title
  - Phone Number
  - Address
  - Interests (tags)
  - Profile visibility (public/private)
- Avatar can be uploaded, and the new image appears in real time on the page.

### **Buttons for Actions**
- **Save**:
  - Saves the profile data to `localStorage`.
  - Data remains persistent even after a page refresh.
- **Cancel**:
  - Discards unsaved changes and reverts to the last saved state.

---

## Project Structure

### Components
1. **`ProfileDisplay`**:
   - Displays the user's profile information.
   - Shows the avatar, details, and interests as a list of tags.

2. **`ProfileEdit`**:
   - Provides an editable form for profile fields.
   - Includes an avatar upload field.

3. **`ProfileActions`**:
   - Includes buttons for saving and canceling changes.

4. **`AvatarUploader`**:
   - Handles the avatar upload functionality.
   - Provides a preview of the uploaded image.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/profile-management-app.git


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.  
