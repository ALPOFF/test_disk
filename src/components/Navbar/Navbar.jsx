import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    setItemsArr() {
        const items = [];
        let pth = this.props.lct;
        while (pth.length !== 0) {
            let index = pth.lastIndexOf('/');
            let pth_now = pth.substring(index + 1);
            if (pth_now.length !== 0) {
                items.unshift({pth_name: pth_now, pth: pth});
            }
            pth = pth.substring(0, index);
        }
        items.unshift({pth_name: 'Home', pth: '/'});
        return items;
    }

    render() {
        const items_arr = this.setItemsArr();
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {items_arr.map((it, i) => (items_arr.length === i + 1) ?
                        <li className="breadcrumb-item active" aria-current="page" key={it.pth_name}>{it.pth_name}</li>
                        :
                        <Link className="breadcrumb-item" key={it.pth_name} to={it.pth}>{it.pth_name}</Link>
                    )}
                </ol>
            </nav>
        );
    }
}

export default Navbar;
