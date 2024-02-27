import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Staffmodel from '../models/Staffmodel';

function StaffDelete(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const handleDelete = () => {
        const ask = window.confirm("Bạn có muốn xóa ?")
        if( ask ){
            Staffmodel.destroy( id ).then( function(data){
                alert('Xóa thành công')
                // Chuyen huong
                navigate('/')
            }).catch( function(error){
                alert('Xóa thất bại')
            })
        }
    }
    return (
        <div>
            <button onClick={ handleDelete }>OK</button>
            <Link to={'/'}>Tro lai</Link>
        </div>
    );
}

export default StaffDelete;