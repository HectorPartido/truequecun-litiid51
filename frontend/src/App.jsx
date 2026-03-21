import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'


//  PROFILE

import ProfileHistoryPage from './pages/Profile/ProfileHistoryPage'
import ProfilePublicationsPage from './pages/Profile/ProfilePublicationsPage'
import ProfileReviewsPage from './pages/Profile/ProfileReviewsPage'
import HomePage from './pages/HomePage'
import CreatePublicationPage from './pages/CreatePublicationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Profile Routes */}
        <Route path="/profile/reviews" element={<ProfileReviewsPage />} />
        <Route path="/profile/history" element={<ProfileHistoryPage />} />
        <Route path="/profile/publications" element={<ProfilePublicationsPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/create" element={<CreatePublicationPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
