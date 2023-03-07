import { Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import axios from "axios";

const heading = 'Details pages';

const alert = () => {
    window.alert('hello world');
};

const buttonTake = [
    {title: 'Take 1', message: () => { window.alert('Take 1')}},
    {title: 'Take 2', message: () => { window.alert('Take 2')}},
    {title: 'Take 3', message: () => { window.alert('Take 3')}},
    {title: 'Take 4', message: () => { window.alert('Take 4')}},
    {title: 'Take 5', message: () => { window.alert('Take 5')}},
    {title: 'Take 6', message: () => { window.alert('Take 6')}},
]


class Details extends React.Component {

    constructor() {
        super();

        this.state = {
            users: [],
            form: {
                id: null,
                name: '',
                email:'',
                password: '',
            }
        }

        this.submit = this.submit.bind(this);
    }



    async fetchUsers() {
        await axios.get('/web-api/users')
            .then( (response) => {
                this.setState({
                    users: response.data.data
                })
            })
    }

    async submit(event) {
        event.preventDefault()
        await axios.post('/web-api/users', this.state.form)
            .then( (response) => {
                this.fetchUsers();
            })
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {

        return (
            <div className="max-w-full text-center">
                <div>{heading}</div>

                <div className="flex items-center justify-between p-5">
                    {buttonTake.map( (button, index) => {
                    return  <button key={index} onClick={button.message}>{button.title}</button>
                    })}
                </div>

                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( (user, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.created_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                    <br />

                    <form onSubmit={this.submit} className="flex flex-row items-center justify-between bg-black p-5">
                        <input placeholder="name" type="text" name="" id="" onChange={ (e) => this.state.form.name = e.target.value} />
                        <input placeholder="email" type="text" name="" id="" onChange={ (e) => this.state.form.email = e.target.value} />
                        <input placeholder="password" type="text" name="" id="" onChange={ (e) => this.state.form.password = e.target.value} />

                        <button type="submit" className="bg-white">Submit</button>
                    </form>

                    <button>
                        <Link to='/' title="Go To Home Page">Go Home</Link>
                    </button>
            </div>
        )
    }

}
// export default function Details() {
//     const heading = "Details Page";
    // const alert = () => {
    //     window.alert('hello world');
    // };

    // const buttonTake = [
    //     {title: 'Take 1', message: () => { window.alert('Take 1')}},
    //     {title: 'Take 2', message: () => { window.alert('Take 2')}},
    //     {title: 'Take 3', message: () => { window.alert('Take 3')}},
    //     {title: 'Take 4', message: () => { window.alert('Take 4')}},
    //     {title: 'Take 5', message: () => { window.alert('Take 5')}},
    //     {title: 'Take 6', message: () => { window.alert('Take 6')}},
    // ]

    // return <div className="max-w-full text-center">
    //     <div>{heading}</div>

    //     <div className="flex items-center justify-between p-5">
    //         {buttonTake.map( (button, index) => {
    //         return  <button key={index} onClick={button.message}>{button.title}</button>
    //         })}
    //     </div>

    //     <br />
    //         <button>
    //             <Link to='/' title="Go To Home Page">Go Home</Link>
    //         </button>
    // </div>;
// }

export default Details;