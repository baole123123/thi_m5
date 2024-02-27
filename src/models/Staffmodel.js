import axios from "axios";

class Staffmodel {
    apiUrl = 'https://65dbe74d3ea883a1529240ab.mockapi.io/users';
    // Lấy tất cả dữ liệu
    all(){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    // lấy 1 dữ liệu
    find( id ){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl + '/' + id ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    //xóa dữ liệu
    async destroy(id){
        return await axios.delete( this.apiUrl + '/' + id )
    }
    // Thêm dữ liệu
    store( data ){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }

    // Cập nhật dữ liệu
    update( id, data ){
        return new Promise( ( resolve,reject ) => {
            axios.put( this.apiUrl + '/' + id , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
}

export default new Staffmodel;