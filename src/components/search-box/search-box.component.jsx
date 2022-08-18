import {Component} from 'react';
import './search-bos.styles.css'
import 'font-awesome/css/font-awesome.min.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <button className="btn-search">
                    <i className="fa fa-search"></i>
                </button>
            <input
                className={`input-search ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
                />
            </div>

        )
    }
}

export default SearchBox
