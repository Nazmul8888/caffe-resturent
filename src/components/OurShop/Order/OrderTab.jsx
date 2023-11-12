import FoodCart from "../FoodCart/FoodCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';


const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        <div >
           
            <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='grid md:grid-cols-3 gap-10'>
           {
                items.map(item => <FoodCart item={item}></FoodCart>)
            }
           </div>

        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default OrderTab;