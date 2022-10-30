import React from "react";
import data_tags from "../data/FooterTags";
import Tag from "./FooterTag";

export default function Footer() {

    const tags = data_tags.map(
        (data) => <Tag
                    key={data.id}
                    name={data.name}
                    url={data.url}
                />
    );

    return (
        <div className="container">
            <footer className="footer">
                <div className="footer__links links">
                    <div className="links__contacts">
                        <h1 className="links__title">Get in touch</h1>
                        <a href="#" className="links__item">About Us</a>
                        <a href="#" className="links__item">Careers</a>
                        <a href="#" className="links__item">Press Releases</a>
                        <a href="#" className="links__item">Blog</a>
                    </div>
                    <div className="links__socialmedia socialmedia">
                        <h1 className="links__title">Connections</h1>
                        <a href="#" className="links__item">Facebook</a>
                        <a href="#" className="links__item">Twitter</a>
                        <a href="#" className="links__item">Instagram</a>
                        <a href="#" className="links__item">Youtube</a>
                        <a href="#" className="links__item">LinkedIn</a>
                    </div>
                    <div className="links__income income">
                        <h1 className="links__title">Earnings</h1>
                        <a href="#" className="links__item">Become an Affiliate</a>
                        <a href="#" className="links__item">Advertise your product</a>
                        <a href="#" className="links__item">Sell on Market</a>
                    </div>
                    <div className="links__account account">
                        <h1 className="links__title">Account</h1>
                        <a href="#" className="links__item">Your account</a>
                        <a href="#" className="links__item">Returns Centre</a>
                        <a href="#" className="links__item">100 % purchase protection</a>
                        <a href="#" className="links__item">Chat with us</a>
                        <a href="#" className="links__item">Help</a>
                    </div>
                </div>
                <div className="footer__tags">
                    <h1>Product tags</h1>
                    <div className="tags">
                        {tags}
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>Copyright &copy; 2022 HandyCloud</span>
                </div>
            </footer>
        </div>
    )
}