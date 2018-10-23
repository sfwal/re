import React, { Component } from 'react';


class Home extends Component{


    constructor(){

        super();


        //react定义数据

        this.state={

            name:"张三",

            age:'30',

            userinfo:{

                username:"itying"
            }
        }
    }


    render(){

        return (
            <div>

                <h2>react组件里面的所有节点要被根节点包含</h2>
                <p>姓名:{this.state.name}</p>

                <p>年龄:{this.state.age}</p>


                <p>对象:{this.state.userinfo.username}</p>


            </div>
        )

    }
}



export default Home;