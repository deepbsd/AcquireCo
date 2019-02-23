import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavItem from './navitem';



class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            navs: [
                {
                    link: "Home",
                    href: "/"
                },
                {
                    link: "View",
                    href: "/listpage"
                },
                {
                    link: "Add",
                    href: "/addcompany"
                }
            ]
        }
    }

    render(){

        const links = this.state.navs.map((link, index) => {
            return (
                <NavItem key={index} {...link} data-test={link.link} />
            )
        })

        return (
            <div className="Links">
            <span className="hdrLogo">AcquireCo</span>
               {links}
            </div>
        )
    }
}

export default connect()(Header);
