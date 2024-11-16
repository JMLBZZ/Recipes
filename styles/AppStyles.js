import {StyleSheet} from "react-native"
import Colors from "./Colors"


export const globalStyles = StyleSheet.create({
    container:{
        flexGrow: 1,
        //alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.greyLight,

    },
    containerText:{
        fontSize:20
    },
    // ######################### NAVIGATION BOUTON ######################### //
    navScreenButton:{
        backgroundColor:Colors.sirius,
        borderRadius:5,
        width:"100%",
        padding:10,
        margin:10,
        alignItems: "center",
        justifyContent: "center",
    },

    // ######################### HOME LISTE RECETTE ######################## //
    listContainer:{
        flex:1,
        flexDirection:"row",
        //alignItems:"center",
        height:100,
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor: Colors.greyLight,
    },
    listImg:{
        width:100,
        height:"100%",
    },
    listTitle:{
        fontSize:15,
        fontWeight:"bold",
        padding:10,
    },

// ########################### DETAIL RECETTE ########################## //
    detailContainer:{
        flex:1,
        //alignItems:"center",
        backgroundColor: Colors.greyLight,
    },
    detailImg:{
        width:"100%",
        height:"30%",
        resizeMode: "cover",
    },
    detailContentContainer:{
        padding:16
    },
    detailTitleContainer:{
        borderBottomWidth:1,
        alignItems: "center",
        padding: 16,
    },
    detailTitle:{
        fontSize:20,
        fontWeight:"bold",
        textAlign: "center",
    },
    detailReady: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
    },
    detailIngredientsContainer:{
        paddingVertical:16
    },
    detailIngredientsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    detailIngredientItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    detailIngredientText: {
        fontSize: 16,
    },
    detailButtonAdd: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "transparent",
        borderRadius: 5,
        borderWidth:1,
    },
    detailButtonAddText: {
        fontSize: 16,
    },


    // ######################## TASK LIST (todolist) ####################### //

    // ~~~~~~~~~~~~~~ HOME TASK ~~~~~~~~~~~~~~ //
    containerHomeTask:{
        flex: 1,
        //backgroundColor: "white",
        alignItems: "center",
        justifyContent: "top",
        padding: 10,
    },

    // ~~~~~~~~~~~~~~ TODO ITEM ~~~~~~~~~~~~~~ //
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "graylight",
        borderRadius: 4,
        width:"100%",
        height:80,
    },
    todoItemText: {
        flex: 1,
        marginRight: 8,
        color: "dark",
        textDecorationLine : "none",
        fontSize: 16, 
        textAlign: "center",

    },

    todoTouchable:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
    },

    completed: {
        textDecorationLine: "line-through",
        color: "carbon",
    },
    deleteButton: {
        backgroundColor: "red",
        color: "white",
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
    },

    // ~~~~~~~~~~~~~~~~~ DATE ~~~~~~~~~~~~~~~~ //
    containerDate:{
        padding:25,
    },
    dateText:{
        fontSize: 20,
        alignItems: "center",
        textTransform: "capitalize"
    },

    // ~~~~~~~~~~~~~~~ COUNTER ~~~~~~~~~~~~~~~ //
    containerCounter:{
        //backgroundColor:"red",
        flexDirection:"column",
        justifyContent:"space-between",
        width:"100%",
        padding:25,
    },
    itemCounter:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
    },
    textCounter:{
        fontSize: 18, 
        fontWeight: "bold",
    },
    textTitleCounter:{
        fontSize: 16, 
        color:"grey"
    },

    // ~~~~~~~~~~~ FLOATING BUTTON ~~~~~~~~~~~ //
    fab: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: Colors.sirius,
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    fabText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    
    // ~~~~~~~~~~~~~ MODALADDTASK ~~~~~~~~~~~~ //
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
    },
    input: {
        width: "100%",
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        margin: 16,
        textAlign: "center",
    },
    addButton: {
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: "#ddd",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    cancelButtonText: {
        //color: "red",
        fontSize: 16,
    },
    errorContainer: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: "100%",
        alignItems: "center",
    },
    errorText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

})