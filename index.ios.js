/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  ScrollView,
} = React;

const window = Dimensions.get('window');
var RIGHT_LISTVIEW = 'right_listView';
var LEFT_LISTVIEW = 'left_listView';

var array = ['title1','title2','title3','title4','title5','title6','title7','title8','title9','title10', 'title11','title12','title13','title14','title15','title16','title17','title18','title19','title20'];
var titleArray = ['name', 'sex', 'age' , 'firstName', 'seconName' , 'hehe'];
var rightArray = [
                   {name: 'qwe', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'ert', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'rtr', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'ty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yiu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'hgj', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yuty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'fg', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'kjhk', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                    {name: 'qwe', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'ert', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'rtr', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'ty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yiu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'hgj', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'yuty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'fg', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                   {name: 'kjhk', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
                 ];

var GridTest = React.createClass({

  getInitialState(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    return{
      leftDataSource: ds.cloneWithRows(array),
      rightdataSource: ds.cloneWithRows(rightArray),
      leftListOffset: {x : 0, y: 0},
      loaded: false,
    };
  },

  componentDidMount(){
    this.setState({
      loaded: true,
    }
    );
  },

  render: function() {

    return (
      <View style = {styles.container}>
        <View style = {styles.left}>
            <View style = {styles.mingcheng}>
               <Text>名称</Text>
            </View>

            <ListView 
              ref = {LEFT_LISTVIEW}
              style = {styles.leftListView}
              contentOffset = {this.state.leftListOffset}
              // scrollEnabled = {false}
              // bounces = {false}
              // scrollEventThrottle={1000}
              showsHorizontalScrollIndicator = {false}
              showsVerticalScrollIndicator = {false}
              onScroll={this.onScroll1}
              dataSource = {this.state.leftDataSource}
              renderRow = {this._leftRenderRow}
            />

        </View>
        <View style = {styles.right}>
           <ScrollView style = {styles.scrollView}
                       bounces = {false}
                       showsHorizontalScrollIndicator = {true}
                       showsVerticalScrollIndicator = {true}
                       horizontal = {true}>
                       <View style = {styles.contentView}>

                       <View style = {{width: 600 , height: 40, flexDirection:'row'}}>

                       <View style = {styles.titleView}>
                        <Text>name1</Text>
                       </View>
                       <View style = {styles.titleView}>
                       <Text>name2</Text>
                       </View>
                       <View style = {styles.titleView}>
                       <Text>name3</Text>
                       </View>
                       <View style = {styles.titleView}>
                       <Text>name4</Text>
                       </View>
                        <View style = {styles.titleView}>
                        <Text>name5</Text>
                       </View>
                       <View style = {styles.titleView}>
                       <Text>name6</Text>
                       </View>
                       </View>

                       <ListView
                        ref = {RIGHT_LISTVIEW}
                        showsHorizontalScrollIndicator = {false}
                        showsVerticalScrollIndicator = {false}
                        // bounces = {false}
                        // scrollEventThrottle={1000}
                        style = {styles.rightListView}
                        dataSource = {this.state.rightdataSource}
                        onScroll={this.onScroll2}
                        renderRow = {this._rightRenderRow}
                       />
                       </View>
           </ScrollView>
        </View>
      </View>
    );
  },

  onScroll1(){
    if (this.state.loaded) {
      var rightList = this.refs[RIGHT_LISTVIEW];
      var leftList = this.refs[LEFT_LISTVIEW];
      var y1 = leftList.scrollProperties.offset;
      rightList.setNativeProps({
        contentOffset : {x: 0, y: y1}
      });
    }
  },

  onScroll2(){

  if (this.state.loaded) {
   var rightList = this.refs[RIGHT_LISTVIEW];
   var leftList = this.refs[LEFT_LISTVIEW];
   var y1 = rightList.scrollProperties.offset;

   leftList.setNativeProps({
    contentOffset : {x: 0, y: y1}
   });

 }
},

 _leftRenderRow (rowData: string, sectionID: number, rowID: number){
    return (
            <View style={styles.leftListRow}>
            <Text >
              {rowData}
            </Text>
            </View>
      );
  },

  _rightRenderRow (rowData: object, sectionID: number, rowID: number){
    return (

            <View style = {styles.rightListRow}>
                      <View style = {styles.cellView}>
                        <Text>{rowData.name}</Text>
                       </View>
                       <View style = {styles.cellView}>
                       <Text>{rowData.name}</Text>
                       </View>
                       <View style = {styles.cellView}>
                       <Text>{rowData.name}</Text>
                       </View>
                       <View style = {styles.cellView}>
                       <Text>{rowData.name}</Text>
                       </View>
                        <View style = {styles.cellView}>
                        <Text>{rowData.name}</Text>
                       </View>
                       <View style = {styles.cellView}>
                       <Text>{rowData.name}</Text>
                       </View>
            </View>
      );
  }
  
});

var styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginTop: 20,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  left:{
    flex: 1,
    // backgroundColor:'yellow',
    flexDirection: 'column',
  },
  right:{
    flex: 3,
    backgroundColor:'white',
  },

  mingcheng:{
    height:40,
    marginLeft:0,
    marginRight:0,
    // backgroundColor:'red',
    borderColor: '#DCD7CD',
    borderBottomWidth:1,
    borderRightWidth:1,
    borderTopWidth: 1,
    alignItems: 'center',      // 水平局中
    justifyContent: 'center',  // 垂直居中
  },

  leftListView:{
    flex: 1,
    marginTop: 0,
    marginLeft:0,
    marginRight:0,
    marginBottom:30,
    // backgroundColor:'gray',
  },

  leftListRow:{
    alignItems: 'center',      // 水平局中
    justifyContent: 'center',  // 垂直居中
    height: 40,
    // backgroundColor:'#db384c',
    borderColor: '#DCD7CD',
    borderBottomWidth:1,
    borderRightWidth:1,
  },

  rightListRow:{
    width: 600 ,
    height: 40, 
    flexDirection:'row'
  },

  scrollView:{
    flex: 1,
    marginRight:1,
    marginLeft:1,
    marginTop:0,
    marginBottom:1,
    // backgroundColor: 'red',
    flexDirection:'column'
  },

  contentView:{

    height: window.height -50,
    width: 600 , 
    // backgroundColor:'yellow',
    flexDirection: 'column',
  },

  rightListView:{
    flex: 1,
    // backgroundColor : 'gray'
  },

  titleView:{
    width:100,
    height:40,
    backgroundColor:'#F5FCFF',
    borderColor: '#DCD7CD',
    borderTopWidth: 1,
    borderRightWidth:1,
    borderBottomWidth:1,
    alignItems: 'center',      // 水平局中
    justifyContent: 'center',  // 垂直居中
  },

   cellView:{
    width:100,
    height:40,
    // backgroundColor:'#db384c',
    borderColor: '#DCD7CD',
    borderRightWidth:1,
    borderBottomWidth:1,
    alignItems: 'center',      // 水平局中
    justifyContent: 'center',  // 垂直居中
  },

});

AppRegistry.registerComponent('GridTest', () => GridTest);
