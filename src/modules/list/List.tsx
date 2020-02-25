import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/index';
import ListItem from './ListItem';
import { AppState } from '../../store/index';
import { Dispatch } from 'redux';
import styles from './Styles';

export interface actionObject {
    list: Function
}
export interface Props {
    actions: actionObject,
    list: Array<Object>
}

export interface itemObject {
    name: String
}
class List extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.actions.list()
        });
    }
    renderListItem: ListRenderItem<any> = ({ item, index }) => {
        return <ListItem key={index} data={item} />
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea} >
                <FlatList
                    data={this.props.list}
                    renderItem={this.renderListItem}
                    contentContainerStyle={styles.flatList}
                />
            </SafeAreaView >
        );
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        list: state.list.list
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
