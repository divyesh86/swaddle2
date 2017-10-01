import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'



const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    handleContextRef = contextRef => this.setState({ contextRef })

    render() {

        return (
            <Container style={{ padding: '5em 0em' }}>

                <Grid centered columns={3}>
                    <Grid.Column>
                        <div ref={this.handleContextRef}>
                            <Segment>
                                {_.times(10, i => <Placeholder key={i} />)}

                                <Rail position='left'>
                                    {_.times(3, i => <Placeholder key={i} />)}

                                    <Sticky context={contextRef}>
                                        <Header as='h3'>Stuck Content</Header>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Sticky>
                                </Rail>

                                <Rail position='right'>
                                    <Sticky context={contextRef}>
                                        <Header as='h3'>Stuck Content</Header>
                                        <Image src='/assets/images/wireframe/image.png' />
                                    </Sticky>
                                </Rail>
                            </Segment>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

module.exports = {Grid};