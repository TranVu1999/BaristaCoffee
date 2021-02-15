import React, { Component } from 'react'
import ListPost from '../../../commons/components/ListPost';

export default class ServicePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listServiceContent: [
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-1_pnhw2j.jpg",
                    postNum: "01",
                    postTitle: "BEAUTIFUL PLACE",
                    postShortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle."
                },
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-2_kdmfgc.jpg",
                    postNum: "02",
                    postTitle: " FEEL THE COFFEE",
                    postShortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle."
                },
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-3_lmqhci.jpg",
                    postNum: "03",
                    postTitle: "FULL TASTE",
                    postShortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle."
                }
            ]
        }
    }
    render() {
        const {listServiceContent} = this.state;
        return (
            <section className = "cf-container">
                <ListPost listPost = {listServiceContent}/>
            </section>
        )
    }
}
