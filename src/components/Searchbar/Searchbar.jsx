import React from "react";

export class Searchbar extends React.Component {
    state = {
        query: "",
    }
    handleSubmit = event => {
        event.preventDefault();
        const { query } = this.state;
        this.props.onSubmit(query);
        this.reset();
    };
    handleChange = event => {
        this.setState({ query: event.currentTarget.value })
    }
    reset = () => {
        this.setState({ query: '' });
    };
    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>


                </form>
            </header>
        )
    }
}