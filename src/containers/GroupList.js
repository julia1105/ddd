import React, {Component} from 'react'
import classes from './GroupList.module.css'
import Group from '../components/UI/Group/Group'
import AddGroup from '../components/UI/AddS/AddGroup'
import axios from 'axios'


export default class GroupList extends Component {
    constructor() {
        super()

        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        axios.get('/api/groupList').then(res => {
            console.log(res);
            this.setState({groups: res.data})
        })
    }

    addGroup = group => {
        this.setState(state=> {
            let {groups} = state;
            groups.push({
                id: groups.length !== 0 ? groups.length : 0,
                title: group
            });
            return groups;
        });
    };

    deleteGroup = (group_id, id) => {
        axios.delete(`/api/delGroup/${group_id}`)
        .then(res => {
          console.log(res);
        })
        .catch(function (error) {
            console.log(error.response);
          });

        this.setState(({ groups }) => {
            const newGroups = groups.filter(el => el.group_id !== group_id);
            return {groups: newGroups};
          });
    }

    render() {
        const { groups } = this.state;

        return (
            <div className={classes.GroupList}>
                 {groups.length === 0 ? 
                    <div> 
                        <p>Нет групп для отображения</p>
                    </div> :
                    <div>
                         {groups.map(group =>(
                        <Group 
                            deleteGroup = {() => this.deleteGroup(group.group_id, group.id)}
                            group = {group} key={group.id}>
                        </Group>
                    ))
                    }
                    </div> 
                }
                    <div className = {classes.add_ul}>
                        <AddGroup addGroup = {this.addGroup}>
                            </AddGroup>
                    </div>
            </div>
        )
    }
}