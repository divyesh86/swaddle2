import React, { Component } from 'react'
import { Menu, Segment, Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react'
import api from '../../apis/api';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            api.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                if(res.message === "Success"){
                    res.redirect("/transactions")
                }else {
                    res.redirect("/login")
                }
            })
            .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div className='login-form'>

                <style>{`
                      body > div,
                      body > div > div,
                      body > div > div > div.login-form {
                        height: 100%;
                      }
                    `}
                </style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' />
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='username'
                                />
                                <Form.Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'/>

                                <Button
                                    disabled={!(this.state.username && this.state.password)}
                                    color='teal' fluid size='large'
                                    onClick={this.handleSubmit()}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <a href='/signup'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

module.exports = {LoginForm};