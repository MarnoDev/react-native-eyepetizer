import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Banner from "react-native-banner";

/**
 * Created by marno on 2017/1/13.
 */
export default class ExplorePage extends Component {
    constructor(props) {
        super(props);

        this.banners = [
            {
                title: 'beauty 1',
                image: 'http://bbs.qn.img-space.com/g3/M00/05/0F/Cg-77ViIG46IIWULAALkESTkvvgAAIOvgE1QHoAAuQp682.jpg',
            },
            {
                title: 'beauty 2',
                image: 'http://bbs.qn.img-space.com/g3/M00/00/7E/Cg-40lfrJ5SIXAIRAA86Aw3JE_0AAAxOAJtSqcADzob345.jpg',
            },
            {
                title: 'The next banner has no title',
                image: 'http://bbs.qn.img-space.com/g2/M00/00/5A/Cg-4k1iXPzuILNl5AA2MDg8Y9qYAAAjewM_dz0ADYxK055.jpg',
            },
            {
                // title: 'no title',
                image: 'http://bbs.qn.img-space.com/g2/M00/07/0F/Cg-4k1h3WuCIJSq7ABAsVz05W-4AAK9VgJXPqYAECxv198.jpg',
            },
        ];

        this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        }
        this.defaultIndex = 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
                <Text>{this.state.clickTitle}</Text>
            </View>
        );
    }

    clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
