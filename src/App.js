import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: null,
		editItem: false
	};
	handleChange = e => {
		this.setState({
			item: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const newItems = {
			id: this.state.id,
			title: this.state.item
		};
		const updatedItems = [...this.state.items, newItems];
		this.setState({
			items: updatedItems,
			item: "",
			id: uuid()
		});
	};
	render() {
		const { item } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">todo input</h3>
						<TodoInput item={item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
						<TodoList items={this.state.items} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
