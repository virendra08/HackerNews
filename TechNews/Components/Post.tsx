import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { PostDetails } from "../types";



type Props = {
    post: PostDetails,
}

function Post(props: Props): JSX.Element {
    let post: PostDetails = props.post
    return (
        <View style={styles.postView}>
            <Text style={styles.postTitleText}>
                {
                    post.title
                }
            </Text>
            <Text style={styles.postAuthorText}>
                - {
                    post.author
                }
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    postView: {
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
        borderRadius: 10
    },
    postTitleText: {
        fontSize: 20,
        color: 'white'
    },
    postAuthorText: {
        marginLeft: 220,
        margin: 10,
        fontSize: 15
    }
})

export default Post;