import { StyleSheet, Text, View } from "react-native";

export default function Evento({agenda, inicio, final} ) {
    return(
        <View style={css.container}>
            <Text style={css.agenda}>{agenda}</Text>
            <Text style={css.datas}>{inicio}-{final}</Text>
        </View>
    )
}

const css = StyleSheet.create( {
    container: {
        width: "90%",
        height: 60,
        display: "flex",
        alignSelf: "center",
        backgroundColor: "lightgrey",
        borderRadius: 5,
        marginTop: 15,
        padding: 1,
        
    },
    agenda: {
        fontSize: 18,
        fontWeight: "bold"
    },
    datas: {
        fontStyle: "italic",
        fontSize: 15,
        color: "green"
    }
})