import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import api from '../../apis/api';
import { Grid, Header, Image, Rail, Segment, Sticky, Rating, Divider, Comment } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {

            transactions : []

        };
    }

    componentDidMount() {
        this.loadTransactions();
    }

    loadTransactions = () => {
        api.loadTransactions()
            .then(res =>
                this.setState({ transactions: res.data.message})
            )
            .catch(err => console.log(err));
    };

    render() {

        return (


            <Container style={{ padding: '5em 0em' }}>
                <Container>
                <Menu pointing secondary>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/home'>Home</Menu.Item>
                        <Menu.Item as={Link} to='/login'>Logout</Menu.Item>
                    </Menu.Menu>
                </Menu>
                </Container>

                <Grid celled='internally'>
                    {this.state.transactions.map(transaction => (
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Segment>transaction.amount</Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>

                            <Segment.Group>
                                <Segment>transaction.name</Segment>
                                <Segment>transaction.address</Segment>
                                <Segment>transaction.city</Segment>
                                <Segment>transaction.pending</Segment>
                            </Segment.Group>

                            {/*<Divider />*/}
                            {/*<Segment>*/}
                                {/*<Comment.Group>*/}
                                    {/*<Comment>*/}
                                        {/*<Comment.Content>*/}
                                            {/*<Comment.Author as='a'>Steve Jobes</Comment.Author>*/}
                                            {/*<Comment.Text>Revolutionary!</Comment.Text>*/}
                                            {/*<Form reply>*/}
                                                {/*<Form.TextArea />*/}
                                                {/*<Button content='Add Note' labelPosition='left' icon='edit' primary />*/}
                                            {/*</Form>*/}
                                        {/*</Comment.Content>*/}
                                    {/*</Comment>*/}
                                {/*</Comment.Group>*/}
                            {/*</Segment>*/}

                        </Grid.Column>
                    </Grid.Row>
                   ))}


                </Grid>
            </Container>
        )
    }
}

module.exports = {Grid};