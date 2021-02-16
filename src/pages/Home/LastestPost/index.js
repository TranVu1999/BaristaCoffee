import React, { Component } from 'react'
import ListPost from '../../../commons/components/ListPost'
import TitleBox from '../../../commons/components/TitleBox'

export default class LastestPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listPost: [
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-1_pnhw2j.jpg",
                    postTitle: "MAKE IT SIMPLE",
                    postShortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, itaque.Fusce id nibh...",
                    postAuthor: "Jane Doe",
                    postCategory: "Lifestyle",
                    postDate: "01.03.2016"
                },
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-1_pnhw2j.jpg",
                    postTitle: "Coffee Shop",
                    postShortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, itaque.Fusce id nibh...",
                    postAuthor: "Jane Doe",
                    postCategory: "Lifestyle",
                    postDate: "01.03.2016"
                },
                {
                    postImg: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-1_pnhw2j.jpg",
                    postTitle: "Coffee Bar",
                    postShortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, itaque.Fusce id nibh...",
                    postAuthor: "Jane Doe",
                    postCategory: "Lifestyle",
                    postDate: "01.03.2016"
                },
            ]
        }
    }

    render() {
        return (
            <section className="cf-container mb-100">
                <TitleBox smallTitle = "What Happens Here" mainTitle = "Read Our Latest News"/>
                <ListPost listPost = {this.state.listPost}/>
            </section>
        )
    }
}
