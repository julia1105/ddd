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

    deleteGroup = id => {
        axios.delete(`/api/delGroup/${this.state.id}`)
        .then(res => {
          console.log(res);
        })
        const index = this.state.groups.map(group => group.id).indexOf(id);
        this.setState( state => {
            let {groups} = state;
            delete groups[index];
            return groups;
        })
    }

    render() {
        const { groups } = this.state;

        return (
            <div className={classes.GroupList}>
                    {groups.map(group =>(
                        <Group 
                            deleteGroup = {() => this.deleteGroup(group.id)}
                            group = {group} key={group.id}>
                        </Group>
                    ))
                    }
                    <div className = {classes.add_ul}>
                        <AddGroup addGroup = {this.addGroup}>
                            </AddGroup>
                    </div>
            </div>
        )
    }
}