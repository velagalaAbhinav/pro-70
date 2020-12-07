import React from 'react';
import{View,Text} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={{ flex:1, jusgtifyContent:'Center', alignItems:'center'}}>
                <Text>Title of the Story</Text>
                <Text>Author of the story</Text>
                <Text>Write story - this will be multiple line input Text so add props multiline: {true}.</Text>
            </View>
        )
    }
}