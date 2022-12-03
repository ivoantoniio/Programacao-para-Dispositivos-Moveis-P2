import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
const db = SQLite.openDatabase("products.db");


export default function Item({item}) {

    const deleteProducts = () => {
      db.transaction(txn => {
        txn.executeSql(
          `DELETE FROM products where id=?`, [item.id],
          (sqlTxn, res) => {
              console.log("Tabela excluida com sucesso. ")
          }, 
          error => {
              console.log("Erro na criação de tabela " + error.message);
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

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>{item.nameProduct}</Text>
                <Text>({item.amount})</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text onPress={deleteProducts} style={styles.textBtn}>Excluir</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10
    },
    btn: {
        backgroundColor: '#158',
        padding: 10,
        borderRadius: 10
    },
    textBtn: {
        color: '#fff'
    }
  });