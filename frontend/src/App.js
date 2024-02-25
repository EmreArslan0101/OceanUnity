import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import ForgotPassword1 from './components/ForgotPassword/ForgotPassword1.jsx'
import ForgotPassword2 from './components/ForgotPassword/ForgotPassword2.jsx'
import ForgotPassword3 from './components/ForgotPassword/ForgotPassword3.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Blog from './components/Blog/Blog.jsx'
import BlogPage from './components/Blog/BlogPage/BlogPage.jsx'
import AddPost from './components/AddPost/AddPost.jsx'
import Organizations from './components/Organizations/Organizations.jsx'
import OrganizationMainPage from './components/Organizations/OrganizationMainPage/OrganizationMainPage.jsx'
import Events from './components/Events/Events.jsx'
import EventsInfoPage from './components/Events/EventsInfoPage/EventsInfoPage.jsx'
import ComingSoon from './components/ComingSoon/ComingSoon.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import CommunityPage from './components/Community/CommunityPage.jsx'
import CommunityPost from './components/Community/CommunityPost/CommunityPost.jsx'
import AddComment from './components/Comments/AddComment/AddComment.jsx'
import CommentBox from './components/Comments/CommentBox/CommentBox.jsx'
import Profile from './components/Profile/Profile.jsx'

function App() {

  const comingSoon = ["coming-soon","community","map","gallery","ourprograms","getinvolved","partners"];

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword1 />} />
          <Route path="forgotPassword/code" element={<ForgotPassword2 />} />
          <Route path="forgotPassword/newPassword" element={<ForgotPassword3 />} />
          <Route path="login" element={<Login />} />
          <Route path="test" element={<CommentBox />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogPostExample" element={<BlogPage 
                                        header="Exploring Marine Biodiversity: A Dive into the Wonders of Ocean Life"
                                        content="This blog post could showcase the incredible diversity of marine life, highlighting various species and ecosystems found in our oceans. It could also discuss the importance of preserving biodiversity for the health of marine ecosystems and human well-being."
                                        img="https://images.pexels.com/photos/3716928/pexels-photo-3716928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                      />} />
          <Route path="post" element={<AddPost/>} />
          <Route path="organizations" element={<Organizations/>} />
          <Route path="organizationMainPageExample" element={<OrganizationMainPage/>} />
          <Route path="events" element={<Events/>} />
          <Route path="eventPostExample" element={<EventsInfoPage/>} />
          <Route path="community" element={<CommunityPage/>} />
          <Route path="communityPostExample" element={<CommunityPost/>} />
          <Route path="/profile" element={<Profile/>} />
          {
            comingSoon.map(route => 
              <Route path={route} element={<ComingSoon/>} />
            )
          }
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
