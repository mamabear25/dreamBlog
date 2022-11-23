import React from "react";
import {Link} from "react-router-dom"
import "../styles/singlepost.scss";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "../components/Menu";

const Singlepost = () => {
    return (
        <div className="single">
            <div className="container">
                <img src="https://cdn.cfr.org/sites/default/files/image/2022/06/NigeriaViolence_IB.jpg" alt="" />
                <div className="user">
                    <img src="https://thumbs.dreamstime.com/b/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot-portrait-caucasian-woman-avatar-237387534.jpg" alt="" />
                    <div className="info">
                        <span>techMomma</span>
                        <p>Posted 3 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/create?edit=2`}>
                        <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>some funny text just for testing haha</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium nisl nec sem fringilla imperdiet. Curabitur elementum quam metus, lobortis ornare quam scelerisque non.
                    Vivamus vehicula, ipsum et rutrum elementum, turpis eros semper purus, et vulputate sapien felis cursus lorem. Integer ac felis nec justo dignissim convallis quis efficitur lectus.
                    Pellentesque pulvinar at nunc eget luctus. Donec sit amet arcu viverra dui pulvinar placerat. Aliquam scelerisque gravida scelerisque. Sed congue purus ex, nec aliquet arcu faucibus nec.
                    Nullam lacinia, erat et vulputate porta, dolor massa convallis eros, nec varius neque risus id arcu. Cras consequat gravida mi at convallis. Vivamus accumsan arcu ante, sit amet malesuada nibh tincidunt at.
                    Sed viverra pulvinar nisi a accumsan. Nam tempus lacus sed vehicula mattis. Maecenas sodales arcu sit amet purus auctor aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Donec eget nisi et tellus efficitur pretium.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium nisl nec sem fringilla imperdiet. Curabitur elementum quam metus, lobortis ornare quam scelerisque non.
                    Vivamus vehicula, ipsum et rutrum elementum, turpis eros semper purus, et vulputate sapien felis cursus lorem. Integer ac felis nec justo dignissim convallis quis efficitur lectus.
                    Pellentesque pulvinar at nunc eget luctus. Donec sit amet arcu viverra dui pulvinar placerat. Aliquam scelerisque gravida scelerisque. Sed congue purus ex, nec aliquet arcu faucibus nec.
                    Nullam lacinia, erat et vulputate porta, dolor massa convallis eros, nec varius neque risus id arcu. Cras consequat gravida mi at convallis. Vivamus accumsan arcu ante, sit amet malesuada nibh tincidunt at.
                    Sed viverra pulvinar nisi a accumsan. Nam tempus lacus sed vehicula mattis. Maecenas sodales arcu sit amet purus auctor aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Donec eget nisi et tellus efficitur pretium.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium nisl nec sem fringilla imperdiet. Curabitur elementum quam metus, lobortis ornare quam scelerisque non.
                    Vivamus vehicula, ipsum et rutrum elementum, turpis eros semper purus, et vulputate sapien felis cursus lorem. Integer ac felis nec justo dignissim convallis quis efficitur lectus.
                    Pellentesque pulvinar at nunc eget luctus. Donec sit amet arcu viverra dui pulvinar placerat. Aliquam scelerisque gravida scelerisque. Sed congue purus ex, nec aliquet arcu faucibus nec.
                    Nullam lacinia, erat et vulputate porta, dolor massa convallis eros, nec varius neque risus id arcu. Cras consequat gravida mi at convallis. Vivamus accumsan arcu ante, sit amet malesuada nibh tincidunt at.
                    Sed viverra pulvinar nisi a accumsan. Nam tempus lacus sed vehicula mattis. Maecenas sodales arcu sit amet purus auctor aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Donec eget nisi et tellus efficitur pretium.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium nisl nec sem fringilla imperdiet. Curabitur elementum quam metus, lobortis ornare quam scelerisque non.
                    Vivamus vehicula, ipsum et rutrum elementum, turpis eros semper purus, et vulputate sapien felis cursus lorem. Integer ac felis nec justo dignissim convallis quis efficitur lectus.
                    Pellentesque pulvinar at nunc eget luctus. Donec sit amet arcu viverra dui pulvinar placerat. Aliquam scelerisque gravida scelerisque. Sed congue purus ex, nec aliquet arcu faucibus nec.
                    Nullam lacinia, erat et vulputate porta, dolor massa convallis eros, nec varius neque risus id arcu. Cras consequat gravida mi at convallis. Vivamus accumsan arcu ante, sit amet malesuada nibh tincidunt at.
                    Sed viverra pulvinar nisi a accumsan. Nam tempus lacus sed vehicula mattis. Maecenas sodales arcu sit amet purus auctor aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Donec eget nisi et tellus efficitur pretium.
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Singlepost