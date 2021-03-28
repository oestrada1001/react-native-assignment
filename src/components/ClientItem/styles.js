import {StyleSheet} from 'react-native';

const ClientItemStyle = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 15,
        paddingBottom: 20,
        borderRadius: 5
    },
    item: {
        flex: 1,
    }
});

export default ClientItemStyle;