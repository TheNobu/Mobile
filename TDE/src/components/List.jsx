import {Text, View, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        fontSize:20,
        
    }
})


const List = ({list}) => {
    return (
        <View>
            {list.map(list=>(
                <Text style={style.container}>Name: {list.name}, Idade: {list.idade}</Text> 
                ))}
        </View>
    );
}

export default List;