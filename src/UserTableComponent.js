import { Table,Modal } from "antd";
import React, { useState } from 'react'

function UserTableComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        key: 1,
        name: 'Mike',
        email: 'mike@gmail.com',
        age: 40,
        address: '123 Maple Street'
      });
    const users = [
        {
          key: 1,
          name: 'Mike',
          email: 'mike@gmail.com',
          age: 40,
          address: '123 Maple Street'
        },
        {
          key: 2,
          name: 'Sara',
          email: 'sara@gmail.com',
          age: 29,
          address: '456 Oak Avenue'
        },
        {
          key: 3,
          name: 'John',
          email: 'john@gmail.com',
          age: 35,
          address: '789 Pine Road'
        },
        {
          key: 4,
          name: 'Emily',
          email: 'emily@gmail.com',
          age: 31,
          address: '101 Birch Boulevard'
        },
        {
          key: 5,
          name: 'David',
          email: 'david@gmail.com',
          age: 45,
          address: '202 Cedar Lane'
        }
      ];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          sortDirections: ['descend','ascend'],
  
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
            title: 'Age',
            dataIndex: 'age',
            
          },
      ];
      const handleRowClick = (record) =>{
        setSelectedUser(record)
        setIsModalOpen(true);
      }
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <section style={{margin:'1.5rem', borderRadius:'1rem'}}>
      <Table dataSource={users} 
      columns={columns}
      showSorterTooltip={{
        target: 'sorter-icon',
      }}
      onRow={(record) => ({
          onClick: () => handleRowClick(record),
          className: 'clickable-row',
      } )}/>
      <Modal title={'Details of ' + selectedUser.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <p><span style={{fontStyle: 'italic' }}>Name: </span>{selectedUser.name}</p>
        <p><span style={{fontStyle: 'italic' }}>Email: </span>{selectedUser.email}</p>
        <p><span style={{fontStyle: 'italic' }}>Age: </span>{selectedUser.age}</p>
        <p><span style={{fontStyle: 'italic' }}>Address: </span>{selectedUser.address}</p>
      </Modal>
    </section>
  )
}

export default UserTableComponent