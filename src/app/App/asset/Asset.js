import img_choose_1 from './image/choose-1.jpg';
import img_choose_2 from './image/choose-2.jpg';
import img_choose_3 from './image/choose-3.jpg';

const Asset = {
    image_banner_1: require('./image/1.jpg'),
    image_banner_2: require('./image/4.jpg'),
    image_banner_3: require('./image/3.jpg'),
    image_backgroud_title:require('./image/backgroud_title.jpg'),
    image_product_hot:require('./image/product_hot.jpg'),
    image_ad_product1:require('./image/Ad_product1.jpg'),
    image_ad_product2:require('./image/Ad_product2.jpg'),
    icon:{
        icon_fb: require('./icon/facebook.jpg'),
        icon_in: require('./icon/instagram.jpg'),
        icon_li: require('./icon/linkedin.jpg'),
        icon_pc: require('./icon/periscope.jpg'),
        icon_tw: require('./icon/twitter.jpg'),
        icon_yt: require('./icon/youtube.jpg'),
        icon_sk: require('./icon/skype.jpg'),
    },
    link_social_network:{
        facebook:'https://www.facebook.com/messages/requests/t/vn.thinh94',
        youtube: 'https://www.youtube.com/',
        skype: 'https://www.skype.com/en/',
        linkin: 'https://www.linkedin.com/in/th%E1%BB%8Bnh-v%C5%A9-151b8118b/',
        twitter:'https://twitter.com/?lang=en',
        instagram:'https://www.instagram.com/',
        pc : 'https://www.google.com/maps/place/46+%C4%90%C3%B4ng+B%E1%BA%AFc,+T%C3%A2n+H%C6%B0ng+Thu%E1%BA%ADn,+Qu%E1%BA%ADn+12,+H%E1%BB%93+Ch%C3%AD+Minh/@10.8566992,106.624491,18z/data=!4m5!3m4!1s0x31752a21c75aa21d:0xbc066f3e92160ebb!8m2!3d10.8573519!4d106.6251254'
    },
    listItemModal:[
        {image:require('./image/gallery-1.jpg')},
        {image:require('./image/gallery-2.jpg')},
        {image:require('./image/gallery-3.jpg')},
        {image:require('./image/gallery-4.jpg')},
        {image:require('./image/gallery-5.jpg')},
        {image:require('./image/gallery-6.jpg')}
    ],
    image_hot_deal: require('./image/prod-1.png'),
    img_chooses:[img_choose_1,img_choose_2,img_choose_3],
    listImageProduct:
    [
        require('./image/product-1.jpg'),
        require('./image/product-2.jpg'),
        require('./image/product-3.jpg')
    ],
    listImageProduct:
        [
        require('./image/product-1.png'),
        require('./image/product-2.png'),
        require('./image/product-3.png'),
        require('./image/product-4.png'),
        require('./image/product-5.png'),
        require('./image/product-6.png'),
        require('./image/product-7.png'),
        require('./image/product-8.png')
        ],
    listAvatar:[
        require('./image/person_1.jpg'),
        require('./image/person_2.jpg'),
        require('./image/person_3.jpg'),
        require('./image/person_4.jpg'),
        require('./image/person_4.jpg'),
    ]
}
export default Asset;