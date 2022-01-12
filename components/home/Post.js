import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({post}) => {
    return (
        <View style={{marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <Text style={{ color: 'white'}}>POST</Text>
        </View>
    )
}

export default Post
