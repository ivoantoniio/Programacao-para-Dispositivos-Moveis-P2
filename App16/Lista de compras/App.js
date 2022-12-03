import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Item from './components/Item';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("products.db");


export default function App() {

    const [amount, setAmount] = useState();
    const [nameProduct, setNameProduct ] = useState();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState();

    const createTables = () => {
      db.transaction(txn => {
        txn.executeSql(
          `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nameProduct VARCHAR(20), amount NUMBER);`, [],
          (sqlTxn, res) => {
              console.log("Tabela criada com sucesso. ")
          }, 
          error => {
              console.log("Erro na criação de tabela " + error.message);
          },
        );
      });
    };

    const insertProduct = () => {
      if(!product){
        alert("Informe um produto!");
        return false;
      }

      db.transaction(txn => {
          txn.executeSql(
            `INSERT INTO products (nameProduct, amount) VALUES (?, ?)`,
              [nameProduct, amount],
            (sqlTxn, res) => {
              console.log(`${nameProduct} Produto adicionado com sucesso!`);
              getProducts();
              setProduct(" ");
            },
            error => {
              console.log("Erro ao inserir um Produto " + error.message);
            },
          );
      });
    };

    const getProducts = () => {
      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM products ORDER BY id DESC`, 
          [],
          (sqlTxn, res) => {
            console.log("Produtos lidos com sucesso!");
            let len = res.rows.length;

            if(len > 0) {
              let results = [];
              for(let i = 0; i < len; i++){
                let item = res.rows.item(i);
                results.push({ id: item.id, nameProduct: item.nameProduct, amount: item.amount})
              }

              setProducts(results)
            }
          },
          error => {
            console.log("Erro ao obter Produtos " + error.message);
          }
        )
      })
    }

    const getaProducts = () => {
      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM products ORDER BY id DESC`, 
          [],
          (sqlTxn, res) => {
              console.log(`${nameProduct} Produto buscado com sucesso!`);
              getProducts();
              setProduct();
            },
          error => {
            console.log("Erro ao obter Produtos " + error.message);
          }
        )
      })
    }


useEffect(() => {
      createTables();
      getProducts();
}, []);

  return (
    <View style={styles.container}>
        <Text>Olá, bem-vindo a sua lista de compras! :)</Text>
        <View style={styles.row}>
          <TextInput 
            placeholder='Qtde...'
            value={amount}
            style={styles.gap}
            onChangeText={setAmount}
            />
          <TextInput 
            placeholder="Produto..."
            value={nameProduct}
            style={styles.gap}
            onChangeText={setNameProduct}
            />
          <TouchableOpacity 
                style={styles.btn}
                onPress={insertProduct}>
              <Text style={{color: '#fff'}}>+</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.text}>
        <Text>Ao excluir um produto, por favor atualize a lista!</Text>
        </View>
        <View>
          <TouchableOpacity 
                style={styles.btnn}
                onPress={getaProducts}>
              <Text style={{color: '#fff'}}>Atualizar Lista</Text>
          </TouchableOpacity>
        </View>
    
    <FlatList 
      data={products}
      style={styles.box}
      renderItem={Item}
      key={p => p.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  btn: {
      paddingHorizontal: 20,
      backgroundColor: '#2890ff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      borderRadius: 10,
  },
  btnn: {
      paddingHorizontal: 20,
      backgroundColor: '#2890ff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      borderRadius: 10,
      padding: 10,
      margin: 5,
  },
  row: {
    flexDirection: 'row',
    margin: 20
  },
  box: {
    borderColor: '#222',
    borderWidth: 1,
    width: 350,
    padding: 10,
    borderRadius: 10,
  },
  gap: {
    margin: 5,
    borderColor: '#222', 
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 10,
  }
});