
import React from 'react';

// Component responsible for control of the sidebar menu
export class SidebarMenu extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(e);
    }
    
    render() {
        return (
            <div onClick={this.onClick} className="sb-menu" tabindex="1" arial-label ='menu'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default SidebarMenu;
