import React from "react";
import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from "../utils/utils";

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDownCombination = this.handleKeyDownCombination.bind(this);
    }

    handleKeyDownCombination(event) {
        if (event.key === "h" && event.ctrlKey) {
            alert("Logging you out");
            this.props.logOut();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDownCombination);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDownCombination);
    }

    render () {
        const { isLoggedIn } = this.props;
        return (
            <>
                <Notifications listNotifications={listNotifications}/>
                <Header/>
                <div className="App-body">
                    {!isLoggedIn ? <Login/> : <CourseList listCourses={listCourses}/>}
                </div>
                <Footer/>
            </>
        );
    }
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default App;
