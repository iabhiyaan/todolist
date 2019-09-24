import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import "./App.css";
class App extends Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
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
			id: uuid(),
			editItem: false
		});
	};
	clearList = e => {
		this.setState({
			items: []
		});
	};
	deleteTodo = id => {
		const items = this.state.items.filter(item => item.id !== id);
		this.setState({
			items
		});
	};
	editTodo = id => {
		const items = this.state.items.filter(item => item.id !== id);
		const selectedItem = this.state.items.find(item => item.id === id);
		console.log(selectedItem);
		this.setState({
			items,
			item: selectedItem.title,
			editItem: true,
			id: id
		});
	};
	render() {
		const { item, editItem } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">todo input</h3>
						<TodoInput
							item={item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={editItem}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							deleteTodo={this.deleteTodo}
							editTodo={this.editTodo}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
