import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X11ReqeuestPosted from "./components/X11ReqeuestPosted";
import X11ReqeuestPosted1 from "./components/X11ReqeuestPosted1";
import X11ReqeuestPosted2 from "./components/X11ReqeuestPosted2";
import X09Home from "./components/X09Home";
import X09Home1 from "./components/X09Home1";
import X08VerificationComplete from "./components/X08VerificationComplete";
import X13Profile from "./components/X13Profile";
import X02SignIn from "./components/X02SignIn";
import X01Welcome from "./components/X01Welcome";
import X07OTP from "./components/X07OTP";
import X03SignUpPage from "./components/X03SignUpPage";
import X10NewPost from "./components/X10NewPost";
import X10NewPost1 from "./components/X10NewPost1";
import X10NewPost2 from "./components/X10NewPost2";
import X06SignUpOffender from "./components/X06SignUpOffender";
import PostCompnent from "./components/PostComponent";
import CardComponent from "./components/CardComponent";
import RequestInfo from "./components/RequestInfo";
import dumprun from "./serviceicons/dumprun.png";
import food from "./serviceicons/food.png";
import transportation from "./serviceicons/transportation.png";
import X09Home2 from "./components/X09Home2";
import X09Home3 from "./components/X09Home3";
import X09Home4 from "./components/X09Home4";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/11-reqeuest-posted">
          <X11ReqeuestPosted title="Request Posted!" login="Home" />
        </Route>
        <Route path="/11-reqeuest-posted1">
          <X11ReqeuestPosted1 title="Request Posted!" login="Home" />
        </Route>
        <Route path="/11-reqeuest-posted2">
          <X11ReqeuestPosted2 title="Request Posted!" login="Home" />
        </Route>
        <Route path="/request-info1">
          <RequestInfo {...RequestInfoData1} />
        </Route>
        <Route path="/request-info11">
          <RequestInfo {...RequestInfoData11} />
        </Route>
        <Route path="/request-info2">
          <RequestInfo {...RequestInfoData2} />
        </Route>
        <Route path="/request-info3">
          <RequestInfo {...RequestInfoData3} />
        </Route>
        <Route path="/09-home">
          <X09Home {...x09HomeData} />
        </Route>
        <Route path="/09-home1">
          <X09Home1 {...x09HomeData} />
        </Route>
        <Route path="/09-home2">
          <X09Home2 {...x09HomeData} />
        </Route>
        <Route path="/09-home3">
          <X09Home3 {...x09HomeData} />
        </Route>
        <Route path="/09-home4">
          <X09Home4 {...x09HomeData} />
        </Route>
        <Route path="/post-component">
          <PostCompnent title="Post Component" />
        </Route>
        <Route path="/card-component">
          <CardComponent title="Card Component" />
        </Route>
        <Route path="/08-verification-complete">
          <X08VerificationComplete
            numberVerifiedSeccessfully={
              <React.Fragment>
                Number Verified
                <br />
                seccessfully
              </React.Fragment>
            }
            login="Home"
          />
        </Route>
        <Route path="/13-profile">
          <X13Profile {...x13ProfileData} />
        </Route>
        <Route path="/:path(|02-sign-in)">
          <X02SignIn {...x02SignInData} />
        </Route>
        {/* <Route path="/:path(|01-welcome)">
          <X01Welcome
            login1="I’m a Veteran"
            login2="I’m a Volunteer"
            ourGoalIsToConne={
              <React.Fragment>
                Our goal is to connect veterans to volunteers and return service
                to those who deserve it.
                <br />
                <br />
                Click below to get started!
              </React.Fragment>
            }
            vetering="VETERING"
          />
        </Route> */}
        <Route path="/07-otp">
          <X07OTP
            size="/img/size@2x.png"
            otpCode="OTP Code"
            enterOtpHere="Enter OTP here"
            otpHasBeenSentYourMobileNumber="OTP has been sent your mobile number"
            login1="Resend OTP"
            login2="Verify OTP"
          />
        </Route>
        <Route path="/03-sign-up-page">
          <X03SignUpPage {...x03SignUpPageData} />
        </Route>
        <Route path="/10-new-post">
          <X10NewPost {...x10NewPostData} />
        </Route>
        <Route path="/10-new-post1">
          <X10NewPost1 {...x10NewPostData} />
        </Route>
        <Route path="/10-new-post2">
          <X10NewPost2 {...x10NewPostData} />
        </Route>

        <Route path="/sign-up-offender">
          <X06SignUpOffender
            signUp="Sign up"
            ourRecordsShowTha="We are having trouble verifying your background. Please contact the veterans office for help."
            login="Go Back"
            group2Props={x06SignUpOffenderData.group2Props}
          />
        </Route>
        <Route path="/sign-up-fakeveteran">
          <X06SignUpOffender
            signUp="Sign up"
            ourRecordsShowTha="We are having trouble looking for your records as a Veteran. Please contact the veteran office for help."
            login="Go Back"
            group2Props={x06SignUpOffenderData.group2Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group2Data = {
  className: "group-1",
};

const x09HomeData = {
  place: "HOME",
  login1: "My Inbox",
  login2: "Request Services",
  vetering15: "/img/vetering--1--5@2x.png",
  iconHome: "/img/house-128-4@2x.png",
  iconPlus: "/img/plus-2-512-4@2x.png",
  iconUser: "/img/image-14@2x.png",
  groupProps: group2Data,
};

const RequestInfoData1 = {
  sname: "Dumpster Run",
  sdate: "Date (08/01/2022)",
  loc: "1023 Leff Street, SLO",
  desc: "I need help to throw out some old furniture from my house, preferably after 12pm.",
  icon: dumprun,
  status: "waiting for volunteer",
  vname: "No one",
  vphoto:
    "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png",
  rating: 0,
  vdate: "Date: (MM/DD/YYYY)",
};
const RequestInfoData11 = {
  sname: "Dumpster Run",
  sdate: "Date (08/01/2022)",
  loc: "1023 Leff Street, SLO",
  desc: "I need help to throw out some old furniture from my house, preferably after 12pm.",
  icon: dumprun,
  status: "waiting for volunteer",
  vname: "Jacob Williams",
  vphoto:
    "https://www.babseacle.org/wp-content/uploads/2018/09/portrait-square-10.jpg",
  rating: 5,
  vdate: "Date (08/01/2022)",
  link1: "09-home3",
  link2: "09-home3",
};
const RequestInfoData2 = {
  sname: "Food",
  sdate: "Date (07/31/2022)",
  loc: "1708 Beach Street, SLO ",
  desc: "I need help get food delivered from Sally Loos to my house",
  status: "Volunteer interested",
  status: "waiting for volunteer",
  vname: "No one",
  vphoto:
    "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png",
  rating: 0,
  vdate: "Date: (MM/DD/YYYY)",
  icon: food,
};
const RequestInfoData3 = {
  sname: "Transportation",
  sdate: "Date (07/30/2022)",
  loc: "502 Buchon Street, SLO",
  desc: "Description",
  icon: transportation,
  status: "Service Done",
  vname: "No one",
  vphoto:
    "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png",
  rating: 0,
};

const group4Data = {
  className: "group-3",
};

const x13ProfileData = {
  profile: "PROFILE",
  jensonCarr: "Jenson Carr",
  place: "Veteran",
  login1: "View Upcoming Requests",
  login2: "View Past Requests",
  iconHome: "/img/house-128-4@2x.png",
  iconPlus: "/img/plus-2-512-4@2x.png",
  iconUser: "/img/image-14@2x.png",
  groupProps: group4Data,
};

const x02SignInData = {
  signIn: "SIGN IN",
  x39908191: "/img/3990819-1@2x.png",
  place: "Welcome",
  phoneNotch: "/img/phone-notch@3x.png",
  inputType1: "number",
  inputPlaceholder1: "Mobile Number",
  inputType2: "password",
  inputPlaceholder2: "Password",
  group7992: "/img/group-7992@1x.png",
  login: "Create an Account",
};

const signUpInfoData = {
  inputType1: "text",
  inputPlaceholder1: "Full name",
  inputType2: "text",
  inputPlaceholder2: "Zipcode",
  inputType3: "email",
  inputPlaceholder3: "Email address",
  inputType4: "number",
  inputPlaceholder4: "Mobile number",
};

const group79961Data = {
  inputType: "password",
  inputPlaceholder: "Password",
};

const group79962Data = {
  inputType: "text",
  inputPlaceholder: "Confirm Password",
  className: "group-7",
};

const barsHomeIndicatorIPhoneLightPortrai4Data = {
  className: "bars-home-indicator-3",
};

const x03SignUpPageData = {
  size: "/img/size-1@2x.png",
  signUp: "Sign Up",
  gender: "Gender",
  inputType: "number",
  inputPlaceholder: "Social Security Number (SSN)",
  login: "Sign Up",
  spanText1: "Already an user?",
  spanText2: " ",
  spanText3: "Sign In",
  signIn: "Sign In",
  signUpInfoProps: signUpInfoData,
  group79961Props: group79961Data,
  group79962Props: group79962Data,
  barsHomeIndicatorIPhoneLightPortraiProps:
    barsHomeIndicatorIPhoneLightPortrai4Data,
};

const group5Data = {
  className: "group-4",
};

const group88212Data = {
  className: "group-8821-1",
};

const fab2Data = {
  className: "fab-1",
};

const x10NewPostData = {
  newPost: "NEW POST",
  inputType1: "text",
  inputPlaceholder1: "Job Type:",
  inputType2: "text",
  inputPlaceholder2: "Description:",
  inputType3: "text",
  inputPlaceholder3: "Location:",
  groupProps: group5Data,
  group8821Props: group88212Data,
  fabProps: fab2Data,
};

const group23Data = {
  className: "group-6",
};

const x06SignUpOffenderData = {
  group2Props: group23Data,
};
