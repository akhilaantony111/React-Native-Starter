import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    itemView: {
        width: '90%',
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center"
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    imageContainer: { flex: 1 },
    avatar: { width: 70, height: 70 },
    detailsContainer: { flex: 3, alignSelf: "center" },
    name: { fontWeight: "bold", fontSize: 16 },
    safeArea: { backgroundColor: '#ccc6' },
    flatList: { marginVertical: 10 }
});
export default styles;