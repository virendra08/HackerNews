import { StyleSheet, Text, View } from "react-native";


function Header(): JSX.Element {
    return (
        <View style={styles.headerView} >
            <Text style={styles.headText}>HACKER NEWS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#00CCFF'
    },
    headerView: {
        padding: 5,
        marginBottom: 5,
    }
})

export default Header;