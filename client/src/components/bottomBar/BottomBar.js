import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }


    render() {

        return (
            <Container style={{ padding: '5em 0em' }}>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' direction='bottom' visible={visible} inverted>
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='/assets/images/wireframe/paragraph.png' />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Container>
        )
    }
}

module.exports = {BottomBar};