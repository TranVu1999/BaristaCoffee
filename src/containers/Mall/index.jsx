import React, {useState, useEffect} from 'react';
import BannerFull from '../../commons/components/BannerFull';
import ListProduct from '../../features/Layout/ListProduct';
import MallControl from '../../features/Mall/MallControl';
import './style.scss'

import api from './../../api'


function MallPage(props) {
    const [sizeList, setSizeList] = useState(0)
    const [listProduct, setListProduct] = useState([])
    const [filter, setFilter] = useState({
        page: 1,
        perPage: 9,
        sortBy: "Sort by lastest"
    })

    useEffect(() =>{
        api.post('product/filter', filter)
        .then(res =>{
            if(res.data.success){
                setSizeList(res.data.sizeList)
                setListProduct(res.data.listProduct)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }, [filter])

    const onHandleChoseSort = (sortType) =>{
        setFilter({
            ...filter,
            sortBy: sortType
        })
    }

    return (
        <>
            <BannerFull 
                title="Mall"
                img="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"
            />

            <section className="main-page">
                <div className="cf-container">
                    <div className="mall-page">
                        <div className="main-page__content">
                            <MallControl
                                sizeList = {sizeList}
                                onChoseSort = {onHandleChoseSort}
                            />

                            <ListProduct
                                listProduct = {listProduct}
                            />
                        </div>
                        
                        <div className="main-page__sidebar">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat laboriosam, ut corporis impedit, minima eligendi voluptates sapiente maiores quae, harum architecto facilis illum amet? Provident accusamus expedita officia repellendus nesciunt molestias, quibusdam, atque odio illum adipisci tempora excepturi velit! Odio ducimus amet beatae consequuntur consectetur! Consequuntur esse libero, cum vitae incidunt nesciunt quos ad blanditiis voluptatum eos quod laboriosam labore optio. Quasi inventore praesentium dolorum, at commodi odit numquam in, officiis voluptatem fuga nisi consequatur quis doloremque aperiam quaerat assumenda. Dignissimos officia consequatur officiis nam quaerat fugiat dolorem necessitatibus aliquid illum, maiores labore optio dolores praesentium. Quos, vero accusamus. Obcaecati numquam iure commodi a, molestiae saepe voluptatum necessitatibus, optio praesentium veritatis unde laborum fuga voluptatem aliquid! Dolore necessitatibus error pariatur odit nostrum magnam! Expedita, dicta aliquid. Aliquid vero consectetur obcaecati maxime ipsum, quod ut tenetur dolores cumque eveniet commodi excepturi nemo nesciunt id dolorem ducimus quas tempora beatae laudantium distinctio! Odio quam exercitationem cumque error recusandae, unde consequuntur quo sequi enim pariatur voluptates amet delectus qui aliquid non perferendis laborum temporibus, maiores tempora iste repellendus molestiae? Mollitia nostrum incidunt, fuga suscipit exercitationem deleniti possimus excepturi beatae ipsa temporibus magni? Unde eum pariatur quidem minus. Quas similique, aut quo totam hic voluptates aliquam, vel impedit perspiciatis qui porro praesentium dolorum sed! Ipsum enim quae cumque sequi minima possimus sapiente. Ipsa iste vitae eos a nisi sequi id molestiae accusantium explicabo ab numquam ipsum excepturi minima, quibusdam itaque quam nam! Repudiandae, iusto. In adipisci eius recusandae maiores tenetur eum, quos veritatis sequi fugiat aspernatur ipsa, sit consequatur necessitatibus! Minima odio vel inventore repudiandae ullam quibusdam impedit sapiente eos voluptates quo sed ratione illo asperiores nihil voluptate suscipit, ea, earum quasi sit porro necessitatibus nobis quae? Perferendis officiis aliquid tenetur, consequatur earum mollitia aperiam nostrum alias ipsa animi molestias impedit, tempore necessitatibus eum fugit harum dolore. Aliquid quisquam ipsum esse. Quia distinctio accusantium necessitatibus facere earum rerum repellat sed incidunt fugit expedita similique vitae eveniet omnis deserunt quibusdam, ad veritatis maxime. Molestiae repellat consequuntur magni. Repellendus sint magni reprehenderit nulla placeat asperiores aspernatur culpa id rem? Aliquid blanditiis doloremque quia voluptates ex facilis iusto deleniti reprehenderit, autem commodi! Et consectetur beatae atque nihil? Modi doloribus commodi deleniti quaerat tempora porro magni odit culpa harum ratione hic iusto quae sed iure saepe maxime eaque eligendi, cum quam veniam magnam maiores incidunt temporibus velit. Omnis quaerat perspiciatis, assumenda nesciunt, aut rerum laborum in nulla laboriosam eveniet obcaecati nihil repellat magni sunt fugiat officia rem ipsa. Fugiat, impedit perferendis? Et amet inventore reprehenderit ratione? Praesentium possimus eaque temporibus voluptate labore eveniet obcaecati explicabo quis vitae ipsam laboriosam reiciendis, quas inventore repellendus aperiam itaque animi doloremque atque, placeat, commodi natus debitis necessitatibus. Omnis et nisi iste labore nostrum facilis consectetur eius officia. Nihil temporibus laborum quae eos ullam architecto corporis dolorem ratione sunt quo? Rerum magni enim modi blanditiis qui similique, quos vitae numquam. In aperiam voluptatum maiores ea illum provident deserunt ipsa rem, ad minus? Quasi debitis reiciendis ducimus corrupti eos illum tempore, autem voluptatum!
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MallPage;