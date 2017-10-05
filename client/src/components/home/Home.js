import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import TopMenu from '../topMenu/TopMenu';

class Home extends Component {

    render() {

        return (
            <div>
                <TopMenu/>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
                    vertical>

                    <Container text>
                        <Header
                            as='h1'
                            content='Swaddle'
                            inverted
                            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                        />
                        <Header
                            as='h2'
                            content='Crowd Sourcing '
                            inverted
                            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                        />
                        <Button primary size='huge'>
                            Get Started
                            <Icon name='right arrow' />
                        </Button>
                    </Container>
                </Segment>

            </div>
        )
    }
}

module.exports = {Home};