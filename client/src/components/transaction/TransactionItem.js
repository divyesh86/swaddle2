import React, { Component } from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import { Menu, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'


const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

class TransactionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
                <Item>
                    <Item.Image src='/assets/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>12 Years a Slave</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>Union Square 14</span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                        <Item.Extra>
                            <Label>IMAX</Label>
                            <Label icon='globe' content='Additional Languages' />
                        </Item.Extra>
                    </Item.Content>
                </Item>
        )
    }
}

module.exports = {TransactionItem};
